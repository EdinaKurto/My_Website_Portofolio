import { Camera, Gamepad2, Heart, MapPin, Palette, PawPrint, Sparkles } from 'lucide-react';
import me from '../photos/me.png';

export function About() {
  const details = [
    { icon: Gamepad2, title: 'Narrative games', text: 'I will inspect every room before continuing the actual story.' },
    { icon: Camera, title: 'Photography', text: 'Ordinary places become references the second the light hits them right.' },
    { icon: Palette, title: 'Art', text: 'A suspicious number of projects begin as tiny sketches in the margin.' },
    { icon: MapPin, title: 'Sarajevo', text: 'Mountains, old streets and familiar interiors always find their way into my work.' },
    { icon: PawPrint, title: 'Kenai', text: 'My Samoyed and completely unqualified creative supervisor.' },
    { icon: Heart, title: 'Small details', text: 'The mug on the table matters. The old photo matters. The squeaky door probably matters too.' },
  ];

  return (
    <div className="paper-page inner-page about-page">
      <section className="page-width about-hero">
        <div className="about-copy">
          <span className="eyebrow">About</span>
          <h1>Hi, I’m Edina.</h1>
          <p className="handwritten about-tagline">I build worlds I wish I could step into.</p>
          <p>
            I’m a game developer and digital artist based in Sarajevo, Bosnia & Herzegovina. I love creating narrative experiences where environments, objects and tiny details quietly carry part of the story.
          </p>
          <p>
            My work sits somewhere between game development, visual storytelling, environment design and interactive narrative — usually with a sketchbook open somewhere nearby.
          </p>
          <div className="about-availability"><span /> Open to game industry opportunities</div>
        </div>

        <div className="about-portrait-wrap">
          <div className="portrait-paper">
            <img src={me} alt="Edina, the person behind Avellox Studio" />
            <span className="tape tape-top" aria-hidden="true" />
          </div>
          <div className="portrait-caption handwritten">the person behind Avellox ♡</div>
          <svg className="about-flower" viewBox="0 0 130 190" aria-hidden="true">
            <path d="M67 184c-2-42 1-83 2-127M68 90c-21-17-34-18-46-14M69 118c19-19 34-23 48-18" />
            <path d="M68 57c-8-10-4-26 5-26s15 16 3 27M22 76c4-11 17-13 23-5s-1 18-15 15M116 100c-4-10-17-12-23-3s1 19 14 15" />
          </svg>
        </div>
      </section>

      <section className="section page-width personal-details-section">
        <div className="section-heading">
          <span className="eyebrow">A few things that make me, me</span>
          <h2>Outside the neat portfolio version.</h2>
        </div>
        <div className="personal-detail-grid">
          {details.map((detail) => {
            const Icon = detail.icon;
            return (
              <article key={detail.title} className="personal-detail-card">
                <Icon size={20} strokeWidth={1.4} />
                <h3>{detail.title}</h3>
                <p>{detail.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section about-philosophy-section">
        <div className="page-width">
          <div className="section-heading split-heading light-heading">
            <div>
              <span className="eyebrow">How I like to work</span>
              <h2>Story first, details always.</h2>
            </div>
            <p className="handwritten">I like games that feel made by people, not assembled by a checklist.</p>
          </div>
          <div className="philosophy-grid">
            <div><span>01</span><h3>Story first</h3><p>Mechanics should support the feeling of the experience, not fight it.</p></div>
            <div><span>02</span><h3>Meaningful details</h3><p>Objects and spaces can say things a dialogue box never needs to explain.</p></div>
            <div><span>03</span><h3>Handmade character</h3><p>I would rather keep a little imperfection than sand away all the personality.</p></div>
            <div><span>04</span><h3>Places matter</h3><p>Environments can hold culture, history, belonging and memory all at once.</p></div>
          </div>
        </div>
      </section>

      <section className="page-width about-ending-note">
        <Sparkles size={18} strokeWidth={1.4} />
        <p className="handwritten">Always learning. Always making. Probably moving something three pixels to the left.</p>
      </section>
    </div>
  );
}
