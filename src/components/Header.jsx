import { useLocation } from 'react-router-dom';
import AnimatedLink from './AnimatedLink.jsx';
import { markRootClass } from '../utils/viewTransition.js';

const NAV = [
  { to: '/', label: 'Projects', matchPrefix: '/projects' },
  { to: '/showreel', label: 'Showreel' },
  { to: '/about', label: 'Who am I?' },
  { to: '/blog', label: 'Blog', matchPrefix: '/blog' },
  { to: '/design-system', label: 'Design system' },
];

function isActive(item, pathname) {
  if (pathname === item.to) return true;
  if (item.matchPrefix) {
    return pathname === item.matchPrefix
      || pathname.startsWith(`${item.matchPrefix}/`);
  }
  return false;
}

function navIndex(pathname) {
  return NAV.findIndex((n) => isActive(n, pathname));
}

export default function Header({ onMenuOpen }) {
  const location = useLocation();

  // Tab clicks pick a slide direction based on the destination's NAV index
  // relative to the current pathname's index. Forward in nav order →
  // slide-left (page moves leftward, new content enters from the right).
  // Backward → slide-right.
  // Detail pages (project, post) are excluded — leaving one always uses the
  // close zoom from AnimatedLink, regardless of which header tab was clicked.
  const handleTabClick = (item) => {
    if (/^\/projects\//.test(location.pathname)) return;
    if (/^\/posts\//.test(location.pathname) || /^\/blog\/[^/]+/.test(location.pathname)) return;

    const currentIdx = navIndex(location.pathname);
    const targetIdx = NAV.findIndex((n) => n.to === item.to);
    if (currentIdx === -1 || targetIdx === -1) return;

    if (targetIdx > currentIdx) {
      markRootClass('vt-slide-left');
    } else if (targetIdx < currentIdx) {
      markRootClass('vt-slide-right');
    } else if (location.pathname !== item.to) {
      markRootClass('vt-slide-right');
    }
  };

  return (
    <header className="header">
      <div className="header__inner">
        <nav className="header__nav" aria-label="Primary">
          {NAV.map((item) => (
            <AnimatedLink
              key={item.to}
              to={item.to}
              className={`header__tab${isActive(item, location.pathname) ? ' header__tab--active' : ''}`}
              onClick={() => handleTabClick(item)}
            >
              {item.label}
            </AnimatedLink>
          ))}
        </nav>

        <a className="header__contact" href="mailto:hello@example.com">Contact me</a>

        <button
          type="button"
          className="header__menu-button"
          aria-label="Open menu"
          onClick={onMenuOpen}
        >
          <span className="header__menu-icon" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}

export const meta = {
  name: 'Header',
  category: 'Chrome',
  description: 'Sticky top bar with left-aligned route-based primary nav, contact button, and a mobile menu trigger. Tab clicks set a left/right slide direction on <html> based on tab order so navigation reads as horizontal motion. Rendered once by Layout.',
  props: [
    { name: 'onMenuOpen', type: '() => void', description: 'Called when the mobile menu button is pressed.' },
  ],
};
