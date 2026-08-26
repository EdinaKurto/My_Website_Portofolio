import {
  ArrowLeft,
  ArrowRight,
  CircleDot,
  Gamepad2,
  Monitor,
  Wrench,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { MountainSketch, PaperNote } from "../components/Decor";
import { projects } from "../data/siteData";

export function ProjectSingle() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="missing-page">
        <h1>Project not found.</h1>
        <button className="button button--primary" onClick={() => navigate("/projects")}>
          Back to Projects
        </button>
      </div>
    );
  }

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="project-detail">
      <section className="project-detail__hero">
        <div className="container">
          <button className="back-link" onClick={() => navigate("/projects")}>
            <ArrowLeft size={15} /> Back to Projects
          </button>

          <div className="project-detail__hero-grid">
            <div className="project-detail__intro">
              <p className="handwritten project-detail__type">
                {project.type} · {project.status}
              </p>
              <h1>{project.title}</h1>
              <p>{project.description}</p>

              <div className="project-facts">
                <div>
                  <Wrench size={17} />
                  <span>Role</span>
                  <strong>{project.role}</strong>
                </div>
                <div>
                  <Monitor size={17} />
                  <span>Engine</span>
                  <strong>{project.engine}</strong>
                </div>
                <div>
                  <Gamepad2 size={17} />
                  <span>Format</span>
                  <strong>{project.perspective}</strong>
                </div>
                <div>
                  <CircleDot size={17} />
                  <span>Status</span>
                  <strong>{project.status}</strong>
                </div>
              </div>

              {project.link && (
                <a
                  className="button button--primary"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Play / View Project <ArrowRight size={15} />
                </a>
              )}
            </div>

            <div className="project-detail__visual">
              <div className="project-hero-image">
                <img src={project.cover} alt={project.title} />
              </div>

              <PaperNote className="project-quote">
                It&apos;s not just a place.
                <br />
                It&apos;s the feeling of being somewhere you belong.
              </PaperNote>
            </div>
          </div>

          <div className="screenshot-strip">
            {project.gallery.length > 0 ? (
              project.gallery.slice(0, 5).map((image, index) => (
                <div key={`${image}-${index}`} className="screenshot-thumb">
                  <img src={image} alt={`${project.title} screenshot ${index + 1}`} />
                </div>
              ))
            ) : (
              <p className="handwritten no-gallery-note">More screenshots coming soon.</p>
            )}
          </div>
        </div>
      </section>

      <section className="paper-section project-about">
        <div className="container project-about__grid">
          <div>
            <p className="handwritten section-hand">about the project</p>
            {project.longDescription.split(/\n\s*\n/).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {project.credits && project.credits.length > 0 && (
              <div className="project-credits">
                <h3>Credits</h3>
                {project.credits.map((credit) => (
                  <p key={credit.name}>
                    {credit.role}: {" "}
                    <a href={credit.link} target="_blank" rel="noreferrer">
                      {credit.name}
                    </a>
                  </p>
                ))}
              </div>
            )}

            <h3>My role</h3>
            <p>
              {project.role}. I worked across design, visual development,
              implementation and iteration, keeping the experience consistent from
              the first reference image to the playable build.
            </p>
          </div>

          <aside className="feature-paper">
            <h3>Key features</h3>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <header className="section-heading">
            <p className="handwritten section-hand">from idea to world</p>
            <h2>Development process</h2>
          </header>

          <div className="process-grid">
            {project.process.map((item, index) => (
              <article key={item.title} className="process-step">
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <MountainSketch className="process-mountains" />
        </div>
      </section>

      <section className="next-project">
        <div className="container next-project__inner">
          <div>
            <p className="handwritten">next project</p>
            <h2>{nextProject.title}</h2>
          </div>
          <button
            className="button button--paper"
            onClick={() => navigate(`/projects/${nextProject.slug}`)}
          >
            Continue <ArrowRight size={15} />
          </button>
        </div>
      </section>
    </div>
  );
}
