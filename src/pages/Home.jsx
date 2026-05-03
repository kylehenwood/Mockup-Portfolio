import { Outlet } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard.jsx';
import { professionalProjects, personalProjects } from '../projects/index.js';

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="home-hero" id="top">
        <div className="home-hero__inner">
          <h1 className="home-hero__title">Hey, I’m Kyle</h1>
          <p className="home-hero__lede">
            I’m a creative who builds things — turning ideas into products anyone can
            pick up, use and enjoy.
          </p>
          <p className="home-hero__lede">
            I apply structured and systemised application of design principles: clear
            constraints, repeatable patterns, and decisions that hold up as ideas expand.
          </p>
        </div>
      </section>

      {/* ---------- Projects ---------- */}
      <section className="home-section" id="projects">
        <div className="home-section__inner">
          <header className="home-section__head">
            <h2 className="home-section__title">Professional Project Case Studies</h2>
            <p className="home-section__sub">All work shown is my own</p>
          </header>

          <div className="project-grid">
            {professionalProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} feature={p.feature} />
            ))}
          </div>

          <header className="home-section__head home-section__head--minor">
            <h3 className="home-section__title home-section__title--minor">Personal projects</h3>
            <p className="home-section__sub">
              I find personal projects invaluable when it comes to learning, exploring new areas,
              and furthering my knowledge.
            </p>
          </header>

          <div className="project-grid project-grid--quad">
            {personalProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Nested-route slot. On /projects/:slug the Outlet renders the
          Project component as a fixed overlay (driven by the
          .layout__project wrapper + .layout--project-active class on the
          parent .layout). On /, the Outlet is empty and this div is a
          no-op. Keeping the home content mounted underneath means
          state, scroll, and view-transition snapshots all survive a
          project open / close round-trip. */}
      <div className="layout__project">
        <Outlet />
      </div>
    </>
  );
}
