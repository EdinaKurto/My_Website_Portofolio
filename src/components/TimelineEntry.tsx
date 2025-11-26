import { LucideIcon } from 'lucide-react';

interface TimelineEntryProps {
  year: string;
  role: string;
  company: string;
  description: string;
  icon: LucideIcon;
  skills?: string[];
}

export function TimelineEntry({ year, role, company, description, icon: Icon, skills }: TimelineEntryProps) {
  return (
    <div className="relative flex gap-8 group">
      {/* Timeline Line & Icon */}
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#3A6FF7]/20 to-[#C5A9FF]/20 border-2 border-[#C5A9FF] flex items-center justify-center glow-warm group-hover:scale-110 transition-all duration-300 z-10">
          <Icon className="text-[#C5A9FF]" size={24} />
        </div>
        <div className="w-0.5 h-full bg-gradient-to-b from-[#C5A9FF] to-[#C5A9FF]/20 mt-2"></div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-16">
        <div className="card-warm p-6 border border-[#C5A9FF]/20 hover:border-[#C5A9FF]/50 transition-all duration-300 hover:glow-warm">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <span className="px-4 py-1 bg-gradient-to-r from-[#3A6FF7]/20 to-[#C5A9FF]/20 text-[#C5A9FF] rounded-full text-sm border border-[#C5A9FF]/30">
              {year}
            </span>
          </div>
          
          <h3 className="text-2xl text-white mb-1">
            {role}
          </h3>
          <p className="text-[#C5A9FF] mb-4">
            {company}
          </p>
          <p className="text-white/80 mb-4 leading-relaxed">
            {description}
          </p>

          {/* Skills Badges */}
          {skills && skills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-[#3A6FF7]/10 to-[#C5A9FF]/10 text-white/80 rounded-full text-sm border border-[#C5A9FF]/30 hover:border-[#C5A9FF]/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}