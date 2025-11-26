import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../components/CustomButton';
import { FeaturedWorkCard } from '../components/FeaturedWorkCard';
import { CreativeIdentityBox } from '../components/CreativeIdentityBox';
import { ToolBadge } from '../components/ToolBadge';
import { ArtworkCard } from '../components/ArtworkCard';
import { MicroProjectCard } from '../components/MicroProjectCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { 
  ArrowRight, 
  Sparkles, 
  Gamepad2, 
  Palette, 
  Puzzle, 
  Pen,
  Monitor,
  Wand2,
  Layers,
  Lightbulb,
  Zap,
  Box
} from 'lucide-react';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* Hero Section - Dark Background */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden film-grain bg-gradient-to-br from-[#0D1018] via-[#1a1d29] to-[#0D1018]">
        {/* Radial Gradient Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-radial-warm opacity-60"></div>

        {/* Animated Circles */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-[#C5A9FF]/20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full border border-[#FFC7A8]/10 animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#C5A9FF] rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-[#FFC7A8] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-[#3A6FF7] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-[#C5A9FF] rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Tagline Strip */}
          <div className="mb-8 text-[#C5A9FF]/80 text-sm tracking-wider">Game Development • Interactive Art • Visual Storytelling • UX/UI Experiments</div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C5A9FF]/10 border border-[#C5A9FF]/30 rounded-full mb-8 glow-warm">
            <Sparkles className="text-[#C5A9FF]" size={16} />
            <span className="text-white/90 text-sm">Indie Game Developer</span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl text-white mb-6 tracking-tight"> Avellox </h1>

          {/* Subheading */}
          <p className="text-2xl md:text-3xl text-white/80 mb-12 max-w-3xl mx-auto">Crafting Interactive Worlds & Visual Stories</p>

          {/* Description */}
          <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
           I create character-driven stories, cozy games, and entertaining digital art. 
          Creating unique experiences that combine heart and imagination.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CustomButton
              variant="primary"
              onClick={() => navigate('/projects')}
              className="group flex items-center gap-2">View Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </CustomButton>
            <CustomButton
              variant="secondary"
              onClick={() => navigate('/contact')}>Get in Touch
            </CustomButton>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white/40 text-sm">Scroll to explore</span>
            <div className="w-0.5 h-12 bg-gradient-to-b from-[#C5A9FF] to-transparent"></div>
          </div>
        </div>

        {/* Edge Glow Effects */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A9FF]/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFC7A8]/50 to-transparent"></div>
      </div>

      {/* Featured Work Section - White Background */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#C5A9FF]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#3A6FF7]/5 to-transparent rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3A6FF7]/10 border border-[#3A6FF7]/20 rounded-full mb-6">
              <Sparkles className="text-[#3A6FF7]" size={16} />
              <span className="text-[#0D1018]/80 text-sm">Featured Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-[#0D1018] mb-4">
              Latest Creations
            </h2>
            <p className="text-lg text-[#0D1018]/60 max-w-2xl mx-auto">
              A glimpse into recent projects that blend storytelling, design, and interaction
            </p>
          </div>

          {/* Featured Work Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeaturedWorkCard
              title="Her Hands Remember"
              subtitle="Narrative Unity Game"
              imageUrl="https://images.unsplash.com/photo-1622617760286-e11b543f5ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXJyYXRpdmUlMjBnYW1lJTIwcHV6emxlfGVufDF8fHx8MTc2NDE0OTQxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              description="A cozy puzzle game exploring memory, nostalgia, and family through tactile interactions"
            />
            <FeaturedWorkCard
              title="Puzzle Mechanics"
              subtitle="Interactive Design"
              imageUrl="https://images.unsplash.com/photo-1758598738339-6b1602317e52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              description="Creative gameplay prototypes featuring jars, textiles, and cultural storytelling"
            />
            <FeaturedWorkCard
              title="Digital Artwork"
              subtitle="Visual Experiments"
              imageUrl="https://images.unsplash.com/photo-1744686909443-eb72a54de998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwcGFpbnRpbmd8ZW58MXx8fHwxNzY0MTQ5NDE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              description="Mixed media collages and paintings inspired by emotion, culture, and memory"
            />
          </div>
        </div>
      </section>

      {/* Creative Identity Section - White Background */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C5A9FF]/10 border border-[#C5A9FF]/20 rounded-full mb-6">
                <Wand2 className="text-[#C5A9FF]" size={16} />
                <span className="text-[#0D1018]/80 text-sm">What I Do</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl text-[#0D1018] mb-6">
                Multi-Disciplinary Creative
              </h2>
              
              <p className="text-lg text-[#0D1018]/70 leading-relaxed mb-6">
                I blend game development, narrative design, and visual art to create 
                experiences that feel personal, warm, and meaningful. Every project is 
                an opportunity to explore new ideas and tell stories that resonate.
              </p>
              
              <p className="text-[#0D1018]/60 leading-relaxed">
                Whether it's building interactive worlds in Unity, designing playful UI systems, 
                or creating digital artwork inspired by memory and culture — I approach each 
                project with curiosity, care, and a touch of magic. ✨
              </p>
            </div>

            {/* Right - Identity Boxes Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <CreativeIdentityBox icon={Gamepad2} label="Game Dev" delay={0} />
              <CreativeIdentityBox icon={Pen} label="Narrative Design" delay={100} />
              <CreativeIdentityBox icon={Puzzle} label="Puzzle Design" delay={200} />
              <CreativeIdentityBox icon={Palette} label="Digital Art" delay={300} />
              <CreativeIdentityBox icon={Monitor} label="UX/UI Design" delay={400} />
              <CreativeIdentityBox icon={Wand2} label="Experiments" delay={500} />
            </div>
          </div>
        </div>
      </section>

      {/* Creative Tools Section - White Background */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl text-[#0D1018] mb-8">
            My Creative Toolkit
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <ToolBadge name="Unity" delay={0} />
            <ToolBadge name="Unreal Engine" delay={0} />
            <ToolBadge name="C#" delay={50} />
            <ToolBadge name="Figma" delay={100} />
            <ToolBadge name="Photoshop" delay={150} />
            <ToolBadge name="Blender" delay={200} />
            <ToolBadge name="Illustrator" delay={250} />
            <ToolBadge name="Ren'Py" delay={300} />
            <ToolBadge name="Git" delay={350} />
          </div>
        </div>
      </section>

      {/* Behind the Studio Section - White Background */}
      <section className="py-24 px-6 bg-[#f8f9fa] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#FFC7A8]/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1605191353027-d21e534a419a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwaW50ZXJpb3IlMjBob21lfGVufDF8fHx8MTc2NDExNTY3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Cozy studio inspiration"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1632342327403-6f150264009c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBuYXR1cmUlMjBhdG1vc3BoZXJpY3xlbnwxfHx8fDE3NjQxNDk0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Caedwig forest reference"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1742440710226-450e3b85c100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMHN0dWRpb3xlbnwxfHx8fDE3NjQxMjcwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Creative workspace"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFC7A8]/20 border border-[#FFC7A8]/30 rounded-full mb-6">
                <Sparkles className="text-[#FFC7A8]" size={16} />
                <span className="text-[#0D1018]/80 text-sm">About Me</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl text-[#0D1018] mb-6">
                Behind the Developer
              </h2>
              
              <p className="text-lg text-[#0D1018]/70 leading-relaxed mb-6">
                Avellox Studio is my little corner of the universe where games, art, and 
                cozy stories collide. I build interactive worlds inspired by nostalgia, 
                culture, and emotion.
              </p>
              
              <p className="text-[#0D1018]/60 leading-relaxed mb-6">
                From my grandmother's house to the misty forests of Caedwig, every piece 
                I create carries a bit of memory, warmth, and wonder. This is where 
                handcrafted experiences come to life. 🌿
              </p>

              <CustomButton
                variant="primary"
                onClick={() => navigate('/about')}
                className="group flex items-center gap-2"
              >
                Learn More About Me
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      {/* Artwork Carousel Section - White Background */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C5A9FF]/10 border border-[#C5A9FF]/20 rounded-full mb-4">
                <Palette className="text-[#C5A9FF]" size={16} />
                <span className="text-[#0D1018]/80 text-sm">Visual Art</span>
              </div>
              <h2 className="text-4xl md:text-5xl text-[#0D1018] mb-2">
                Latest Art & Experiments
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
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </CustomButton>
          </div>

          {/* Artwork Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ArtworkCard
              title="Fragmenti Doma"
              medium="Mixed Media Collage"
              year="2024"
              imageUrl="https://images.unsplash.com/photo-1705254613735-1abb457f8a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydHdvcmslMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjQxNDk0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            />
            <ArtworkCard
              title="Tišina Između Nas"
              medium="Digital Painting"
              year="2024"
              imageUrl="https://images.unsplash.com/photo-1744686909443-eb72a54de998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwcGFpbnRpbmd8ZW58MXx8fHwxNzY0MTQ5NDE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            />
            <ArtworkCard
              title="Caedwig Forest"
              medium="Concept Art"
              year="2025"
              imageUrl="https://images.unsplash.com/photo-1632342327403-6f150264009c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBuYXR1cmUlMjBhdG1vc3BoZXJpY3xlbnwxfHx8fDE3NjQxNDk0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            />
            <ArtworkCard
              title="Memory Fragments"
              medium="Illustration"
              year="2024"
              imageUrl="https://images.unsplash.com/photo-1622617760286-e11b543f5ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXJyYXRpdmUlMjBnYW1lJTIwcHV6emxlfGVufDF8fHx8MTc2NDE0OTQxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            />
          </div>

          {/* Mobile View All Button */}
          <div className="md:hidden text-center mt-8">
            <CustomButton
              variant="secondary"
              onClick={() => navigate('/artwork')}
              className="flex items-center gap-2 group mx-auto"
            >
              View Gallery
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </CustomButton>
          </div>
        </div>
      </section>

      {/* Micro Projects Section - White Background */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3A6FF7]/10 border border-[#3A6FF7]/20 rounded-full mb-6">
              <Lightbulb className="text-[#3A6FF7]" size={16} />
              <span className="text-[#0D1018]/80 text-sm">Experiments & Prototypes</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-[#0D1018] mb-4">
              Micro Projects & Ideas
            </h2>
            <p className="text-lg text-[#0D1018]/60 max-w-2xl mx-auto">
              Small experiments, game jam projects, and playful prototypes exploring new mechanics and ideas
            </p>
          </div>

          {/* Micro Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MicroProjectCard
              icon={Layers}
              title="UI Prototypes"
              description="Exploring cozy, warm interface designs with soft animations"
              color="#3A6FF7"
            />
            <MicroProjectCard
              icon={Box}
              title="VR Experiments"
              description="Testing immersive interactions in virtual spaces"
              color="#C5A9FF"
            />
            <MicroProjectCard
              icon={Zap}
              title="Game Jam Ideas"
              description="48-hour creative challenges and rapid prototyping"
              color="#FFC7A8"
            />
            <MicroProjectCard
              icon={Wand2}
              title="Narrative Mockups"
              description="Story beats, dialogue systems, and branching paths"
              color="#3A6FF7"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section - Gradient */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#0D1018] via-[#1a1d29] to-[#0D1018] relative overflow-hidden film-grain">
        {/* Background effects */}
        <div className="absolute inset-0 gradient-radial-warm opacity-40"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Sparkles className="text-[#C5A9FF] mx-auto mb-6" size={32} />
          
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Let's Make Something Together
          </h2>
          
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Whether you have a project idea, collaboration opportunity, or just want to chat 
            about games and art — I'd love to hear from you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CustomButton
              variant="primary"
              onClick={() => navigate('/contact')}
              className="group flex items-center gap-2"
            >
              Get in Touch
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </CustomButton>
            <CustomButton
              variant="secondary"
              onClick={() => navigate('/projects')}>View All Projects
            </CustomButton>
          </div>
        </div>

        {/* Decorative sparkles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#C5A9FF] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-[#FFC7A8] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </section>
    </div>
  );
}