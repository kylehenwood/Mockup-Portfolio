// Showreel items. One entry per project (for now) — synthesized from the
// project registry so adding a project picks up an automatic showreel slot.
// Each item has a `span` (bento grid sizing) and a `native` size used by
// the modal viewer to render the asset at full intended dimensions.
//
// When a real image is available, set `image` to the asset URL and the
// tile + modal will swap from gradient placeholder to the image.

import { projects } from '../projects/index.js';

// Bento span pattern — cycles through varied col/row counts so the grid
// has a deliberate, repeating rhythm of large / wide / tall / small tiles.
const SPAN_PATTERN = [
  { col: 2, row: 2 }, // hero
  { col: 1, row: 1 },
  { col: 1, row: 2 }, // tall
  { col: 2, row: 1 }, // wide
  { col: 1, row: 1 },
  { col: 1, row: 1 },
  { col: 2, row: 1 }, // wide
  { col: 1, row: 2 }, // tall
  { col: 2, row: 2 }, // hero
  { col: 1, row: 1 },
  { col: 1, row: 1 },
  { col: 2, row: 1 }, // wide
];

// Stand-in "native" sizes for the modal. Mixed orientations so the modal
// behaviour can be felt across portrait, landscape, and square assets.
const NATIVE_PATTERN = [
  { w: 2400, h: 1600 },
  { w: 1200, h: 900 },
  { w: 1080, h: 1620 },
  { w: 2000, h: 1100 },
  { w: 1400, h: 1400 },
  { w: 1200, h: 800 },
  { w: 2200, h: 1200 },
  { w: 900, h: 1400 },
  { w: 2400, h: 1500 },
  { w: 1100, h: 900 },
  { w: 1300, h: 1000 },
  { w: 1800, h: 1100 },
];

export const showreel = projects.map((p, i) => ({
  id: `${p.slug}-shot`,
  projectSlug: p.slug,
  title: p.title,
  summary: p.summary,
  color: p.color || 'pink',
  image: null,
  span: SPAN_PATTERN[i % SPAN_PATTERN.length],
  native: NATIVE_PATTERN[i % NATIVE_PATTERN.length],
}));
