// Standalone replacement for Storybook's action recorder; example source stays unchanged.
export function fn() {
  return (...args: unknown[]) => console.log('Example action:', ...args);
}

export const action =
  (name: string) =>
  (...args: unknown[]) =>
    console.log(name, ...args);
