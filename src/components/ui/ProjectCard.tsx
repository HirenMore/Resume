import { ExternalLink, Github } from "lucide-react";
import { CometCard } from "@/components/ui/comet-card.tsx";
import type { Project } from "@/data/index.ts";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <CometCard>
      <div
        className="rounded-2xl p-6 flex flex-col gap-4 border h-full"
        style={{
          borderColor: "hsl(var(--border))",
          backgroundColor: "hsl(var(--background))",
        }}
      >
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg">{project.name}</h3>
          <div
            className="flex gap-3 shrink-0"
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
          className="text-sm flex-1 leading-relaxed"
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
      </div>
    </CometCard>
  );
}
