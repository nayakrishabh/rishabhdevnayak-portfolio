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

export const projects = [
  {
    title: "Spacious Places",
    platform: "Unity • VR (Meta Quest)",
    studio: "Carina Softlabs Inc.",
    link: "https://meta.com/experiences/spacious-places/8410008925778451",
    description:
      "Built four gameplay modules: a custom Meta Guardian system for the VR headset, an in-level pause menu, an IAP locking system for demo vs. full-game access, and a menu refinement plus data-reset module that preserves IAP purchase flags.",
    tags: ["Unity", "VR", "C#", "Meta Quest", "IAP"],
  },
  {
    title: "Gods Gang",
    platform: "Unity • Mobile",
    studio: "Carina Softlabs Inc.",
    link: "https://play.google.com/store/apps/details?id=com.techymaugames.godsgang&hl=en_IN",
    description:
      "Developed complete playable character systems including movement, animations, combat abilities, collectible items, and Scriptable Object-based level data. Built modular special ability systems and an ambient audio system with distance-based attenuation and interior-exterior audio blending.",
    tags: ["Unity", "Mobile", "C#", "Play Store", "Gameplay"],
  },
  {
    title: "Shogun Heist",
    platform: "Roblox",
    studio: "Carina Softlabs Inc.",
    link: "https://roblox.com/games/111093934039629/Shogun-Heist",
    description:
      "Engineered a dynamic character-swapping challenge feature; diagnosed and resolved runtime crashes by programmatically generating and applying Humanoid Descriptions to custom Roblox character models for stable session flow.",
    tags: ["Roblox", "Lua", "Multiplayer"],
  },
];

export const skills = [
  {
    category: "Game Engines",
    items: ["Unity", "Roblox Studio", "Unreal Engine (Blueprints)"],
  },
  {
    category: "Programming",
    items: ["C#", "C++", "Lua", "Gameplay Programming", "Object-Oriented Design"],
  },
  {
    category: "Game Development",
    items: [
      "Mobile Games", "VR / AR / MR", "Multiplayer", "UI Systems",
      "Animation Systems", "Game Mechanics Design", "Rigidbody Physics",
      "Collision Systems", "Frame Rate Optimization", "Memory Optimization",
      "Player Interaction",
    ],
  },
  {
    category: "Tools & Workflow",
    items: ["Git", "Version Control", "Profiling & Optimization", "Debugging"],
  },
];

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
