import { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { Sparkles } from 'lucide-react';

type ProjectCategory = 'All' | 'Games' | 'UI/UX' | '3D Art' | 'Experiments';

interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  imageUrl: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Her Hands Remember',
    description: 'A cozy narrative puzzle built in Unity with emotional storytelling',
    category: 'Games',
    imageUrl: 'https://images.unsplash.com/photo-1758598738339-6b1602317e52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Unity', 'C#', 'Narrative Design'],
  },
  {
    id: 2,
    title: 'Cozy UI Kit',
    description: 'Warm and friendly design system for creative applications',
    category: 'UI/UX',
    imageUrl: 'https://images.unsplash.com/photo-1661205827673-4330f088f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Figma', 'UI Design', 'Components'],
  },
  {
    id: 3,
    title: 'Dreamscape Environments',
    description: 'Cozy 3D worlds for immersive indie experiences',
    category: '3D Art',
    imageUrl: 'https://images.unsplash.com/photo-1666302707255-13651d539be5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Blender', '3D Modeling', 'Unity'],
  },
  {
    id: 4,
    title: 'Interactive Mood Board',
    description: 'Playful visual exploration tool with warm animations',
    category: 'Experiments',
    imageUrl: 'https://images.unsplash.com/photo-1610642436394-81749134ffe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Web', 'Creative Coding', 'Animation'],
  },
  {
    id: 5,
    title: 'Branching Narrative VN',
    description: 'A heartfelt visual novel created during a 48-hour game jam',
    category: 'Games',
    imageUrl: 'https://images.unsplash.com/photo-1715583622581-3245cefe117d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Game Jam', 'Storytelling', 'Unity'],
  },
  {
    id: 6,
    title: 'Portfolio Prototype',
    description: 'Clean, minimal interface design with thoughtful interactions',
    category: 'UI/UX',
    imageUrl: 'https://images.unsplash.com/photo-1760780567530-389d8a3fba75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Figma', 'Prototyping', 'UX'],
  },
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = ['All', 'Games', 'UI/UX', '3D Art', 'Experiments'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen py-24 px-6 film-grain">
      {/* Warm background glow */}
      <div className="absolute inset-0 gradient-radial-warm opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C5A9FF]/10 border border-[#C5A9FF]/30 rounded-full mb-6">
            <Sparkles className="text-[#C5A9FF]" size={16} />
            <span className="text-white/90 text-sm">Handcrafted with care</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl text-white mb-4">
            My Projects
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A collection of cozy games, thoughtful designs, and playful experiments ✨
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#3A6FF7] to-[#C5A9FF] text-white glow-warm shadow-lg'
                  : 'bg-[#1a1d29]/60 text-white/70 border border-[#3A6FF7]/20 hover:border-[#C5A9FF]/50 hover:text-white hover:bg-[#1a1d29]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              projectId={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              category={project.category}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/50 text-lg">
              No projects in this category yet — but stay tuned! 🌟
            </p>
          </div>
        )}
      </div>
    </div>
  );
}