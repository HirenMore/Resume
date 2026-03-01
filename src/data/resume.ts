import type { ResumeData } from "./types.ts";

export const resumeData: ResumeData = {
  personal: {
    name: "Hiren Patel",
    title: "Frontend Engineer",
    tagline: "Building fast, accessible, beautiful web experiences.",
    location: "India",
    email: "hiren@example.com",
    github: "https://github.com/hirenpatel",
    linkedin: "https://linkedin.com/in/hirenpatel",
    yearsOfExperience: 3,
  },
  skills: [
    { name: "React", level: 90, category: "frontend" },
    { name: "TypeScript", level: 85, category: "frontend" },
    { name: "Tailwind CSS", level: 88, category: "frontend" },
    { name: "Vite", level: 80, category: "tooling" },
    { name: "Node.js", level: 70, category: "backend" },
    { name: "Git", level: 85, category: "tooling" },
    { name: "REST APIs", level: 80, category: "backend" },
    { name: "Framer Motion", level: 75, category: "frontend" },
  ],
  experience: [
    {
      id: "exp-1",
      company: "Your Company",
      role: "Frontend Engineer",
      startDate: "Mar 2022",
      endDate: "Present",
      location: "Remote",
      description:
        "Building and maintaining web applications for clients across various industries.",
      highlights: [
        "Led migration from Create React App to Vite, reducing build time by 60%",
        "Built a reusable component library adopted across 3 products",
        "Mentored 2 junior developers on React best practices and TypeScript",
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "GraphQL", "Vite"],
    },
  ],
  projects: [
    {
      id: "proj-1",
      name: "Portfolio Site",
      description:
        "Personal resume site built with React 19, Tailwind v4, and Framer Motion. Fully static, deployed to GitHub Pages.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Bun",
      ],
      githubUrl: "https://github.com/hirenpatel/portfolio",
      liveUrl: "https://hirenpatel.github.io/portfolio",
      featured: true,
    },
    {
      id: "proj-2",
      name: "Component Library",
      description:
        "Accessible, typed React component library built with Radix UI primitives and Tailwind CSS.",
      technologies: ["React", "TypeScript", "Radix UI", "Tailwind CSS"],
      githubUrl: "https://github.com/hirenpatel/ui-lib",
      featured: true,
    },
  ],
};
