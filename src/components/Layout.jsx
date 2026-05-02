import { useEffect, useState } from 'react';
import { Outlet, useLocation, matchPath } from 'react-router-dom';
import Header from './Header.jsx';
import MobileNav from './MobileNav.jsx';
import Footer from './Footer.jsx';
import TransitionPicker from './TransitionPicker.jsx';
import AnimatedLink from './AnimatedLink.jsx';

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
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

  // Close on Escape
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  // Scroll to top on route change
  useEffect(() => {
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
