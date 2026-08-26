import { ArrowDown, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BotanicalSprig, PaperNote, Tape } from "../components/Decor";
import { artworks, hero, me, projects } from "../data/siteData";

export function Home() {
  const navigate = useNavigate();
  const featured = projects.slice(0, 3);
  const art = artworks.slice(0, 6);

  return (
    <div className="home-page">
      <section className="home-hero">
        <BotanicalSprig className="hero-sprig hero-sprig--left" />

        <div className="container home-hero__grid">
          <div className="home-hero__copy">
            <p className="eyebrow">Game developer · artist · programmer</p>

            <h1>
              Crafting
              <br />
              interactive worlds
              <br />
              <em>and visual stories.</em>
            </h1>

            <p className="handwritten hero-hand">
              Games are how I remember, feel, and share the places that mean
              something to me.
            </p>

            <p className="hero-intro">
              I&apos;m Edina, a game developer and digital artist creating
              narrative experiences shaped by memory, atmosphere, culture and
              meaningful places.
            </p>

            <div className="hero-actions">
              <button className="button button--primary" onClick={() => navigate("/projects")}>
                View Projects <ArrowRight size={15} />
              </button>
              <button className="button button--secondary" onClick={() => navigate("/artwork")}>
                Explore Artwork
              </button>
            </div>
          </div>

          <div className="home-hero__visual">
            <div className="hero-image">
              <img src={hero} alt="A warm illustrated Balkan mountain village" />
            </div>

            <div className="hero-polaroid">
              <Tape />
              <img src={art[2].image} alt={art[2].title} />
              <span className="handwritten">a concept before it becomes a world</span>
            </div>

            <PaperNote className="hero-note">
              Some of my favourite ideas begin with a place I don&apos;t want to
              forget. ♡
            </PaperNote>
          </div>
        </div>

        <a className="scroll-mark" href="#selected">
          <ArrowDown size={15} />
          Scroll to explore
        </a>
      </section>

      <section className="paper-section" id="selected">
        <div className="container">
          <header className="section-heading">
            <p className="handwritten section-hand">selected work</p>
            <h2>Stories I&apos;ve been building.</h2>
            <p>
              A few projects where game systems, visual direction and storytelling
              are built to support the same feeling of nostalgia.
            </p>
          </header>

          <div className="featured-projects">
            {featured.map((project, index) => (
              <article
                key={project.slug}
                className={`featured-story featured-story--${index + 1}`}
                onClick={() => navigate(`/projects/${project.slug}`)}
              >
                <div className="featured-story__image">
                  <img src={project.cover} alt={project.title} />
                  <span className="project-index">0{index + 1}</span>
                </div>

                <div className="featured-story__body">
                  <p className="project-kicker">
                    {project.type} · {project.status}
                  </p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <span className="inline-link">
                    View Project <ArrowRight size={15} />
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="center-action">
            <button className="button button--secondary" onClick={() => navigate("/projects")}>
              See all projects <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      <section className="memory-break">
        <div className="container memory-break__grid">
          <div className="memory-break__copy">
            <p className="handwritten section-hand section-hand--light">behind Avellox</p>
            <h2>Most projects start with something small.</h2>

            <div className="memory-list">
              <span>A photograph.</span>
              <span>A room I remember.</span>
              <span>An object somebody gave me.</span>
              <span>A place that already feels like a story.</span>
            </div>

            <p>
              I like building outward from those details until they become spaces,
              interactions and characters the player can spend time with.
            </p>

            <button className="inline-link inline-link--light" onClick={() => navigate("/about")}>
              Read more about my process <ArrowRight size={15} />
            </button>
          </div>

          <div className="memory-collage">
            <figure className="memory-photo memory-photo--one">
              <img src={art[4].image} alt={art[4].title} />
              <figcaption className="handwritten">{art[4].title}</figcaption>
            </figure>
            <figure className="memory-photo memory-photo--two">
              <img src={featured[1].gallery[0]} alt="" />
            </figure>
            <figure className="memory-photo memory-photo--three">
              <img src={art[6]?.image ?? art[1].image} alt="" />
            </figure>
            <PaperNote className="memory-note">
              I keep the imperfect bits, because they usually become the most interesting ones.
            </PaperNote>
          </div>
        </div>
      </section>

      <section className="paper-section art-preview">
        <div className="container">
          <div className="split-heading">
            <header className="section-heading section-heading--compact">
              <p className="handwritten section-hand">artwork & experiments</p>
              <h2>Things I make between the games.</h2>
            </header>

            <button className="inline-link" onClick={() => navigate("/artwork")}>
              View full gallery <ArrowRight size={15} />
            </button>
          </div>

          <div className="home-art-grid">
            {art.map((item, index) => (
              <button
                key={item.id}
                className={`home-art home-art--${index + 1}`}
                onClick={() => navigate("/artwork")}
              >
                <img src={item.image} alt={item.title} />
                <span className="art-overlay">
                  <strong>{item.title}</strong>
                  <small>{item.medium} · {item.year}</small>
                </span>
              </button>
            ))}
          </div>

          <p className="handwritten art-signoff">
            I take little moments and turn them into worlds. ♡
          </p>
        </div>
      </section>

      <section className="about-preview">
        <div className="container about-preview__grid">
          <div className="about-preview__copy">
            <p className="handwritten section-hand">the "amazing" person behind it</p>
            <h2>Hi, I&apos;m Edina.</h2>
            <p className="about-preview__lead">
              I like games that feel lived-in.
            </p>
            <p>
              Rooms you want to inspect, objects that quietly say something about
              the people who owned them, and places that feel as though they
              existed before the player arrived.
            </p>

            <div className="about-pills">
              <span>story first</span>
              <span>meaningful details</span>
              <span>handmade feeling</span>
            </div>

            <button className="button button--primary" onClick={() => navigate("/about")}>
              More about me <ArrowRight size={15} />
            </button>
          </div>

          <div className="about-preview__board">
            <div className="about-board-image">
              <img src={me} alt="ME" />
            </div>
            <PaperNote className="about-board-note">
              I'm still learning,
              <br />
              still making,
              <br />
              still trying.
            </PaperNote>
            <BotanicalSprig className="about-board-sprig" />
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="container closing-section__inner">
          <p className="handwritten">one last page...</p>
          <h2>
            Let&apos;s make something
            <br />
            worth remembering!
          </h2>
          <button className="button button--paper" onClick={() => navigate("/contact")}>
            Get in touch <ArrowRight size={15} />
          </button>
        </div>
      </section>
    </div>
  );
}
