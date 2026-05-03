// JS mirror of the colour tokens in src/styles/_tokens.scss. The SCSS file
// is the source of truth — this module exists so React pages (e.g. the
// project styleguide) can render real swatches without re-implementing
// the SCSS variable graph. Keep the two in sync when tokens change.

export const PALETTE_DEFAULTS = {
  frame:   '#000000', // $color-frame  — persistent site frame + footer
  logo:    '#CD0051', // $color-logo   — brand emblem fill
  logoFg:  '#ffffff', // letters inside the brand emblem
  surface: '#212121', // $color-bg-elevated — body region behind project content
  bg:      '#1a1a1a', // $color-bg
  fg:      '#ffffff', // $color-fg
  accent:  '#E91E63', // $color-accent
};

// Maps the project `color` token to its hex. Yellow gets a darker fg
// pairing; everything else uses white on top.
export const PROJECT_BANNER_BY_COLOR = {
  yellow: { banner: '#FFD603', fg: '#013D54' },
  pink:   { banner: '#E91E63', fg: '#ffffff' },
  purple: { banner: '#9C27B0', fg: '#ffffff' },
  blue:   { banner: '#2196F3', fg: '#ffffff' },
  teal:   { banner: '#009688', fg: '#ffffff' },
  green:  { banner: '#4CAF50', fg: '#ffffff' },
  orange: { banner: '#FF9800', fg: '#ffffff' },
};

// Resolve the full colour set for a project — banner from the `color`
// token, every other slot from PALETTE_DEFAULTS, with any per-project
// `style: { frame, logo, banner, ... }` overrides on top.
export function resolveProjectStyle(project) {
  const banner = PROJECT_BANNER_BY_COLOR[project.color]
    ?? { banner: PALETTE_DEFAULTS.bg, fg: PALETTE_DEFAULTS.fg };

  const overrides = project.style ?? {};
  return {
    frame:    overrides.frame    ?? PALETTE_DEFAULTS.frame,
    logo:     overrides.logo     ?? PALETTE_DEFAULTS.logo,
    logoFg:   overrides.logoFg   ?? PALETTE_DEFAULTS.logoFg,
    banner:   overrides.banner   ?? banner.banner,
    bannerFg: overrides.bannerFg ?? banner.fg,
    surface:  overrides.surface  ?? PALETTE_DEFAULTS.surface,
    accent:   overrides.accent   ?? PALETTE_DEFAULTS.accent,
  };
}
