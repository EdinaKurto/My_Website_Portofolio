import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  projectId: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags?: string[];
}

export function ProjectCard({ projectId, title, description, imageUrl, category, tags = [] }: ProjectCardProps) {
  const navigate = useNavigate();

  return (
    <article className="project-card" onClick={() => navigate(`/projects/${projectId}`)}>
      <div className="project-card-image">
        <ImageWithFallback src={imageUrl} alt={title} />
        <span className="paper-pin" aria-hidden="true" />
      </div>
      <div className="project-card-copy">
        <div className="project-card-kicker">{category}</div>
        <div className="project-card-title-row">
          <h3>{title}</h3>
          <ArrowUpRight size={19} strokeWidth={1.5} />
        </div>
        <p>{description}</p>
        {tags.length > 0 && (
          <div className="tag-row">
            {tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        )}
      </div>
    </article>
  );
}
