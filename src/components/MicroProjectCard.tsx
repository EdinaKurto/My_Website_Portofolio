import { LucideIcon } from 'lucide-react';

interface MicroProjectCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
}

export function MicroProjectCard({ icon: Icon, title, description, color = '#3A6FF7' }: MicroProjectCardProps) {
  return (
    <div className="group relative p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-[#3A6FF7]/20 hover:border-[#C5A9FF]/60 hover:bg-white/90 transition-all duration-500 hover:scale-[1.02] cursor-pointer">
      {/* Icon */}
      <div 
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
        style={{ 
          backgroundColor: `${color}20`,
        }}
      >
        <Icon 
          className="transition-colors duration-300" 
          size={24}
          style={{ color: color }}
        />
      </div>

      {/* Content */}
      <h3 className="text-[#0D1018] mb-2 group-hover:text-[#3A6FF7] transition-colors">
        {title}
      </h3>
      <p className="text-[#0D1018]/60 text-sm leading-relaxed">
        {description}
      </p>

      {/* Decorative corner sparkle */}
      <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-[#FFC7A8] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
}
