import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, ArrowLeft, Mail, ExternalLink } from "lucide-react";

type Page = "home" | "projects" | "project-detail" | "artwork" | "about" | "contact";

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "artwork", label: "Artwork" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

const PROJECTS = [
  {
    id: "paths-we-kept",
    title: "The Paths We Kept",
    genre: "Adventure · Narrative",
    status: "In Progress",
    category: "Games",
    year: "2024",
    description:
      "Follow Aria through fog-draped forests and abandoned farmsteads, uncovering letters and lost moments in a story about memory, home, and the trails we leave behind.",
    image:
      "https://images.unsplash.com/photo-1544039161-b0c20826c6f6?w=800&h=540&fit=crop&auto=format",
    cover:
      "https://images.unsplash.com/photo-1544039161-b0c20826c6f6?w=1920&h=900&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1505635725851-c2cfe9e29112?w=520&h=360&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1579551049826-7c13b6bc241c?w=520&h=360&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1598454981031-9c59c2d1a5c7?w=520&h=360&fit=crop&auto=format",
    ],
  },
  {
    id: "her-hands-remember",
    title: "Her Hands Remember",
    genre: "Interactive Experience",
    status: "Completed",
    category: "Interactive Experiences",
    year: "2023",
    description:
      "An intimate exploration of grief and craft, told through the hands of an aging weaver and the patterns she leaves behind.",
    image:
      "https://images.unsplash.com/photo-1748199810583-766ad2bf158f?w=800&h=540&fit=crop&auto=format",
    cover:
      "https://images.unsplash.com/photo-1748199810583-766ad2bf158f?w=1920&h=900&fit=crop&auto=format",
    gallery: [],
  },
  {
    id: "whisperbound",
    title: "Whisperbound",
    genre: "Puzzle · Atmospheric",
    status: "Prototype",
    category: "Prototypes",
    year: "2024",
    description:
      "Navigate a world where sound is sight. A meditative puzzle game built for quiet evenings and open ears.",
    image:
      "https://images.unsplash.com/photo-1579551049826-7c13b6bc241c?w=800&h=540&fit=crop&auto=format",
    cover:
      "https://images.unsplash.com/photo-1579551049826-7c13b6bc241c?w=1920&h=900&fit=crop&auto=format",
    gallery: [],
  },
  {
    id: "cafe-between-worlds",
    title: "Café Between Worlds",
    genre: "Slice of Life · Simulation",
    status: "Completed",
    category: "Game Jams",
    year: "2023",
    description:
      "A 72-hour game jam entry about a café that exists between dimensions, where every customer brings a different universe with them.",
    image:
      "https://images.unsplash.com/photo-1645677020082-721a854c24f2?w=800&h=540&fit=crop&auto=format",
    cover:
      "https://images.unsplash.com/photo-1645677020082-721a854c24f2?w=1920&h=900&fit=crop&auto=format",
    gallery: [],
  },
];

const PROJECT_CATEGORIES = [
  "All",
  "Games",
  "Prototypes",
  "Game Jams",
  "Interactive Experiences",
];

const ARTWORK = [
  {
    id: 1,
    title: "Autumn Vale",
    category: "Environment",
    date: "October 2024",
    medium: "Digital Painting",
    image:
      "https://images.unsplash.com/photo-1711319551836-f7ca9764a898?w=600&h=420&fit=crop&auto=format",
  },
  {
    id: 2,
    title: "Cliffs at Dusk",
    category: "Environment",
    date: "September 2024",
    medium: "Digital Painting",
    image:
      "https://images.unsplash.com/photo-1748199810583-766ad2bf158f?w=600&h=520&fit=crop&auto=format",
  },
  {
    id: 3,
    title: "The Green Way",
    category: "Illustration",
    date: "August 2024",
    medium: "Mixed Media",
    image:
      "https://images.unsplash.com/photo-1751732347348-815bb8598e44?w=600&h=460&fit=crop&auto=format",
  },
  {
    id: 4,
    title: "Into the Light",
    category: "Sketch",
    date: "July 2024",
    medium: "Charcoal",
    image:
      "https://images.unsplash.com/photo-1741722603951-bd7056ada66b?w=600&h=620&fit=crop&auto=format",
  },
  {
    id: 5,
    title: "Still Waters",
    category: "Photography",
    date: "June 2024",
    medium: "Photography",
    image:
      "https://images.unsplash.com/photo-1602604193553-28c132dac0a7?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: 6,
    title: "Morning Study",
    category: "Environment",
    date: "May 2024",
    medium: "Digital Painting",
    image:
      "https://images.unsplash.com/photo-1505635725851-c2cfe9e29112?w=600&h=450&fit=crop&auto=format",
  },
];

const ARTWORK_CATEGORIES = [
  "All",
  "Environment",
  "Illustration",
  "Sketch",
  "Photography",
];

// ─── Shared primitives ────────────────────────────────────────────────────────

function GrainOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 opacity-[0.04]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "200px 200px",
      }}
    />
  );
}

function Tape({
  className = "",
  rotate = "-1deg",
}: {
  className?: string;
  rotate?: string;
}) {
  return (
    <div
      className={`absolute w-16 h-5 bg-[#f0d896]/65 z-10 ${className}`}
      style={{ transform: `rotate(${rotate})` }}
    />
  );
}

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-handwriting text-accent text-xl mb-3 leading-none">
      {children}
    </p>
  );
}

function FilterBar({
  categories,
  active,
  onChange,
}: {
  categories: string[];
  active: string;
  onChange: (c: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-1.5 text-xs tracking-widest uppercase transition-colors duration-200 ${
            active === cat
              ? "bg-foreground text-background"
              : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

// ─── Navigation ───────────────────────────────────────────────────────────────

function Navigation({
  currentPage,
  onNavigate,
}: {
  currentPage: Page;
  onNavigate: (p: Page) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (p: Page) => {
    onNavigate(p);
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#1c1610]/92 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <button
          onClick={() => go("home")}
          className="font-serif text-sm tracking-[0.2em] text-[#f4ede0] uppercase hover:text-accent transition-colors"
        >
          Avellox Studio
        </button>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id as Page)}
              className={`text-[11px] tracking-widest uppercase transition-colors duration-200 ${
                currentPage === link.id
                  ? "text-accent"
                  : "text-[#f4ede0]/65 hover:text-[#f4ede0]"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-[#f4ede0] p-1"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#1c1610]/96 backdrop-blur-md overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => go(link.id as Page)}
                  className={`text-left text-sm tracking-widest uppercase transition-colors ${
                    currentPage === link.id
                      ? "text-accent"
                      : "text-[#f4ede0]/70 hover:text-[#f4ede0]"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <footer className="bg-[#1c1610] py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="font-serif text-2xl text-[#f4ede0] mb-2">
              Avellox Studio
            </p>
            <p className="font-handwriting text-accent text-lg mb-5">
              Stories. Worlds. Memories.
            </p>
            <p className="text-[#f4ede0]/40 text-sm leading-relaxed max-w-xs">
              An indie game development and digital art studio crafting interactive experiences.
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-widest uppercase text-[#f4ede0]/40 mb-4">
              Navigate
            </p>
            <div className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id as Page)}
                  className="block text-sm text-[#f4ede0]/55 hover:text-accent transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] tracking-widest uppercase text-[#f4ede0]/40 mb-4">
              Find Us
            </p>
            <div className="space-y-2.5 text-sm text-[#f4ede0]/55">
              <p>hello@avellox.studio</p>
              <p>@avellox on Itch.io</p>
              <p>@avelloxstudio on Instagram</p>
            </div>
          </div>
        </div>
        <div className="border-t border-[#f4ede0]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#f4ede0]/25 text-xs">
            © 2024 Avellox Studio. All rights reserved.
          </p>
          <p className="font-handwriting text-accent/50 text-base">
            crafted with care ✦
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────

function HomePage({
  onNavigate,
  onSelectProject,
}: {
  onNavigate: (p: Page) => void;
  onSelectProject: (id: string) => void;
}) {
  return (
    <PageShell>
      <HeroSection onNavigate={onNavigate} />
      <FeaturedProjectSection onSelectProject={onSelectProject} />
      <PhilosophySection />
      <ArtworkPreviewSection onNavigate={onNavigate} />
      <ContactCTASection onNavigate={onNavigate} />
    </PageShell>
  );
}

function HeroSection({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-end pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1651739083989-b470abadb966?w=1920&h=1080&fit=crop&auto=format"
          alt="Warm artist workspace with lamp and objects on a desk near a window"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1610] via-[#1c1610]/45 to-[#1c1610]/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c1610]/55 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="font-handwriting text-accent text-2xl mb-5 block">
            crafting stories since 2021
          </p>
          <h1 className="font-serif font-bold text-[#f4ede0] leading-[0.9] mb-8 text-[clamp(3.5rem,10vw,7rem)]">
            Avellox
            <br />
            <em className="not-italic font-normal italic">Studio</em>
          </h1>
          <p className="text-[#f4ede0]/65 text-lg md:text-xl max-w-md mb-10 leading-relaxed font-light">
            Crafting interactive worlds and visual stories, where games become
            memories and art becomes emotion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onNavigate("projects")}
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-3.5 text-xs tracking-widest uppercase hover:bg-[#4a7050] transition-colors duration-300 group"
            >
              View Projects
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>
            <button
              onClick={() => onNavigate("artwork")}
              className="inline-flex items-center gap-3 border border-[#f4ede0]/35 text-[#f4ede0] px-8 py-3.5 text-xs tracking-widest uppercase hover:border-accent hover:text-accent transition-colors duration-300"
            >
              Explore Artwork
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#f4ede0]/35">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-9 bg-gradient-to-b from-[#f4ede0]/30 to-transparent"
        />
      </div>
    </section>
  );
}

function FeaturedProjectSection({
  onSelectProject,
}: {
  onSelectProject: (id: string) => void;
}) {
  const project = PROJECTS[0];
  return (
    <section className="bg-background py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-20">
          <SectionLabel>currently featured</SectionLabel>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <Tape className="-top-3 left-10" rotate="-2deg" />
            <Tape className="-top-3 right-14" rotate="1.5deg" />
            <div className="overflow-hidden shadow-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
          </div>

          <div>
            <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-3">
              {project.category} · {project.year}
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-3 leading-tight">
              {project.title}
            </h2>
            <p className="font-handwriting text-accent text-xl mb-6">
              {project.genre}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-[0.95rem]">
              {project.description}
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <span
                className={`text-[10px] tracking-wider uppercase px-3 py-1.5 inline-flex items-center gap-2 ${
                  project.status === "Completed"
                    ? "bg-primary/10 text-primary"
                    : "bg-accent/15 text-[#8b7355]"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    project.status === "In Progress"
                      ? "bg-accent animate-pulse"
                      : "bg-primary"
                  }`}
                />
                {project.status}
              </span>
              <button
                onClick={() => onSelectProject(project.id)}
                className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors group"
              >
                Open Journal
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  const values = [
    {
      title: "Emotional Authenticity",
      desc: "Every game we make is built around a feeling. We start with an emotion and work backwards to the mechanics.",
    },
    {
      title: "Environmental Storytelling",
      desc: "The world speaks before the characters do. Spaces hold memory, meaning, and narrative without a single word.",
    },
    {
      title: "Handcrafted Detail",
      desc: "We believe in the beauty of imperfection. Every texture, sound, and line of dialogue is placed with intention.",
    },
  ];

  return (
    <section className="bg-[#1c1610] py-28 px-6 lg:px-12 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-80 h-80 opacity-[0.06] pointer-events-none"
        aria-hidden
      >
        <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M120 20 C75 55 30 100 42 148 C54 196 96 216 120 228 C144 216 186 196 198 148 C210 100 165 55 120 20Z"
            stroke="#f4ede0"
            strokeWidth="1"
            fill="none"
          />
          <path d="M120 20 C120 100 95 180 120 228" stroke="#f4ede0" strokeWidth="0.5" />
          <path d="M68 72 C94 84 120 90 120 108" stroke="#f4ede0" strokeWidth="0.5" />
          <path d="M172 72 C146 84 120 90 120 108" stroke="#f4ede0" strokeWidth="0.5" />
          <path d="M55 128 C80 122 120 128 120 146" stroke="#f4ede0" strokeWidth="0.5" />
          <path d="M185 128 C160 122 120 128 120 146" stroke="#f4ede0" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <SectionLabel>what we believe</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl text-[#f4ede0] font-bold">
            Studio Philosophy
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {values.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="text-accent text-2xl mb-6">✦</div>
              <h3 className="font-serif text-xl text-[#f4ede0] mb-4 font-medium">
                {val.title}
              </h3>
              <p className="text-[#f4ede0]/45 leading-relaxed text-sm">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArtworkPreviewSection({
  onNavigate,
}: {
  onNavigate: (p: Page) => void;
}) {
  const preview = ARTWORK.slice(0, 4);
  return (
    <section className="bg-background py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <SectionLabel>from the studio</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">
              Latest Artwork
            </h2>
          </div>
          <button
            onClick={() => onNavigate("artwork")}
            className="hidden md:inline-flex items-center gap-2 text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors group"
          >
            View All
            <ArrowRight
              size={13}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {preview.map((piece, i) => (
            <motion.div
              key={piece.id}
              className="relative group cursor-pointer overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <img
                src={piece.image}
                alt={piece.title}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-[#1c1610]/0 group-hover:bg-[#1c1610]/55 transition-colors duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
                <div>
                  <p className="font-handwriting text-accent text-sm leading-none mb-0.5">
                    {piece.category}
                  </p>
                  <p className="font-serif text-[#f4ede0] text-sm font-medium">
                    {piece.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden mt-8 text-center">
          <button
            onClick={() => onNavigate("artwork")}
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-muted-foreground"
          >
            View All Artwork <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </section>
  );
}

function ContactCTASection({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <section className="bg-[#f0e8d6] py-28 px-6 lg:px-12 text-center">
      <div className="max-w-2xl mx-auto">
        <p className="font-handwriting text-[#8b7355] text-2xl mb-4">
          let's make something together
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Have a story
          <br />
          worth telling?
        </h2>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          Whether you want to collaborate, commission artwork, or simply share
          something that moved you — we would love to hear from you.
        </p>
        <button
          onClick={() => onNavigate("contact")}
          className="inline-flex items-center gap-3 bg-[#1c1610] text-[#f4ede0] px-10 py-4 text-xs tracking-widest uppercase hover:bg-primary transition-colors duration-300 group"
        >
          Write to Us
          <Mail
            size={14}
            className="transition-transform group-hover:scale-110"
          />
        </button>
      </div>
    </section>
  );
}

// ─── Projects Page ────────────────────────────────────────────────────────────

function ProjectsPage({
  onSelectProject,
}: {
  onSelectProject: (id: string) => void;
}) {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <PageShell>
      <div className="pt-24 pb-28 px-6 lg:px-12 min-h-screen bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 pt-8">
            <SectionLabel>games, prototypes and interactive experiences</SectionLabel>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-10">
              Projects
            </h1>
            <FilterBar
              categories={PROJECT_CATEGORIES}
              active={filter}
              onChange={setFilter}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-x-14 gap-y-18"
            >
              {filtered.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  onSelect={onSelectProject}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </PageShell>
  );
}

function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
  onSelect: (id: string) => void;
}) {
  return (
    <motion.article
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => onSelect(project.id)}
    >
      <div className="relative mb-6">
        <Tape className="-top-3 left-8" rotate="-2deg" />
        <Tape
          className="-top-3 right-12"
          rotate="1.8deg"
        />
        <div className="overflow-hidden shadow-md">
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-[#1c1610]/0 group-hover:bg-[#1c1610]/18 transition-colors duration-500" />
        </div>
      </div>

      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-1">
            {project.category} · {project.year}
          </p>
          <h3 className="font-serif text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="font-handwriting text-accent text-lg mt-0.5">
            {project.genre}
          </p>
        </div>
        <span
          className={`shrink-0 text-[10px] tracking-wider uppercase px-2 py-1 mt-1 ${
            project.status === "Completed"
              ? "bg-primary/10 text-primary"
              : project.status === "In Progress"
              ? "bg-accent/15 text-[#8b7355]"
              : "bg-muted text-muted-foreground"
          }`}
        >
          {project.status}
        </span>
      </div>
      <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
        {project.description}
      </p>
    </motion.article>
  );
}

// ─── Project Detail Page ──────────────────────────────────────────────────────

function ProjectDetailPage({
  projectId,
  onBack,
}: {
  projectId: string;
  onBack: () => void;
}) {
  const project = PROJECTS.find((p) => p.id === projectId) ?? PROJECTS[0];

  const timeline = [
    {
      date: "Jan 2024",
      phase: "Concept",
      note: "First sketches in a notebook. Fog, memory, a house with no lights on.",
    },
    {
      date: "Mar 2024",
      phase: "Research",
      note: "Exploring grief cartography, forest folklore, and environmental narrative design.",
    },
    {
      date: "May 2024",
      phase: "Prototype",
      note: "First playable loop — walking, discovering, feeling that uncanny quiet.",
    },
    {
      date: "Sep 2024",
      phase: "Production",
      note: "Full environment pipeline established. Character arc finalized.",
    },
    {
      date: "Dec 2024",
      phase: "Alpha",
      note: "Internal playtesting begins. Emotion checks and pacing review.",
    },
  ];

  const tech = ["Unity 2022", "Blender 4", "Photoshop", "Figma", "Wwise", "GitHub"];

  const galleryImages =
    project.gallery.length > 0
      ? project.gallery
      : [
          "https://images.unsplash.com/photo-1505635725851-c2cfe9e29112?w=520&h=360&fit=crop&auto=format",
          "https://images.unsplash.com/photo-1579551049826-7c13b6bc241c?w=520&h=360&fit=crop&auto=format",
          "https://images.unsplash.com/photo-1598454981031-9c59c2d1a5c7?w=520&h=360&fit=crop&auto=format",
        ];

  return (
    <PageShell>
      <div className="fixed top-20 left-6 lg:left-12 z-30">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase text-[#f4ede0]/65 hover:text-accent transition-colors bg-[#1c1610]/40 backdrop-blur-sm px-3 py-2"
        >
          <ArrowLeft size={13} />
          Back
        </button>
      </div>

      {/* Cinematic hero */}
      <section className="relative h-[72vh] min-h-[480px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.cover}
            alt={`${project.title} cinematic cover`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1610] via-[#1c1610]/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1610]/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <p className="font-handwriting text-accent text-2xl mb-3">
            {project.genre}
          </p>
          <h1 className="font-serif font-bold text-[#f4ede0] leading-none mb-5 text-[clamp(2.5rem,7vw,5rem)]">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-3 text-[10px] tracking-widest uppercase text-[#f4ede0]/55">
            <span>{project.category}</span>
            <span>·</span>
            <span>{project.year}</span>
            <span>·</span>
            <span className="text-accent">{project.status}</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-20">

          {/* About */}
          <section className="mb-24">
            <SectionLabel>about the project</SectionLabel>
            <p className="font-serif text-2xl md:text-3xl leading-relaxed mb-8 text-foreground/85">
              A story about memory, home, and the trails we leave behind.
            </p>
            <p className="text-muted-foreground leading-loose mb-5">
              {project.description} The player inhabits Aria, a woman returning
              to her childhood home after years of absence. What begins as a
              practical journey becomes an archaeological dig through memory,
              regret, and belonging.
            </p>
            <p className="text-muted-foreground leading-loose">
              Inspired by the quiet beauty of{" "}
              <em>What Remains of Edith Finch</em> and the visual poetry of{" "}
              <em>Firewatch</em>, The Paths We Kept is a walking narrative
              where every environment is a sentence and every object is a word.
            </p>
          </section>

          {/* Gallery */}
          <section className="mb-24">
            <SectionLabel>gallery</SectionLabel>
            <div className="grid grid-cols-3 gap-4">
              {galleryImages.map((img, i) => (
                <div key={i} className="relative group">
                  <Tape
                    className={`-top-2 ${
                      i === 1
                        ? "left-1/2 -translate-x-1/2"
                        : i === 0
                        ? "left-4"
                        : "right-4"
                    }`}
                    rotate={i % 2 === 0 ? "-1.5deg" : "1.5deg"}
                  />
                  <img
                    src={img}
                    alt={`Gallery image ${i + 1}`}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-[1.03] shadow-sm"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-24">
            <SectionLabel>development journey</SectionLabel>
            <div className="relative pl-6 border-l border-border space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full border-2 border-accent bg-background" />
                  <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-1">
                    {item.date}
                  </p>
                  <h4 className="font-serif text-lg font-bold mb-1">
                    {item.phase}
                  </h4>
                  <p className="font-handwriting text-muted-foreground text-base leading-snug">
                    {item.note}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Technology */}
          <section className="mb-24">
            <SectionLabel>technology used</SectionLabel>
            <div className="flex flex-wrap gap-3">
              {tech.map((t) => (
                <span
                  key={t}
                  className="border border-border px-4 py-2 text-sm text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>

          {/* Reflection */}
          <section className="bg-[#f0e8d6] p-8 md:p-10 border-l-2 border-accent">
            <SectionLabel>a personal note</SectionLabel>
            <blockquote className="font-serif text-xl italic leading-relaxed text-foreground/75 mb-5">
              "This game started with a single memory — the smell of an old
              house, the feeling of finding something you'd forgotten you lost.
              I hope players carry that feeling with them."
            </blockquote>
            <p className="text-sm text-muted-foreground">
              — Avellox Studio, 2024
            </p>
          </section>
        </div>
      </div>
    </PageShell>
  );
}

// ─── Artwork Page ─────────────────────────────────────────────────────────────

function ArtworkPage() {
  const [filter, setFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const filtered =
    filter === "All" ? ARTWORK : ARTWORK.filter((a) => a.category === filter);

  return (
    <PageShell>
      <div className="pt-24 pb-28 px-6 lg:px-12 min-h-screen bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 pt-8">
            <SectionLabel>
              digital art, illustrations and visual experiments
            </SectionLabel>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-10">
              Artwork
            </h1>
            <FilterBar
              categories={ARTWORK_CATEGORIES}
              active={filter}
              onChange={setFilter}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="columns-2 md:columns-3 gap-5"
            >
              {filtered.map((piece, i) => (
                <motion.div
                  key={piece.id}
                  className="relative group break-inside-avoid mb-5 overflow-hidden cursor-pointer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  onMouseEnter={() => setHoveredId(piece.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <img
                    src={piece.image}
                    alt={piece.title}
                    className="w-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-[#1c1610]/70 flex flex-col justify-end p-5 transition-opacity duration-300 ${
                      hoveredId === piece.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <p className="font-handwriting text-accent text-base leading-none mb-1">
                      {piece.category}
                    </p>
                    <p className="font-serif text-[#f4ede0] font-bold leading-snug">
                      {piece.title}
                    </p>
                    <p className="text-[#f4ede0]/55 text-xs mt-1">
                      {piece.medium} · {piece.date}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </PageShell>
  );
}

// ─── About Page ───────────────────────────────────────────────────────────────

function AboutPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const values = [
    {
      title: "Story-Driven",
      desc: "Every design decision begins with a question: what does this make you feel?",
    },
    {
      title: "Handcrafted",
      desc: "We approach each project as a craftsperson, not a manufacturer.",
    },
    {
      title: "Meaningful",
      desc: "Games that leave a mark. Art that asks something of you.",
    },
    {
      title: "Details Matter",
      desc: "It's the corner of a room, the creak of a floorboard, the handwritten note.",
    },
  ];

  return (
    <PageShell>
      <div className="min-h-screen bg-background">
        {/* Image hero */}
        <div className="relative h-[52vh] min-h-[360px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1655175468016-a38acfa1277b?w=1920&h=800&fit=crop&auto=format"
            alt="Studio workspace with books, lamp, and warm light"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-[#1c1610]/10 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-12 pb-24 -mt-8 relative">
          <SectionLabel>a studio built by dreams</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-12">
            About Avellox Studio
          </h1>

          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <div>
              <p className="text-muted-foreground leading-loose mb-6">
                Avellox Studio is a one-person indie game development and
                digital art studio dedicated to crafting experiences that feel
                handmade, emotionally honest, and quietly unforgettable.
              </p>
              <p className="text-muted-foreground leading-loose">
                Inspired by the narrative poetry of <em>Life is Strange</em>,
                the visual language of <em>Firewatch</em>, and the
                contemplative atmosphere of{" "}
                <em>Season: A Letter to the Future</em>, every project begins
                with a feeling and ends with an experience.
              </p>
            </div>
            <div>
              <p className="text-muted-foreground leading-loose mb-6">
                Every project is a chance to explore what games can be beyond
                entertainment — vehicles for memory, empathy, and quiet
                revelation.
              </p>
              <p className="text-muted-foreground leading-loose">
                We care deeply about environmental storytelling, meaningful
                player agency, and the emotional texture of spaces. A hallway
                can hold as much story as a cutscene, if you let it.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-24">
            <SectionLabel>what we stand for</SectionLabel>
            <div className="grid sm:grid-cols-2 gap-10">
              {values.map((val, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="flex gap-5"
                >
                  <span className="text-accent text-sm mt-1 shrink-0">◇</span>
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-2">
                      {val.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="text-center py-14 border-y border-border">
            <blockquote className="font-serif text-2xl md:text-3xl italic leading-relaxed text-foreground/75 mb-6 max-w-2xl mx-auto">
              "We make games the way other people write letters — to be read
              slowly, felt deeply, and remembered long after the page is put
              down."
            </blockquote>
            <p className="font-handwriting text-accent text-lg">
              — Avellox Studio
            </p>
          </div>

          <div className="text-center mt-14">
            <button
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center gap-3 border border-foreground/25 text-foreground px-8 py-3.5 text-xs tracking-widest uppercase hover:border-accent hover:text-accent transition-colors"
            >
              Get in Touch
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

// ─── Contact Page ─────────────────────────────────────────────────────────────

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <PageShell>
      <div className="pt-24 pb-28 min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start pt-8">
            {/* Left column */}
            <div>
              <SectionLabel>write to us</SectionLabel>
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Let's create
                <br />
                <em>something</em>
                <br />
                beautiful.
              </h1>
              <p className="text-muted-foreground leading-loose mb-10 max-w-sm">
                Whether you have a project in mind, a question about our work,
                or you simply want to say hello — think of this as writing a
                letter rather than filling out a form.
              </p>

              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Mail size={14} className="text-accent shrink-0" />
                  <span>hello@avellox.studio</span>
                </div>
                <div className="flex items-center gap-3">
                  <ExternalLink size={14} className="text-accent shrink-0" />
                  <span>@avellox on Itch.io</span>
                </div>
              </div>

              {/* Botanical decoration */}
              <div className="mt-16 opacity-[0.18]" aria-hidden>
                <svg
                  width="110"
                  height="160"
                  viewBox="0 0 110 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M55 150 Q55 95 55 10" stroke="#3b5c3e" strokeWidth="1.5" />
                  <path d="M55 78 Q28 58 18 38" stroke="#3b5c3e" strokeWidth="1" />
                  <path d="M55 78 Q82 58 92 38" stroke="#3b5c3e" strokeWidth="1" />
                  <path d="M55 102 Q32 88 22 72" stroke="#3b5c3e" strokeWidth="1" />
                  <path d="M55 102 Q78 88 88 72" stroke="#3b5c3e" strokeWidth="1" />
                  <ellipse cx="18" cy="34" rx="11" ry="7" fill="#3b5c3e" opacity="0.5" transform="rotate(-28 18 34)" />
                  <ellipse cx="92" cy="34" rx="11" ry="7" fill="#3b5c3e" opacity="0.5" transform="rotate(28 92 34)" />
                  <ellipse cx="22" cy="68" rx="9" ry="6" fill="#3b5c3e" opacity="0.4" transform="rotate(-18 22 68)" />
                  <ellipse cx="88" cy="68" rx="9" ry="6" fill="#3b5c3e" opacity="0.4" transform="rotate(18 88 68)" />
                </svg>
              </div>
            </div>

            {/* Right: paper form */}
            <div>
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#f0e8d6] p-14 text-center shadow-md"
                >
                  <p className="text-5xl mb-6">✉</p>
                  <p className="font-handwriting text-accent text-2xl mb-3">
                    message sent
                  </p>
                  <p className="font-serif text-2xl font-bold mb-4">
                    Thank you for reaching out.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We'll be in touch soon. In the meantime, feel free to
                    explore the rest of the studio.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-[#f0e8d6] p-8 md:p-12 shadow-md relative"
                >
                  {/* Corner fold */}
                  <div
                    className="absolute top-0 right-0 w-8 h-8 bg-[#e5d9c8] border-l border-b border-[#d4c8b4]"
                    style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                  />

                  <p className="font-handwriting text-[#8b7355] text-2xl mb-10">
                    Dear Avellox Studio,
                  </p>

                  <div className="space-y-8">
                    <div>
                      <label className="block text-[10px] tracking-widest uppercase text-muted-foreground mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        required
                        className="w-full bg-transparent border-b border-[#c9b89a] pb-2 text-foreground placeholder-muted-foreground/45 focus:outline-none focus:border-primary transition-colors"
                        placeholder="My name is..."
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-widest uppercase text-muted-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        required
                        className="w-full bg-transparent border-b border-[#c9b89a] pb-2 text-foreground placeholder-muted-foreground/45 focus:outline-none focus:border-primary transition-colors"
                        placeholder="you can reach me at..."
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-widest uppercase text-muted-foreground mb-2">
                        Your Message
                      </label>
                      <textarea
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        required
                        className="w-full bg-transparent border-b border-[#c9b89a] pb-2 text-foreground placeholder-muted-foreground/45 focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="I wanted to reach out because..."
                      />
                    </div>
                  </div>

                  <div className="mt-10 flex items-center justify-between">
                    <p className="font-handwriting text-[#8b7355] text-xl">
                      Warmly,
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 bg-[#1c1610] text-[#f4ede0] px-8 py-3.5 text-xs tracking-widest uppercase hover:bg-primary transition-colors duration-300 group"
                    >
                      Send Letter
                      <Mail
                        size={13}
                        className="transition-transform group-hover:scale-110"
                      />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectProject = (id: string) => {
    setSelectedProject(id);
    setCurrentPage("project-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <GrainOverlay />
      <Navigation currentPage={currentPage} onNavigate={navigate} />

      <AnimatePresence mode="wait">
        <div key={currentPage}>
          {currentPage === "home" && (
            <HomePage onNavigate={navigate} onSelectProject={selectProject} />
          )}
          {currentPage === "projects" && (
            <ProjectsPage onSelectProject={selectProject} />
          )}
          {currentPage === "project-detail" && selectedProject && (
            <ProjectDetailPage
              projectId={selectedProject}
              onBack={() => navigate("projects")}
            />
          )}
          {currentPage === "artwork" && <ArtworkPage />}
          {currentPage === "about" && <AboutPage onNavigate={navigate} />}
          {currentPage === "contact" && <ContactPage />}
        </div>
      </AnimatePresence>

      <Footer onNavigate={navigate} />
    </div>
  );
}
