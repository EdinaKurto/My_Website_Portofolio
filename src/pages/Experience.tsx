import { TimelineEntry } from '../components/TimelineEntry';
import { Gamepad2, Palette, Users, Zap, Heart, Sparkles } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      year: '2024 - Present',
      role: 'Indie Game Developer',
      company: 'I guess I can say Avellox Studio?',
      description:
        'Creating a narrative-first, cozy exploration game inspired by Bosnian homes, rituals, and family memories. I design tactile puzzle mechanics like Bosnian coffee-making, embroidery, and small environmental interactions that turn everyday objects into emotional storytelling tools — all built in Unity with custom C# systems for interactions, narration, and pacing.',
      icon: Gamepad2,
      skills: ['Unity', 'C#', 'Narrative Design', 'Game Design', 'Puzzle Mechanics'],
    },
    {
      year: '2025',
      role: 'GROKA Exhibition Artist',
      company: 'Plus Ultra',
      description:
        'Participated in my first group art exhibition, showcasing mixed-media and painted work that bridges illustration, street-inspired visuals, and storytelling. I learned how to prepare work for a physical show, collaborate with other artists, and present my visual style in a more public, curated setting.',
      icon: Zap,
      skills: ['Art', 'Acrylic', 'Graffiti', 'Exhibition', 'Collaboration'],
    },
    {
      year: '2023',
      role: 'Game Jam Participant',
      company: 'Talent Akademija × Alchemy Studio',
      description:
        'Co-created a branching narrative visual novel in under 48 hours, focusing on mood, character voice, and player choice. Worked closely with a small team to write, design, and implement scenes under a strict deadline, which taught me how to scope efficiently, communicate clearly, and still keep the emotional heart of the story intact.',
      icon: Zap,
      skills: ['Game Jam', 'Game Design', 'Game Dev', 'AI in Games', 'Collaboration'],
    },
    {
      year: '2025',
      role: 'UX/UI Intern',
      company: 'Plus Ultra Studio',
      description:
        'Designed and refined real client-facing interfaces in Figma, from early wireframes to polished prototypes. I worked on layouts, interaction flows, and component systems, tested user journeys with the team, and learned how to balance visual style with clarity, accessibility, and business goals.',
      icon: Palette,
      skills: ['Figma', 'Prototyping', 'UX Research', 'Collaboration', 'User Testing'],
    },
    {
      year: '2023 - 2024',
      role: 'Beginner Game Development',
      company: 'International Burch University',
      description:
        'Started my game dev journey by creating “Detective Ducky Holmes”, a whimsical 2D platformer that later won first place in competition. This project introduced me to the full pipeline — from designing levels and characters to implementing mechanics in Unity and polishing visuals in Photoshop — and confirmed that game development is where I want to stay.',
      icon: Sparkles,
      skills: ['2D Animation', 'Photoshop', 'Unity', 'C#'],
    },
  ];

  const skillBadges = [
    { name: 'Unity', color: 'from-[#3A6FF7] to-[#5B8FFF]' },
    { name: 'C#', color: 'from-[#C5A9FF] to-[#9D7FE8]' },
    { name: 'Blender', color: 'from-[#FFC7A8] to-[#FFB088]' },
    { name: 'Figma', color: 'from-[#3A6FF7] to-[#C5A9FF]' },
    { name: 'Photoshop', color: 'from-[#C5A9FF] to-[#FFC7A8]' },
    { name: 'Animation', color: 'from-[#FFC7A8] to-[#3A6FF7]' },
  ];

  return (
    <div className="min-h-screen py-24 px-6 film-grain relative">
      <div className="absolute inset-0 gradient-radial-warm opacity-40"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C5A9FF]/10 border border-[#C5A9FF]/30 rounded-full mb-6">
            <Heart className="text-[#FFC7A8]" size={16} />
            <span className="text-white/90 text-sm">Still learning</span>
          </div>
          <h1 className="text-5xl md:text-6xl text-white mb-4">My Creative Journey</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto"> A mix of game dev, design, art, and cozy experiments</p>
        </div>

        {/* Skill Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {skillBadges.map((skill, index) => (
            <div
              key={index}
              className={`px-5 py-2.5 bg-gradient-to-r ${skill.color} rounded-full text-white text-sm shadow-lg hover:scale-105 transition-transform duration-300`}>
              {skill.name}
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((exp, index) => (
            <TimelineEntry
              key={index}
              year={exp.year}
              role={exp.role}
              company={exp.company}
              description={exp.description}
              icon={exp.icon}
              skills={exp.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
}