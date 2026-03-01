import { ProjectCard } from "@/components/ui/ProjectCard.tsx";
import { SectionTitle } from "@/components/ui/SectionTitle.tsx";
import { resumeData } from "@/data/index.ts";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-24 lg:px-40"
      style={{ backgroundColor: "hsl(var(--muted) / 0.2)" }}
    >
      <SectionTitle number="04" title="Projects" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resumeData.projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
