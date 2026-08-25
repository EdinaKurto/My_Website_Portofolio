import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MountainSketch, PaperNote } from "../components/Decor";
import { projects } from "../data/siteData";

const filters = ["All", "Narrative", "Unity", "Visual Novel", "Released", "In Development"];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    if (filter === "All") return projects;

    return projects.filter((project) => {
      if (filter === "Narrative") {
        return (
          project.type.toLowerCase().includes("narrative") ||
          project.tags.some((tag) => tag.toLowerCase().includes("narrative"))
        );
      }

      if (filter === "Released" || filter === "In Development") {
        return project.status === filter;
      }

      return (
        project.engine.toLowerCase().includes(filter.toLowerCase()) ||
        project.type.toLowerCase().includes(filter.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(filter.toLowerCase()))
      );
    });
  }, [filter]);

  return (
    <div className="inner-page">
      <section className="page-hero page-hero--projects">
        <div className="container page-hero__grid">
          <div>
            <p className="handwritten section-hand">games, prototypes & experiments</p>
            <h1>Projects</h1>
            <p className="page-intro">
              A collection of narrative games, small experiments and projects
              built while learning how story, interaction and visual direction can
              support each other.
            </p>
          </div>

          <MountainSketch className="page-mountain" />
        </div>

        <div className="container filter-row">
          {filters.map((item) => (
            <button
              key={item}
              className={filter === item ? "filter-chip is-active" : "filter-chip"}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="paper-section page-content">
        <div className="container project-grid">
          {filtered.map((project, index) => (
            <article
              className="project-card"
              key={project.slug}
              onClick={() => navigate(`/projects/${project.slug}`)}
            >
              <div className="project-card__image">
                <img src={project.cover} alt={project.title} />
                <span className="project-card__status">{project.status}</span>
              </div>

              <div className="project-card__body">
                <p className="project-kicker">{project.type} · {project.year}</p>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <span className="inline-link">
                  View project <ArrowRight size={15} />
                </span>
              </div>

              {index === 2 && (
                <PaperNote className="project-card-note">
                  Every project starts as a tiny idea I can&apos;t stop thinking about.
                </PaperNote>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
