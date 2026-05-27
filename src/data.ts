export const meta = {
  name: 'An Duong',
  role: 'Software Engineer',
  tagline: 'Computer Information Systems Student Seeking a Software Engineering Internship',
  bio: `I started off majoring in Sport Management, but COVID changed the direction of my major and led me to switch fields. Since then, I have been pursuing a CIS Programming concentration at The University of Akron, and I haven’t looked back since. I'm excited to learn more how I can apply my skills and passion for software development in a real-world setting, and I'm eager to contribute to a dynamic team while continuing to grow as a developer.`,
  email: 'ad167@uakron.edu',
  github: 'https://github.com/anduong10',
  linkedin: 'https://www.linkedin.com/in/an-duong-2033a115b/',
  handshake:'https://app.joinhandshake.com/profiles/anduong',
  resumeUrl: '/resume.pdf',
  avatar: '/avatar.jpg',
  avatar2: '/avatar2.jpg',
  avatar3: '/avatar3.jpg',
}

export const skills: { category: string; items: string[] }[] = [
  {
    category: 'Language',
    items: ['Java, Python, JavaScript, TypeScript, C++, SQL, HTML5, CSS3'],
  },
  {
    category: 'Frontend',
    items: ['React, Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['FastAPI, REST API design, JWT authentication'],
  },
  {
    category:'Database',
    items:['PostgreSQL, SQLAlchemy ORM']
  },
  {
    category:'Tools',
    items:['Git, GitHub, VS Code'],
  },
]

export const projects: {
  title: string
  description: string
  tags: string[]
  github?: string
  live?: string
}[] = [
  {
    title: 'Tournament Dashboard',
    description:
      'Full-stack sports platform (React/TypeScript + FastAPI + PostgreSQL) for managing tournaments, leagues, and pickup games. Features a 15+ endpoint REST API with JWT auth, bcrypt, and SQLAlchemy ORM, plus binary-tree bracket generation and a round-robin league scheduler.',
    tags: ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Tailwind CSS', 'REST API'],
    github: '#',
    live: '#',
  },
  {
    title: 'This Website right here!',
    description:
      'A Simple React + Typescript website that showcase my skills and experiences.',
    tags: ['React', 'Typescript', 'Tailwind'],
    github: '#',
  },
  {
    title: 'Roblox Game',
    description:
      'Developing a multiplayer casino-style game in Roblox Studio using Luau, building interactive mini-games with randomized outcomes, virtual currency, and reward systems.',
    tags: ['Luau', 'Roblox Studio', 'Client-Server Architecture', 'OOP'],
    github: '#',
    live: '#',
  },
]

export const experience: {
  company: string
  role: string
  period: string
  bullets: string[]
}[] = [
  {
    company: 'Amazon',
    role: 'Warehouse Associate ',
    period: 'Jan 2023 – Apr 2023',
    bullets: [
      'Sorted and routed packages by destination using handheld scanners and warehouse systems, maintaining high accuracy in a fast-paced environment.',
      'Loaded and unloaded pallets while meeting throughput targets and quality standards.',
      '•	Verified package labels and corrected routing errors to reduce downstream delivery mistakes.',
    ],
  },
  
]
