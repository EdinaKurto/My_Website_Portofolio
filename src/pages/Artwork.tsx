import { useState } from 'react';
import { X } from 'lucide-react';
import { ArtworkCard } from '../components/ArtworkCard';
import { artworks, ArtworkCategory, ArtworkItem } from '../data/artworks';

export function Artwork() {
  const [selectedCategory, setSelectedCategory] = useState<ArtworkCategory>('All');
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkItem | null>(null);

  const categories: ArtworkCategory[] = ['All', 'Digital', 'Mixed Media', 'Concept Art', 'Illustration'];
  const filteredArtworks = selectedCategory === 'All'
    ? artworks
    : artworks.filter((artwork) => artwork.category === selectedCategory);

  return (
    <div className="paper-page inner-page artwork-page">
      <section className="page-intro page-width artwork-intro">
        <div>
          <span className="eyebrow">Visual work</span>
          <h1>Artwork</h1>
          <p className="handwritten">Illustrations, concepts, sketches and experiments collected along the way.</p>
        </div>
        <div className="artwork-intro-note handwritten">sometimes this is research.<br/>sometimes I just wanted to draw a nice window.</div>
      </section>

      <section className="page-width artwork-content">
        <div className="filter-row" aria-label="Artwork filters">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 'active' : ''}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="artwork-masonry">
          {filteredArtworks.map((artwork, index) => (
            <ArtworkCard
              key={artwork.id}
              title={artwork.title}
              medium={artwork.medium}
              year={artwork.year}
              imageUrl={artwork.imageUrl}
              className={`masonry-${(index % 6) + 1}`}
              onClick={() => setSelectedArtwork(artwork)}
            />
          ))}
        </div>

        <div className="artwork-page-note handwritten">I collect little moments and turn them into worlds. ♡</div>
      </section>

      {selectedArtwork && (
        <div className="art-lightbox" role="dialog" aria-modal="true" aria-label={selectedArtwork.title} onClick={() => setSelectedArtwork(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedArtwork(null)} aria-label="Close artwork"><X size={21} /></button>
            <img src={selectedArtwork.imageUrl} alt={selectedArtwork.title} />
            <div className="lightbox-caption">
              <h2>{selectedArtwork.title}</h2>
              <p>{selectedArtwork.medium} · {selectedArtwork.year}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
