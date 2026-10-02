import {mkdirSync, writeFileSync} from 'node:fs';
import {dirname, resolve} from 'node:path';

export default class BrowserReporter {
  tests = [];
  onInit(context) {
    this.root = context.config.root;
  }
  onTestCaseResult(test) {
    const result = test.result();
    const record = {
      browser: test.project.name,
      file: test.module.relativeModuleId,
      name: test.fullName,
      state: result.state,
      errors: result.errors?.map(error => ({message: error.message, stack: error.stack})) ?? []
    };
    this.tests.push(record);
    if (result.state === 'failed') {
      console.error(`[failure] ${record.browser} ${record.name}: ${record.errors[0]?.message}`);
    }
  }
  onTestRunEnd(modules, errors) {
    const output =
      process.env.BROWSER_REPORT || resolve(this.root, 'preact-port/artifacts/browser/cases.json');
    if (output) {
      mkdirSync(dirname(output), {recursive: true});
      writeFileSync(
        output,
        JSON.stringify(
          {
            modules: modules.map(module => ({
              browser: module.project.name,
              file: module.relativeModuleId,
              state: module.state(),
              errors: module.errors().map(error => ({message: error.message, stack: error.stack}))
            })),
            tests: this.tests,
            errors: errors.map(error => ({message: error.message, stack: error.stack}))
          },
          null,
          2
        ) + '\n'
      );
    }
  }
}
