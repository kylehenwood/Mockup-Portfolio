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

export default function MobileNav({ open, onClose }) {
  const location = useLocation();

  const handleTabClick = (item) => {
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
    <div
      className={`mobile-nav${open ? ' mobile-nav--open' : ''}`}
      aria-hidden={!open}
    >
      <div className="mobile-nav__header">
        <span className="header__brand">Kyle Henwood</span>
        <button
          type="button"
          className="mobile-nav__close"
          aria-label="Close menu"
          onClick={onClose}
        >
          &times;
        </button>
      </div>

      <nav className="mobile-nav__links" aria-label="Primary mobile">
        {NAV.map((item) => (
          <AnimatedLink
            key={item.to}
            to={item.to}
            className="mobile-nav__link"
            onClick={() => {
              handleTabClick(item);
              onClose();
            }}
          >
            {item.label}
          </AnimatedLink>
        ))}
      </nav>

      <div className="mobile-nav__footer">
        <a href="mailto:hello@example.com">hello@example.com</a>
      </div>
    </div>
  );
}

export const meta = {
  name: 'MobileNav',
  category: 'Chrome',
  description: 'Full-screen sliding navigation tray for narrow screens. Mirrors the Header route list and slide-direction logic. Layout owns the open/close state.',
  props: [
    { name: 'open', type: 'boolean', description: 'Whether the tray is visible.' },
    { name: 'onClose', type: '() => void', description: 'Called when a link is tapped or the close button is pressed.' },
  ],
};
