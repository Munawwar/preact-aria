import {createElement, hydrate} from 'preact';
import {HydrationExample} from './hydration-component.mjs';
import './diagnostics.css';

const originalInput = document.querySelector('[data-testid="hydrated-input"]');
const originalId = originalInput?.id;
const originalOption = document.querySelector('[role=option]');
const originalSegment = document.querySelector('[role=spinbutton]');
hydrate(createElement(HydrationExample, {}), document.getElementById('app')!);
Object.assign(window, {
  __hydration: {
    retainedOption: originalOption === document.querySelector('[role=option]'),
    retainedSegment: originalSegment === document.querySelector('[role=spinbutton]'),
    retainedInput: originalInput === document.querySelector('[data-testid="hydrated-input"]'),
    retainedId: originalId === document.querySelector('[data-testid="hydrated-input"]')?.id
  }
});
