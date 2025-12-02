// src/data/projects.ts
import { Gamepad2, Sparkles, Palette, Code2, PenTool } from "lucide-react";
import coverHerHandsRemember from "../photos/Her_Hands_Remember_cover.png";
import livingroomHerHandsRemember from "../photos/Her_Hands_Remember_living_room.png";
import kitchenHerHandsRemember from "../photos/Her_Hands_Remember_kitchen.png";
import forestHerHandsRemember from "../photos/Her_Hands_Remember_forest.png";
import past1HerHandsRemember from "../photos/Her_Hands_Remember_past.png";
import past2HerHandsRemember from "../photos/Her_Hands_Remember_past2.png";
import coverDucky from "../photos/Ducky_Holmes_cover.png";
import oneDucky from "../photos/Ducky_Holmes_1.png";
import twoDucky from "../photos/Ducky_Holmes_2.png";
import threeDucky from "../photos/Ducky_Holmes_3.png";
import coverAnimationKenai from "../photos/Animation_cover.png";
import oneAnimationKenai from "../photos/Animation_1.png";
import twoAnimationKenai from "../photos/Animation_2.png";
import threeAnimationKenai from "../photos/Animation_3.png";
import processAnimationKenai from "../photos/kenai.png";
import coverShiba from "../photos/Shiba_cover.png";
import oneShiba from "../photos/Shiba_1.png";
import twoShiba from "../photos/Shiba_2.png";
import threeShiba from "../photos/Shiba_3.png";
import old1Shiba from "../photos/Shiba_old_1.png";
import old2Shiba from "../photos/Shiba_old_2.png";
import old3Shiba from "../photos/Shiba_old_3.png";
import coverFortuneTeller from "../photos/FortuneTeller_cover.png";
import oneFortuneTeller from "../photos/FortuneTeller_1.png";
import twoFortuneTeller from "../photos/FortuneTeller_2.png";
import coverStay from "../photos/Stay_cover.png";
import twoStay from "../photos/Stay_2.png";
import oneStay from "../photos/Stay_1.png";
import onePotion from "../photos/Potion_1.png";
import twoPotion from "../photos/Potion_2.png";
import coverPotion from "../photos/Potion_cover.png";

export type ProjectCategory =
  | "All"
  | "Games"
  | "UI/UX"
  | "Assets"
  | "Animations";
export interface ProjectOverview {
  description: string;
  role: string;
  additionalHelp?: {
    link?: string;
    name: string;
    role: string;
  }[];
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
  link?: string;
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
    title: "Her Hands Remember",
    tagline: "A first person narrative game curently being built in Unity.",
    shortDescription:
      "A narrative puzzle built in Unity based on Bosnian culture and heritage.",
    category: "Games",
    coverImage: coverHerHandsRemember,
    tags: ["Unity", "C#", "3D Design"],
    overview: {
      description:
        "Her Hands Remember is a game where you play as someone exploring the cozy, nostalgic home of a Bosnian grandmother. It's a personal place, full of memories, culture, and quiet tales. You get to poke around this lived-in house, and everything in it is important. You might sew a decorative pillow, make traditional Bosnian coffee, put jars back on old shelves, or do little interactive things that have been passed down for ages. By doing these simple tasks, you slowly learn about the grandmother's life, her love, and what she left behind, all while appreciating the beauty of the everyday traditions that made the home what it was. Really, it's a celebration of heritage and who you are, capturing what homes in Sarajevo felt like, the warmth of family stories, and how touch, memories, and rituals can be so powerful. As you solve each puzzle, you put together bits of a story told not with words, but with objects, daily habits, and the quiet of a house that holds onto its past. Her Hands Remember combines relaxing gameplay with keeping culture alive, giving you a touching interactive experience where your own memories feel connected to hers, and where small things done around the house tell the biggest stories.",
      role: "Solo Developer & Designer",
      timeline: "October 2025 – Present",
      tools: ["Unity", "C#", "Photoshop", "Audacity", "Blender", "3D Scaner"],
    },
    gallery: [
      livingroomHerHandsRemember,
      forestHerHandsRemember,
      kitchenHerHandsRemember,
    ],
    features: [
      {
        icon: Gamepad2,
        title: "Interaction",
        description:
          "Every item in the home carries a memory. Through gentle, hands-on puzzle mechanics, players discover these stories by touching, turning, stitching, brewing, and placing objects with intention.",
      },
      {
        icon: Sparkles,
        title: "Emotional Narrative",
        description:
          "A quiet, branching narrative that responds to the player’s curiosity. Your choices shape how the memories unfold, soft, intimate moments told through silence, objects, and the echoes of family.",
      },
      {
        icon: Palette,
        title: "Environment",
        description:
          "Warm, personal spaces inspired by Bosnian homes. Every texture, shadow, and corner is crafted to evoke comfort, nostalgia, and the feeling of stepping inside someone’s cherished memories.",
      },
    ],
    process: {
      description:
        "The development of Her Hands Remember has been a slow, intimate transformation. The project began as a simple greybox—bare walls, placeholder props, and empty rooms meant only to test flow and interaction. Early versions of the house were quiet and generic, more of a technical space than a lived-in home. But as the game grew, I started layering in the textures of my own memories: Bosnian wooden interiors, family photographs, old rugs, carved furniture, flowers from the garden, and the warm clutter of a real grandmother’s house.",
      images: [past1HerHandsRemember, past2HerHandsRemember],
    },
  },
  {
    id: 2,
    title: "Potion Commotion",
    tagline:
      "A magical match-3 adventure about cleaning up one very bad potion accident.",
    shortDescription:
      "Help a frazzled wizard restore his blown-up tower in this cozy match-3 mobile game.",
    category: "Games",
    coverImage: coverPotion,
    tags: ["Unity", "C#", "2D Design"],
    overview: {
      description:
        "In a crooked little tower at the edge of the forest, a tired wizard tried to brew “just one more” potion before bed. One wrong ingredient, one overconfident stir… and the entire lab exploded in a burst of wild, unstable magic. Shelves collapsed, candles toppled, spellbooks flew everywhere, and every potion in the room shattered into sparkling floating shards.\n\nNow the tower is a complete disaster, and the magic isn’t going to calm down on its own. You arrive just in time to help the poor wizard fix his mistake. By matching hats, spellbooks, potions and candles, you absorb the runaway magic, earn coins and stars, and slowly rebuild each room of his home—from the ruined lab to the cozy observatory.\n\nClear levels, complete goals, and unlock new parts of the tower as you help him repair furniture, restock ingredients, and tame the chaos he unleashed. It’s not just about cleaning up a mess—it’s about giving the wizard his home (and his confidence) back, one spell at a time.",
      role: "Solo Developer & Designer",
      timeline: "2025",
      tools: ["Unity", "C#", "Photoshop", "Krita", "Adobe Animate"],
    },
    gallery: [onePotion, twoPotion],
    features: [
      {
        icon: Gamepad2,
        title: "Tower Restoration",
        description:
          "Earn coins and stars to repair rooms, replace broken props, and gradually restore the wizard’s home after the explosion.",
      },
      {
        icon: Sparkles,
        title: "Cozy Magical Aesthetic",
        description:
          "Soft, hand-drawn art with warm lighting and charming details that make the tower feel lived-in, messy, and full of personality.",
      },
      {
        icon: Palette,
        title: "Cute Art Style",
        description:
          "A cozy, cartoonish art style filled with expressive characters, playful colors, and atmospheric rooms that balance cute charm with a touch of mystery.",
      },
    ],
    process: {
      description:
        "Potion Commotion started with a simple idea: a single magical mistake that turns into a whole tower’s worth of problems. I first sketched the wizard’s home and imagined how each room would look before and after the explosion. From there, I designed the match-3 grid around clear, readable icons—hats, spellbooks, potions and candles—so that the board feels busy and magical but never confusing.\n\nIn Unity, I built a mobile-friendly match-3 system, focusing on smooth drag-and-swap interactions, satisfying pops, and clear feedback when players complete goals. The overworld map was added to visualize progression, letting players see their journey as they unlock new levels and slowly repair the tower.\n\nThroughout development, I tuned difficulty, effects, and UI to keep the experience cozy and approachable: short levels, snappy animations, and a gentle feeling of “helping” rather than grinding. The result is a light, magical mobile game about cleaning up chaos, one potion match at a time.",
      images: [],
    },
  },
  {
    id: 3,
    title: "Dream Life",
    link: "https://avelloxy.itch.io/dream-life",
    tagline: "A cozy virtual Shiba sanctuary built with warmth and charm.",
    shortDescription:
      "A soft, heartwarming virtual pet experience where your Shiba comes to life.",
    category: "Games",
    coverImage: coverShiba,
    tags: ["Unity", "2D Art", "Photoshop"],
    overview: {
      description:
        "Welcome to your Shiba sanctuary! Take care of an adorable Shiba Inu in this heartwarming virtual pet game, where affection is everything. Whether youre feeding them tasty treats, scrubbing off the mud from their latest adventure, or playing fun little games, your Shiba is always excited to see you. Your job? Be the best companion ever. Your Shiba has needs: hunger, cleanliness, and affection. Its up to you to keep them happy, healthy, and stylish. Watch your Shiba react with cute expressions and unlock fun outfits as you level up your bond. Every interaction matters, from head pats to bath time!",
      role: "2D Designer",
      additionalHelp: [
        {
          role: "Programming",
          name: "TheJayDuck",
          link: "https://ardarmutcu.com/",
        },
        {
          role: "Programming",
          name: "nobbele",
          link: "https://nobbele.dev/",
        },
      ],
      timeline: "2023 – 2024",
      tools: ["Unity", "Photoshop", "C#"],
    },
    gallery: [oneShiba, twoShiba, threeShiba],
    features: [
      {
        icon: Palette,
        title: "Affection, Hunger, and Cleanliness",
        description:
          "A simple but expressive needs system that keeps the Shiba reactive, alive, and emotionally readable.",
      },
      {
        icon: Palette,
        title: "Multiple rooms",
        description:
          "Explore different cozy spaces—from playrooms to baths—each designed with warm palettes and soft lighting.",
      },
      {
        icon: Sparkles,
        title: "Accessories and outfits",
        description:
          "Unlock adorable hats, scarves, bows, and themed costumes that reflect your growing bond.",
      },
    ],
    process: {
      description:
        "The project began with simple sketches to define the Shiba’s personality and proportions. From there, I created rough blockouts of each room to test composition, movement flow, and player interaction points. Once the layout felt right, I refined the color palettes to match the emotional tone of each space, soft, wholesome, and calming. In Unity, I layered post-processing effects like warm bloom, gentle fog, and subtle color grading to bring out the dreamy atmosphere. Every iteration focused on making the Shiba feel alive through expressive animations, smooth transitions, and a UI that encourages affection and care.",
      images: [old1Shiba, old2Shiba, old3Shiba],
    },
  },

  {
    id: 4,
    link: "https://www.youtube.com/watch?v=oYIxYBhlXxc",
    title: "Kenai Animation WIP",
    tagline:
      "A character animation bringing my dog Kenai’s personality to life.",
    shortDescription:
      "Animation study exploring movement, charm, and doglike emotion through simple hand-drawn motion.",
    category: "Animations",
    coverImage: coverAnimationKenai,
    tags: ["Figma", "UI Design", "Components"],
    overview: {
      description:
        "This project explores Kenai as an animated character — capturing his playful, loyal, slightly dramatic personality through movement, squash-and-stretch, and expressive timing. The animation focuses on emotional readability: the tilt of the head, the wag of the tail, the shift in weight before a pounce. Everything is designed to feel alive and familiar, like a real dog you already know.",
      role: "2D Animation Artist",
      timeline: "2024",
      tools: ["Photoshop", "Krita", "Adobe Animate"],
    },
    gallery: [oneAnimationKenai, twoAnimationKenai, threeAnimationKenai],
    features: [
      {
        icon: PenTool,
        title: "Expressive Motion",
        description:
          "Subtle timing, anticipation, and weight shifts that make Kenai feel alive and full of emotion.",
      },
      {
        icon: Sparkles,
        title: "Hand-Drawn Charm",
        description:
          "Movements built around who Kenai is curious, energetic, and slightly goofy in the best way.",
      },
      {
        icon: Code2,
        title: "Personality-Driven Animation",
        description:
          "Clear spacing, typography, and color tokens that map nicely to code.",
      },
    ],
    process: {
      description:
        "The animation began with loose sketches of Kenai’s silhouette and personality poses. From there, I blocked out rough motion passes to study weight, tail rhythm, and how his body settles after movement. I refined the timing through multiple iterations, polishing secondary motion and adding small emotional cues — ear flicks, chest bounce, and soft tail waves. The result is a warm, character-focused animation that captures Kenai’s spirit through expressive hand-drawn motion.",
      images: [processAnimationKenai],
    },
  },

  {
    id: 5,
    link: "https://avelloxy.itch.io/you-were-always-coming",
    title: "You Were Always Coming",
    tagline:
      "A quiet, atmospheric narrative unfolding in a forgotten corner of the world.",
    shortDescription:
      "A moody, intimate narrative experience set in a lone fortune-teller’s tent.",
    category: "Games",
    coverImage: coverFortuneTeller,
    tags: ["Blender", "3D Modeling", "Unity"],
    overview: {
      description:
        "At the edge of nowhere, where the world forgets its name, a single tent waits — silent, still, inevitable. Inside, the air is thick with time. Candles flicker. Velvet breathes secrets. And she is there. The Fortune Teller. She doesn’t ask who you are. She already knows. She sees it in the way you hesitate before sitting. Hears it in the breath you didn’t realize you were holding. Reads it in the way your fingers tremble — not from cold, but memory. You say nothing. She deals three cards.Each one is a mirror. A shard of your past. A wound you buried. A choice you once denied. And now, it returns — not to haunt, but to ask: What will you do with what you carry? You will choose. And she will listen — not with pity, but with purpose. There is no right answer. Only honesty. Only consequence. You may only visit her once. But in truth, you’ve always been walking toward that tent. The question was never if.It was always when.",
      role: "Designer and Programmer",
      timeline: "2025",
      tools: ["Renpy", "Krita", "Python", "Photoshop"],
    },
    gallery: [oneFortuneTeller, twoFortuneTeller],
    features: [
      {
        icon: Palette,
        title: "Stylized Modeling",
        description: "Simple, readable shapes with strong silhouettes.",
      },
      {
        icon: Palette,
        title: "Atmospheric Color",
        description:
          "Muted, moody palettes that shift subtly with emotion, theme, and narrative tension.",
      },
      {
        icon: Sparkles,
        title: "Lighting Experiments",
        description:
          "Different fog, glow, and reflections to create dreamy depth.",
      },
    ],
    process: {
      description:
        "The project began with mood sketches, tiny thumbnails capturing the weight of silence, the glow of candlelight, and the symbolism of the tent. From there, I built rough 3D blockouts in Blender to test space, rhythm, and where the player’s eye would naturally be drawn. After refining silhouettes and environmental storytelling, I painted over renders to define the emotional color script.\n\nThe final scenes were assembled in Unity, where I layered soft fog, bloom, rim lighting, and subtle film-grain to recreate the feeling of stepping into a forgotten dream. Parallel to the visuals, the narrative was written in Ren’Py, focusing on quiet tension, intimate choices, and the idea that the player is revealing, not discovering, the truth. Every iteration aimed to make the experience feel inevitable, quiet, and deeply personal.",
      images: [],
    },
  },
  {
    id: 6,
    link: "https://avelloxy.itch.io/will-they-stay-together",
    title: "Will they stay together?",
    tagline:
      "A quiet, emotional micro–visual novel about love, mistakes, and second chances.",
    shortDescription:
      "A branching narrative about helping two people decide if their relationship is worth saving.",
    category: "Games",
    coverImage: coverStay,
    tags: ["Renpy", "2D Art", "Photoshop"],
    overview: {
      description:
        "Over the past few weeks, Vincent and his girlfriend Annie have been fighting, as one thing led to another... now they are on the verge of a breakup. Walking into your friends apartment, you find your childhood friend on the floor wrapped up in a blanket while watching nothing but static. Approaching him, you try everything you can to help him understand that maybe nothing is set in stone. Vincent can be very stubborn when it comes to his girlfriend, and he needs a bit of persuading to fix the mistakes in their relationship (which he caused...) Youre the only person that can fix their relationship.. so will they stay together?",
      role: "2D Designer and Programmer",
            additionalHelp: [
        {
          role: "Voice Actor",
          name: "SpoopiIzumi",
        },
        {
          role: "Tester",
          name: "TheJayDuck",
          link: "https://ardarmutcu.com/",
        },
      ],
      timeline: "2023 – 2024",
      tools: ["Renpy", "Photoshop", "Python"],
    },
    gallery: [oneStay, twoStay],
    features: [
      {
        icon: Palette,
        title: "Branching Choices",
        description:
          "Decide whether to support Vincent’s doubts or encourage him to repair the relationship—leading to two different endings.",
      },
      {
        icon: Palette,
        title: "Emotional Voice Acting",
        description:
          "The story is brought to life with expressive voice performance by SpoopiIzumi.",
      },
      {
        icon: Sparkles,
        title: "Micro VN Format",
        description:
          "Created for O2A2 VN Jam 2024 with strict limitations: 1000 words, 1 sprite, 1 BG, 1 music track, 1 VA.",
      },
    ],
    process: {
      description:
        "This game was created for the O2A2 Visual Novel Jam, which challenged developers to build an entire story within tight artistic constraints. I began by outlining the emotional arc—focusing on vulnerability, frustration, and the tension between giving up and trying again.\n\nOnce the script was drafted, I illustrated the single background scene and designed a limited color palette to reflect the heavy, introspective mood. Vincent’s sprite was drawn to capture exhaustion, denial, and quiet hope in just a few subtle expressions.\n\nIn Ren’Py, I kept the UI minimal and cinematic to emphasize the dialogue and choices. Every line, transition, and pause was tuned to preserve the intimate tone of the jam format. The final result is a short but heartfelt experience shaped entirely by mood, constraint, and character.",
      images: [],
    },
  },
  {
    id: 7,
    link: "https://avelloxy.itch.io/the-haunting-of-ducky-holmes",
    title: "The Haunting Of Ducky Holmes",
    tagline: "The incredible duck becomes a detective for a day.",
    shortDescription: "A platformer built in Unity based on a cute duck.",
    category: "Games",
    coverImage: coverDucky,
    tags: ["Unity", "C#", "2D Design"],
    overview: {
      description:
        "Our favorite duck set out on a mission to find a job that truly suited him. After trying professions that were clearly not meant for a duck, he finally stumbled upon a mysterious poster advertising a detective position. His first assignment? Recover a cursed family album from an old, abandoned mansion. But once Ducky Holmes waddles inside, the mansion doesn’t feel abandoned at all…  This project became The Haunting of Ducky Holmes, a short atmospheric detective game created for the Begginer Game Development and Design Course at my college, where it proudly won 1st place. The game features hand-drawn animations, a charming and comedic art style, environmental storytelling, and simple puzzle-driven exploration. Everything, from the duck’s walk cycle to the spooky mansion rooms, was crafted in just two intense days of development. Despite the short timeframe, the game delivers personality, humor, mystery, and the signature “ducky charm” that made the jury fall in love with it. Play it here: https://avelloxy.itch.io/the-haunting-of-ducky-holmes",
      role: "Solo Developer & Designer",
      timeline: "January 2023",
      tools: ["Unity", "C#", "Photoshop", "Krita", "Adobe Animate"],
    },
    gallery: [oneDucky, twoDucky, threeDucky],
    features: [
      {
        icon: Gamepad2,
        title: "Platformer",
        description:
          "A light, charming platformer where Ducky explores spooky hallways, dodges quirky obstacles, and uncovers clues hidden throughout the haunted mansion.",
      },
      {
        icon: Sparkles,
        title: "Animations",
        description:
          "Fully hand-drawn animations bring Ducky to life, from his adorable waddle to his dramatic detective moments, adding personality and humor to every scene.",
      },
      {
        icon: Palette,
        title: "Cute Art Style",
        description:
          "A cozy, cartoonish art style filled with expressive characters, playful colors, and atmospheric rooms that balance cute charm with a touch of mystery.",
      },
    ],
    process: {
      description:
        "The Haunting of Ducky Holmes came together through a playful, fast-paced creative process. It started with a simple idea: a tiny, determined duck trying to find a job that finally fits him. From that spark, I began sketching Ducky’s personality, his little waddle and the way he might react when something spooky rustles behind him. Those quick doodles evolved into full hand-drawn animations, giving the character a sense of charm and humor that shaped the rest of the game.I built the mansion room by room, testing how Ducky moved through corridors, how shadows fell, and how the atmosphere shifted from silly to eerie and back again. Whenever someone laughed at Ducky’s walk cycle or jumped at a sudden sound, I adjusted pacing, lighting, or animation timing to strengthen the moment. Piece by piece, the game transformed from a quick jam concept into a fully formed experience, cute, spooky, comedic, and unmistakably “Ducky.”",
      images: [],
    },
  },
];

export function getProjectById(id: number) {
  return projects.find((p) => p.id === id);
}
