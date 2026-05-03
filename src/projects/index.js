// Project registry. Each entry can drive a card on the home page; entries
// with `component` also get a /projects/:slug case-study route.
//
// `category` splits the home grid: 'professional' vs 'personal'.
// `feature` makes the card render at the wide variant (2 grid columns).

import Aibek from './aibek.jsx';
import DesignSystem from './design-system.jsx';
import MobileApp from './mobile-app.jsx';

export const projects = [
  // -------- Professional --------
  {
    slug: 'optimal-workshop',
    title: 'Optimal Workshop',
    summary: 'Design system and product surface work across the Optimal suite.',
    role: 'Senior Product Designer',
    year: '2023',
    client: 'Optimal Workshop',
    category: 'professional',
    color: 'yellow',
    feature: true,
    cover: null,
    component: null,
    style: {
      frame:  '#013D54',
      logo:   '#FFD603',
      logoFg: '#013D54',
      banner: '#FFD603',
    },
  },
  {
    slug: 'raygun',
    title: 'Raygun',
    summary: 'Crash + performance monitoring tooling, focused on triage flows.',
    role: 'Product Designer',
    year: '2022',
    client: 'Raygun',
    category: 'professional',
    color: 'blue',
    feature: true,
    cover: null,
    component: null,
    style: {
      frame:  '#053975',
      logo:   '#CD0051',
      logoFg: '#FFFFFF',
      banner: '#031F3F',
    },
  },
  {
    slug: 'optimal-workshop-secondary',
    title: 'Optimal Workshop',
    summary: 'Companion patterns and component refinements.',
    role: 'Senior Product Designer',
    year: '2023',
    client: 'Optimal Workshop',
    category: 'professional',
    color: 'yellow',
    cover: null,
    component: null,
    style: {
      frame:  '#013D54',
      logo:   '#FFD603',
      logoFg: '#013D54',
      banner: '#FFD603',
    },
  },
  {
    slug: 'my-fundraiser',
    title: 'My Fundraiser',
    summary: 'Crowdfunding flow rebuild from form-heavy to story-led.',
    role: 'Lead Designer',
    year: '2021',
    client: 'My Fundraiser',
    category: 'professional',
    color: 'purple',
    cover: null,
    component: null,
  },
  {
    slug: 'krunch',
    title: 'krunch',
    summary: 'Brand and onboarding for a fitness scheduling tool.',
    role: 'Product Designer',
    year: '2020',
    client: 'Krunch',
    category: 'professional',
    color: 'orange',
    cover: null,
    component: null,
  },
  {
    slug: 'hunchbuzz',
    title: 'HunchBuzz',
    summary: 'Idea-management platform — discovery and voting flows.',
    role: 'Product Designer',
    year: '2019',
    client: 'HunchBuzz',
    category: 'professional',
    color: 'teal',
    cover: null,
    component: null,
  },

  // -------- Personal / case studies that already had pages --------
  {
    slug: 'aibek',
    title: 'Aibek',
    summary: 'A platform redesign that took the marketing site from a static brochure to a living product surface.',
    role: 'Lead Product Designer',
    year: '2024',
    client: 'Aibek',
    category: 'personal',
    color: 'pink',
    cover: null,
    component: Aibek,
    style: {
      frame:  '#2F2748',
      logo:   '#FFFFFF',
      logoFg: '#2F2748',
      banner: '#3E335C',
    },
  },
  {
    slug: 'siteshot',
    title: 'SiteShot.io',
    summary: 'A tiny tool for grabbing full-page screenshots on demand.',
    role: 'Designer / Builder',
    year: '2024',
    client: 'Personal',
    category: 'personal',
    color: 'teal',
    cover: null,
    component: null,
  },
  {
    slug: 'vanimator',
    title: 'VAnimator',
    summary: 'Vector animation playground — exploring keyframes in the browser.',
    role: 'Designer / Builder',
    year: '2023',
    client: 'Personal',
    category: 'personal',
    color: 'purple',
    cover: null,
    component: null,
  },
  {
    slug: 'overland-navigator',
    title: 'Overland Navigator',
    summary: 'Trip planner for off-grid 4WD routes.',
    role: 'Designer / Builder',
    year: '2023',
    client: 'Personal',
    category: 'personal',
    color: 'green',
    cover: null,
    component: null,
  },
  {
    slug: 'design-system',
    title: 'Internal Design System',
    summary: 'Tokens, components, and docs that finally stuck across three product teams.',
    role: 'Design Systems Lead',
    year: '2023',
    client: 'Confidential',
    category: 'personal',
    color: 'blue',
    cover: null,
    component: DesignSystem,
  },
  {
    slug: 'mobile-app',
    title: 'Mobile companion app',
    summary: 'A small, focused app that filled the gaps the web product couldn’t.',
    role: 'Product Designer',
    year: '2022',
    client: 'Confidential',
    category: 'personal',
    color: 'teal',
    cover: null,
    component: MobileApp,
  },
];

export const projectsBySlug = Object.fromEntries(
  projects.map((p) => [p.slug, p])
);

export const professionalProjects = projects.filter((p) => p.category === 'professional');
export const personalProjects = projects.filter((p) => p.category === 'personal');
