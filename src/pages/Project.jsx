import { useParams } from 'react-router-dom';
import AnimatedLink from '../components/AnimatedLink.jsx';
import { projects, projectsBySlug } from '../projects/index.js';
import NotFound from './NotFound.jsx';


const PLACEHOLDER_SECTIONS = [
  { label: 'Intro', title: 'What is this project?', body: 'Short summary of the product, the team, and what shipped.' },
  { label: 'Timeline', title: 'Timeline', body: 'When the project ran, the phases, and how the work was sequenced.' },
  { label: 'Process', title: 'Approach', body: 'How the design problem was framed and the moves that were made.' },
  { label: 'Outcome', title: 'Outcome', body: 'What changed for the team, the product, and the people using it.' },
];

const PLACEHOLDER_TAGS = ['Product design', 'Prototyping', 'Research', 'Design systems'];

export default function Project() {
  const { slug } = useParams();
  const project = projectsBySlug[slug];

  if (!project) return <NotFound />;

  const Body = project.component;
  const sections = project.sections ?? PLACEHOLDER_SECTIONS;
  const tags = project.tags ?? PLACEHOLDER_TAGS;

  const idx = projects.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <article className={`project-page project-page--${project.color || 'pink'}`}>
      {/* Stage-clear flood overlay. Normally invisible; the .vt-stage-clear
          class (added by ProjectCard during a project-card click) makes
          this element visible long enough to be captured in the new view
          transition snapshot, where its CSS animation expands and fades
          out to reveal the page beneath. */}
      <div className="project-flood" aria-hidden="true" />

      {/* ---------- Hero band ---------- */}
      <header className="project-hero">
        {/* Per-project animation slot. The same component renders inside
            .project-card__art on the home grid; here it gets the full
            hero band to play in. */}
        <div className="project-hero__art" data-project={slug} />

        <div className="project-hero__inner">
          <h1 className="project-hero__title">{project.title}</h1>
        </div>
      </header>

      {/* ---------- Body ---------- */}
      <div className="project-body">
        {/* Floating role / responsibilities card. Lives inside body so it
            participates in the body's slide-up animation. */}
        <div className="project-body__info">
          <div className="project-body__info-inner">
            <div className="project-body__info-col">
              <h2 className="project-body__info-heading">Role &amp; Responsibilities</h2>
              {project.role && <p className="project-body__info-role">{project.role}</p>}
              {project.summary && <p className="project-body__info-summary">{project.summary}</p>}
              <dl className="project-body__info-meta">
                {project.year && (
                  <div><dt>Year</dt><dd>{project.year}</dd></div>
                )}
                {project.client && (
                  <div><dt>Client</dt><dd>{project.client}</dd></div>
                )}
              </dl>
            </div>
            <div className="project-body__info-col">
              <h2 className="project-body__info-heading">Responsibilities</h2>
              <ul className="project-tags">
                {tags.map((t) => (
                  <li key={t} className="project-tag">{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {Body ? (
          <div className="project-body__inner prose">
            <Body />
          </div>
        ) : (
          <div className="project-body__inner">
            {sections.map((s) => (
              <section key={s.title} className="project-section">
                <span className="project-section__badge">{s.label}</span>
                <h2 className="project-section__title">{s.title}</h2>
                <p className="project-section__body">{s.body}</p>
              </section>
            ))}
          </div>
        )}
      </div>

      {/* ---------- Other case studies ---------- */}
      <section className="project-others">
        <div className="project-others__inner">
          <h2 className="project-others__title">Check out these other Case Studies!</h2>
          <div className="project-others__pair">
            {prev ? (
              <AnimatedLink
                to={`/projects/${prev.slug}`}
                className={`project-others__card project-card__cover-placeholder--${prev.color || 'pink'}`}
              >
                <span className="project-others__direction">&larr; Previous project</span>
                <span className="project-others__name">{prev.title}</span>
              </AnimatedLink>
            ) : <span />}
            {next ? (
              <AnimatedLink
                to={`/projects/${next.slug}`}
                className={`project-others__card project-card__cover-placeholder--${next.color || 'pink'}`}
              >
                <span className="project-others__direction project-others__direction--right">
                  Next project &rarr;
                </span>
                <span className="project-others__name">{next.title}</span>
              </AnimatedLink>
            ) : <span />}
          </div>
        </div>
      </section>
    </article>
  );
}


