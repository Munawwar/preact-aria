import {mergeConfig} from 'vitest/config';
import path from 'node:path';
import upstream from './vitest.browser.config';
import {clipboardCommands} from './preact-port/test/browser/clipboard.mjs';

// Keep upstream's browser commands, fixtures, assertions and console-error checks.
// Only substitute the framework runtime. Preact's act flushes its real render queue.
const preact = path.resolve(__dirname, 'preact-port/node_modules/preact');
const runtime = (file: string) => path.join(preact, file);

export default mergeConfig(upstream, {
  optimizeDeps: {
    include: ['preact/test-utils']
  },
  test: {
    reporters: ['default', path.resolve(__dirname, 'preact-port/test/browser/reporter.mjs')],
    // Native focus and Selection are shared by a browser's active page.
    // Run one fixture at a time, while retaining all three browser projects.
    fileParallelism: false,
    setupFiles: ['./preact-port/test/browser/setup.ts'],
    browser: {
      commands: clipboardCommands
    }
  },
  resolve: {
    alias: [
      {find: /^react$/, replacement: path.resolve(__dirname, 'preact-port/test/browser/react.mjs')},
      {find: /^react-dom\/client$/, replacement: runtime('compat/client.mjs')},
      {find: /^react-dom\/test-utils$/, replacement: runtime('test-utils/dist/testUtils.mjs')},
      {find: /^react-dom$/, replacement: runtime('compat/dist/compat.mjs')},
      {
        find: /^react\/jsx(?:-dev)?-runtime$/,
        replacement: runtime('jsx-runtime/dist/jsxRuntime.mjs')
      },
      {
        find: /^use-sync-external-store\/shim(?:\/index\.js)?$/,
        replacement: runtime('compat/dist/compat.mjs')
      },
      {find: /^preact$/, replacement: runtime('dist/preact.mjs')},
      {find: /^preact\/compat$/, replacement: runtime('compat/dist/compat.mjs')},
      {find: /^preact\/hooks$/, replacement: runtime('hooks/dist/hooks.mjs')},
      {find: /^preact\/test-utils$/, replacement: runtime('test-utils/dist/testUtils.mjs')},
      {
        find: /^preact\/jsx(?:-dev)?-runtime$/,
        replacement: runtime('jsx-runtime/dist/jsxRuntime.mjs')
      }
    ]
  }
});
