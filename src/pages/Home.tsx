/// src/pages/Home.tsx
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../components/CustomButton';
import { FeaturedWorkCard } from '../components/FeaturedWorkCard';
import { CreativeIdentityBox } from '../components/CreativeIdentityBox';
import { ToolBadge } from '../components/ToolBadge';
import { ArtworkCard } from '../components/ArtworkCard';
import { MicroProjectCard } from '../components/MicroProjectCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Spline from '@splinetool/react-spline';
import {
  ArrowRight,
  Sparkles,
  Gamepad2,
  Palette,
  Puzzle,
  Pen,
  Monitor,
  Wand2,
} from 'lucide-react';
import { projects } from '../data/projects';
import { artworks } from '../data/artworks';

export function Home() {
  const navigate = useNavigate();

  const featuredConfig = [
    { id: 1, subtitle: 'Narrative Unity Game' },
    { id: 2, subtitle: 'Mobile Match-3 Game' },
    { id: 3, subtitle: 'Cozy Virtual Pet Game' },
  ];

  const featuredProjects = featuredConfig
    .map((cfg) => {
      const project = projects.find((p) => p.id === cfg.id);
      if (!project) return null;
      return {
        ...cfg,
        title: project.title,
        description: project.shortDescription,
        imageUrl: project.coverImage,
      };
    })
    .filter(Boolean) as {
      id: number;
      subtitle: string;
      title: string;
      description: string;
      imageUrl: string;
    }[];

  // Use artwork IDs 1, 2, 3 for the home carousel
  const homeArtworks = artworks.filter((a) => [1, 2, 3].includes(a.id));

  return (
    <div className="relative">
      {/* HERO – Spline background, buttons + scroll pinned near bottom */}
      {/* HERO SECTION */}
<section className="relative min-h-screen w-full overflow-hidden film-grain bg-[#050816] flex flex-col justify-end">

  {/* Spline background */}
  <div className="absolute inset-0 -z-10">
    <Spline scene="https://prod.spline.design/Ai9-rltr9tobPRZj/scene.splinecode" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#050816]/95" />
  </div>

</section>

      {/* Featured Work Section */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#C5A9FF]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#3A6FF7]/5 to-transparent rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3A6FF7]/10 border border-[#3A6FF7]/20 rounded-full mb-6">
              <Sparkles className="text-[#3A6FF7]" size={16} />
              <span className="text-[#0D1018]/80 text-sm">Featured Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-[#0D1018] mb-4">
              Current Chapters &amp; Prototypes
            </h2>
            <p className="text-lg text-[#0D1018]/60 max-w-2xl mx-auto">
              A glimpse into recent projects that blend storytelling, design, and
              interaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer"
                onClick={() => navigate(`/projects/${item.id}`)}
              >
                <FeaturedWorkCard
                  title={item.title}
                  subtitle={item.subtitle}
                  imageUrl={item.imageUrl}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Identity Section */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C5A9FF]/10 border border-[#C5A9FF]/20 rounded-full mb-6">
                <Wand2 className="text-[#C5A9FF]" size={16} />
                <span className="text-[#0D1018]/80 text-sm">What I Do</span>
              </div>
              <h2 className="text-4xl md:text-5xl text-[#0D1018] mb-6">
                Multi-Disciplinary Artist
              </h2>
              <p className="text-lg text-[#0D1018]/70 leading-relaxed mb-6">
                I'm all about blending game creation, storytelling that pulls you in, and
                visuals that feel like art. My goal is to make games that feel more like a
                cherished memory than just a program, where every time you play, it feels
                special and hits home.
              </p>
              <p className="text-[#0D1018]/60 leading-relaxed">
                Whether I'm building worlds in Unity, designing user interfaces that are
                smooth and fun to use, or drawing pictures that bring up feelings of home
                and the past, I approach everything with a real sense of wonder and a
                little bit of enchantment.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <CreativeIdentityBox icon={Gamepad2} label="Game Dev" delay={0} />
              <CreativeIdentityBox icon={Pen} label="Narrative Designer" delay={100} />
              <CreativeIdentityBox icon={Puzzle} label="Puzzle Designer" delay={200} />
              <CreativeIdentityBox icon={Palette} label="Digital Artist" delay={300} />
              <CreativeIdentityBox icon={Monitor} label="UX/UI Designer" delay={400} />
              <CreativeIdentityBox icon={Wand2} label="Video Editor" delay={500} />
            </div>
          </div>
        </div>
      </section>

      {/* Toolkit */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl text-[#0D1018] mb-8">My Creative Toolkit</h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <ToolBadge name="Unity" delay={0} />
            <ToolBadge name="Unreal Engine" delay={0} />
            <ToolBadge name="C#" delay={50} />
            <ToolBadge name="Figma" delay={100} />
            <ToolBadge name="Photoshop" delay={150} />
            <ToolBadge name="Blender" delay={200} />
            <ToolBadge name="Illustrator" delay={250} />
            <ToolBadge name="Ren'Py" delay={300} />
            <ToolBadge name="GitHub" delay={350} />
          </div>
        </div>
      </section>

      {/* Behind the Studio */}
      <section className="py-24 px-6 bg-[#f8f9fa] relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#FFC7A8]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1605191353027-d21e534a419a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Cozy studio inspiration"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1632342327403-6f150264009c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Caedwig forest reference"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1742440710226-450e3b85c100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Creative workspace"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFC7A8]/20 border border-[#FFC7A8]/30 rounded-full mb-6">
                <Sparkles className="text-[#FFC7A8]" size={16} />
                <span className="text-[#0D1018]/80 text-sm">About Me</span>
              </div>

              <h2 className="text-4xl md:text-5xl text-[#0D1018] mb-6">
                Behind the Developer
              </h2>
              <p className="text-lg text-[#0D1018]/70 leading-relaxed mb-6">
                Avellox is more than just a studio; it's where my creative spirit really
                lives. It's a place where the charm of cozy narratives blends seamlessly
                with the structure of game design. I create worlds you can step into,
                worlds that feel familiar, rich with culture, and full of real feelings.
              </p>
              <p className="text-[#0D1018]/60 leading-relaxed mb-6">
                I get my ideas from my own memories, like the peaceful feeling of being at
                home or the mysterious, story-filled atmosphere of places such as Caedwig
                Forest. Everything I make here is crafted with a sense of warmth and a
                touch of magic.
              </p>
              <CustomButton
                variant="primary"
                onClick={() => navigate('/about')}
                className="group flex items-center gap-2"
              >
                Learn More About Me
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      {/* Artwork Carousel */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C5A9FF]/10 border border-[#C5A9FF]/20 rounded-full mb-4">
                <Palette className="text-[#C5A9FF]" size={16} />
                <span className="text-[#0D1018]/80 text-sm">Visual Art</span>
              </div>
              <h2 className="text-4xl md:text-5xl text-[#0D1018] mb-2">
                Latest Art &amp; Experiments
              </h2>
              <p className="text-[#0D1018]/60">
                Mixed media, digital paintings, and visual storytelling
              </p>
            </div>
            <CustomButton
              variant="secondary"
              onClick={() => navigate('/artwork')}
              className="hidden md:flex items-center gap-2 group"
            >
              View Gallery
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </CustomButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {homeArtworks.map((art) => (
              <ArtworkCard
                key={art.id}
                title={art.title}
                medium={art.medium}
                year={art.year}
                imageUrl={art.imageUrl}
              />
            ))}
          </div>
          <div className="md:hidden text-center mt-8">
            <CustomButton
              variant="secondary"
              onClick={() => navigate('/artwork')}
              className="flex items-center gap-2 group mx-auto"
            >
              View Gallery
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </CustomButton>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#0D1018] via-[#1a1d29] to-[#0D1018] relative overflow-hidden film-grain">
        <div className="absolute inset-0 gradient-radial-warm opacity-40" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Sparkles className="text-[#C5A9FF] mx-auto mb-6" size={32} />
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Ready to Build Something Together?
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            If you're seeking a collaborator for a new narrative, game concept, or visual
            design project, let's connect.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CustomButton
              variant="primary"
              onClick={() => navigate('/contact')}
              className="group flex items-center gap-2"
            >
              Get in Touch
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </CustomButton>
            <CustomButton variant="secondary" onClick={() => navigate('/projects')}>
              View All Projects
            </CustomButton>
          </div>
        </div>

        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#C5A9FF] rounded-full animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-[#FFC7A8] rounded-full animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />
      </section>
    </div>
  );
}
