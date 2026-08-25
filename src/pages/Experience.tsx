import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { PaperNote } from "../components/Decor";
import { experience, toolGroups } from "../data/siteData";

export function Experience() {
  return (
    <div className="inner-page experience-page">
      <section className="page-hero">
        <div className="container">
          <p className="handwritten section-hand">learning, making & figuring things out</p>
          <h1>Experience</h1>
          <p className="page-intro">
            A timeline of the projects, studios, classrooms and deadlines that
            shaped how I work now.
          </p>
        </div>
      </section>

      <section className="paper-section page-content">
        <div className="container experience-layout">
          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-entry" key={`${item.year}-${item.role}`}>
                <span className="timeline-dot" />
                <p className="timeline-year">{item.year}</p>
                <h2>{item.role}</h2>
                <p className="timeline-place">{item.place}</p>
                <p className="timeline-text">{item.text}</p>
                <div className="project-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {index === 1 && (
                  <PaperNote className="timeline-note">
                    Good design is usually quieter than I expect it to be.
                  </PaperNote>
                )}
              </article>
            ))}
          </div>

          <aside className="experience-sidebar">
            <section>
              <div className="sidebar-title">
                <GraduationCap size={19} />
                <h3>Education</h3>
              </div>
              <p>
                <strong>International Burch University</strong>
                <br />
                Information Technology
              </p>
              <p className="small-copy">
                Relevant areas: game development, programming, UX/UI, software
                testing and interactive media.
              </p>
            </section>

            <section>
              <div className="sidebar-title">
                <BriefcaseBusiness size={19} />
                <h3>Tools I use</h3>
              </div>

              <div className="tool-groups">
                {toolGroups.map((group) => (
                  <div key={group.title}>
                    <span>{group.title}</span>
                    <p>{group.tools.join(" · ")}</p>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </section>
    </div>
  );
}
