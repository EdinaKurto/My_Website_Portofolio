import { LucideIcon } from 'lucide-react';

interface CreativeIdentityBoxProps {
  icon: LucideIcon;
  label: string;
  delay?: number;
}

export function CreativeIdentityBox({ icon: Icon, label, delay = 0 }: CreativeIdentityBoxProps) {
  return (
    <div 
      className="group relative flex flex-col items-center justify-center gap-3 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-[#3A6FF7]/20 hover:border-[#C5A9FF]/60 transition-all duration-500 hover:scale-105 hover:bg-white/80 cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div className="relative">
        <Icon className="text-[#3A6FF7] group-hover:text-[#C5A9FF] transition-colors duration-300" size={28} />
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 blur-xl bg-[#3A6FF7]/0 group-hover:bg-[#C5A9FF]/50 transition-all duration-500"></div>
      </div>

      {/* Label */}
      <span className="text-sm text-[#0D1018]/80 group-hover:text-[#0D1018] text-center transition-colors">
        {label}
      </span>

      {/* Decorative sparkle */}
      <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#FFC7A8] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
}
