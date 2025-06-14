import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/icons";

import UnityGame from '../app/components/UnityGame';




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
  cvDownloadUrl: "/jesusnericv.pdf",
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
      link: "https://pagina-12-line-git-noerrorhero-jesus-neris-projects.vercel.app/",
      badges: ["React", "MongoDB", "Branding", "Media Production"],
      title: "Web Developer and Brand Designer",
      logo: undefined,
      start: "October 2023",
      end: "June 2024",
      description:"Designed and deployed a fully responsive real estate platform using React and MongoDB, supporting dynamic listings, multimedia content, and real-time backend integration. Developed the brand identity from scratch, including logo, color palette, and style guide. Produced visual media (photos, promotional content) and managed Meta ad campaigns to boost property visibility and client engagement.",
      figmaEmbedUrl: "https://embed.figma.com/proto/jwHs9AWW6FUulzmxvF2DXm/12Line-Inmobiliaria?node-id=4-28&page-id=0%3A1&embed-host=share&scaling=contain"
    },
    {
  company: "SOC Calolo",
  link: "",
  badges: ["Video Production", "Social Media", "Meta Ads", "Strategy"],
  title: "Digital Content Strategist and Media Producer",
  logo: undefined,
  start: "May 2024",
  end: "October 2024",
  description:"Produced promotional video content optimized for social media to increase audience engagement. Delivered educational sessions on Meta (Facebook/Instagram) Ads, explaining campaign strategies and performance metrics. Advised on content strategies, including posting frequency, tone, and visual branding for better audience reach.",
}
,
{
  company: "Sivoz",
  link: "",
  badges: [".NET MAUI", "C#", "REST APIs", "MVVM"],
  title: "Software Development Trainee – .NET MAUI Applications",
  logo: undefined,
  start: "December 2024",
  end: "May 2025",
  description: (
    <>
      Contributed to the development of cross-platform financial applications using C# and .NET MAUI. Assisted in integrating RESTful APIs for account data, transaction history, and secure authentication. Participated in agile workflows, code reviews, and debugging alongside senior developers, while gaining hands-on experience with MVVM architecture.
    </>
  ),
}
,
  ] , 
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
    ".NET",
    "Maya",
    "Blender",
    "DaVinci Resolve",
    "Photoshop",
    "Linux",
    "AWS",
    "DigitalOcean"
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
