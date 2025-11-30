import Img1 from '../photos/artworks/Room_Bathroom.png';
import Img2 from '../photos/artworks/New_Kitchen_2.png';
import Img3 from '../photos/artworks/Room_Game.png';
import Img4 from '../photos/artworks/Game_Room.png';
import Img5 from '../photos/artworks/Pfp_Raff.png';
import Img6 from '../photos/artworks/Raford Model Final.png';
import Img7 from '../photos/artworks/Wizard.png';
import Img9 from '../photos/artworks/Sunflower.png';
import Img8 from '../photos/artworks/fragment_doma.jpg';
import Img16 from '../photos/artworks/Price_Main Menu_Idea.png';
import Img10 from '../photos/artworks/julia_ref_sheet.png';
import Img11 from '../photos/artworks/sunflower_1.png';
import Img12 from '../photos/artworks/Main_menu_new.png';
import Img13 from '../photos/artworks/tisina.jpg';
import Img14 from '../photos/artworks/Stiker_1.png';
import Img15 from '../photos/artworks/Stiker_2.png';

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
    title: 'Bathroom Concept Art',
    medium: 'Digital Concept',
    year: '2024',
    category: 'Concept Art',
    imageUrl: Img1,
  },
  {
    id: 2,
    title: 'Kitchen Concept Art',
    medium: 'Digital Concept',
    year: '2024',
    category: 'Concept Art',
    imageUrl: Img2,
  },
  {
    id: 3,
    title: 'Game Room Concept',
    medium: 'Digital Concept',
    year: '2024',
    category: 'Concept Art',
    imageUrl: Img3,
  },
  {
    id: 4,
    title: 'Cozy Game Room Interior',
    medium: 'Digital Concept Art',
    year: '2024',
    category: 'Concept Art',
    imageUrl: Img4,
  },
  {
    id: 5,
    title: 'Raff Portrait',
    medium: 'Digital Character Art',
    year: '2023',
    category: 'Illustration',
    imageUrl: Img5,
  },
  {
    id: 6,
    title: 'Raford Model – Final Render',
    medium: 'Digital 3D/2D Mix',
    year: '2024',
    category: 'Digital',
    imageUrl: Img6,
  },
  {
    id: 7,
    title: 'Sunflower Illustration',
    medium: 'Digital Painting',
    year: '2025',
    category: 'Illustration',
    imageUrl: Img7,
  },
  {
    id: 8,
    title: 'Fragmenti Doma',
    medium: 'Mixed Media Collage',
    year: '2024',
    category: 'Mixed Media',
    imageUrl: Img8,
  },
  {
    id: 9,
    title: 'Main Menu Concept – Price',
    medium: 'Digital UI Concept',
    year: '2024',
    category: 'Digital',
    imageUrl: Img9,
  },
  {
    id: 10,
    title: 'Julia Ref Sheet',
    medium: 'Character Design',
    year: '2024',
    category: 'Concept Art',
    imageUrl: Img10,
  },
  {
    id: 11,
    title: 'Sunflower Study',
    medium: 'Digital Painting',
    year: '2025',
    category: 'Illustration',
    imageUrl: Img11,
  },
  {
    id: 12,
    title: 'Main Menu – Final Concept',
    medium: 'Digital Illustration',
    year: '2024',
    category: 'Digital',
    imageUrl: Img12,
  },
  {
    id: 13,
    title: 'Tišina Između Nas',
    medium: 'Mixed Media',
    year: '2024',
    category: 'Mixed Media',
    imageUrl: Img13,
  },
  {
    id: 14,
    title: 'Duck Sticker – Version A',
    medium: 'Digital Illustration',
    year: '2024',
    category: 'Digital',
    imageUrl: Img14,
  },
  {
    id: 15,
    title: 'Duck Sticker – Version B',
    medium: 'Digital Illustration',
    year: '2024',
    category: 'Digital',
    imageUrl: Img15,
  },
  {
    id: 16,
    title: 'Duck Sticker – Version B',
    medium: 'Digital Illustration',
    year: '2024',
    category: 'Digital',
    imageUrl: Img16,
  },
];
