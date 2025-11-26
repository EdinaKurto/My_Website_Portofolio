import { TimelineEntry } from '../components/TimelineEntry';
import { Gamepad2, Palette, Users, Zap, Heart, Sparkles } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      year: '2024 - Present',
      role: 'Indie Game Developer',
      company: 'Her Hands Remember',
      description: 'Designing narrative puzzles, interactive objects, cozy environments, and emotional storytelling experiences in Unity. Building a world where every interaction tells a story.',
      icon: Gamepad2,
      skills: ['Unity', 'C#', 'Narrative Design', 'Game Design', 'Puzzle Mechanics'],
    },
    {
      year: '2023',
      role: 'UX/UI Intern',
      company: 'Plus Ultra Studio',
      description: 'Worked on real client prototypes in Figma, developed thoughtful layouts, tested user flows, and collaborated with designers to create meaningful digital experiences.',
      icon: Palette,
      skills: ['Figma', 'Prototyping', 'UX Research', 'Collaboration', 'User Testing'],
    },
    {
      year: '2023',
      role: 'Game Jam Participant',
      company: 'Talent Akademija × Alchemy Studio',
      description: 'Created a branching narrative visual novel under 48 hours, focusing on mood, character development, and emotional pacing. Learned the power of constraints.',
      icon: Zap,
      skills: ['Game Jam', 'Visual Novel', 'Branching Narrative', 'Time Management'],
    },
    {
      year: '2022 - 2023',
      role: 'Creative Explorer',
      company: 'Personal Projects',
      description: 'Experimented with Blender, Unity, and Photoshop to find my creative voice. Built small prototypes, learned from mistakes, and discovered my love for cozy game design.',
      icon: Sparkles,
      skills: ['Blender', '3D Modeling', 'Photoshop', 'Unity', 'Self-Learning'],
    },
  ];

  const skillBadges = [
    { name: 'Unity', color: 'from-[#3A6FF7] to-[#5B8FFF]' },
    { name: 'C#', color: 'from-[#C5A9FF] to-[#9D7FE8]' },
    { name: 'Blender', color: 'from-[#FFC7A8] to-[#FFB088]' },
    { name: 'Figma', color: 'from-[#3A6FF7] to-[#C5A9FF]' },
    { name: 'Photoshop', color: 'from-[#C5A9FF] to-[#FFC7A8]' },
    { name: 'Narrative Design', color: 'from-[#FFC7A8] to-[#3A6FF7]' },
  ];

  return (
    <div className="min-h-screen py-24 px-6 film-grain relative">
      {/* Warm background glow */}
      <div className="absolute inset-0 gradient-radial-warm opacity-40"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C5A9FF]/10 border border-[#C5A9FF]/30 rounded-full mb-6">
            <Heart className="text-[#FFC7A8]" size={16} />
            <span className="text-white/90 text-sm">Growing & learning</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl text-white mb-4">
            My Creative Journey
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A mix of game dev, design, art, and cozy experiments 
          </p>
        </div>

        {/* Skill Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {skillBadges.map((skill, index) => (
            <div
              key={index}
              className={`px-5 py-2.5 bg-gradient-to-r ${skill.color} rounded-full text-white text-sm shadow-lg hover:scale-105 transition-transform duration-300`}
            >
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

        {/* Personal Note */}
        <div className="mt-16 card-warm p-8 text-center border border-[#C5A9FF]/20">
          <Sparkles className="text-[#C5A9FF] mx-auto mb-4" size={32} />
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
            Every project teaches me something new. I'm always exploring, experimenting, 
            and finding joy in the creative process. Let's make something magical together!
          </p>
        </div>
      </div>
    </div>
  );
}