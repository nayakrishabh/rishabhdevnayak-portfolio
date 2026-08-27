// 👇 Update your portfolio content here. Simple, single source of truth.

export const profile = {
  name: "Rishabh Dev Nayak",
  title: "Game Programmer",
  tagline: "C# & C++ • Unity • Unreal • VR/AR/MR",
  summary:
    "Junior Unity Developer specializing in immersive VR/AR/MR experiences, multiplayer systems, and real-time gameplay interaction. I design core game mechanics, animation systems, in-game UI, and player-triggered logic while optimizing frame rate and memory across PC, mobile, and VR.",
  location: "Raipur, Chhattisgarh, India",
  email: "rdnayak26@gmail.com",
  phone: "+91-7000941661",
  linkedin: "https://linkedin.com/in/rishabh-dev-nayak-0065a5201",
  resumeUrl: "/RishabhDevNayak_Resume.pdf",
};

export const experience = [
  {
    company: "Carina Softlabs Inc.",
    role: "Junior Unity Developer",
    location: "Raipur / Indore, India",
    period: "Jul 2025 – July 2026",
    points: [
      "Develop VR, AR, and MR applications in Unity, focusing on interaction systems, scene flow, and platform-specific frame rate optimization targeting Meta Quest hardware.",
      "Implement multiplayer features: player synchronization, session flow, and real-time gameplay interactions using version control and Agile/Scrum workflows.",
      "Build and iterate on in-game UI, player-triggered events, and gameplay logic with animation state machines.",
      "Collaborate with designers and artists in sprint-based cycles to refine features, debug issues, and maintain stable builds.",
    ],
  },
  {
    company: "Carina Softlabs Inc.",
    role: "Unity Developer Intern",
    location: "Raipur / Indore, India",
    period: "Mar 2025 – Jun 2025",
    points: [
      "Assisted in implementing gameplay mechanics, UI screens, and interaction logic for Unity-based projects.",
      "Supported bug fixing, memory optimization, and build preparation for multiple target platforms.",
    ],
  },
  {
    company: "Freelance",
    role: "Game Developer",
    location: "Raipur, India",
    period: "Jul 2024 – Present",
    points: [
      "Design and develop small-scale games using Unity and Unreal Engine for PC and mobile platforms.",
      "Prototype mechanics, build core loops, and integrate UI, audio, animation state machines, and VFX.",
      "Write clean, reusable C# and Blueprint code focused on maintainability and performance.",
    ],
  },
  {
    company: "MBS Games",
    role: "Software Engineer Intern",
    location: "Raipur, India",
    period: "Aug 2023 – Jul 2024",
    points: [
      "Contributed to game features in Unity: player controls, Rigidbody physics, collision systems, basic AI, and UI components.",
      "Collaborated on debugging, profiling, and memory optimization of gameplay systems and scenes.",
    ],
  },
];

export interface ProjectPlatform {
  name: string;
  url: string;
}

export interface Project {
  title: string;
  slug: string;
  platform: string;
  studio: string;
  link: string;
  image: string;
  role: string;
  year: string;
  engine: string;
  status: string;
  description: string;
  highlights: string[];
  platforms: ProjectPlatform[];
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Spacious Places",
    slug: "spacious-places",
    platform: "Unity • VR (Meta Quest)",
    studio: "Carina Softlabs Inc.",
    link: "https://meta.com/experiences/spacious-places/8410008925778451",
    image: "/SpaciousPlaces.png",
    role: "Junior Unity Developer",
    year: "2025",
    engine: "Unity",
    status: "Live",
    description:
      "Built four gameplay modules: a custom Meta Guardian system for the VR headset, an in-level pause menu, an IAP locking system for demo vs. full-game access, and a menu refinement plus data-reset module that preserves IAP purchase flags.",
    highlights: [
      "Built a custom Meta Guardian system for VR headset boundary management and player safety.",
      "Developed an in-level pause menu with save, settings, and quit functionality.",
      "Implemented an IAP locking system to gate demo vs. full-game content access.",
      "Created a menu refinement and data-reset module that preserves IAP purchase flags across sessions.",
    ],
    platforms: [
      { name: "Meta Quest", url: "https://meta.com/experiences/spacious-places/8410008925778451" },
    ],
    tags: ["Unity", "VR", "C#", "Meta Quest", "IAP"],
  },
  {
    title: "Gods Gang",
    slug: "gods-gang",
    platform: "Unity • Mobile",
    studio: "Carina Softlabs Inc.",
    link: "https://play.google.com/store/apps/details?id=com.techymaugames.godsgang&hl=en_IN",
    image: "/GodsGang_Playstore.png",
    role: "Junior Unity Developer",
    year: "2025",
    engine: "Unity",
    status: "Live",
    description:
      "Developed complete playable character systems including movement, animations, combat abilities, collectible items, and Scriptable Object-based level data. Built modular special ability systems and an ambient audio system with distance-based attenuation and interior-exterior audio blending.",
    highlights: [
      "Developed complete playable character systems: movement, animations, combat abilities, and collectible items.",
      "Built modular special ability systems using Scriptable Objects for data-driven level configuration.",
      "Implemented an ambient audio system with distance-based attenuation and interior-exterior audio blending.",
      "Designed and integrated Scriptable Object-based level data for flexible content authoring.",
    ],
    platforms: [
      { name: "Google Play", url: "https://play.google.com/store/apps/details?id=com.techymaugames.godsgang&hl=en_IN" },
    ],
    tags: ["Unity", "Mobile", "C#", "Play Store", "Gameplay"],
  },
  {
    title: "Shogun Heist",
    slug: "shogun-heist",
    platform: "Roblox",
    studio: "Carina Softlabs Inc.",
    link: "https://roblox.com/games/111093934039629/Shogun-Heist",
    image: "/ShogunHeist.png",
    role: "Junior Unity Developer",
    year: "2025",
    engine: "Roblox Studio",
    status: "Live",
    description:
      "Engineered a dynamic character-swapping challenge feature; diagnosed and resolved runtime crashes by programmatically generating and applying Humanoid Descriptions to custom Roblox character models for stable session flow.",
    highlights: [
      "Engineered a dynamic character-swapping challenge feature for varied gameplay scenarios.",
      "Diagnosed and resolved runtime crashes related to custom Roblox character models.",
      "Programmatically generated and applied Humanoid Descriptions for stable session flow.",
      "Ensured multiplayer stability across character-switching edge cases.",
    ],
    platforms: [
      { name: "Roblox", url: "https://roblox.com/games/111093934039629/Shogun-Heist" },
    ],
    tags: ["Roblox", "Lua", "Multiplayer"],
  },
  {
    title: "Red Bamboo",
    slug: "red-bamboo",
    platform: "Roblox",
    studio: "Carina Softlabs Inc.",
    link: "https://www.roblox.com/games/100270088910600/Red-Bamboo",
    image: "",
    role: "Junior Unity Developer",
    year: "2025",
    engine: "Roblox Studio",
    status: "Live",
    description:
      "Developed the game's initial loading flow and startup sequence. Implemented a custom inventory system with item management and UI integration. Refined tool interactions and created a custom spawning logic for in-game tools. Built a complete UI system covering all game screens and HUD elements. Designed and implemented enemy behavior logic and AI systems.",
    highlights: [
      "Developed the game's initial loading flow and startup sequence for smooth player onboarding.",
      "Implemented a custom inventory system with item management and full UI integration.",
      "Created custom spawning logic and refined tool interactions for in-game items.",
      "Built a complete UI system covering all game screens and HUD elements.",
      "Designed and implemented enemy behavior logic and AI systems.",
    ],
    platforms: [
      { name: "Roblox", url: "https://www.roblox.com/games/100270088910600/Red-Bamboo" },
    ],
    tags: ["Roblox", "Lua", "Multiplayer"],
  },
  {
    title: "Fantasy Mall 2",
    slug: "fantasy-mall-2",
    platform: "Unity • PC",
    studio: "MBSGames",
    link: "https://rahulmartin.itch.io/fantasymall2",
    image: "/FantasyMall2_Image.gif",
    role: "Software Engineer Intern",
    year: "2024",
    engine: "Unity",
    status: "Live",
    description:
      "Worked on core gameplay systems including Game Optimization, interaction mechanics, Save System, Android compatibility, and economy balancing.",
    highlights: [
      "Worked on core gameplay systems: interaction mechanics, Save System, and economy balancing.",
      "Performed Game Optimization and ensured Android compatibility for smooth mobile performance.",
      "Built modular systems for inventory management and level progression.",
    ],
    platforms: [
      { name: "itch.io", url: "https://rahulmartin.itch.io/fantasymall2" },
    ],
    tags: ["Unity", "C#", "PC", "Gameplay", "UI"],
  },
];

export const skills = [
  {
    category: "Game Engines",
    items: [
      { name: "Unity", icon: "box" },
      { name: "Roblox Studio", icon: "blocks" },
      { name: "Unreal Engine (Blueprints)", icon: "component" },
    ],
  },
  {
    category: "Programming",
    items: [
      { name: "C#", icon: "hash" },
      { name: "C++", icon: "code2" },
      { name: "Lua", icon: "file-code2" },
      { name: "Gameplay Programming", icon: "gamepad2" },
      { name: "Object-Oriented Design", icon: "boxes" },
    ],
  },
  {
    category: "Game Development",
    items: [
      { name: "Mobile Games", icon: "smartphone" },
      { name: "VR / AR / MR", icon: "headset" },
      { name: "Multiplayer", icon: "users" },
      { name: "UI Systems", icon: "monitor" },
      { name: "Animation Systems", icon: "film" },
      { name: "Game Mechanics Design", icon: "cog" },
      { name: "Rigidbody Physics", icon: "atom" },
      { name: "Collision Systems", icon: "zap" },
      { name: "Frame Rate Optimization", icon: "gauge" },
      { name: "Memory Optimization", icon: "database" },
      { name: "Player Interaction", icon: "mouse-pointer2" },
    ],
  },
  {
    category: "Tools & Workflow",
    items: [
      { name: "Git", icon: "git-branch" },
      { name: "Version Control", icon: "git-compare" },
      { name: "Profiling & Optimization", icon: "trending-up" },
      { name: "Debugging", icon: "bug" },
    ],
  },
];

/**
 * Skills page sidecar metadata — additive, doesn't change the `skills` shape.
 *
 * rarity: "legendary" | "epic" | "rare" (visual size + glow)
 * level:  0–100 (gauge fill / tooltip)
 * note:   short context shown in the hover tooltip
 */
export type SkillRarity = "legendary" | "epic" | "rare";

export const skillMeta: Record<string, { rarity: SkillRarity; level: number; note: string }> = {
  "Unity":                     { rarity: "legendary", level: 90, note: "Daily driver — shipped 5 titles" },
  "Roblox Studio":             { rarity: "epic",      level: 80, note: "Fantasy Mall 2, live ops" },
  "Unreal Engine (Blueprints)": { rarity: "rare",     level: 55, note: "Certified 2023, prototype work" },
  "C#":                        { rarity: "legendary", level: 92, note: "Core language, 3+ yrs" },
  "C++":                       { rarity: "epic",      level: 70, note: "SDL2 engine experiments" },
  "Lua":                       { rarity: "epic",      level: 78, note: "Roblox gameplay scripting" },
  "Gameplay Programming":      { rarity: "legendary", level: 90, note: "Systems, state machines, combat" },
  "Object-Oriented Design":    { rarity: "epic",      level: 82, note: "Clean, modular gameplay code" },
  "Mobile Games":              { rarity: "epic",      level: 85, note: "Play Store + App Store ships" },
  "VR / AR / MR":              { rarity: "epic",      level: 72, note: "Meta Quest + WebXR builds" },
  "Multiplayer":               { rarity: "epic",      level: 75, note: "Netcode & session systems" },
  "UI Systems":                { rarity: "epic",      level: 80, note: "Menus, HUDs, inventory" },
  "Animation Systems":         { rarity: "epic",      level: 74, note: "Animator trees, blend states" },
  "Game Mechanics Design":     { rarity: "legendary", level: 88, note: "Core loops, economy design" },
  "Rigidbody Physics":         { rarity: "epic",      level: 76, note: "Physics-driven gameplay" },
  "Collision Systems":         { rarity: "epic",      level: 78, note: "Detection, triggers, layers" },
  "Frame Rate Optimization":   { rarity: "epic",      level: 82, note: "60fps on low-end mobile" },
  "Memory Optimization":       { rarity: "rare",      level: 70, note: "Pooling, asset streaming" },
  "Player Interaction":        { rarity: "epic",      level: 80, note: "Input, feedback, feel" },
  "Git":                       { rarity: "epic",      level: 84, note: "Team workflows, branching" },
  "Version Control":           { rarity: "epic",      level: 82, note: "Clean history, PR reviews" },
  "Profiling & Optimization":  { rarity: "epic",      level: 80, note: "Unity Profiler, frame debugging" },
  "Debugging":                 { rarity: "epic",      level: 86, note: "Root-cause, not band-aids" },
};

export const DEFAULT_SKILL_META: { rarity: SkillRarity; level: number; note: string } = {
  rarity: "rare",
  level: 60,
  note: "Working knowledge",
};

export const education = [
  {
    school: "Shri Shankaracharya Institute of Professional Management & Technology",
    degree: "B.Tech, Computer Science",
    period: "Oct 2020 – May 2024",
    location: "Raipur, India",
  },
  {
    school: "Shubhkamna Institute",
    degree: "Certificate Course, Unreal Engine",
    period: "Sep 2022 – Jul 2023",
    location: "Raipur, India",
  },
];
