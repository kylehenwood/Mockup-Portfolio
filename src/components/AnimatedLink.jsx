import { Link, useLocation, useNavigate } from 'react-router-dom';
import { startViewTransition, markRootClass } from '../utils/viewTransition.js';

// Drop-in replacement for react-router-dom's <Link>. Intercepts the click,
// captures click position as CSS vars, decides which transition to play
// based on source + destination paths, and runs the navigation inside the
// View Transitions API.

function isProjectDetail(path) {
  return path.startsWith('/projects/');
}

function isPostDetail(path) {
  return path.startsWith('/posts/') || /^\/blog\/[^/]+/.test(path);
}

export default function AnimatedLink({
  to,
  onClick,
  children,
  ...rest
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented) return;
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (rest.target && rest.target !== '_self') return;
    if (typeof to !== 'string') return;
    if (/^(https?:|mailto:|tel:)/.test(to)) return;

    e.preventDefault();
    // Capture click position for transitions that originate from it
    // (e.g. pinhole). Stored as CSS vars on the html root.
    const root = document.documentElement;
    root.style.setProperty('--vt-x', `${e.clientX}px`);
    root.style.setProperty('--vt-y', `${e.clientY}px`);

    // Drill in/out heuristic. Each branch is mutually exclusive — we only
    // mark one transition class per click. ProjectCard handles project
    // entry separately (the flood, .vt-stage-clear).
    const fromProject = isProjectDetail(location.pathname);
    const fromPost    = isPostDetail(location.pathname);
    const toProject   = isProjectDetail(to);
    const toPost      = isPostDetail(to);

    if (fromProject && !toProject) {
      // Leaving a project for anything that isn't another project.
      markRootClass('vt-zoom-out');
    } else if (fromPost && !toPost) {
      // Leaving a blog post for anything that isn't another post.
      markRootClass('vt-post-close');
    } else if (!fromPost && toPost) {
      // Drilling into a blog post from a non-post page (e.g. /blog list).
      markRootClass('vt-zoom-in');
    }
    // Project → another project, post → another post, and any non-detail
    // navigation falls through to whatever class the click handler set
    // (ProjectCard: vt-stage-clear; Header tab: vt-slide-left/right) or
    // to the picker's default mode behaviour.

    startViewTransition(() => navigate(to));
  };

  return (
    <Link to={to} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}

export const meta = {
  name: 'AnimatedLink',
  category: 'UI',
  description: 'Wrapper around react-router-dom <Link> that runs the navigation inside the View Transitions API. Decides between zoom-in (drilling into a post), zoom-out (leaving a project / post), and the default mode based on source + destination paths.',
  props: [
    { name: 'to', type: 'string', description: 'Same as react-router-dom Link. External and protocol-prefixed values fall through to native browser navigation.' },
    { name: 'onClick', type: '(MouseEvent) => void', description: 'Optional click handler — runs before the navigation. Call e.preventDefault() to cancel.' },
  ],
};
