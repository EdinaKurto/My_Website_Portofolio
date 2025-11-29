import { ImageWithFallback } from './figma/ImageWithFallback';
interface ArtworkCardProps {
  title: string;
  year: string;
  medium: string;
  imageUrl: string;
}
export function ArtworkCard({ title, year, medium, imageUrl }: ArtworkCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
      <div className="relative aspect-square overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1018]/95 via-[#0D1018]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
          <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-white mb-1">{title}</h3>
            <p className="text-white/80 text-sm">{medium} • {year}</p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_40px_rgba(58,111,247,0.3)]"></div>
      </div>
      <div className="absolute top-3 right-3 w-2 h-2 bg-[#C5A9FF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-[#FFC7A8] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ transitionDelay: '0.1s' }}></div>
    </div>
  );
}