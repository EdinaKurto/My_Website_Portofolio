import {
  Award,
  BriefcaseBusiness,
  Code2,
  Download,
  Gamepad2,
  GraduationCap,
  Languages,
  Palette,
  Sparkles,
  Users,
} from "lucide-react";

import "../styles/experience-v2.css";

const experience = [
  {
    period: "Feb 2026 — Aug 2026",
    role: "Board of Directors",
    organisation: "Plus Ultra",
    location: "Sarajevo",
    icon: Users,
    featured: true,
    description:
      "Served on the organisation's Board of Directors, contributing to planning, coordination and decision-making across ongoing initiatives.",
    tags: ["Leadership", "Planning", "Communication"],
  },
  {
    period: "Oct 2025 — Mar 2026",
    role: "Lead Game Designer",
    organisation: "C2 Studio",
    location: "HNTA Grant",
    icon: Gamepad2,
    featured: true,
    description:
      "Worked as Lead Game Designer on a grant-supported game project, helping shape the project's design direction and keep the experience coherent across development.",
    tags: ["Game Design", "Creative Direction", "Teamwork"],
  },
  {
    period: "Jul 2024 — Feb 2025",
    role: "UI / UX Designer Intern",
    organisation: "Plus Ultra",
    location: "Sarajevo",
    icon: Palette,
    featured: false,
    description:
      "Designed a website and quiz application in Figma and Canva to help new students learn programming. Worked across multiple teams, joined business meetings and collaborated with a cross-functional team of 10+ members in an Agile-Scrum environment.",
    tags: ["Figma", "Canva", "UI/UX", "Agile-Scrum"],
  },
];

const education = [
  {
    period: "2026 — 2027",
    title: "Art and Animation of Video Games",
    organisation: "SAE Institute Belgrade",
    note:
      "Currently pursuing a Master's degree focused on game art, animation and Unreal Engine development.",
  },
  {
    period: "2022 — 2025",
    title: "Bachelor of Information Technology",
    organisation: "International University",
    note:
      "Studied software engineering, web and mobile development, machine learning, NLP, software verification and validation, networks and data structures.",
  },
  {
    period: "2021 — 2022",
    title: "Industrial Engineering and Management",
    organisation: "Mechanical Engineering University",
    note:
      "Completed one academic year before transitioning into Information Technology to better align with long-term career goals.",
  },
];

const certificates = [
  { year: "2025", title: "Certificate of Completion", issuer: "Helem Nejse Talent Academy" },
  { year: "2025", title: "GROKA — Glorious Radiations of Kreative Arts", issuer: "Plus Ultra" },
  { year: "2025", title: "Digital Skillset", issuer: "Rolify Skills Academy" },
  { year: "2025", title: "Solve It Like A Pro — Critical Thinking", issuer: "Rolify Skills Academy" },
  { year: "2024", title: "Camp Training on Teamwork and Communication", issuer: "Plus Ultra" },
  { year: "2023", title: "Game Development and Design — #1 Place", issuer: "International Burch University" },
];

const skillGroups = [
  {
    title: "Game Development",
    icon: Gamepad2,
    items: ["Unity", "Unreal Engine", "C#", "C++"],
  },
  {
    title: "Art & Design",
    icon: Palette,
    items: ["Blender", "Photoshop", "Figma", "Canva"],
  },
  {
    title: "Programming & Web",
    icon: Code2,
    items: ["Python", "Java", "HTML / CSS", "PHP", "MySQL / MS SQL", "Selenium"],
  },
];

const languages = ["Bosnian — Native", "English", "German"];

export function Experience() {
  return (
    <div className="experience-v2">
      <section className="experience-v2__hero">
        <div className="experience-v2__container">
          <div className="experience-v2__hero-grid">
            <div>
              <p className="experience-v2__hand">learning, making & figuring things out</p>
              <h1>Experience</h1>
              <p className="experience-v2__intro">
                My path into games has moved through technology, UI/UX, visual work,
                leadership and game design. I like that mix — it means I understand
                both how an experience feels and what it takes to actually build it.
              </p>

              <div className="experience-v2__hero-actions">
                <a className="experience-v2__button experience-v2__button--primary" href="/Edina_Kurto_CV.pdf" download>
                  <Download size={15} /> Download CV
                </a>
                <a className="experience-v2__text-link" href="https://www.linkedin.com/in/edina-kurto-70093230b/" target="_blank" rel="noreferrer">
                  View LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <aside className="experience-v2__hero-note">
              <span className="experience-v2__tape" />
              <Sparkles size={18} />
              <p>
                I&apos;m most interested in work where game design, visual storytelling
                and player experience overlap.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="experience-v2__main">
        <div className="experience-v2__container experience-v2__main-grid">
          <div>
            <div className="experience-v2__section-heading">
              <p className="experience-v2__hand">work & creative experience</p>
              <h2>Where I&apos;ve been building.</h2>
            </div>

            <div className="experience-v2__timeline">
              {experience.map((item, index) => {
                const Icon = item.icon;
                return (
                  <article className={`experience-v2__entry ${item.featured ? "experience-v2__entry--featured" : ""}`} key={`${item.period}-${item.role}`}>
                    <div className="experience-v2__timeline-dot"><Icon size={17} strokeWidth={1.5} /></div>
                    <div className="experience-v2__entry-top">
                      <p className="experience-v2__period">{item.period}</p>
                      {item.featured && <span className="experience-v2__selected-label">Selected experience</span>}
                    </div>
                    <h3>{item.role}</h3>
                    <p className="experience-v2__organisation">{item.organisation}<span>·</span>{item.location}</p>
                    <p className="experience-v2__description">{item.description}</p>
                    <div className="experience-v2__tags">
                      {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>

                    {index === 1 && (
                      <div className="experience-v2__margin-note">
                        <span className="experience-v2__small-tape" />
                        <p>
                          This is where my portfolio started shifting from “I make games”
                          to “this is the kind of game designer I want to be.”
                        </p>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="experience-v2__sidebar">
            <section className="experience-v2__paper-card">
              <div className="experience-v2__paper-title">
                <GraduationCap size={19} />
                <h2>Education</h2>
              </div>
              <div className="experience-v2__education-list">
                {education.map((item) => (
                  <article key={`${item.period}-${item.title}`}>
                    <p className="experience-v2__paper-period">{item.period}</p>
                    <h3>{item.title}</h3>
                    <p className="experience-v2__school">{item.organisation}</p>
                    <p>{item.note}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="experience-v2__dark-note">
              <BriefcaseBusiness size={19} />
              <p className="experience-v2__hand">what I bring into a team</p>
              <h2>A mix of design and implementation.</h2>
              <p>
                I&apos;m comfortable moving between visual ideas, interface decisions,
                game systems and technical implementation — especially when a project
                needs someone who can connect those pieces.
              </p>
            </section>
          </aside>
        </div>
      </section>

      <section className="experience-v2__skills-section">
        <div className="experience-v2__container">
          <div className="experience-v2__section-heading experience-v2__section-heading--wide">
            <p className="experience-v2__hand">tools & working knowledge</p>
            <h2>What I actually work with.</h2>
            <p>No percentage bars. Just the tools I&apos;ve used across academic, design and game-development work.</p>
          </div>

          <div className="experience-v2__skills-grid">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article className="experience-v2__skill-card" key={group.title}>
                  <Icon size={22} strokeWidth={1.5} />
                  <h3>{group.title}</h3>
                  <div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="experience-v2__certificates">
        <div className="experience-v2__container experience-v2__cert-grid">
          <div>
            <div className="experience-v2__section-heading">
              <p className="experience-v2__hand">selected milestones</p>
              <h2>Certificates & extras.</h2>
            </div>
            <div className="experience-v2__certificate-list">
              {certificates.map((item) => (
                <article key={`${item.year}-${item.title}`}>
                  <Award size={16} strokeWidth={1.5} />
                  <div>
                    <p>{item.title}</p>
                    <span>{item.issuer} · {item.year}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="experience-v2__language-card">
            <Languages size={21} strokeWidth={1.5} />
            <p className="experience-v2__hand">languages</p>
            <h2>Communication matters too.</h2>
            <div>{languages.map((language) => <span key={language}>{language}</span>)}</div>
          </aside>
        </div>
      </section>

      <section className="experience-v2__closing">
        <div className="experience-v2__container experience-v2__closing-inner">
          <div>
            <p className="experience-v2__hand">the short version</p>
            <h2>I&apos;m building toward games full-time.</h2>
            <p>
              My background is broader than game development alone, and I see that as useful:
              UI/UX taught me clarity, IT taught me structure, art taught me observation,
              and game projects taught me how those things become one experience.
            </p>
          </div>

          <a className="experience-v2__button experience-v2__button--paper" href="/Edina_Kurto_CV.pdf" download>
            <Download size={15} /> Download full CV
          </a>
        </div>
      </section>
    </div>
  );
}
