import { useState } from 'react';
import { ArtworkCard } from '../components/ArtworkCard';
import { Sparkles, Palette, X } from 'lucide-react';
import { artworks, ArtworkCategory, ArtworkItem } from '../data/artworks';

export function Artwork() {
  const [selectedCategory, setSelectedCategory] =
    useState<ArtworkCategory>('All');
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkItem | null>(
    null
  );

  const categories: ArtworkCategory[] = [
    'All',
    'Digital',
    'Mixed Media',
    'Concept Art',
    'Illustration',
  ];

  const filteredArtworks =
    selectedCategory === 'All'
      ? artworks
      : artworks.filter((artwork) => artwork.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <div className="relative py-32 px-6 bg-gradient-to-br from-[#0D1018] via-[#1a1d29] to-[#0D1018] overflow-hidden film-grain">
        {/* Background effects */}
        <div className="absolute inset-0 gradient-radial-warm opacity-50"></div>
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-[#C5A9FF]/20 animate-pulse"></div>
        <div
          className="absolute bottom-10 left-10 w-80 h-80 rounded-full border border-[#FFC7A8]/10 animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>

        {/* Content */}
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C5A9FF]/10 border border-[#C5A9FF]/30 rounded-full mb-6 glow-warm">
            <Palette className="text-[#C5A9FF]" size={16} />
            <span className="text-white/90 text-sm">Visual Art Gallery</span>
          </div>

          <h1 className="text-5xl md:text-7xl text-white mb-6">
            Artwork & Visuals
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A collection of paintings, mixed media, digital and concept art pieces I made over the years
          </p>
        </div>

        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#C5A9FF] rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-[#FFC7A8] rounded-full animate-pulse"
          style={{ animationDelay: '0.7s' }}
        ></div>
      </div>

      <div className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#3A6FF7] to-[#C5A9FF] text-white shadow-lg'
                    : 'bg-white text-[#0D1018]/70 border border-[#3A6FF7]/20 hover:border-[#C5A9FF]/50 hover:text-[#0D1018] hover:bg-white/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Artwork Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtworks.map((artwork) => (
              <ArtworkCard
                key={artwork.id}
                title={artwork.title}
                medium={artwork.medium}
                year={artwork.year}
                imageUrl={artwork.imageUrl}
                onClick={() => setSelectedArtwork(artwork)}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredArtworks.length === 0 && (
            <div className="text-center py-20">
              <Sparkles className="text-[#C5A9FF] mx-auto mb-4" size={48} />
              <p className="text-[#0D1018]/50 text-lg">
                No artwork in this category yet — but stay tuned! 🎨
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      {selectedArtwork && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedArtwork(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedArtwork(null)}
              className="absolute -top-3 -right-3 z-10 rounded-full bg-black/80 p-2 text-white hover:bg-black transition"
            >
              <X className="w-4 h-4" />
            </button>

            {/* 🔥 STRICT HEIGHT-LIMITED IMAGE */}
            <img
              src={selectedArtwork.imageUrl}
              alt={selectedArtwork.title}
              className="rounded-2xl shadow-2xl object-contain"
              style={{
                maxHeight: '70vh', // clamp height to 70% of viewport
                maxWidth: '90vw',
                width: 'auto',
                height: 'auto',
                display: 'block',
              }}
            />

            {/* Caption */}
            <div className="mt-4 flex justify-between items-start gap-4 text-white/90 text-sm md:text-base w-full max-w-3xl">
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  {selectedArtwork.title}
                </h3>
                <p className="text-white/70">
                  {selectedArtwork.medium} • {selectedArtwork.year}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
