import {act} from 'preact/test-utils';
import {configure} from '@testing-library/dom';

// Adobe's User helper uses DOM Testing Library with delay:null. Flush Preact's
// render and effect queues after its synthetic events, as its testing library does.
// Vitest's trusted Playwright input continues to use the original browser driver.
configure({
  eventWrapper: callback => {
    let result;
    act(() => {
      result = callback();
    });
    return result;
  }
});
