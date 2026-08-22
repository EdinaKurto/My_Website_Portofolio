import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CalendarDays, Hammer, UserRound } from 'lucide-react';
import { CustomButton } from '../components/CustomButton';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { getProjectById } from '../data/projects';

export function ProjectSingle() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(Number(id));

  if (!project) {
    return (
      <div className="paper-page project-missing">
        <h1>Project not found.</h1>
        <button className="text-link" onClick={() => navigate('/projects')}><ArrowLeft size={16} /> Back to projects</button>
      </div>
    );
  }

  return (
    <div className="paper-page inner-page project-detail-page">
      <section className="page-width project-hero">
        <div className="project-hero-copy">
          <button className="back-link" onClick={() => navigate('/projects')}>
            <ArrowLeft size={15} /> Back to Projects
          </button>
          <span className="eyebrow">{project.category}</span>
          <h1>{project.title}</h1>
          <p className="handwritten project-tagline">{project.tagline}</p>
          <p className="project-intro-copy">{project.shortDescription}</p>

          <div className="project-meta-grid">
            <div><UserRound size={17} /><span><small>Role</small>{project.overview.role}</span></div>
            <div><CalendarDays size={17} /><span><small>Timeline</small>{project.overview.timeline}</span></div>
            <div><Hammer size={17} /><span><small>Tools</small>{project.overview.tools.slice(0, 3).join(', ')}</span></div>
          </div>

          {project.link && (
            <a className="story-button primary project-external-link" href={project.link} target="_blank" rel="noreferrer">
              View project <ArrowRight size={17} />
            </a>
          )}
        </div>

        <div className="project-hero-visual">
          <div className="project-photo-paper">
            <ImageWithFallback src={project.coverImage} alt={project.title} />
            <span className="tape tape-top" aria-hidden="true" />
          </div>
          <div className="project-quote handwritten">“The interesting part is never only what happened — it is what the place still remembers.”</div>
        </div>
      </section>

      {project.gallery.length > 0 && (
        <section className="page-width screenshot-strip-section">
          <div className="screenshot-strip">
            {project.gallery.slice(0, 5).map((image, index) => (
              <div className="screenshot-thumb" key={index}>
                <ImageWithFallback src={image} alt={`${project.title} screenshot ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="section page-width project-overview-grid">
        <div className="project-long-copy">
          <span className="eyebrow">About the project</span>
          <h2>What I wanted this project to feel like.</h2>
          <p>{project.overview.description}</p>
        </div>

        <aside className="project-facts paper-note-card">
          <span className="handwritten">project notes</span>
          <h3>What I worked on</h3>
          <div className="tag-row large">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          {project.overview.additionalHelp && project.overview.additionalHelp.length > 0 && (
            <div className="collaborators">
              <h4>Additional help</h4>
              {project.overview.additionalHelp.map((helper) => (
                <p key={helper.name}>
                  {helper.link ? <a href={helper.link} target="_blank" rel="noreferrer">{helper.name}</a> : helper.name}
                  <small>{helper.role}</small>
                </p>
              ))}
            </div>
          )}
        </aside>
      </section>

      <section className="section soft-olive-section">
        <div className="page-width">
          <div className="section-heading split-heading light-heading">
            <div>
              <span className="eyebrow">Design focus</span>
              <h2>Features & highlights</h2>
            </div>
            <p className="handwritten">the things I kept coming back to while making it.</p>
          </div>
          <div className="feature-grid">
            {project.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <article className="feature-card" key={index}>
                  <Icon size={22} strokeWidth={1.4} />
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section page-width process-section">
        <div className="section-heading split-heading">
          <div>
            <span className="eyebrow">Behind the scenes</span>
            <h2>From idea to something playable.</h2>
          </div>
          <p>Research, messy experiments, greyboxes, revisions and eventually something that starts to feel alive.</p>
        </div>

        <p className="process-description">{project.process.description}</p>

        {project.process.images.length > 0 && (
          <div className="process-images">
            {project.process.images.map((image, index) => (
              <figure key={index} className={`process-photo process-photo-${(index % 3) + 1}`}>
                <ImageWithFallback src={image} alt={`${project.title} process ${index + 1}`} />
                <figcaption className="handwritten">process {String(index + 1).padStart(2, '0')}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </section>

      <section className="page-width next-project-panel">
        <div>
          <span className="eyebrow">Keep exploring</span>
          <h2>More worlds are waiting.</h2>
        </div>
        <CustomButton onClick={() => navigate('/projects')}>Back to all projects <ArrowRight size={17} /></CustomButton>
      </section>
    </div>
  );
}
