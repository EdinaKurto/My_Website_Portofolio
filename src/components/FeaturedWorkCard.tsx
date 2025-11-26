import { ImageWithFallback } from './figma/ImageWithFallback';

interface FeaturedWorkCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  description: string;
}

export function FeaturedWorkCard({ title, subtitle, imageUrl, description }: FeaturedWorkCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#3A6FF7]/30 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-sm bg-gradient-to-r from-[#3A6FF7] to-[#C5A9FF] bg-clip-text text-transparent mb-2">
          {subtitle}
        </div>
        <h3 className="text-[#0D1018] mb-2 group-hover:text-[#3A6FF7] transition-colors">
          {title}
        </h3>
        <p className="text-[#0D1018]/60 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative corner sparkles */}
      <div className="absolute top-3 right-3 w-2 h-2 bg-[#C5A9FF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-[#FFC7A8] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ transitionDelay: '0.1s' }}></div>
    </div>
  );
}
