interface ToolBadgeProps {
  name: string;
  delay?: number;
}
export function ToolBadge({ name, delay = 0 }: ToolBadgeProps) {
  return (
    <div 
      className="px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-[#3A6FF7]/20 text-[#0D1018]/80 text-sm hover:border-[#C5A9FF]/60 hover:bg-white/90 hover:text-[#0D1018] hover:scale-105 transition-all duration-300 cursor-default"
      style={{ animationDelay: `${delay}ms` }}>{name}
    </div>
  );
}