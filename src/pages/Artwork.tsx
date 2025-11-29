import { useState } from 'react';
import { ArtworkCard } from '../components/ArtworkCard';
import { Sparkles, Palette } from 'lucide-react';

type ArtworkCategory = 'All' | 'Digital' | 'Mixed Media' | 'Concept Art' | 'Illustration';

interface ArtworkItem {
  id: number;
  title: string;
  medium: string;
  year: string;
  category: ArtworkCategory;
  imageUrl: string;
}

const artworks: ArtworkItem[] = [
  {
    id: 1,
    title: 'Fragmenti Doma',
    medium: 'Mixed Media Collage',
    year: '2024',
    category: 'Mixed Media',
    imageUrl: 'https://images.unsplash.com/photo-1705254613735-1abb457f8a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydCUyMGNvbG9yZnVsfGVufDF8fHx8MTc2NDEyNDc2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    title: 'Tišina Između Nas',
    medium: 'Digital Painting',
    year: '2024',
    category: 'Digital',
    imageUrl: 'https://images.unsplash.com/photo-1744686909443-eb72a54de998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwcGFpbnRpbmd8ZW58MXx8fHwxNzY0MTQ5NDE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    title: 'Caedwig Forest',
    medium: 'Concept Art',
    year: '2025',
    category: 'Concept Art',
    imageUrl: 'https://images.unsplash.com/photo-1632342327403-6f150264009c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBuYXR1cmUlMjBhdG1vc3BoZXJpY3xlbnwxfHx8fDE3NjQxNDk0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 4,
    title: 'Memory Fragments',
    medium: 'Illustration',
    year: '2024',
    category: 'Illustration',
    imageUrl: 'https://images.unsplash.com/photo-1545181824-24c265f8fd48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaWxsdXN0cmF0aW9uJTIwYXJ0fGVufDF8fHx8MTc2NDA2OTM4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 5,
    title: 'Whispers of Autumn',
    medium: 'Watercolor & Digital',
    year: '2024',
    category: 'Mixed Media',
    imageUrl: 'https://images.unsplash.com/photo-1720773997426-d1839839e557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwcGFpbnRpbmclMjB0ZXh0dXJlfGVufDF8fHx8MTc2NDA0MzAwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 6,
    title: 'Urban Dreams',
    medium: 'Digital Collage',
    year: '2023',
    category: 'Digital',
    imageUrl: 'https://images.unsplash.com/photo-1697559009030-9c80ed149478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsYWdlJTIwbWl4ZWQlMjBtZWRpYXxlbnwxfHx8fDE3NjQxNDk1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 7,
    title: 'Echoes of Home',
    medium: 'Acrylic on Canvas',
    year: '2023',
    category: 'Mixed Media',
    imageUrl: 'https://images.unsplash.com/photo-1679486660879-aaf988e4e300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGluZyUyMGFydHdvcmslMjBnYWxsZXJ5fGVufDF8fHx8MTc2NDE0OTU0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 8,
    title: 'Neon Nights',
    medium: 'Digital Painting',
    year: '2025',
    category: 'Digital',
    imageUrl: 'https://images.unsplash.com/photo-1605905898247-bb1fe36b587e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBtb2Rlcm58ZW58MXx8fHwxNzY0MDc5MDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 9,
    title: 'Character Study: Mara',
    medium: 'Digital Illustration',
    year: '2024',
    category: 'Illustration',
    imageUrl: 'https://images.unsplash.com/photo-1622617760286-e11b543f5ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXJyYXRpdmUlMjBnYW1lJTIwcHV6emxlfGVufDF8fHx8MTc2NDE0OTQxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 10,
    title: 'The Weaver\'s Tale',
    medium: 'Concept Art',
    year: '2025',
    category: 'Concept Art',
    imageUrl: 'https://images.unsplash.com/photo-1758598738339-6b1602317e52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 11,
    title: 'Celestial Garden',
    medium: 'Mixed Media',
    year: '2024',
    category: 'Mixed Media',
    imageUrl: 'https://images.unsplash.com/photo-1666302707255-13651d539be5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 12,
    title: 'Moments in Time',
    medium: 'Photo Collage',
    year: '2023',
    category: 'Digital',
    imageUrl: 'https://images.unsplash.com/photo-1605191353027-d21e534a419a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwaW50ZXJpb3IlMjBob21lfGVufDF8fHx8MTc2NDExNTY3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Artwork() {
  const [selectedCategory, setSelectedCategory] = useState<ArtworkCategory>('All');

  const categories: ArtworkCategory[] = ['All', 'Digital', 'Mixed Media', 'Concept Art', 'Illustration'];

  const filteredArtworks = selectedCategory === 'All'
    ? artworks
    : artworks.filter(artwork => artwork.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Dark Gradient */}
      <div className="relative py-32 px-6 bg-gradient-to-br from-[#0D1018] via-[#1a1d29] to-[#0D1018] overflow-hidden film-grain">
        {/* Background effects */}
        <div className="absolute inset-0 gradient-radial-warm opacity-50"></div>
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-[#C5A9FF]/20 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full border border-[#FFC7A8]/10 animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Content */}
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C5A9FF]/10 border border-[#C5A9FF]/30 rounded-full mb-6 glow-warm">
            <Palette className="text-[#C5A9FF]" size={16} />
            <span className="text-white/90 text-sm">Visual Art Gallery</span>
          </div>

          <h1 className="text-5xl md:text-7xl text-white mb-6">Artwork & Visuals</h1>

          <p className="text-xl text-white/70 max-w-3xl mx-auto">A collection of paintings, digital art, and mixed media pieces exploring memory,  culture, and emotion through color and composition </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#C5A9FF] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-[#FFC7A8] rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
      </div>

      {/* Gallery Section - White Background */}
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

      {/* Statement Section - Soft Background */}
      <div className="py-24 px-6 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFC7A8]/20 border border-[#FFC7A8]/30 rounded-full mb-6">
            <Sparkles className="text-[#FFC7A8]" size={16} />
            <span className="text-[#0D1018]/80 text-sm">Artist Statement</span>
          </div>

          <h2 className="text-3xl md:text-4xl text-[#0D1018] mb-6">
            Art as Memory & Emotion
          </h2>

          <p className="text-lg text-[#0D1018]/70 leading-relaxed mb-6">
            My artwork explores the intersection of memory, culture, and personal narrative. 
            Each piece is a fragment of a story—inspired by my grandmother's home, the textures 
            of traditional textiles, and the quiet moments that shape who we are.
          </p>

          <p className="text-[#0D1018]/60 leading-relaxed">
            I work across digital painting, mixed media collage, and concept art, blending 
            traditional influences with contemporary techniques. Every brushstroke and color 
            choice carries intention, warmth, and a touch of nostalgia. 
          </p>
        </div>
      </div>
    </div>
  );
}