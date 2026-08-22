import { useNavigate } from 'react-router-dom';
import { ArrowDown, ArrowRight, Camera, Gamepad2, MapPin, Palette, Sparkles } from 'lucide-react';
import { CustomButton } from '../components/CustomButton';
import { FeaturedWorkCard } from '../components/FeaturedWorkCard';
import { ArtworkCard } from '../components/ArtworkCard';
import { projects } from '../data/projects';
import { artworks } from '../data/artworks';

function MountainSketch() {
  return (
    <svg className="mountain-sketch" viewBox="0 0 340 130" aria-hidden="true">
      <path d="M8 112 72 53l36 32 48-62 52 67 31-31 92 53" />
      <path d="M50 112h250" />
      <path d="M198 112v-30l18-13 17 13v30M209 112V91h13v21" />
      <path d="M256 112V88m-8 8 8-17 8 17m-13 4 5-11 6 11" />
    </svg>
  );
}

export function Home() {
  const navigate = useNavigate();
  const featured = projects.slice(0, 3);
  const gallery = artworks.slice(0, 5);

  return (
    <div className="paper-page home-page">
      <section className="home-hero page-width">
        <div className="hero-copy">
          <span className="eyebrow">Game developer · artist · storyteller</span>
          <h1>Crafting interactive worlds and visual stories.</h1>
          <p className="handwritten hero-handwriting">
            Games are how I collect the places, feelings and little moments I do not want to forget.
          </p>
          <p className="hero-body">
            I create story-driven games and visual work shaped by atmosphere, culture, memory and the details that make a place feel lived in.
          </p>

          <div className="hero-actions">
            <CustomButton onClick={() => navigate('/projects')}>
              View projects <ArrowRight size={17} />
            </CustomButton>
            <CustomButton variant="secondary" onClick={() => navigate('/artwork')}>
              Explore artwork
            </CustomButton>
          </div>

          <div className="hero-location">
            <MapPin size={15} strokeWidth={1.5} />
            Sarajevo, Bosnia & Herzegovina
          </div>
        </div>

        <div className="hero-storyboard" aria-label="A collage of Avellox Studio work">
          <div className="hero-main-photo">
            <img src={projects[0]?.coverImage} alt={projects[0]?.title ?? 'Avellox game project'} />
            <span className="tape tape-top-left" aria-hidden="true" />
            <span className="photo-caption handwritten">a place becomes a story when someone remembers it.</span>
          </div>

          {gallery[0] && (
            <div className="hero-polaroid hero-polaroid-one">
              <img src={gallery[0].imageUrl} alt={gallery[0].title} />
              <span className="handwritten">sketchbook fragment</span>
            </div>
          )}

          {gallery[1] && (
            <div className="hero-polaroid hero-polaroid-two">
              <img src={gallery[1].imageUrl} alt={gallery[1].title} />
              <span className="handwritten">light + memory</span>
            </div>
          )}

          <div className="hero-note handwritten">
            some of my favourite ideas begin with a room, an object, or a feeling I cannot quite explain. ♡
          </div>
          <MountainSketch />
        </div>

        <a href="#selected-work" className="scroll-cue">
          <ArrowDown size={17} />
          <span>Scroll to explore</span>
        </a>
      </section>

      <section id="selected-work" className="section page-width selected-work">
        <div className="section-heading split-heading">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2>Stories I’ve been building.</h2>
          </div>
          <p>
            A few projects that best show how I combine development, visual direction, interaction and narrative design.
          </p>
        </div>

        <div className="featured-grid">
          {featured.map((project) => (
            <div key={project.id} onClick={() => navigate(`/projects/${project.id}`)}>
              <FeaturedWorkCard
                title={project.title}
                subtitle={project.tags.slice(0, 2).join(' · ')}
                imageUrl={project.coverImage}
                description={project.shortDescription}
              />
            </div>
          ))}
        </div>

        <div className="section-end-link">
          <button className="text-link" onClick={() => navigate('/projects')}>
            See all projects <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <section className="section studio-story-section">
        <div className="page-width studio-story-grid">
          <div className="studio-collage">
            {gallery.slice(2, 5).map((art, index) => (
              <figure key={art.id} className={`story-photo story-photo-${index + 1}`}>
                <img src={art.imageUrl} alt={art.title} />
              </figure>
            ))}
            <div className="story-note handwritten">I collect little pieces of the world and turn them into places you can explore.</div>
          </div>

          <div className="studio-story-copy">
            <span className="eyebrow">Behind Avellox</span>
            <h2>A small studio name for one very curious person.</h2>
            <p>
              Avellox is the home for my games, artwork and experiments. I like projects where environments are not just backgrounds — they carry memories, personality and quiet bits of story.
            </p>
            <p>
              My process usually moves between sketching, writing, programming, photographing references and making the same tiny detail three times until it finally feels right.
            </p>

            <div className="identity-list">
              <div><Gamepad2 size={19} /><span><strong>Game development</strong><small>Unity, C#, interaction and systems</small></span></div>
              <div><Palette size={19} /><span><strong>Visual storytelling</strong><small>Concept art, UI and environment direction</small></span></div>
              <div><Camera size={19} /><span><strong>Finding references</strong><small>Places, photographs, objects and everyday life</small></span></div>
            </div>

            <CustomButton variant="secondary" onClick={() => navigate('/about')}>
              More about me <ArrowRight size={17} />
            </CustomButton>
          </div>
        </div>
      </section>

      <section className="section page-width art-preview-section">
        <div className="section-heading split-heading">
          <div>
            <span className="eyebrow">Artwork & experiments</span>
            <h2>Before a world becomes playable.</h2>
          </div>
          <p className="handwritten">sketches, strange ideas, studies and the occasional happy accident.</p>
        </div>

        <div className="home-art-grid">
          {gallery.slice(0, 4).map((art, index) => (
            <ArtworkCard
              key={art.id}
              title={art.title}
              medium={art.medium}
              year={art.year}
              imageUrl={art.imageUrl}
              className={`home-art-${index + 1}`}
              onClick={() => navigate('/artwork')}
            />
          ))}
        </div>
      </section>

      <section className="home-closing page-width">
        <Sparkles size={19} strokeWidth={1.4} />
        <p className="handwritten">Still learning. Still making. Still collecting stories.</p>
        <CustomButton onClick={() => navigate('/contact')}>Say hello <ArrowRight size={17} /></CustomButton>
      </section>
    </div>
  );
}
