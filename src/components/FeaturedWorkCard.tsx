import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FeaturedWorkCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  description: string;
}

export function FeaturedWorkCard({ title, subtitle, imageUrl, description }: FeaturedWorkCardProps) {
  return (
    <article className="featured-card">
      <div className="featured-image-wrap">
        <ImageWithFallback src={imageUrl} alt={title} />
        <span className="tape tape-top" aria-hidden="true" />
      </div>
      <div className="featured-copy">
        <span className="eyebrow">{subtitle}</span>
        <div className="featured-title-row">
          <h3>{title}</h3>
          <ArrowUpRight size={19} strokeWidth={1.4} />
        </div>
        <p>{description}</p>
      </div>
    </article>
  );
}
