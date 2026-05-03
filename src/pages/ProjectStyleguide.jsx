import { Link } from 'react-router-dom';
import { projects } from '../projects/index.js';
import { resolveProjectStyle } from '../utils/projectPalette.js';

const SLOTS = [
  { key: 'frame',   label: 'Frame',   note: 'Persistent site frame + footer band.' },
  { key: 'logo',    label: 'Logo',    note: 'Brand emblem fill.' },
  { key: 'banner',  label: 'Banner',  note: 'Project hero band background.' },
  { key: 'surface', label: 'Surface', note: 'Body region behind the case study.' },
  { key: 'accent',  label: 'Accent',  note: 'Highlights, links, focus rings.' },
];

export default function ProjectStyleguide() {
  return (
    <>
      <header className="ds-hero">
        <div className="ds-hero__inner">
          <span className="ds-hero__eyebrow">Design system</span>
          <h1 className="ds-hero__title">Project styleguide</h1>
          <p className="ds-hero__lede">
            Per-project colour mapping. Defaults pull from the site tokens;
            individual projects can override any slot via a <code>style</code>
            field on their entry in <code>src/projects/index.js</code>.
          </p>
          <DsTabs active="projects" />
        </div>
      </header>

      <div className="ds">
        <main className="ds__main ds__main--full">
          <section className="ds__category">
            <h2 className="ds__category-title">Projects</h2>
            <div className="ds-projects">
              {projects.map((p) => (
                <ProjectStyleCard key={p.slug} project={p} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

function ProjectStyleCard({ project }) {
  const style = resolveProjectStyle(project);
  const overrides = project.style ?? {};

  return (
    <article className="ds-project">
      <header className="ds-project__head">
        <div>
          <h3 className="ds-project__title">{project.title}</h3>
          <code className="ds-project__slug">{project.slug}</code>
        </div>
        <span
          className="ds-project__hero"
          style={{ background: style.banner, color: style.bannerFg }}
        >
          banner
        </span>
      </header>

      <div className="ds-project__swatches">
        {SLOTS.map((slot) => (
          <Swatch
            key={slot.key}
            label={slot.label}
            note={slot.note}
            hex={style[slot.key]}
            overridden={Object.prototype.hasOwnProperty.call(overrides, slot.key)}
          />
        ))}
      </div>
    </article>
  );
}

function Swatch({ label, note, hex, overridden }) {
  return (
    <div className="ds-swatch">
      <span className="ds-swatch__chip" style={{ background: hex }} />
      <span className="ds-swatch__meta">
        <span className="ds-swatch__label">
          {label}
          {overridden && <span className="ds-swatch__badge">override</span>}
        </span>
        <code className="ds-swatch__hex">{hex}</code>
        {note && <span className="ds-swatch__note">{note}</span>}
      </span>
    </div>
  );
}

// Shared tab strip between the two design-system pages.
export function DsTabs({ active }) {
  return (
    <nav className="ds-tabs" aria-label="Design system sections">
      <Link
        to="/design-system"
        className={`ds-tabs__tab${active === 'components' ? ' ds-tabs__tab--active' : ''}`}
      >
        Components
      </Link>
      <Link
        to="/design-system/projects"
        className={`ds-tabs__tab${active === 'projects' ? ' ds-tabs__tab--active' : ''}`}
      >
        Project styles
      </Link>
    </nav>
  );
}
