import { useEffect } from 'react';
import AnimatedLink from './AnimatedLink.jsx';
import { useTransitionMode } from '../state/transition.js';
import {
  markRootClass,
  markViewTransitionName,
} from '../utils/viewTransition.js';
import { resolveProjectStyle } from '../utils/projectPalette.js';

export default function ProjectCard({ project, feature = false }) {
  const mode = useTransitionMode();
  const className = [
    'project-card',
    feature ? 'project-card--feature' : '',
  ].filter(Boolean).join(' ');
  const auraColor = resolveProjectStyle(project).banner;

  // Card hover paints the body with this project's banner colour as a
  // soft, blurred wash. Writes go to :root so they cascade to the
  // .ambient-aura element in Layout. On mouse leave we REMOVE the inline
  // overrides instead of zeroing them — that lets the cascade fall back
  // to the @property initial values (logo colour at a subtle opacity),
  // so the ambient aura is always on and just intensifies on hover.
  const handleMouseEnter = () => {
    document.documentElement.style.setProperty('--aura-color', auraColor);
    document.documentElement.style.setProperty('--aura-opacity', '0.22');
  };
  const handleMouseLeave = () => {
    document.documentElement.style.removeProperty('--aura-color');
    document.documentElement.style.removeProperty('--aura-opacity');
  };
  // Reset the aura if the card unmounts mid-hover (e.g. route change
  // before mouseleave fires). Drops the inline overrides so the cascade
  // returns to the brand-pink default.
  useEffect(() => () => {
    document.documentElement.style.removeProperty('--aura-color');
    document.documentElement.style.removeProperty('--aura-opacity');
  }, []);

  const handleClick = (e) => {
    // Stash the home page's scroll position so closing the project can
    // return the user to where they were. Read on the next visit to '/'
    // by Layout, then cleared.
    try {
      sessionStorage.setItem('home-scroll', String(window.scrollY));
    } catch { /* sessionStorage may be unavailable (private mode) */ }

    // Opt the persistent header into this transition — entering a project
    // is the one navigation where we want the header to animate with the
    // page rather than stay put. Cleared automatically post-transition.
    markRootClass('vt-into-project');

    // Aura-bloom: the project page's .project-flood overlay is restyled
    // in CSS (in aura-bloom mode) as a soft, blurred radial wash in the
    // project's colour. The .vt-aura-bloom class makes it visible in the
    // new snapshot where the keyframe animates the bloom in and out.
    if (mode === 'aura-bloom') {
      markRootClass('vt-aura-bloom');
      return;
    }

    if (mode !== 'stage-clear') return;

    // Stage-clear flood. The .vt-stage-clear class makes the project page's
    // .project-flood overlay visible in the new snapshot, where a clip-path
    // animation expands it from the click point in the project's colour.
    markRootClass('vt-stage-clear');

    // Mark every other card so each gets its own old-snapshot, then the
    // wildcard rule in _view-transitions.scss drifts them out individually.
    // The clicked card itself joins root and is covered by the flood.
    let siblingIndex = 0;
    const card = e.currentTarget;
    document.querySelectorAll('.project-card').forEach((el) => {
      if (el !== card) {
        markViewTransitionName(el, `home-sib-${siblingIndex++}`);
      }
    });

    // The home hero fades up while the cards drift.
    const homeHero = document.querySelector('.home-hero');
    if (homeHero) markViewTransitionName(homeHero, 'home-hero');
  };

  return (
    <AnimatedLink
      to={`/projects/${project.slug}`}
      className={className}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-card__cover">
        {project.cover ? (
          <img className="project-card__cover-image" src={project.cover} alt="" />
        ) : (
          <div
            className={`project-card__cover-placeholder project-card__cover-placeholder--${project.color || 'pink'}`}
            aria-hidden="true"
          />
        )}

        {/* Per-project animation slot. Each project will later mount a
            unique animation/illustration component here; the same component
            also renders inside .project-hero__art on the project page. */}
        <div className="project-card__art" data-project={project.slug} />

        <div className="project-card__title-overlay">
          <span className="project-card__title">{project.title}</span>
        </div>
      </div>
    </AnimatedLink>
  );
}

export const meta = {
  name: 'ProjectCard',
  category: 'UI',
  description: 'Card used on the projects grid. Drives the View Transitions choreography to the project page (per active mode). The .project-card__art slot is where each project will mount its unique illustration/animation. `feature` makes it span two grid columns.',
  props: [
    {
      name: 'project',
      type: '{ slug, title, cover?, color? }',
      description: 'Project data. `color` controls the placeholder gradient when no `cover` image is provided.',
    },
    {
      name: 'feature',
      type: 'boolean',
      description: 'When true, the card spans 2 grid columns (the wide / hero variant).',
    },
  ],
  previews: [
    {
      label: 'Default',
      render: () => (
        <div style={{ width: 280 }}>
          <ProjectCard
            project={{
              slug: 'demo-project',
              title: 'Demo project',
              color: 'pink',
            }}
          />
        </div>
      ),
    },
    {
      label: 'Feature (wide)',
      render: () => (
        <div style={{ width: 600 }}>
          <ProjectCard
            project={{
              slug: 'demo-project-2',
              title: 'Wide card',
              color: 'blue',
            }}
            feature
          />
        </div>
      ),
    },
  ],
};
