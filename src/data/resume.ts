import type { ResumeData } from "./types.ts";

export const resumeData: ResumeData = {
  personal: {
    name: "Hiren More",
    title: "Full Stack .NET Developer",
    tagline:
      "6+ years building scalable web applications with .NET Core, React & Angular. Turning complex problems into clean, performant solutions.",
    location: "Navsari, India",
    email: "hirenmore256@gmail.com",
    github: "https://github.com/HirenMore",
    linkedin: "https://linkedin.com/in/hiren-more",
    yearsOfExperience: 6,
  },
  skills: [
    // Frontend
    { name: "React", level: 90, category: "frontend" },
    { name: "TypeScript", level: 88, category: "frontend" },
    { name: "Angular", level: 82, category: "frontend" },
    { name: "JavaScript", level: 85, category: "frontend" },
    { name: "HTML5 / CSS3", level: 85, category: "frontend" },
    // Backend
    { name: ".NET Core / C#", level: 92, category: "backend" },
    { name: "Web API / REST", level: 90, category: "backend" },
    { name: "Entity Framework Core", level: 82, category: "backend" },
    { name: "MongoDB", level: 82, category: "backend" },
    { name: "MySQL / SQL Server", level: 80, category: "backend" },
    // Tooling
    { name: "Git", level: 88, category: "tooling" },
    { name: "Agile / Scrum", level: 85, category: "tooling" },
    { name: "Cypress / Mocha", level: 80, category: "tooling" },
    { name: "GKE / JIRA", level: 72, category: "tooling" },
  ],
  experience: [
    {
      id: "exp-1",
      company: "Solidatus",
      role: "Full Stack Engineer",
      startDate: "Dec 2022",
      endDate: "Present",
      location: "Pune, India",
      description:
        "Building and evolving a data lineage platform used by enterprise clients, with a focus on full-stack feature delivery, test automation, and security.",
      highlights: [
        "Trained 3 engineers in .NET, React, and TDD, increasing team output by 15%",
        "Engineered core full-stack features adopted by 2,000+ users, cutting bug reports by 20% through rigorous code reviews",
        "Automated 30+ tests (Cypress, Mocha, .NET), reducing regression errors by 25%",
        "Patched a critical MessagePack vulnerability within 48 hours, safeguarding data for 1,000+ users",
        "Boosted API performance by 20% via MongoDB optimizations, reducing average response times by 300ms",
      ],
      technologies: [
        ".NET Core",
        "C#",
        "React",
        "TypeScript",
        "MongoDB",
        "Cypress",
        "Mocha",
        "TDD",
      ],
    },
    {
      id: "exp-2",
      company: "Happiest Minds Technologies",
      role: "Senior Software Engineer",
      startDate: "Jun 2021",
      endDate: "Dec 2022",
      location: "Pune, India",
      description:
        "Delivered full-stack solutions for healthcare-education and assessment publishing domains.",
      highlights: [
        "Deployed .NET 6 applications for a healthcare-education platform serving 5,000+ monthly users",
        "Engineered full-stack web applications for assessment publishing, serving 1,000+ users",
        "Resolved 100+ ServiceNow incidents, reducing system downtime by 10%",
        "Received the Insta Award for dedication and quick learning (Sep 2021)",
      ],
      technologies: [
        ".NET 6",
        "C#",
        "Angular",
        "TypeScript",
        "SQL Server",
        "ServiceNow",
      ],
    },
    {
      id: "exp-3",
      company: "Swabhav Techlabs Solutions",
      role: "Full Stack Developer",
      startDate: "Aug 2019",
      endDate: "Jun 2021",
      location: "Andheri, India",
      description:
        "Built and maintained web applications for exhibition and media industry clients.",
      highlights: [
        "Constructed a full-stack web app with a custom audio player, increasing user engagement by 30%",
        "Collaborated directly with clients to define requirements, ensuring accurate delivery",
        "Improved application efficiency by 15%, enhancing data quality and operability",
        "Developed and maintained applications across exhibition and media domains",
      ],
      technologies: [".NET", "C#", "Angular", "JavaScript", "MySQL"],
    },
  ],
  projects: [
    {
      id: "proj-1",
      name: "Portfolio Site",
      description:
        "Personal resume site built with React 19, Tailwind v4, Framer Motion, and Bun. Fully static and deployed to GitHub Pages.",
      technologies: [
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "Framer Motion",
        "Bun",
        "Vite",
      ],
      githubUrl: "https://github.com/HirenMore/portfolio",
      liveUrl: "https://HirenMore.github.io/portfolio",
      featured: true,
    },
    {
      id: "proj-2",
      name: "College Campus App",
      description:
        "Award-winning full-stack campus management system with attendance tracking, timetable, book store, and assignment manager — awarded Project of the Year at MGITER (2019).",
      technologies: [".NET", "C#", "Angular", "MySQL", "HTML5", "CSS3"],
      featured: true,
    },
    {
      id: "proj-3",
      name: "Media & Exhibition Platform",
      description:
        "Full-stack web application for the exhibition and media domain, featuring a custom audio player that boosted user engagement by 30%.",
      technologies: [".NET", "C#", "Angular", "JavaScript", "MySQL"],
      featured: false,
    },
  ],
};
