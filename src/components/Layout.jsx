import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useNavigate, matchPath } from 'react-router-dom';
import Header from './Header.jsx';
import MobileNav from './MobileNav.jsx';
import Footer from './Footer.jsx';
import SiteFrame from './SiteFrame.jsx';
import TransitionPicker from './TransitionPicker.jsx';
import AnimatedLink from './AnimatedLink.jsx';
import { startViewTransition, markRootClass } from '../utils/viewTransition.js';
import { projectsBySlug } from '../projects/index.js';
import { resolveProjectStyle } from '../utils/projectPalette.js';

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  // Project detail pages render as a focused, modal-style view: no primary
  // nav, just a close affordance that returns to the projects grid.
  const projectMatch = matchPath('/projects/:slug', location.pathname);
  const onProject = projectMatch != null;
  const activeProject = projectMatch ? projectsBySlug[projectMatch.params.slug] : null;
  const projectStyle = activeProject ? resolveProjectStyle(activeProject) : null;
  const layoutStyle = projectStyle ? {
    '--frame-color': projectStyle.frame,
    '--logo-color': projectStyle.logo,
    '--logo-fg-color': projectStyle.logoFg,
  } : undefined;

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

  // Scroll on route change. Default is jump-to-top.
  //
  // Project transitions are special: the project page renders inside a
  // fixed-position overlay (.layout__project) with its own scroll, so
  // body scroll never represents the project. Body scrollY belongs to
  // whatever was in .layout__main last (typically the home grid).
  //
  //   home → project: leave body scroll alone. The home grid stays
  //                   parked at the user's position behind the overlay
  //                   and the project always opens at its own top.
  //   project → home: restore the home grid scroll if it was saved by
  //                   ProjectCard (covers the case where body auto-
  //                   clamped to 0 while the home Outlet was unmounted).
  const prevPathRef = useRef(location.pathname);
  useLayoutEffect(() => {
    const prev = prevPathRef.current;
    const next = location.pathname;
    prevPathRef.current = next;

    const onProjectNow = matchPath('/projects/:slug', next) != null;
    const wasOnProject = matchPath('/projects/:slug', prev) != null;

    if (onProjectNow) {
      // Opening a project (or hopping between projects). Don't touch
      // body scroll — the overlay scrolls itself.
      return;
    }

    if (wasOnProject) {
      const saved = sessionStorage.getItem('home-scroll');
      sessionStorage.removeItem('home-scroll');
      if (saved != null) {
        window.scrollTo({ top: Number(saved), behavior: 'instant' });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  // The project overlay (.layout__project) is rendered inside Home via
  // its nested Outlet — this means Home stays mounted while a project is
  // active and slides behind the overlay rather than unmounting. The
  // .layout--project-active class still toggles on the root so the CSS
  // can position the descendant .layout__project as a fixed overlay and
  // dampen .layout__main interactions while a project is in focus.
  const layoutClass = `layout${onProject ? ' layout--project-active' : ''}`;

  return (
    <div className={layoutClass} style={layoutStyle}>
      <div className="ambient-aura" aria-hidden="true" />
      <main className="layout__main">
        <Header onMenuOpen={() => setMenuOpen(true)} />
        <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
        <div className="site-content">
          <Outlet />
        </div>
      </main>
      <Footer />
      <SiteFrame />
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
