import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Sparkles, Heart, Lightbulb, Pencil } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Sparkles,
      title: 'Creativity',
      description: 'Exploring new art and interactive ideas. Every project is a playground for imagination.',
    },
    {
      icon: Lightbulb,
      title: 'Clarity',
      description: 'Clean, calm, and thoughtful design. Simplicity with purpose and intention.',
    },
    {
      icon: Heart,
      title: 'Heart',
      description: 'Everything made with emotion, story, and love.',
    },
  ];

  return (
    <div className="min-h-screen py-24 px-6 film-grain relative">
      {/* Warm background glow */}
      <div className="absolute inset-0 gradient-radial-warm opacity-40"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C5A9FF]/10 border border-[#C5A9FF]/30 rounded-full mb-6">
            <Heart className="text-[#FFC7A8]" size={16} />
            <span className="text-white/90 text-sm">Made with love</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Building cozy worlds, one pixel at a time 
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#C5A9FF]/30 glow-warm">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760780567530-389d8a3fba75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Avellox Studio Workspace"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 gradient-warm opacity-30"></div>
            </div>
            {/* Decorative sparkles */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-[#C5A9FF]/30 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full border-2 border-[#FFC7A8]/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Right: Text */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-white/80 text-lg leading-relaxed">
                Hi, I'm <span className="text-[#C5A9FF]">Edina</span> — the person behind Avellox Studio.
              </p>
              <p className="text-white/70 leading-relaxed">
                I make cozy games, character-driven stories, and playful digital art. 
                My work blends game development, UI design, and illustration into warm, 
                handcrafted experiences that feel personal and meaningful.
              </p>
              <p className="text-white/70 leading-relaxed">
                Currently working on <span className="text-[#FFC7A8]">Her Hands Remember</span>, 
                a narrative puzzle game about memory, objects, and emotional storytelling. 
                Every detail is designed to make you feel something.
              </p>
              <p className="text-white/70 leading-relaxed">
                When I'm not coding or designing, I'm probably sketching in my notebook, 
                playing indie games, or experimenting with new creative tools. 
                I believe in learning by doing and sharing the journey along the way.
              </p>
            </div>
            
            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="card-warm p-4 border border-[#C5A9FF]/20 text-center">
                <div className="text-3xl mb-1">✨</div>
                <div className="text-white/60 text-sm">Always Learning</div>
              </div>
              <div className="card-warm p-4 border border-[#3A6FF7]/20 text-center">
                <div className="text-3xl mb-1">🎮</div>
                <div className="text-white/60 text-sm">Game Dev</div>
              </div>
              <div className="card-warm p-4 border border-[#FFC7A8]/20 text-center">
                <div className="text-3xl mb-1">🎨</div>
                <div className="text-white/60 text-sm">Design</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="relative">
          <h2 className="text-3xl md:text-4xl text-white text-center mb-12">
            My Core Values
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card-warm p-8 border border-[#C5A9FF]/20 hover:border-[#C5A9FF]/50 transition-all duration-300 hover:glow-warm group hover:scale-105"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3A6FF7]/20 to-[#C5A9FF]/20 border border-[#C5A9FF]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-[#C5A9FF]" size={32} />
                </div>
                <h3 className="text-2xl text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Personal CTA */}
        <div className="mt-20 card-warm p-12 border border-[#C5A9FF]/20 text-center gradient-warm">
          <Pencil className="text-[#FFC7A8] mx-auto mb-6" size={48} />
          <h3 className="text-2xl md:text-3xl text-white mb-4">
            Let's Create Together
          </h3>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
            Whether you have a project idea, want to collaborate, or just want to chat about 
            cozy games and creative tech — I'd love to hear from you! 
          </p>
        </div>
      </div>
    </div>
  );
}