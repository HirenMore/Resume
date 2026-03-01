import { motion } from "framer-motion";
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resumeData.projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
