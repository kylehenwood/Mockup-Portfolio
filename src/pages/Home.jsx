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
            Developer turned Designer, I have a love for systemised and functional design.
            I believe all interfaces should tell a story, be accessible and maintainable.
          </p>
          <p className="home-hero__lede">
            Design is a practice often seen as a final point of call in a product decision.
            I believe it should be the first.
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
    </>
  );
}
