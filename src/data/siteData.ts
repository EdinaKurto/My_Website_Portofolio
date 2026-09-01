import hero from "../photos/Hero_Page.png";
import me from "../photos/me.png";
import kenai from "../photos/kenai.png";

import hhrCover from "../photos/Her_Hands_Remember_cover.png";
import hhrLiving from "../photos/Her_Hands_Remember_living_room.png";
import hhrKitchen from "../photos/Her_Hands_Remember_kitchen.png";
import hhrForest from "../photos/Her_Hands_Remember_forest.png";
import hhrPast1 from "../photos/Her_Hands_Remember_past.png";
import hhrPast2 from "../photos/Her_Hands_Remember_past2.png";

import fortuneCover from "../photos/FortuneTeller_cover.png";
import fortune1 from "../photos/FortuneTeller_1.png";
import fortune2 from "../photos/FortuneTeller_2.png";

import TWWMHBCover from "../photos/TWWMHB_Cover.png";
import TWW1 from "../photos/TWWMHB1.png";
import TWW2 from "../photos/FortuneTeller_2.png";

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
import shibaOldKitchen from "../photos/old_dev/low_kitchen_op.png";
import shibaOldLivingRoom from "../photos/old_dev/Living_Room_Old.png";
import shibaOldCharacter from "../photos/old_dev/Shiba_old_1.png";

import d13Cover from "../photos/d13_cover.png";
import d1 from "../photos/d1.png";
import d2 from "../photos/d2.png";
import d3 from "../photos/d3.png";
import d4 from "../photos/d4.png";

import artBathroom from "../photos/artworks/Room_Bathroom.png";
import artKitchen from "../photos/artworks/New_Kitchen_2.png";
import artRoom from "../photos/artworks/Room_Game.png";
import artGameRoom from "../photos/artworks/Game_room.png";
import artFragment from "../photos/artworks/fragment_doma.jpg";
import artWizard from "../photos/artworks/Wizard.png";
import artJulia from "../photos/artworks/julia_ref_sheet.png";
import artTisina from "../photos/artworks/tisina.jpg";
import artComing from "../photos/artworks/YouWereComing.png";
import artStay from "../photos/artworks/WillTheyStay.png";
import artMenu from "../photos/artworks/Main_menu_new.png";

export { hero, me, kenai };

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
  credits?: {
    role: string;
    name: string;
    link: string;
  }[];
  developmentGallery?: string[];
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
    gallery: [hhrLiving, hhrKitchen, hhrForest],
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
    developmentGallery: [hhrPast1, hhrPast2],
  },
  {
    slug: "the-woman-who-missed-her-bus",
    title: "The Woman Who Missed Her Bus",
    type: "Visual Novel",
    year: "2026",
    status: "Released",
    description:
      "A quiet conversationunfolding near a forgotten bus stop.",
    longDescription:
      "A compact narrative experience focused on atmosphere, character voice and a strong sense of place. The project explores how much emotion can be created with a small setting and carefully controlled visual direction.",
    cover: TWWMHBCover,
    gallery: [TWW1, TWW2],
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
    developmentGallery: [fortune1, fortune2],
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
    link: "https://avelloxy.itch.io/the-woman-who-missed-her-bus",
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
      `Over the past few weeks, Vincent and his girlfriend Annie have been fighting. When you find Vincent sitting on the floor of his apartment, wrapped in a blanket and staring at static, it is clear that their relationship is close to breaking point.

As his childhood friend, you try to convince him that nothing is set in stone. Vincent is stubborn, and the mistakes he made will not be easy to undo, but the choices you make may help him decide whether the relationship is worth saving.

This game was made for the O2A2 VN Jam 2024, a micro visual novel jam with strict asset limitations and a 1,000-word limit.`,
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
    developmentGallery: [stay1, stay2],
    credits: [
      {
        role: "Voice actor",
        name: "SuzukiSae",
        link: "https://youtube.com/@suzukisae25?si=a_SyaMv_M8DOwHkf",
      },
      {
        role: "Tester",
        name: "TheJayDuck",
        link: "https://www.ardarmutcu.com/",
      },
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
    slug: "you-were-always-coming",
    title: "You Were Always Coming",
    type: "Narrative Game",
    year: "2025",
    status: "Released",
    description:
      "A narrative  told through a single conversation with someone who sees more than you say.",
    longDescription:
      `At the edge of nowhere, where the world forgets its name, a single tent waits — silent, still, inevitable.

Inside, the air is thick with time. Candles flicker. Velvet breathes secrets. And she is there.

The Fortune Teller.

She doesn’t ask who you are. She already knows.
She sees it in the way you hesitate before sitting.
Hears it in the breath you didn’t realize you were holding.
Reads it in the way your fingers tremble — not from cold, but memory.

You say nothing.

She deals three cards.

Each one is a mirror.
A shard of your past. A wound you buried. A choice you once denied.
And now, it returns — not to haunt, but to ask:

What will you do with what you carry?

You will choose.
And she will listen — not with pity, but with purpose.

There is no right answer.
Only honesty.
Only consequence.

You may only visit her once.
But in truth, you’ve always been walking toward that tent.
The question was never if.

It was always when.

Crafted within strict limits for a game jam, The Fortune Teller invites players to step into a moment suspended in time — to look inward, speak a truth, and walk away changed.`,
    cover: fortuneCover,
    gallery: [fortune1, fortune2],
    role: "Game Developer / Artist",
    engine: "Ren'Py",
    perspective: "Visual Novel",
    tags: ["Narrative", "Atmosphere", "Visual Novel"],
    features: [
      "Minimalist psychological visual novel",
      "One sprite and one background",
      "One sound effect and one song",
      "A single choice with lasting meaning",
      "Compact narrative structure",
      "Moody visual direction",
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
      `Welcome to your Shiba sanctuary!

Take care of an adorable Shiba Inu in this heartwarming virtual pet game, where affection is everything. Whether you're feeding them tasty treats, scrubbing off the mud from their latest adventure, or playing fun little games, your Shiba is always excited to see you.

Your job? Be the best companion ever.

Your Shiba has needs: hunger, cleanliness, and affection. It's up to you to keep them happy, healthy, and stylish. Watch your Shiba react with cute expressions and unlock fun outfits as you level up your bond. Every interaction matters—from head pats to bath time!

Whether you're checking in for a quick session or relaxing with your fluffy friend for longer, there's always something wholesome waiting for you.

Built with care for players who just want to relax, pet a Shiba, and feel good doing it.`,
    cover: shibaCover,
    gallery: [shiba1, shiba2, shiba3],
    role: "Game Developer / Artist",
    engine: "Unity · C#",
    perspective: "2D",
    tags: ["Virtual Pet", "2D Art", "Unity"],
    features: [
      "Pet needs care",
      "Multiple illustrated rooms",
      "Accessories and outfits",
      "Soft, cozy visual direction",
    ],
    developmentGallery: [shibaOldKitchen, shibaOldLivingRoom, shibaOldCharacter],
    credits: [
      {
        role: "Programmer",
        name: "TheJayDuck",
        link: "https://ardarmutcu.com/",
      },
      {
        role: "Programmer",
        name: "nobbele",
        link: "https://nobbele.itch.io/",
      },
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
  {
    slug: "docket-13",
    title: "Docket 13",
    type: "Horror Game",
    year: "2026",
    status: "Released",
    description:
      "Process patient files, uncover hidden records, and decide who disappears inside a looping psychological institution.",
    longDescription:
      `Every morning, the files arrive.

No one tells you where they come from.
No one tells you where they go after they are processed.

Inside the archive of Docket 13, your role is to review patient records for a forgotten psychiatric institution hidden somewhere beneath the system. Approve. Reject. Continue. The work is repetitive, mechanical, almost comforting... until the records begin changing.

Patients describe places that do not exist. Drawings appear inside sealed files. Some records reference conversations that never happened. Others contain names you swear you have already processed. At first, it feels like coincidence. Then the patients begin remembering you.

Beneath the official reports lies something hidden: confiscated sketches, erased histories, restricted notes, and fragments of a truth the institution is desperately trying to bury. The deeper you look, the more unstable the archive becomes. Records duplicate. Images distort. Entire identities vanish overnight.

The Board insists that compassion interferes with progress.
The files insist otherwise.

As the workload grows and the system tightens its grip, players must decide whether to obey the institution or quietly preserve the evidence hidden between the pages. Every action shapes the archive, alters future records, and changes what waits at the end of the thirteenth day.

Some patients are dangerous.
Some are lying.
Some are trying to warn you.`,
    cover: d13Cover,
    gallery: [d1, d2, d3, d13Cover, d4],
    role: "Game Developer / Artist",
    engine: "Unity · C#",
    perspective: "2D",
    tags: ["Psychological Horror", "2D Art", "Unity"],
    features: [
      "Patient file processing",
      "Hidden record discovery",
      "Identity manipulation",
      "Cozy visual direction",
    ],
    developmentGallery: [d1, d2, d3],
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
    link: "https://avelloxy.itch.io/docket-13",
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
    title: "Fragmenti Doma",
    category: "Mixed Media",
    year: "2025",
    image: artFragment,
    medium: "Mixed media collage",
  },
    {
    id: 2,
    title: "Bachelor Game Project - Her Hands Remember",
    category: "3D Environment",
    year: "2025",
    image: hhrCover,
    medium: "Video game environment",
  },
  {
    id: 3,
    title: "Dream Life — Bathroom",
    category: "Environment",
    year: "2023",
    image: artBathroom,
    medium: "Digital environment art",
  },
  {
    id: 4,
    title: "Dream Life — Kitchen",
    category: "Environment",
    year: "2023",
    image: artKitchen,
    medium: "Digital environment art",
  },
  {
    id: 5,
    title: "Living Room Study",
    category: "Environment",
    year: "2024",
    image: artRoom,
    medium: "Digital environment concept",
  },
  {
    id: 6,
    title: "Game Room",
    category: "Concept Art",
    year: "2023",
    image: artGameRoom,
    medium: "Interior concept art",
  },

  {
    id: 7,
    title: "Potion Commotion",
    category: "Illustration",
    year: "2025",
    image: artWizard,
    medium: "Digital illustration",
  },
  {
    id: 8,
    title: "Julia",
    category: "Concept Art",
    year: "2024",
    image: artJulia,
    medium: "Character concept sheet",
  },
  {
    id: 9,
    title: "Tišina Između Nas",
    category: "Mixed Media",
    year: "2025",
    image: artTisina,
    medium: "Mixed media",
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
