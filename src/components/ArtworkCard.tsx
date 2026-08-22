import { ImageWithFallback } from './figma/ImageWithFallback';

interface ArtworkCardProps {
  title: string;
  year: string;
  medium: string;
  imageUrl: string;
  onClick?: () => void;
  className?: string;
}

export function ArtworkCard({ title, year, medium, imageUrl, onClick, className = '' }: ArtworkCardProps) {
  return (
    <button className={`artwork-card ${className}`} onClick={onClick} type="button">
      <ImageWithFallback src={imageUrl} alt={title} />
      <div className="artwork-overlay">
        <h3>{title}</h3>
        <p>{medium} · {year}</p>
      </div>
    </button>
  );
}
