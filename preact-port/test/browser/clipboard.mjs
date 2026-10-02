// Vitest browser commands run in Node, where navigator.locks is not available.
// Serialize access to the actual system clipboard across browser instances.
let queue = Promise.resolve();
let unlock;

export const clipboardCommands = {
  async lockClipboard() {
    const previous = queue;
    let release;
    queue = new Promise(resolve => {
      release = resolve;
    });
    await previous;
    unlock = release;
  },
  unlockClipboard() {
    unlock?.();
    unlock = undefined;
  }
};
