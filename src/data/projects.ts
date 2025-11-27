// src/data/projects.ts
import { Gamepad2, Sparkles, Palette, Code2, PenTool } from 'lucide-react';
import coverHerHandsRemember from '../photos/Her_Hands_Remember_cover.png';
import livingroomHerHandsRemember from '../photos/Her_Hands_Remember_living_room.png';
import kitchenHerHandsRemember  from '../photos/Her_Hands_Remember_kitchen.png';
import forestHerHandsRemember  from '../photos/Her_Hands_Remember_forest.png';
import past1HerHandsRemember  from '../photos/Her_Hands_Remember_past.png';
import past2HerHandsRemember  from '../photos/Her_Hands_Remember_past2.png';
export type ProjectCategory = 'All' | 'Games' | 'UI/UX' | '3D Art' | 'Experiments';
export interface ProjectOverview {
  description: string;
  role: string;
  timeline: string;
  tools: string[];
}
export interface ProjectFeature {
  // keep "any" here to avoid typing issues for now
  icon: any;
  title: string;
  description: string;
}
export interface ProjectProcess {
  description: string;
  images: string[];
}
export interface Project {
  id: number;
  title: string;
  tagline: string;
  shortDescription: string;
  category: ProjectCategory;
  coverImage: string;
  tags: string[];
  overview: ProjectOverview;
  gallery: string[];
  features: ProjectFeature[];
  process: ProjectProcess;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Her Hands Remember',
    tagline: 'A first person narrative game curently being built in Unity.',
    shortDescription:
      'A narrative puzzle built in Unity based on Bosnian culture and heritage.',
    category: 'Games',
    coverImage: coverHerHandsRemember ,
    tags: ['Unity', 'C#', 'Narrative Design'],
    overview: {
      description:
        "Her Hands Remember is a first-person, narrative-driven puzzle game set inside a warm, nostalgic Bosnian grandmother’s home—an intimate space filled with memory, culture, and quiet stories. The game invites the player to explore a lived-in house where every object matters: from sewing a goblen pillow, to making traditional Bosnian coffee, to placing jars back onto old wooden shelves, to tending to small interactive rituals passed down through generations. Through these gentle tasks, the player gradually uncovers the life, love, and legacy of the grandmother, experiencing the beauty of everyday traditions that shaped the household. At its core, the project is a tribute to heritage and identity—capturing the textures of Sarajevo homes, the warmth of family histories, and the emotional power of touch, memory, and ritual. With each puzzle completed, the player reconstructs pieces of a story told not through dialogue, but through objects, routines, and the silence of a house that remembers. Her Hands Remember blends cozy gameplay with cultural preservation, offering a heartfelt interactive experience where personal memories become universal, and where the smallest domestic gestures tell the largest stories.",
      role: 'Solo Developer & Designer',
      timeline: 'October 2025 – Present',
      tools: ['Unity', 'C#', 'Photoshop', 'Audacity', 'Blender', '3D Scaner', ],
    },
    gallery: [
      livingroomHerHandsRemember,
      forestHerHandsRemember,
      kitchenHerHandsRemember,
      
    ],
    features: [
      {
        icon: Gamepad2,
        title: 'Interactions',
        description:
          'Every item in the home carries a memory. Through gentle, hands-on puzzle mechanics, players discover these stories by touching, turning, stitching, brewing, and placing objects with intention.',
      },
      {
        icon: Sparkles,
        title: 'Emotional Narrative',
        description:
          'A quiet, branching narrative that responds to the player’s curiosity. Your choices shape how the memories unfold, soft, intimate moments told through silence, objects, and the echoes of family.',
      },
      {
        icon: Palette,
        title: 'Environment',
        description:
          'Warm, personal spaces inspired by Bosnian homes. Every texture, shadow, and corner is crafted to evoke comfort, nostalgia, and the feeling of stepping inside someone’s cherished memories.',
      },
    ],
    process: {
      description:
        'The development of Her Hands Remember has been a slow, intimate transformation. The project began as a simple greybox—bare walls, placeholder props, and empty rooms meant only to test flow and interaction. Early versions of the house were quiet and generic, more of a technical space than a lived-in home. But as the game grew, I started layering in the textures of my own memories: Bosnian wooden interiors, family photographs, old rugs, carved furniture, flowers from the garden, and the warm clutter of a real grandmother’s house.',
      images: [
        past1HerHandsRemember,
        past2HerHandsRemember,
      ],
    },
  },

  {
    id: 2,
    title: 'Cozy UI Kit',
    tagline: 'Warm, friendly interface system for creative apps.',
    shortDescription: 'Warm and friendly design system for creative applications',
    category: 'UI/UX',
    coverImage:
      'https://images.unsplash.com/photo-1661205827673-4330f088f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Figma', 'UI Design', 'Components'],
    overview: {
      description:
        'Cozy UI Kit is a reusable design system focused on softness, clarity, and emotional warmth. It’s made for dashboards, creative tools, and playful web experiences.',
      role: 'Product Designer',
      timeline: '2024',
      tools: ['Figma', 'FigJam'],
    },
    gallery: [
      'https://images.unsplash.com/photo-1760780567530-389d8a3fba75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1715583622581-3245cefe117d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1661205827673-4330f088f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    features: [
      {
        icon: PenTool,
        title: 'Component Library',
        description:
          'Buttons, inputs, cards, navbars, and modals built with variants and states.',
      },
      {
        icon: Sparkles,
        title: 'Soft Visual Language',
        description:
          'Rounded corners, subtle shadows, and cozy colors that feel inviting.',
      },
      {
        icon: Code2,
        title: 'Dev-Friendly Tokens',
        description:
          'Clear spacing, typography, and color tokens that map nicely to code.',
      },
    ],
    process: {
      description:
        'I started by auditing cozy interfaces and creative apps I love. After defining a type scale and color system, I built components on top and iterated based on how fast I could mock up real screens with the kit.',
      images: [
        'https://images.unsplash.com/photo-1610642436394-81749134ffe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1760780567530-389d8a3fba75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      ],
    },
  },

  {
    id: 3,
    title: 'Dreamscape Environments',
    tagline: 'Cozy 3D worlds for immersive indie experiences.',
    shortDescription: 'Cozy 3D worlds for immersive indie experiences',
    category: '3D Art',
    coverImage:
      'https://images.unsplash.com/photo-1666302707255-13651d539be5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Blender', '3D Modeling', 'Unity'],
    overview: {
      description:
        'Dreamscape Environments is a collection of stylized 3D scenes that feel like concept art you can walk into. Each scene focuses on mood, composition, and lighting.',
      role: 'Environment Artist',
      timeline: '2023 – 2024',
      tools: ['Blender', 'Unity', 'Substance Painter'],
    },
    gallery: [
      'https://images.unsplash.com/photo-1666302707255-13651d539be5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1715583622581-3245cefe117d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1760780567530-389d8a3fba75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    features: [
      {
        icon: Palette,
        title: 'Stylized Modeling',
        description: 'Simple, readable shapes with strong silhouettes.',
      },
      {
        icon: Palette,
        title: 'Atmospheric Color',
        description: 'Limited palettes tuned to a specific emotion per scene.',
      },
      {
        icon: Sparkles,
        title: 'Lighting Experiments',
        description: 'Different fog, glow, and reflections to create dreamy depth.',
      },
    ],
    process: {
      description:
        'Each scene started as a tiny thumbnail sketch, then a blockout in Blender. Once the composition worked, I pushed colors and lighting, then tested the scene inside Unity with post-processing to see how it feels in motion.',
      images: [
        'https://images.unsplash.com/photo-1661205827673-4330f088f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1666302707255-13651d539be5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      ],
    },
  },
];

export function getProjectById(id: number) {
  return projects.find((p) => p.id === id);
}
