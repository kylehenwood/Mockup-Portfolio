import AnimatedLink from './AnimatedLink.jsx';

function BrandEmblem() {
  return (
    <svg
      className="site-frame__logo-mark"
      viewBox="0 0 56 56"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle className="site-frame__logo-disc" cx="28" cy="28" r="28" />
      <path
        className="site-frame__logo-letter"
        d="M22.2426 28L37 43L29 43L19 33.2427V43L13 43V13H19V22.7574L29 13L37 13L22.2426 28Z"
      />
      <path
        className="site-frame__logo-letter"
        d="M37 31H31L28 28L31 25H37V19.1213L43 13V43L37 37V31Z"
      />
    </svg>
  );
}

export default function SiteFrame() {
  return (
    <div className="site-frame" aria-hidden="true">
      <div className="site-frame__top" />
      <div className="site-frame__right" />
      <div className="site-frame__bottom" />
      <div className="site-frame__left" />
      <div className="site-frame__corner" />
      <AnimatedLink
        to="/"
        className="site-frame__logo"
        aria-label="Kyle Henwood — home"
      >
        <BrandEmblem />
      </AnimatedLink>
    </div>
  );
}

export const meta = {
  name: 'SiteFrame',
  category: 'Chrome',
  description: 'Persistent teal frame with a brand emblem in the top-left corner. Fixed-position 8px bars on all four edges plus a 160px triangular corner block; the logo sits over the corner.',
  props: [],
};
