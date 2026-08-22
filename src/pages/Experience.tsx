import { BriefcaseBusiness, GraduationCap, Palette, Sparkles, Wrench } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      year: '2024 — Present',
      role: 'Indie Game Developer',
      company: 'Avellox Studio',
      description: 'Creating narrative-first games and prototypes in Unity, with a focus on environmental storytelling, meaningful interactions, atmosphere and culturally grounded spaces.',
      tags: ['Unity', 'C#', 'Narrative Design', 'Game Design'],
    },
    {
      year: '2025',
      role: 'GROKA Exhibition Artist',
      company: 'Plus Ultra',
      description: 'Showcased mixed-media and painted work in a group exhibition and learned how to prepare, curate and present visual work for a physical audience.',
      tags: ['Mixed Media', 'Exhibition', 'Visual Storytelling'],
    },
    {
      year: '2025',
      role: 'UX/UI Intern',
      company: 'Plus Ultra Studio',
      description: 'Designed and refined client-facing interfaces in Figma, from early wireframes to polished prototypes, while working with component systems, user flows and team feedback.',
      tags: ['Figma', 'UX/UI', 'Prototyping'],
    },
    {
      year: '2023',
      role: 'Game Jam Participant',
      company: 'Talent Akademija × Alchemy Studio',
      description: 'Co-created a branching narrative project under a tight deadline, balancing scope, writing, implementation and collaboration.',
      tags: ['Game Jam', 'Narrative', 'Collaboration'],
    },
    {
      year: '2023 — 2024',
      role: 'Game Development',
      company: 'International Burch University',
      description: 'Started building complete playable projects in Unity, including a 2D platformer that won first place in a university game development competition.',
      tags: ['Unity', 'C#', '2D Game Development'],
    },
  ];

  const toolGroups = [
    { title: 'Game development', tools: ['Unity', 'C#', "Ren'Py", 'Git'] },
    { title: 'Visual development', tools: ['Photoshop', 'Blender', '3DCoat', 'Illustration'] },
    { title: 'Design', tools: ['Figma', 'UX/UI', 'Prototyping', 'Narrative Design'] },
  ];

  return (
    <div className="paper-page inner-page experience-page">
      <section className="page-intro page-width experience-intro">
        <div>
          <span className="eyebrow">Experience</span>
          <h1>A timeline of learning, making and figuring things out.</h1>
          <p className="handwritten">Not a straight line — thankfully.</p>
        </div>
        <BriefcaseBusiness size={52} strokeWidth={1.05} />
      </section>

      <section className="page-width experience-layout">
        <div className="timeline">
          {experiences.map((experience, index) => (
            <article className="timeline-entry" key={`${experience.year}-${experience.role}`}>
              <div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div>
              <div className="timeline-card">
                <div className="timeline-year">{experience.year}</div>
                <h2>{experience.role}</h2>
                <h3>{experience.company}</h3>
                <p>{experience.description}</p>
                <div className="tag-row">
                  {experience.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="experience-side">
          <div className="paper-note-card education-card">
            <GraduationCap size={21} strokeWidth={1.4} />
            <span className="handwritten">Education</span>
            <h3>Information Technology</h3>
            <p>International Burch University · Sarajevo</p>
            <small>Game development, programming, UX/UI, software testing and interactive media.</small>
          </div>

          <div className="tools-card">
            <div className="tools-card-title"><Wrench size={19} /><h3>Creative toolkit</h3></div>
            {toolGroups.map((group) => (
              <div className="tool-group" key={group.title}>
                <h4>{group.title}</h4>
                <div className="tag-row large">
                  {group.tools.map((tool) => <span key={tool}>{tool}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div className="experience-note handwritten"><Palette size={17} /> I like knowing enough of every stage to understand how the whole thing fits together.</div>
        </aside>
      </section>

      <section className="page-width experience-closing">
        <Sparkles size={18} strokeWidth={1.3} />
        <p className="handwritten">The best part is that there is still an unreasonable amount left to learn.</p>
      </section>
    </div>
  );
}
