import { motion, type Variants } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/index.ts";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const cardVariant = (index: number): Variants => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: index * 0.1 },
  },
});

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      variants={cardVariant(index)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="rounded-lg p-6 flex flex-col gap-4 border transition-all hover:-translate-y-1"
      style={{
        borderColor: "hsl(var(--border))",
        backgroundColor: "hsl(var(--background))",
      }}
    >
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-lg">{project.name}</h3>
        <div
          className="flex gap-3"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} GitHub repository`}
              className="transition-opacity hover:opacity-70"
            >
              <Github size={18} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} live demo`}
              className="transition-opacity hover:opacity-70"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <p
        className="text-sm flex-1"
        style={{ color: "hsl(var(--muted-foreground))" }}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono px-2 py-0.5 rounded"
            style={{
              color: "hsl(var(--primary))",
              backgroundColor: "hsl(var(--primary) / 0.1)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
