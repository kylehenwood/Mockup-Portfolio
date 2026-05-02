// Gallery posts. Each entry shows up as a tile on the home/TLDR page and
// drives /posts/:slug. Add a new object to the array to ship a new post.

export const posts = [
  {
    slug: 'first-post',
    title: 'First Post',
    subtitle: 'Setting up the new portfolio',
    description:
      'A short note on porting this site from PHP + jQuery to React + Vite. Lighter, faster, and easier to deploy.',
    tags: ['UX', 'Design'],
    color: 'pink',
    image: null,
  },
  {
    slug: 'design-system-tldr',
    title: 'Design System TLDR',
    subtitle: 'How a small team kept tokens sane',
    description: 'Notes from setting up a tiny but durable design token system.',
    tags: ['UI', 'Systems'],
    color: 'blue',
    image: null,
  },
  {
    slug: 'illustration-warmup',
    title: 'Illustration warmup',
    subtitle: 'A weekend of vector practice',
    description: 'Quick studies in shape and gradient.',
    tags: ['Illustration'],
    color: 'orange',
    image: null,
  },
  {
    slug: 'mobile-onboarding',
    title: 'Mobile onboarding',
    subtitle: 'Tightening a 7-step flow into 3',
    description: 'A teardown of how we removed onboarding friction.',
    tags: ['UX', 'Mobile'],
    color: 'teal',
    image: null,
  },
  {
    slug: 'micro-interactions',
    title: 'Micro-interactions',
    subtitle: 'Where UI starts to feel alive',
    description: 'Little motion studies that earn their keep.',
    tags: ['UI', 'Motion'],
    color: 'purple',
    image: null,
  },
  {
    slug: 'data-table-anatomy',
    title: 'Data table anatomy',
    subtitle: 'The most underrated component',
    description: 'Density, alignment, scanability — and why most tables get them wrong.',
    tags: ['UI', 'Systems'],
    color: 'green',
    image: null,
  },
  {
    slug: 'empty-states',
    title: 'Empty states that earn their keep',
    subtitle: 'First-run experiences as product moments',
    description: 'A roundup of empty states that do real work.',
    tags: ['UX'],
    color: 'pink',
    image: null,
  },
  {
    slug: 'sketchbook',
    title: 'Sketchbook',
    subtitle: 'Pages from the daily warmup',
    description: 'Loose pages from the morning warmup.',
    tags: ['Illustration'],
    color: 'orange',
    image: null,
  },
];

export const postsBySlug = Object.fromEntries(posts.map((p) => [p.slug, p]));
