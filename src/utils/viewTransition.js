import { flushSync } from 'react-dom';

// Wrap a DOM-mutating callback (typically a router navigate) in the View
// Transitions API. Falls back to running the callback directly when the
// browser doesn't support it OR the user has prefers-reduced-motion: reduce.
//
// flushSync forces React to apply the navigation synchronously so the
// browser captures the *new* DOM as the second snapshot — without it the
// transition starts before React renders the destination route.

// Module-level set of DOM elements that have been marked with an
// inline `view-transition-name` for this transition. Cleared after the
// transition's `finished` promise resolves.
const markedElements = new Set();

// Module-level set of class names added to <html> for this transition.
// Cleared on finished so they don't leak between navigations.
const markedRootClasses = new Set();

export function markViewTransitionName(el, name) {
  if (!el) return;
  el.style.viewTransitionName = name;
  markedElements.add(el);
}

export function markRootClass(className) {
  document.documentElement.classList.add(className);
  markedRootClasses.add(className);
}

function cleanupMarks() {
  markedElements.forEach((el) => {
    el.style.viewTransitionName = '';
  });
  markedElements.clear();

  markedRootClasses.forEach((className) => {
    document.documentElement.classList.remove(className);
  });
  markedRootClasses.clear();
}

export function startViewTransition(callback) {
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if (reduced || typeof document.startViewTransition !== 'function') {
    callback();
    cleanupMarks();
    return;
  }
  const transition = document.startViewTransition(() => {
    flushSync(() => {
      callback();
    });
  });
  // `finished` resolves when all transition animations have finished.
  // `finally` runs on both success and skip-transition cases.
  transition.finished.finally(cleanupMarks);
}
