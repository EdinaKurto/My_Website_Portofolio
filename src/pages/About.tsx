import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Sparkles, Heart, Lightbulb, Pencil } from 'lucide-react';
import me from '../photos/me.png';
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
      <div className="absolute inset-0 gradient-radial-warm opacity-40"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C5A9FF]/10 border border-[#C5A9FF]/30 rounded-full mb-6">
            <Heart className="text-[#FFC7A8]" size={16} />
            <span className="text-white/90 text-sm">Made with love</span>
          </div>
          <h1 className="text-5xl md:text-6xl text-white mb-4">About Me</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Building something, one pixel at a time
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#C5A9FF]/30 glow-warm">
              <ImageWithFallback
                src={me}
                alt="Avellox Studio Workspace"
                className="w-full h-[500px] object-cover"/>
              <div className="absolute inset-0 gradient-warm opacity-30"></div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-[#C5A9FF]/30 animate-pulse"></div>
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full border-2 border-[#FFC7A8]/20 animate-pulse"
              style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-white/80 text-lg leading-relaxed">
                Hi, I'm <span className="text-[#C5A9FF]">Edina</span> — the person behind Avellox Studio.
              </p>
              <p className="text-white/70 leading-relaxed">
                I make cozy games, character-driven stories, and digital art.
                My work combines game development, UI design, and illustration to create handcrafted
                experiences that are personal and meaningful.</p>
              <p className="text-white/70 leading-relaxed">
                I'm currently working on <span className="text-[#FFC7A8]">Her Hands Remember</span>, 
                a narrative first-person game about memory, Bosnian heritage, and old-style storytelling. 
                Every detail is designed to make you feel something nostalgic.
              </p>
              <p className="text-white/70 leading-relaxed">
                When I'm not coding or designing, I'm probably sketching new ideas, designing websites,
                playing indie games, or making silly little animations.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="card-warm p-4 border border-[#C5A9FF]/20 text-center">
                <div className="text-3xl mb-1">✨</div>
                <div className="text-white/60 text-sm">Still Learning</div>
              </div>
              <div className="card-warm p-4 border border-[#3A6FF7]/20 text-center">
                <div className="text-3xl mb-1">🎮</div>
                <div className="text-white/60 text-sm">Game Dev</div>
              </div>
              <div className="card-warm p-4 border border-[#FFC7A8]/20 text-center">
                <div className="text-3xl mb-1">🎨</div>
                <div className="text-white/60 text-sm">Designer</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 card-warm p-12 border border-[#C5A9FF]/20 text-center gradient-warm">
          <Pencil className="text-[#FFC7A8] mx-auto mb-6" size={48} />
          <h3 className="text-2xl md:text-3xl text-white mb-4">
            Let's Create Something Together!
          </h3>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
            Whether you have a project idea, want to collaborate, or just want to chat, I'd love to hear from you!
          </p>
        </div>
      </div>
    </div>
  );
}
