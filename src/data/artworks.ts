import Img1 from '../photos/artworks/Room_Bathroom.png';
import Img2 from '../photos/artworks/New_Kitchen_2.png';
import Img3 from '../photos/artworks/Room_Game.png';
import Img4 from '../photos/artworks/Game_room.png';
import Img5 from '../photos/artworks/Pfp_Raff.png';
import Img6 from '../photos/artworks/Raford Model Final.png';
import Img7 from '../photos/artworks/Wizard.png';
import Img9 from '../photos/artworks/Sunflower.png';
import Img8 from '../photos/artworks/fragment_doma.jpg';
import Img18 from '../photos/artworks/YouWereComing.png';
import Img19 from '../photos/artworks/WillTheyStay.png';
import Img10 from '../photos/artworks/julia_ref_sheet.png';
import Img11 from '../photos/artworks/sunflower_1.png';
import Img12 from '../photos/artworks/Main_menu_new.png';
import Img13 from '../photos/artworks/tisina.jpg';
import Img14 from '../photos/artworks/Stiker_1.png';
import Img15 from '../photos/artworks/Stiker_2.png';
import Img16 from '../photos/artworks/Price_Main Menu_Idea.png';
import Img17 from '../photos/artworks/Animation_wee.png';

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
    title: 'Dream Life – Bathroom Background',
    medium: 'Digital Environment Art',
    year: '2023',
    category: 'Digital',
    imageUrl: Img1,
  },
  {
    id: 2,
    title: 'Dream Life – Kitchen Background',
    medium: 'Digital Environment Art',
    year: '2023',
    category: 'Digital',
    imageUrl: Img2,
  },
  {
    id: 3,
    title: 'Dream Life – Living Room Background',
    medium: 'Digital Environment Concept',
    year: '2024',
    category: 'Digital',
    imageUrl: Img3,
  },
  {
    id: 4,
    title: 'Raford – Game Room Interior',
    medium: 'Digital Concept Art',
    year: '2023',
    category: 'Digital',
    imageUrl: Img4,
  },
  {
    id: 5,
    title: 'Raford – Character Portrait',
    medium: 'Digital Character Illustration',
    year: '2023',
    category: 'Digital',
    imageUrl: Img5,
  },
  {
    id: 6,
    title: 'Raford – Final Character Model',
    medium: '3D/2D Rendered Character Art',
    year: '2024',
    category: 'Digital',
    imageUrl: Img6,
  },
  {
    id: 7,
    title: 'Potion Commotion – Main Menu Illustration',
    medium: 'Digital Illustration',
    year: '2025',
    category: 'Digital',
    imageUrl: Img7,
  },
  {
    id: 8,
    title: 'Fragmenti Doma',
    medium: 'Mixed Media Collage for Exhibition',
    year: '2025',
    category: 'Mixed Media',
    imageUrl: Img8,
  },
  {
    id: 9,
    title: 'Narrative Game – Main Menu Concept',
    medium: 'Digital UI & Key Art',
    year: '2024',
    category: 'Illustration',
    imageUrl: Img9,
  },
  {
    id: 18,
    title: 'You Were Always Coming – Background Concept',
    medium: 'Digital UI & Key Art',
    year: '2025',
    category: 'Digital',
    imageUrl: Img18,
  },
  {
    id: 10,
    title: 'Julia – Character Concept Sheet',
    medium: 'Character Design & Turnaround',
    year: '2024',
    category: 'Concept Art',
    imageUrl: Img10,
  },
  {
    id: 19,
    title: 'Will they Stay Together? – Main Concept',
    medium: 'Digital UI & Key Art',
    year: '2024',
    category: 'Digital',
    imageUrl: Img19,
  },
  {
    id: 11,
    title: 'Sunflower – Game Concept Art',
    medium: 'Digital Painting',
    year: '2024',
    category: 'Concept Art',
    imageUrl: Img11,
  },
  {
    id: 12,
    title: 'Dream Life – Main Menu Illustration',
    medium: 'Digital Illustration & UI Concept',
    year: '2023',
    category: 'Digital',
    imageUrl: Img12,
  },
    {
    id: 17,
    title: 'Kenai – Animation Background',
    medium: 'Digital Animation Art',
    year: '2024',
    category: 'Digital',
    imageUrl: Img17,
  },
  {
    id: 13,
    title: 'Tišina Između Nas',
    medium: 'Mixed Media Piece for Exhibition',
    year: '2025',
    category: 'Mixed Media',
    imageUrl: Img13,
  },
  {
    id: 14,
    title: 'Duck Sticker – Version A',
    medium: 'Digital Sticker Illustration',
    year: '2022',
    category: 'Illustration',
    imageUrl: Img14,
  },
  {
    id: 15,
    title: 'Duck Sticker – Version B',
    medium: 'Digital Sticker Illustration',
    year: '2022',
    category: 'Illustration',
    imageUrl: Img15,
  },
  {
    id: 16,
    title: 'The Price – Main Menu Idea',
    medium: 'Digital Illustration & UI Concept',
    year: '2023',
    category: 'Concept Art',
    imageUrl: Img16,
  },

];
