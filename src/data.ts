export const meta = {
  name: 'An Duong',
  role: 'Software Engineer',
  tagline: 'Computer Information Systems Student Seeking a Software Engineering Internship',
  bio: `I started off majoring in Sport Management, but COVID changed the direction of my major and led me to switch fields. Since then, I have been pursuing a CIS Programming concentration at The University of Akron, and I haven’t looked back since. I'm excited to learn more how I can apply my skills and passion for software development in a real-world setting, and I'm eager to contribute to a dynamic team while continuing to grow as a developer.`,
  email: 'ad167@uakron.edu',
  github: 'https://github.com/anduong10',
  linkedin: 'https://www.linkedin.com/in/an-duong-2033a115b/',
  handshake:'https://app.joinhandshake.com/profiles/anduong',
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
  avatar: `${import.meta.env.BASE_URL}avatar.jpg`,
  avatar2: `${import.meta.env.BASE_URL}avatar2.jpg`,
  avatar3: `${import.meta.env.BASE_URL}avatar3.jpg`,
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
    title: 'Can I go Undefeated? (NBA Simulator)',
    description:
      'Built a client-side React and TypeScript web game where users assemble cross-era NBA rosters and attempt an undefeated 82–0 season, with all simulation logic running in the browser.',
    tags: ['React', 'TypeScript', 'Tailwind CSS ', 'DaisyUI','Client-Side Simulation'],
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
    company: 'The University of Akron',
    role: 'Undergraduate Research Assistant — Cyber Forensics ',
    period: 'Jan 2023 – Apr 2023',
    bullets: [
      'Contributing to the development and testing of digital investigation tools used to analyze cybersecurity incidents and process forensic evidence.',
      'Supporting the collection, preservation, and analysis of digital evidence following standard forensic procedures to maintain integrity and chain of custody.',
      'Assisting a faculty-led cyber forensics summer camp by preparing technical presentation materials and demonstrations for high school students.',
    ],
  },
  
]
