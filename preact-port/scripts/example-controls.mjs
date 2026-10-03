import ts from 'typescript';
import path from 'node:path';
import json5 from 'json5';

// Infer controls from the same public prop types referenced by the upstream MDX.
// This avoids inventing a second list of enum values alongside the library API.
export function exampleControls(port) {
  const config = ts.readConfigFile(path.join(port, 'tsconfig.json'), ts.sys.readFile);
  const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, port);
  const root = path.join(port, 'vendor/react-aria-components/exports/index.ts');
  const program = ts.createProgram({
    ...parsed,
    rootNames: [...parsed.fileNames, root],
    options: {...parsed.options, noEmit: true}
  });
  const checker = program.getTypeChecker();
  const source = program.getSourceFile(root);
  const api = new Map(
    checker.getExportsOfModule(checker.getSymbolAtLocation(source)).map(s => [s.name, s])
  );
  return metadata => {
    let names;
    try {
      names = json5.parse(metadata.props || '[]');
    } catch {
      return {};
    }
    const component = metadata.docs?.match(/\.exports\.(\w+)/)?.[1];
    let symbol = api.get(component);
    if (symbol?.flags & ts.SymbolFlags.Alias) symbol = checker.getAliasedSymbol(symbol);
    if (!symbol) return {};
    const declaration = symbol.valueDeclaration || symbol.declarations?.[0];
    let type = checker.getTypeOfSymbolAtLocation(symbol, declaration);
    const signature = type.getCallSignatures()[0];
    if (signature?.parameters[0])
      type = checker.getTypeOfSymbolAtLocation(signature.parameters[0], declaration);
    else type = checker.getDeclaredTypeOfSymbol(symbol);
    return Object.fromEntries(
      names.map(name => {
        const property = type.getProperty(name);
        if (!property) return [name, {}];
        const value = checker.getTypeOfSymbolAtLocation(
          property,
          property.valueDeclaration || declaration
        );
        const members = value.isUnion()
          ? value.types.filter(t => !(t.flags & (ts.TypeFlags.Undefined | ts.TypeFlags.Null)))
          : [value];
        const literals = members.filter(
          t => t.flags & (ts.TypeFlags.StringLiteral | ts.TypeFlags.NumberLiteral)
        );
        const spec = {
          description: ts.displayPartsToString(property.getDocumentationComment(checker))
        };
        if (literals.length === members.length && literals.length) {
          spec.control = 'select';
          spec.options = literals.map(t => t.value);
        } else if (members.every(t => t.flags & ts.TypeFlags.BooleanLike)) spec.control = 'boolean';
        else if (members.every(t => t.flags & ts.TypeFlags.NumberLike)) spec.control = 'number';
        else if (members.some(t => t.flags & ts.TypeFlags.Object)) spec.control = 'object';
        else spec.control = 'text';
        const defaultValue = property
          .getJsDocTags()
          .find(t => t.name === 'default')
          ?.text?.map(t => t.text)
          .join('');
        if (defaultValue) {
          try {
            spec.defaultValue = json5.parse(defaultValue);
          } catch {
            /* prose defaults aren't executable values */
          }
        }
        return [name, spec];
      })
    );
  };
}
