import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useNavigate, matchPath } from 'react-router-dom';
import Header from './Header.jsx';
import MobileNav from './MobileNav.jsx';
import Footer from './Footer.jsx';
import TransitionPicker from './TransitionPicker.jsx';
import AnimatedLink from './AnimatedLink.jsx';
import { startViewTransition, markRootClass } from '../utils/viewTransition.js';

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  // Project detail pages render as a focused, modal-style view: no primary
  // nav, just a close affordance that returns to the projects grid.
  const onProject = matchPath('/projects/:slug', location.pathname) != null;

  // Close mobile nav on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.classList.toggle('layout--lock', menuOpen);
    return () => document.body.classList.remove('layout--lock');
  }, [menuOpen]);

  // Close on Escape — closes the mobile nav if open, otherwise closes the
  // project page (modal-style behaviour) by navigating back to the grid.
  useEffect(() => {
    if (!menuOpen && !onProject) return undefined;
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      if (menuOpen) {
        setMenuOpen(false);
        return;
      }
      if (onProject) {
        markRootClass('vt-zoom-out');
        startViewTransition(() => navigate('/'));
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen, onProject, navigate]);

  // Scroll on route change. Default is jump-to-top; the one exception is
  // closing a project — we restore the home page's prior scroll position
  // (saved by ProjectCard before navigating into the project) so the user
  // lands back where they were. useLayoutEffect runs inside the view
  // transition's flushSync window, so the new snapshot captures the
  // restored scroll position rather than flashing at top first.
  const prevPathRef = useRef(location.pathname);
  useLayoutEffect(() => {
    const prev = prevPathRef.current;
    const next = location.pathname;
    prevPathRef.current = next;

    const closingProject = next === '/'
      && matchPath('/projects/:slug', prev) != null;

    if (closingProject) {
      const saved = sessionStorage.getItem('home-scroll');
      sessionStorage.removeItem('home-scroll');
      if (saved != null) {
        window.scrollTo({ top: Number(saved), behavior: 'instant' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="layout">
      {onProject ? (
        <AnimatedLink
          to="/"
          className="project-close"
          aria-label="Close project"
        >
          <span className="project-close__icon" aria-hidden="true" />
        </AnimatedLink>
      ) : (
        <>
          <Header onMenuOpen={() => setMenuOpen(true)} />
          <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
      )}
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
      <TransitionPicker />
    </div>
  );
}

export const meta = {
  name: 'Layout',
  category: 'Chrome',
  description: 'Top-level page shell. Owns mobile-nav state, body scroll lock, and route-change side effects.',
  props: [],
};
