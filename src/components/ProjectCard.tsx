import { ImageWithFallback } from './figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  projectId: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export function ProjectCard({
  projectId,
  title,
  description,
  imageUrl,
  category,
}: ProjectCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <div
      onClick={handleClick}
      className="group relative overflow-hidden card-warm transition-all duration-500 hover:scale-[1.03] hover:-rotate-1 hover:glow-warm cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden rounded-t-2xl">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1d29] via-transparent to-transparent opacity-60"></div>

        <div className="absolute top-4 right-4 px-4 py-1.5 bg-gradient-to-r from-[#3A6FF7] to-[#C5A9FF] backdrop-blur-sm rounded-full text-sm shadow-lg">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl text-white mb-2 group-hover:text-[#C5A9FF] transition-colors">
          {title}
        </h3>
        <p className="text-white/70 leading-relaxed">{description}</p>
      </div>

      {/* Sparkle decoration */}
      <div className="absolute top-2 left-2 w-2 h-2 bg-[#C5A9FF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div
        className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-[#FFC7A8] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ transitionDelay: '0.1s' }}
      ></div>
    </div>
  );
}
