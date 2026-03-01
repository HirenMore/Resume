export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  yearsOfExperience: number;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: "frontend" | "backend" | "tooling" | "other";
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface ResumeData {
  personal: PersonalInfo;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
}
