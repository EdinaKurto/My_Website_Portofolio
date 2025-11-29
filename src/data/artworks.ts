import Img1 from '../photos/artworks/fragment_doma.jpg';
import Img2 from '../photos/artworks/tisina.jpg';
import Img3 from '../photos/artworks/Sunflower.png';
import Img4 from '../photos/artworks/sunflower_1.png';
import Img5 from '../photos/artworks/Stiker_1.png';
import Img6 from '../photos/artworks/Stiker_2.png';

export type ArtworkCategory =
  | 'All'
  | 'Digital'
  | 'Mixed Media'
  | 'Concept Art'
  | 'Illustration';

export interface ArtworkItem {
  id: number;
  title: string;
  medium: string;
  year: string;
  category: ArtworkCategory;
  imageUrl: string;
}

export const artworks: ArtworkItem[] = [
  {
    id: 1,
    title: 'Fragmenti Doma',
    medium: 'Mixed Media Collage',
    year: '2024',
    category: 'Mixed Media',
    imageUrl: Img1,
  },
  {
    id: 2,
    title: 'Tišina Između Nas',
    medium: 'Mixed Media',
    year: '2024',
    category: 'Mixed Media',
    imageUrl: Img2,
  },
  {
    id: 3,
    title: 'Sunflower',
    medium: 'Digital',
    year: '2025',
    category: 'Illustration',
    imageUrl: Img3,
  },
  {
    id: 4,
    title: 'Memory Fragments',
    medium: 'Illustration',
    year: '2024',
    category: 'Concept Art',
    imageUrl: Img4,
  },
  {
    id: 5,
    title: 'Duck Sticker Design',
    medium: 'Watercolor & Digital',
    year: '2024',
    category: 'Digital',
    imageUrl: Img5,
  },
  {
    id: 6,
    title: 'Duck Sticker Design 2',
    medium: 'Digital Collage',
    year: '2023',
    category: 'Digital',
    imageUrl: Img6,
  },
];
