import hero from "../photos/Hero_Page.png";
import me from "../photos/me.png";

import hhrCover from "../photos/Her_Hands_Remember_cover.png";
import hhrLiving from "../photos/Her_Hands_Remember_living_room.png";
import hhrKitchen from "../photos/Her_Hands_Remember_kitchen.png";
import hhrForest from "../photos/Her_Hands_Remember_forest.png";
import hhrPast1 from "../photos/Her_Hands_Remember_past.png";
import hhrPast2 from "../photos/Her_Hands_Remember_past2.png";

import fortuneCover from "../photos/FortuneTeller_cover.png";
import fortune1 from "../photos/FortuneTeller_1.png";
import fortune2 from "../photos/FortuneTeller_2.png";

import stayCover from "../photos/Stay_cover1.png";
import stay1 from "../photos/Stay1.png";
import stay2 from "../photos/Stay2.png";

import potionCover from "../photos/Potion_cover.png";
import potion1 from "../photos/Potion_1.png";
import potion2 from "../photos/Potion_2.png";

import duckCover from "../photos/Ducky_Holmes_cover.png";
import duck1 from "../photos/Ducky_Holmes_1.png";
import duck2 from "../photos/Ducky_Holmes_2.png";
import duck3 from "../photos/Ducky_Holmes_3.png";

import shibaCover from "../photos/Shiba_cover.png";
import shiba1 from "../photos/Shiba_1.png";
import shiba2 from "../photos/Shiba_2.png";
import shiba3 from "../photos/Shiba_3.png";

import artBathroom from "../photos/artworks/Room_Bathroom.png";
import artKitchen from "../photos/artworks/New_Kitchen_2.png";
import artRoom from "../photos/artworks/Room_Game.png";
import artGameRoom from "../photos/artworks/Game_room.png";
import artFragment from "../photos/artworks/fragment_doma.jpg";
import artWizard from "../photos/artworks/Wizard.png";
import artJulia from "../photos/artworks/julia_ref_sheet.png";
import artTisina from "../photos/artworks/tisina.jpg";
import artSunflower from "../photos/artworks/sunflower_1.png";
import artComing from "../photos/artworks/YouWereComing.png";
import artStay from "../photos/artworks/WillTheyStay.png";
import artMenu from "../photos/artworks/Main_menu_new.png";

export { hero, me };

export type ProjectStatus = "In Development" | "Released" | "Prototype";

export interface PortfolioProject {
  slug: string;
  title: string;
  type: string;
  year: string;
  status: ProjectStatus;
  description: string;
  longDescription: string;
  cover: string;
  gallery: string[];
  role: string;
  engine: string;
  perspective: string;
  tags: string[];
  features: string[];
  process: {
    title: string;
    description: string;
  }[];
  link?: string;
}

export const projects: PortfolioProject[] = [
  {
    slug: "the-paths-we-kept",
    title: "The Paths We Kept",
    type: "Narrative Adventure",
    year: "2026",
    status: "In Development",
    description:
      "A first-person narrative game about memory, belonging and the places that shape us.",
    longDescription:
      "The Paths We Kept is a story-driven first-person experience built around memory, cultural identity and the emotional meaning of place. The player explores lived-in environments, observes meaningful objects, talks to characters and slowly pieces together a story through details rather than exposition.",
    cover: hero,
    gallery: [hero],
    role: "Game Developer / Designer",
    engine: "Unity · C#",
    perspective: "First Person",
    tags: ["Narrative Design", "Environmental Storytelling", "Unity", "C#"],
    features: [
      "Exploration-led narrative",
      "Meaningful object interactions",
      "Interactive sketchbook and character pages",
      "Choice-driven dialogue",
      "Balkan-inspired environments",
      "Environmental storytelling",
    ],
    process: [
      {
        title: "Research",
        description:
          "Collecting references around Balkan interiors, memory, cultural heritage and the emotional meaning of ordinary objects.",
      },
      {
        title: "Visual development",
        description:
          "Designing rooms, props, UI and environments with a warm, painterly style that can be recreated consistently in 3D.",
      },
      {
        title: "Prototype",
        description:
          "Building movement, interaction, dialogue, journal and inventory systems in Unity before expanding the world.",
      },
      {
        title: "Vertical slice",
        description:
          "Bringing the strongest pieces together into a short, polished section that communicates the final experience.",
      },
    ],
  },
  {
    slug: "her-hands-remember",
    title: "Her Hands Remember",
    type: "Narrative Puzzle",
    year: "2025",
    status: "Prototype",
    description:
      "An intimate first-person experience exploring memory through objects, rituals and a grandmother's home.",
    longDescription:
      "Her Hands Remember is a first-person narrative puzzle experience inspired by Bosnian homes, rituals and family memory. Everyday activities such as making coffee, arranging jars and working with textiles become interactive storytelling devices.",
    cover: hhrCover,
    gallery: [hhrLiving, hhrKitchen, hhrForest, hhrPast1, hhrPast2],
    role: "Solo Developer / Artist",
    engine: "Unity · C#",
    perspective: "First Person",
    tags: ["Unity", "C#", "Environment Art", "Narrative Design"],
    features: [
      "Object-based storytelling",
      "Bosnian cultural details",
      "Environmental puzzles",
      "Quiet first-person exploration",
      "Custom interaction systems",
    ],
    process: [
      {
        title: "Reference",
        description:
          "Gathering household details, traditional objects and spatial references from Bosnian homes.",
      },
      {
        title: "Puzzle design",
        description:
          "Turning familiar rituals into readable interactions rather than abstract game puzzles.",
      },
      {
        title: "Implementation",
        description:
          "Building custom interactions, narration triggers and pacing systems in Unity.",
      },
    ],
  },
  {
    slug: "you-were-always-coming",
    title: "You Were Always Coming",
    type: "Narrative Game",
    year: "2025",
    status: "Released",
    description:
      "A quiet, atmospheric narrative unfolding inside a fortune-teller's tent.",
    longDescription:
      "A compact narrative experience focused on atmosphere, character voice and a strong sense of place. The project explores how much emotion can be created with a small setting and carefully controlled visual direction.",
    cover: fortuneCover,
    gallery: [fortune1, fortune2],
    role: "Game Developer / Artist",
    engine: "Ren'Py",
    perspective: "Visual Novel",
    tags: ["Narrative", "Atmosphere", "Visual Novel"],
    features: [
      "Compact narrative structure",
      "Moody visual direction",
      "Character-focused writing",
      "Small-scope production",
    ],
    process: [
      {
        title: "Mood",
        description:
          "Starting with lighting, color and a clear emotional tone before writing the final scene structure.",
      },
      {
        title: "Build",
        description:
          "Keeping the scope deliberately small so every visual and narrative beat could be polished.",
      },
    ],
    link: "https://avelloxy.itch.io/you-were-always-coming",
  },
  {
    slug: "will-they-stay-together",
    title: "After Hours",
    type: "Micro Visual Novel",
    year: "2024",
    status: "Released",
    description:
      "A branching narrative about love, mistakes and whether a relationship is worth saving.",
    longDescription:
      "Created as a small visual-novel project with strict limitations, this game focuses on dialogue, player choice and emotional clarity. Its compact scope made each line, visual and branch matter.",
    cover: stayCover,
    gallery: [stay1, stay2],
    role: "Game Developer / Designer",
    engine: "Ren'Py",
    perspective: "Visual Novel",
    tags: ["Branching Narrative", "Game Jam", "Ren'Py"],
    features: [
      "Branching choices",
      "Two endings",
      "Voice performance",
      "O2A2-style production constraints",
    ],
    process: [
      {
        title: "Scope",
        description:
          "Designing the story around strict limitations rather than fighting them.",
      },
      {
        title: "Branching",
        description:
          "Keeping choices small but emotionally legible so the player understands what is at stake.",
      },
    ],
    link: "https://avelloxy.itch.io/will-they-stay-together",
  },
  {
    slug: "potion-commotion",
    title: "Potion Commotion",
    type: "Mobile Game Concept",
    year: "2025",
    status: "Prototype",
    description:
      "A cozy match-3 concept about restoring a wizard's tower after one very bad potion accident.",
    longDescription:
      "Potion Commotion combines a familiar match-3 loop with a light restoration fantasy. The focus is on charming art direction, readable progression and a world that becomes warmer as the player repairs it.",
    cover: potionCover,
    gallery: [potion1, potion2],
    role: "Game Designer / Artist",
    engine: "Unity",
    perspective: "2D",
    tags: ["Game Design", "2D Art", "Mobile"],
    features: [
      "Match-3 loop",
      "Room restoration",
      "Cozy magical art direction",
      "Simple progression system",
    ],
    process: [
      {
        title: "Concept",
        description:
          "Finding a visual hook that could make a familiar mobile loop feel more personal.",
      },
      {
        title: "Progression",
        description:
          "Connecting gameplay rewards to visible changes in the wizard's home.",
      },
    ],
  },
  {
    slug: "the-haunting-of-ducky-holmes",
    title: "The Haunting of Ducky Holmes",
    type: "2D Platformer",
    year: "2024",
    status: "Released",
    description:
      "A playful 2D platformer where a very determined duck becomes a detective for a day.",
    longDescription:
      "An early full-pipeline game project combining level design, character art, animation and Unity implementation. The project helped define the kind of playful, story-rich game development I wanted to keep pursuing.",
    cover: duckCover,
    gallery: [duck1, duck2, duck3],
    role: "Game Developer / Artist",
    engine: "Unity · C#",
    perspective: "2D Platformer",
    tags: ["Unity", "C#", "2D Animation"],
    features: [
      "Platforming",
      "Hand-drawn animation",
      "Characterful visual design",
      "Level-based progression",
    ],
    process: [
      {
        title: "Character",
        description:
          "Building the mechanics around a character with a clear visual personality.",
      },
      {
        title: "Polish",
        description:
          "Using animation and small visual reactions to make simple mechanics feel more expressive.",
      },
    ],
    link: "https://avelloxy.itch.io/the-haunting-of-ducky-holmes",
  },
  {
    slug: "dream-life",
    title: "Dream Life",
    type: "Virtual Pet Game",
    year: "2024",
    status: "Released",
    description:
      "A warm virtual-pet experience where a Shiba lives across a set of hand-painted rooms.",
    longDescription:
      "Dream Life explores cozy interaction and gentle progression through a virtual pet. It combines illustrated environments with simple care systems and character customization.",
    cover: shibaCover,
    gallery: [shiba1, shiba2, shiba3],
    role: "Game Developer / Artist",
    engine: "Unity · C#",
    perspective: "2D",
    tags: ["Virtual Pet", "2D Art", "Unity"],
    features: [
      "Pet needs system",
      "Multiple illustrated rooms",
      "Accessories and outfits",
      "Soft, cozy visual direction",
    ],
    process: [
      {
        title: "Environment art",
        description:
          "Designing each room to feel like part of the same cozy visual world.",
      },
      {
        title: "Interaction",
        description:
          "Keeping the care loop simple enough that personality and art stay at the center.",
      },
    ],
    link: "https://avelloxy.itch.io/dream-life",
  },
];

export type ArtworkCategory =
  | "All"
  | "Environment"
  | "Illustration"
  | "Concept Art"
  | "Mixed Media";

export interface ArtworkItem {
  id: number;
  title: string;
  category: Exclude<ArtworkCategory, "All">;
  year: string;
  image: string;
  medium: string;
}

export const artworks: ArtworkItem[] = [
  {
    id: 1,
    title: "Dream Life — Bathroom",
    category: "Environment",
    year: "2023",
    image: artBathroom,
    medium: "Digital environment art",
  },
  {
    id: 2,
    title: "Dream Life — Kitchen",
    category: "Environment",
    year: "2023",
    image: artKitchen,
    medium: "Digital environment art",
  },
  {
    id: 3,
    title: "Living Room Study",
    category: "Environment",
    year: "2024",
    image: artRoom,
    medium: "Digital environment concept",
  },
  {
    id: 4,
    title: "Game Room",
    category: "Concept Art",
    year: "2023",
    image: artGameRoom,
    medium: "Interior concept art",
  },
  {
    id: 5,
    title: "Fragmenti Doma",
    category: "Mixed Media",
    year: "2025",
    image: artFragment,
    medium: "Mixed media collage",
  },
  {
    id: 6,
    title: "Potion Commotion",
    category: "Illustration",
    year: "2025",
    image: artWizard,
    medium: "Digital illustration",
  },
  {
    id: 7,
    title: "Julia",
    category: "Concept Art",
    year: "2024",
    image: artJulia,
    medium: "Character concept sheet",
  },
  {
    id: 8,
    title: "Tišina Između Nas",
    category: "Mixed Media",
    year: "2025",
    image: artTisina,
    medium: "Mixed media",
  },
  {
    id: 9,
    title: "Sunflower",
    category: "Illustration",
    year: "2024",
    image: artSunflower,
    medium: "Digital painting",
  },
  {
    id: 10,
    title: "You Were Always Coming",
    category: "Concept Art",
    year: "2025",
    image: artComing,
    medium: "Key art",
  },
  {
    id: 11,
    title: "Will They Stay Together?",
    category: "Illustration",
    year: "2024",
    image: artStay,
    medium: "Visual novel key art",
  },
  {
    id: 12,
    title: "Dream Life — Main Menu",
    category: "Illustration",
    year: "2023",
    image: artMenu,
    medium: "UI illustration",
  },
];

export const experience = [
  {
    year: "2025 — Present",
    role: "Independent Game Developer",
    place: "Avellox Studio",
    text:
      "Developing narrative-focused games and visual experiments, with a particular interest in environmental storytelling, cultural memory and handcrafted interaction.",
    tags: ["Unity", "C#", "Narrative Design", "Environment Design"],
  },
  {
    year: "2025",
    role: "UX/UI Intern",
    place: "Plus Ultra Studio",
    text:
      "Worked on client-facing interfaces in Figma, from wireframes and flows to refined prototypes and reusable design systems.",
    tags: ["Figma", "Prototyping", "UX/UI", "Collaboration"],
  },
  {
    year: "2025",
    role: "Exhibition Artist",
    place: "GROKA × Plus Ultra",
    text:
      "Presented mixed-media work in a group exhibition and learned how to prepare, curate and communicate a personal visual language in a physical space.",
    tags: ["Mixed Media", "Acrylic", "Exhibition"],
  },
  {
    year: "2023",
    role: "Game Jam Participant",
    place: "Talent Akademija × Alchemy Studio",
    text:
      "Co-created a branching narrative project under a 48-hour deadline, balancing scope, storytelling, art direction and team communication.",
    tags: ["Game Jam", "Narrative", "Teamwork"],
  },
  {
    year: "2023 — 2024",
    role: "Game Development",
    place: "International Burch University",
    text:
      "Built early Unity projects across mechanics, level design, 2D art and animation, including The Haunting of Ducky Holmes.",
    tags: ["Unity", "C#", "2D Art", "Animation"],
  },
];

export const toolGroups = [
  {
    title: "Game Development",
    tools: ["Unity", "C#", "Ren'Py"],
  },
  {
    title: "Visual Development",
    tools: ["Photoshop", "Blender", "3DCoat"],
  },
  {
    title: "Design",
    tools: ["Figma", "UI/UX", "Prototyping"],
  },
  {
    title: "Workflow",
    tools: ["Git", "GitHub", "Vercel"],
  },
];
