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

// Lock the .layout's height to whatever it currently is, so the next
// React commit doesn't shrink the document when the destination page
// has less content than the source. Without this, the footer reflows
// upward instantly — onto the old page's snapshot, overlapping its
// content during the out animation. Returns a release fn.
function lockLayoutHeight() {
  const layout = document.querySelector('.layout');
  if (!layout) return () => {};
  const h = layout.offsetHeight;
  if (!h) return () => {};
  const prev = layout.style.minHeight;
  layout.style.minHeight = `${h}px`;
  return () => { layout.style.minHeight = prev; };
}

// Cover the live DOM with an opaque backdrop while a transition is
// running. Without this, mid-transition opacity dips on the snapshots
// let the underlying DOM bleed through — and because Layout has already
// scrolled the new page to the top inside the flushSync window, that
// underlying view is the new page at scroll 0, which reads visually as
// "the current page jumped to the top". The backdrop sits below the
// view-transition top layer (snapshots are unaffected) but above every
// regular DOM element, so all the user sees during the dip is the
// site background.
function addTransitionBackdrop() {
  const bd = document.createElement('div');
  bd.className = 'vt-backdrop';
  bd.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bd);
  return () => bd.remove();
}

export function startViewTransition(callback) {
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if (reduced || typeof document.startViewTransition !== 'function') {
    callback();
    cleanupMarks();
    return;
  }
  const releaseLayoutHeight = lockLayoutHeight();
  const releaseBackdrop = addTransitionBackdrop();
  const transition = document.startViewTransition(() => {
    flushSync(() => {
      callback();
    });
  });
  // `finished` resolves when all transition animations have finished.
  // `finally` runs on both success and skip-transition cases.
  transition.finished.finally(() => {
    releaseBackdrop();
    releaseLayoutHeight();
    cleanupMarks();
  });
}
