import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowRight, Gamepad2, Sparkles, Palette, Code2, ArrowLeft } from 'lucide-react';
import { CustomButton } from '../components/CustomButton';

export function ProjectSingle() {
  const navigate = useNavigate();

  // Mock project data - in a real app, this would come from route params
  const project = {
    title: 'Her Hands Remember',
    tagline: 'A cozy narrative puzzle built in Unity.',
    category: 'Game',
    coverImage: 'https://images.unsplash.com/photo-1758598738339-6b1602317e52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    
    overview: {
      description: 'Her Hands Remember is an intimate narrative puzzle game about memory, objects, and emotional storytelling. Players explore a character\'s past through tactile interactions with everyday items, uncovering layers of meaning and connection.',
      role: 'Solo Developer & Designer',
      timeline: '2024 - Present',
      tools: ['Unity', 'C#', 'Photoshop', 'Figma', 'Blender'],
    },

    gallery: [
      'https://images.unsplash.com/photo-1666302707255-13651d539be5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1715583622581-3245cefe117d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1760780567530-389d8a3fba75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],

    features: [
      {
        icon: Gamepad2,
        title: 'Tactile Interactions',
        description: 'Every object tells a story through thoughtful touch-based mechanics',
      },
      {
        icon: Sparkles,
        title: 'Emotional Narrative',
        description: 'A branching story that adapts to your choices and discoveries',
      },
      {
        icon: Palette,
        title: 'Handcrafted Environments',
        description: 'Cozy, intimate spaces designed with warmth and attention to detail',
      },
    ],

    process: {
      description: 'The development process has been iterative and experimental. Starting with paper sketches, I explored how to make object interaction feel meaningful. Each prototype taught me something new about pacing, mood, and player agency.',
      images: [
        'https://images.unsplash.com/photo-1661205827673-4330f088f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1610642436394-81749134ffe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      ],
    },
  };

  return (
    <div className="min-h-screen py-24 px-6 film-grain relative">
      {/* Warm background glow */}
      <div className="absolute inset-0 gradient-radial-warm opacity-40"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Back Button */}
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </button>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C5A9FF]/10 border border-[#C5A9FF]/30 rounded-full mb-6">
            <Sparkles className="text-[#C5A9FF]" size={16} />
            <span className="text-white/90 text-sm">{project.category}</span>
          </div>

          <h1 className="text-5xl md:text-6xl text-white mb-4">
            {project.title}
          </h1>
          <p className="text-2xl text-white/70 max-w-3xl">
            {project.tagline}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16">
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#C5A9FF]/30 glow-warm transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <ImageWithFallback
              src={project.coverImage}
              alt={project.title}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 gradient-warm opacity-20"></div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#C5A9FF] rounded-full"></div>
          <div className="absolute -bottom-3 -right-3 w-4 h-4 bg-[#FFC7A8] rounded-full"></div>
        </div>

        {/* Overview Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl text-white mb-8">Overview</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <p className="text-white/80 text-lg leading-relaxed">
                {project.overview.description}
              </p>
            </div>

            <div className="space-y-6">
              <div className="card-warm p-6 border border-[#C5A9FF]/20">
                <h3 className="text-white mb-2">Role</h3>
                <p className="text-white/70">{project.overview.role}</p>
              </div>
              
              <div className="card-warm p-6 border border-[#3A6FF7]/20">
                <h3 className="text-white mb-2">Timeline</h3>
                <p className="text-white/70">{project.overview.timeline}</p>
              </div>

              <div className="card-warm p-6 border border-[#FFC7A8]/20">
                <h3 className="text-white mb-3">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {project.overview.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-[#3A6FF7]/20 to-[#C5A9FF]/20 border border-[#C5A9FF]/30 rounded-full text-white text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl text-white mb-8">Gallery</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden border-2 border-[#3A6FF7]/20 hover:border-[#C5A9FF]/50 transition-all duration-300 hover:scale-105 hover:-rotate-2 group"
              >
                <ImageWithFallback
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1d29]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Sparkle decoration */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-[#C5A9FF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl text-white mb-8">Features & Highlights</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="card-warm p-8 border border-[#C5A9FF]/20 hover:border-[#C5A9FF]/50 transition-all duration-300 hover:glow-warm group hover:scale-105"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3A6FF7]/20 to-[#C5A9FF]/20 border border-[#C5A9FF]/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-[#C5A9FF]" size={28} />
                </div>
                <h3 className="text-xl text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl text-white mb-8">Process & Behind the Scenes</h2>
          
          <div className="card-warm p-8 border border-[#C5A9FF]/20">
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              {project.process.description}
            </p>

            {/* Process Images - Scrapbook Style */}
            <div className="grid md:grid-cols-2 gap-6">
              {project.process.images.map((image, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl overflow-hidden border-2 border-[#FFC7A8]/30 ${
                    index % 2 === 0 ? 'rotate-2' : '-rotate-2'
                  } hover:rotate-0 transition-transform duration-500`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`Process image ${index + 1}`}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1d29]/60 via-transparent to-transparent"></div>
                  
                  {/* Decorative tape effect */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-8 bg-white/20 backdrop-blur-sm"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Project Navigation */}
        <section>
          <div className="card-warm p-8 border border-[#3A6FF7]/30 text-center gradient-warm">
            <p className="text-white/70 mb-4">Want to see more?</p>
            <CustomButton
              onClick={() => navigate('/projects')}
              variant="primary"
              className="mx-auto flex items-center gap-2 group"
            >
              View More Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </CustomButton>
          </div>
        </section>
      </div>
    </div>
  );
}
