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

import "../styles/experience-final.css";

const workExperience = [
  {
    period: "February 2026 — August 2026",
    role: "Board of Directors",
    organisation: "Plus Ultra",
    location: "Sarajevo",
    icon: Users,
    featured: true,
    description:
      "Worked across both strategic and day-to-day operations, helping organise STEM and Erasmus+ activities, coordinate volunteers, plan and deliver events, approach sponsors and partners, support logistics, and keep teams aligned from early planning through delivery.",
    tags: [
      "Leadership",
      "Event Organisation",
      "Sponsorships",
      "Volunteer Coordination",
      "Erasmus+",
    ],
  },
  {
    period: "October 2025 — March 2026",
    role: "Lead Game Designer",
    organisation: "C2 Studio",
    location: "HNTA Grant",
    icon: Gamepad2,
    featured: true,
    description:
      "Lead Game Designer on ETHOS MYTHOS, a game published on Steam. Designed the core gameplay, narrative structure and game assets, translating the concept into player goals, mechanics, progression, pacing and visual content while keeping the story and gameplay direction cohesive.",
    tags: [
      "Game Design",
      "Gameplay Design",
      "Narrative Design",
      "Asset Design",
      "Creative Direction",
    ],
  },
  {
    period: "July 2024 — February 2025",
    role: "UI / UX Designer Intern",
    organisation: "Plus Ultra",
    location: "Sarajevo",
    icon: Palette,
    featured: false,
    description:
      "Designed a website and quiz application in Figma and Canva to help new students learn programming. Worked across multiple teams, contributed during business meetings, and collaborated with a cross-functional team of 10+ members in an Agile-Scrum environment.",
    tags: ["Figma", "Canva", "UI/UX", "Agile-Scrum", "Teamwork"],
  },
];

const education = [
  {
    period: "2026 — 2027",
    title: "Art and Animation of Video Games",
    organisation: "SAE Institute Belgrade",
    note:
      "Currently pursuing a Master's degree with a focus on game art, animation and Unreal Engine development.",
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

const skillGroups = [
  {
    title: "Game Development",
    icon: Gamepad2,
    items: [
      "Game Design",
      "Narrative Design",
      "Unity",
      "Unreal Engine",
      "C#",
      "C++",
    ],
  },
  {
    title: "Visual Development",
    icon: Palette,
    items: [
      "Asset Design",
      "Blender",
      "Photoshop",
      "Figma",
      "Canva",
    ],
  },
  {
    title: "Technical Foundation",
    icon: Code2,
    items: [
      "Python",
      "Java",
      "HTML / CSS",
      "PHP",
      "MySQL / MS SQL",
      "Selenium",
    ],
  },
];

const selectedMilestones = [
  {
    year: "2025",
    title: "Certificate of Completion",
    issuer: "Helem Nejse Talent Academy",
  },
  {
    year: "2025",
    title: "GROKA — Glorious Radiations of Kreative Arts",
    issuer: "Plus Ultra",
  },
  {
    year: "2025",
    title: "Digital Skillset",
    issuer: "Rolify Skills Academy",
  },
  {
    year: "2025",
    title: "Solve It Like A Pro — Critical Thinking",
    issuer: "Rolify Skills Academy",
  },
  {
    year: "2024",
    title: "Camp Training on Teamwork and Communication",
    issuer: "Plus Ultra",
  },
  {
    year: "2023",
    title: "Game Development and Design — #1 Place",
    issuer: "International Burch University",
  },
];

const languages = ["Bosnian — Native", "English", "German"];

export function Experience() {
  return (
    <div className="experience-final">
      <section className="experience-final__hero">
        <div className="experience-final__container">
          <div className="experience-final__hero-grid">
            <div className="experience-final__hero-copy">
              <p className="experience-final__hand">
                learning, making & building toward games
              </p>

              <h1>Experience</h1>

              <p className="experience-final__intro">
                My background moves across game design, narrative, visual work,
                UI/UX and leadership. That mix has taught me how to look at a
                project from both sides: what the player should feel, and what
                the team needs to build in order to make that feeling work.
              </p>

              <div className="experience-final__hero-actions">
                <a
                  className="experience-final__button experience-final__button--primary"
                  href="/Edina_Kurto_CV.pdf"
                  download
                >
                  <Download size={15} />
                  Download CV
                </a>

                <a
                  className="experience-final__text-link"
                  href="https://www.linkedin.com/in/edina-kurto-70093230b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <aside className="experience-final__hero-note">
              <span className="experience-final__tape" />
              <Sparkles size={18} strokeWidth={1.5} />
              <p>
                I&apos;m most interested in work where gameplay, story, visual
                direction and player experience are allowed to influence each
                other.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="experience-final__work">
        <div className="experience-final__container experience-final__work-grid">
          <div>
            <header className="experience-final__section-heading">
              <p className="experience-final__hand">work & creative experience</p>
              <h2>The roles that shaped how I work.</h2>
              <p>
                A mix of hands-on game design, creative problem solving, team
                coordination and real-world project delivery.
              </p>
            </header>

            <div className="experience-final__timeline">
              {workExperience.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    className={`experience-final__entry ${
                      item.featured ? "experience-final__entry--featured" : ""
                    }`}
                    key={`${item.role}-${item.period}`}
                  >
                    <div className="experience-final__dot">
                      <Icon size={17} strokeWidth={1.5} />
                    </div>

                    <div className="experience-final__entry-top">
                      <p className="experience-final__period">{item.period}</p>

                      {item.featured && (
                        <span className="experience-final__label">
                          Selected experience
                        </span>
                      )}
                    </div>

                    <h3>{item.role}</h3>

                    <p className="experience-final__organisation">
                      {item.organisation}
                      <span>·</span>
                      {item.location}
                    </p>

                    <p className="experience-final__description">
                      {item.description}
                    </p>

                    <div className="experience-final__tags">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    {index === 1 && (
                      <div className="experience-final__note">
                        <span className="experience-final__small-tape" />
                        <p>
                          ETHOS MYTHOS was the point where gameplay, narrative
                          and visual design all became part of the same role for
                          me.
                        </p>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="experience-final__sidebar">
            <section className="experience-final__paper-card">
              <div className="experience-final__paper-title">
                <GraduationCap size={19} strokeWidth={1.5} />
                <h2>Education</h2>
              </div>

              <div className="experience-final__education">
                {education.map((item) => (
                  <article key={`${item.period}-${item.title}`}>
                    <p className="experience-final__paper-period">
                      {item.period}
                    </p>
                    <h3>{item.title}</h3>
                    <p className="experience-final__school">
                      {item.organisation}
                    </p>
                    <p>{item.note}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="experience-final__dark-card">
              <BriefcaseBusiness size={20} strokeWidth={1.5} />
              <p className="experience-final__hand">what I bring into a team</p>
              <h2>I connect the pieces.</h2>
              <p>
                I&apos;m comfortable moving between gameplay ideas, narrative,
                visual assets, interfaces, planning and technical implementation.
                I enjoy roles where those areas need to communicate clearly
                rather than live in separate boxes.
              </p>
            </section>
          </aside>
        </div>
      </section>

      <section className="experience-final__skills">
        <div className="experience-final__container">
          <header className="experience-final__section-heading experience-final__section-heading--wide">
            <p className="experience-final__hand">tools & working knowledge</p>
            <h2>What I actually work with.</h2>
            <p>
              I&apos;d rather show a relevant toolkit than a wall of percentage
              bars. These are the areas and tools I&apos;ve used across game,
              design and technical work.
            </p>
          </header>

          <div className="experience-final__skills-grid">
            {skillGroups.map((group) => {
              const Icon = group.icon;

              return (
                <article className="experience-final__skill-card" key={group.title}>
                  <Icon size={22} strokeWidth={1.5} />
                  <h3>{group.title}</h3>

                  <div>
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="experience-final__extras">
        <div className="experience-final__container experience-final__extras-grid">
          <div>
            <header className="experience-final__section-heading">
              <p className="experience-final__hand">selected milestones</p>
              <h2>Certificates & extras.</h2>
            </header>

            <div className="experience-final__milestones">
              {selectedMilestones.map((item) => (
                <article key={`${item.year}-${item.title}`}>
                  <Award size={16} strokeWidth={1.5} />

                  <div>
                    <p>{item.title}</p>
                    <span>
                      {item.issuer} · {item.year}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="experience-final__language-card">
            <Languages size={22} strokeWidth={1.5} />

            <p className="experience-final__hand">languages</p>

            <h2>Communication matters too.</h2>

            <div>
              {languages.map((language) => (
                <span key={language}>{language}</span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="experience-final__closing">
        <div className="experience-final__container experience-final__closing-inner">
          <div>
            <p className="experience-final__hand">the short version</p>

            <h2>I&apos;m building toward games full-time.</h2>

            <p>
              UI/UX taught me clarity. Leadership taught me how much happens
              outside the artboard. IT gave me the technical foundation to
              understand implementation. Game design is where those parts finally
              feel like they belong together.
            </p>
          </div>

          <a
            className="experience-final__button experience-final__button--paper"
            href="/Edina_Kurto_CV.pdf"
            download
          >
            <Download size={15} />
            Download full CV
          </a>
        </div>
      </section>
    </div>
  );
}
