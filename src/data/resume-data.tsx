import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/icons";

export const RESUME_DATA = {
  name: "Jesús Ángel Neri Hernández",
  initials: "JNH",
  location: "León, Guanajuato, Mexico",
  locationLink: "https://www.google.com/maps/place/León,+Guanajuato",
  about: "Interactive Design student with strong Computer Science skills, focused on 3D engines, real-time rendering, and creative tool development.",
  summary: (
    <>
        Digital Interactive Design student at Ibero León with a background in Computer Science. Specialized in real-time 3D engines, procedural game design, and audiovisual production, with additional experience in web technologies. Passionate about creating interactive experiences across media and platforms.
    </>
  ),
  avatarUrl: "https://media.licdn.com/dms/image/v2/D4E03AQEnw1G270NM0Q/profile-displayphoto-shrink_800_800/B4EZVsn8RyHMAo-/0/1741284165006?e=1752710400&v=beta&t=AWpd7Xy2vGzuT6Kr6mSW0cmt4gxo9aOBJGE6BYjaa1o", // You can link your profile picture here
  personalWebsiteUrl: "https://www.jesusneri1024.com",
  contact: {
    email: "jesusneri1024@outlook.com",
    tel: "+52 477 256 6504",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jesusneri1024",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/jesusneri1024",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/jesusneri1024",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidad Iberoamericana León",
      degree: "B.A. in Digital Interactive Design",
      start: "2022",
      end: "2026",
    },
    {
      school: "Universidad de Guanajuato",
      degree: "B.Sc. in Computer Science (1 year)",
      start: "2021",
      end: "2022",
    },
    {
      school: "Instituto Leonés High School",
      degree: "Bronze Medalist, 12th National Physics Talent Competition",
      start: "2017",
      end: "2020",
    },
  ],
  work: [
    {
      company: "12 Line Inmobiliaria",
      link: "",
      badges: ["React", "MongoDB", "Branding", "Media Production"],
      title: "Web Developer and Brand Designer",
      logo: undefined,
      start: "2023",
      end: "2024",
      description: (
        <>
        Designed and deployed a fully responsive real estate platform using React and MongoDB, featuring dynamic property listings, multimedia content, and real-time backend integration.
        </>
      ),
    },
  ],
  skills: [
    "C++",
    "C#",
    "Python",
    "JavaScript",
    "React",
    "MongoDB",
    "OpenGL",
    "Unity",
    "OpenCV",
    "Maya",
    "Blender",
    "DaVinci Resolve",
    "Photoshop",
    "Linux",
    "AWS",
  ],
  projects: [
    {
      title: "MyEngine",
      techStack: ["C++", "OpenGL", "GLFW", "GLM"],
      description:
        "A modular C++ graphics engine using OpenGL 4.1 with structured architecture for custom real-time rendering and input systems.",
      link: {
        label: "github.com/jesusneri1024/myengine",
        href: "https://github.com/jesusneri1024/myengine",
      },
    },
    {
      title: "SynapseRunner",
      techStack: ["Unity", "C#", "Procedural Generation"],
      description:
        "Retro-futuristic endless runner game featuring procedural terrain, FPS mechanics, and collectible-based upgrades.",
      link: {
        label: "github.com/jesusneri1024/SynapseRunner",
        href: "https://github.com/jesusneri1024/SynapseRunner",
      },
    },
    {
      title: "Mentes en Juego (Documentary)",
      techStack: ["DaVinci Resolve", "Production"],
      description:
        "Short documentary on mental health in athletes. Co-directed, shot, and edited using RAW footage and professional post-production workflows.",
      link: {
        label: "Watch on YouTube",
        href: "https://www.youtube.com/watch?v=CIIWojlIwjw",
      },
    },
    {
      title: "3D Modeling Reel",
      techStack: ["Maya", "Hard Surface Modeling"],
      description:
        "Showcase of vehicle and prop modeling with optimized polygon topology and attention to scale and proportion.",
      link: {
        label: "Watch on YouTube",
        href: "https://youtu.be/K-TTZHp6Uo0",
      },
    },
    {
      title: "3D Character Animation Reel",
      techStack: ["Maya", "Rigging", "Animation"],
      description:
        "3D animation in Maya using various techniques, including rig implementation, weight painting, parenting, and expressive motion through facial and body animations.",
      link: {
        label: "Watch on YouTube",
        href: "https://youtu.be/I_ElFrciIiQ",
      },
    },
  ],
} as const;
