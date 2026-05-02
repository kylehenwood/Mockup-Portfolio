import { useSyncExternalStore } from 'react';

// Tiny module-level store for the active transition mode. We persist to
// localStorage, mirror the value to <html data-transition="..."> for CSS
// to hook into, and expose a React hook so components re-render on change.

const KEY = 'transition-mode';
const DEFAULT = 'stage-clear';

export const TRANSITION_MODES = [
  { value: 'stage-clear',  label: 'Stage clear → theme flood' },
  { value: 'card-lifts',   label: 'Card lifts, page rebuilds' },
  { value: 'pinhole',      label: 'Pinhole (radial wipe)' },
  { value: 'curtain-wipe', label: 'Curtain wipe' },
];

const VALID = TRANSITION_MODES.map((m) => m.value);

const listeners = new Set();

let current = (() => {
  try {
    const stored = localStorage.getItem(KEY);
    if (stored && VALID.includes(stored)) return stored;
  } catch (_) { /* ignore */ }
  return DEFAULT;
})();

if (typeof document !== 'undefined') {
  document.documentElement.dataset.transition = current;
}

export function getTransitionMode() {
  return current;
}

export function setTransitionMode(mode) {
  if (!VALID.includes(mode) || mode === current) return;
  current = mode;
  try { localStorage.setItem(KEY, mode); } catch (_) { /* ignore */ }
  document.documentElement.dataset.transition = mode;
  listeners.forEach((fn) => fn());
}

function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function useTransitionMode() {
  return useSyncExternalStore(subscribe, getTransitionMode, getTransitionMode);
}
