import { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { Sparkles } from 'lucide-react';
import { projects, ProjectCategory } from '../data/projects';

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const categories: ProjectCategory[] = ['All', 'Games', 'UI/UX', 'Assets', 'Animations'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen py-24 px-6 film-grain">
      <div className="absolute inset-0 gradient-radial-warm opacity-50"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C5A9FF]/10 border border-[#C5A9FF]/30 rounded-full mb-6">
            <Sparkles className="text-[#C5A9FF]" size={16} />
            <span className="text-white/90 text-sm">Developed with love</span>
          </div>
          <h1 className="text-5xl md:text-6xl text-white mb-4">My Projects</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">A collection of cozy games, designs, and assets</p>
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
              }`}>
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
              description={project.shortDescription}
              imageUrl={project.coverImage}
              category={project.category}/>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20"><p className="text-white/50 text-lg">No projects in this category yet, but maybe soon!</p></div>
        )}
      </div>
    </div>
  );
}