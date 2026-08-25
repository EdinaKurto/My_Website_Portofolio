import {
  Camera,
  Coffee,
  Gamepad2,
  Heart,
  Image,
  MapPin,
  PawPrint,
  Pencil,
} from "lucide-react";
import { BotanicalSprig, PaperNote } from "../components/Decor";
import { me, artworks } from "../data/siteData";

const details = [
  {
    icon: Gamepad2,
    title: "Narrative games",
    text: "I will inspect every room before continuing the story.",
  },
  {
    icon: Camera,
    title: "Photography",
    text: "I collect ordinary places that suddenly feel cinematic.",
  },
  {
    icon: Pencil,
    title: "Art",
    text: "A suspicious amount of projects begin as one tiny sketch.",
  },
  {
    icon: MapPin,
    title: "Sarajevo",
    text: "Mountains somehow find their way into almost everything I make.",
  },
  {
    icon: PawPrint,
    title: "Kenai",
    text: "My creative supervisor, whether invited or not.",
  },
  {
    icon: Coffee,
    title: "Coffee",
    text: "Responsible for a very respectable percentage of this portfolio.",
  },
];

const values = [
  ["Story First", "Mechanics should support the experience, not compete with it."],
  ["Meaningful Details", "Small environmental details can say more than a paragraph of exposition."],
  ["Handmade", "Games should still feel like people made them."],
  ["Places Matter", "Environments carry memory, culture and emotion."],
];

export function About() {
  return (
    <div className="inner-page about-page">
      <section className="about-hero">
        <div className="container about-hero__grid">
          <div className="about-hero__copy">
            <p className="handwritten section-hand">about</p>
            <h1>Hi, I&apos;m Edina.</h1>
            <p className="handwritten about-tagline">
              I build worlds I wish I could step into.
            </p>
            <p>
              I&apos;m a game developer and digital artist based in Sarajevo,
              Bosnia and Herzegovina. I love creating narrative experiences where
              environments, objects and small details quietly tell part of the story.
            </p>
            <p>
              My work sits somewhere between game development, visual storytelling,
              environment design and interactive narrative.
            </p>
          </div>

          <div className="about-hero__visual">
            <div className="about-photo">
              <img src={me} alt="Edina" />
            </div>

            <div className="about-reference-photo">
              <img src={artworks[2].image} alt="Environment artwork" />
            </div>

            <PaperNote className="about-quote">
              I care about the parts of a game that make a place feel remembered.
            </PaperNote>
          </div>
        </div>
      </section>

      <section className="paper-section about-details">
        <div className="container">
          <header className="section-heading">
            <p className="handwritten section-hand">a few things that make me, me</p>
            <h2>Outside the project file.</h2>
          </header>

          <div className="personal-grid">
            {details.map(({ icon: Icon, title, text }) => (
              <article className="personal-card" key={title}>
                <Icon size={24} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values">
        <BotanicalSprig className="values-sprig" />
        <div className="container">
          <p className="handwritten section-hand section-hand--light">what I keep coming back to</p>
          <h2>Four little rules.</h2>

          <div className="values-grid">
            {values.map(([title, text]) => (
              <article key={title}>
                <Heart size={20} strokeWidth={1.4} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
