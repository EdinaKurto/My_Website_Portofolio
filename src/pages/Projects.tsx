import { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { projects, ProjectCategory } from '../data/projects';

function VillageSketch() {
  return (
    <svg className="village-sketch" viewBox="0 0 520 120" aria-hidden="true">
      <path d="M8 106 72 55l42 29 55-62 59 67 36-35 54 58 43-47 89 41" />
      <path d="M72 106h390" />
      <path d="M270 106V79l22-17 22 17v27M282 106V87h13v19" />
      <path d="M351 106V82l18-14 19 14v24M360 106V90h11v16" />
      <path d="M221 106V82m-10 10 10-21 10 21M402 106V78m-12 14 12-25 12 25" />
    </svg>
  );
}

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const categories: ProjectCategory[] = ['All', 'Games', 'UI/UX', 'Assets', 'Animations'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="paper-page inner-page">
      <section className="page-intro page-width projects-intro">
        <div>
          <span className="eyebrow">Portfolio</span>
          <h1>Projects</h1>
          <p className="handwritten">Games, prototypes and interactive things that became bigger than the first scribble.</p>
        </div>
        <VillageSketch />
      </section>

      <section className="page-width projects-content">
        <div className="filter-row" aria-label="Project filters">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 'active' : ''}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              projectId={project.id}
              title={project.title}
              description={project.shortDescription}
              imageUrl={project.coverImage}
              category={project.category}
              tags={project.tags}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="empty-state handwritten">Nothing pinned here yet — probably soon.</div>
        )}

        <div className="torn-note project-page-note handwritten">
          Every project starts as a tiny idea I cannot stop thinking about.
        </div>
      </section>
    </div>
  );
}
