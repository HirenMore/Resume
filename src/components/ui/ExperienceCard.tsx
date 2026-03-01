import { motion, type Variants } from "framer-motion";
import type { Experience } from "@/data/index.ts";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const cardVariant = (index: number): Variants => ({
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: index * 0.1 },
  },
});

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      variants={cardVariant(index)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline vertical line */}
      <div
        className="absolute left-0 top-1.5 w-px h-full"
        style={{ backgroundColor: "hsl(var(--border))" }}
      />
      {/* Timeline dot */}
      <div
        className="absolute top-1.5 w-2 h-2 rounded-full"
        style={{
          left: "-4px",
          backgroundColor: "hsl(var(--primary))",
        }}
      />

      <div
        className="rounded-lg p-6 border transition-colors"
        style={{
          borderColor: "hsl(var(--border))",
          backgroundColor: "hsl(var(--background))",
        }}
      >
        <div className="flex flex-wrap justify-between gap-2 mb-3">
          <div>
            <h3 className="font-bold text-lg">{experience.role}</h3>
            <p
              className="font-medium text-sm"
              style={{ color: "hsl(var(--primary))" }}
            >
              {experience.company}
            </p>
          </div>
          <div className="text-right">
            <p
              className="text-sm font-mono"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              {experience.startDate} – {experience.endDate}
            </p>
            <p
              className="text-xs"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              {experience.location}
            </p>
          </div>
        </div>

        <p
          className="text-sm mb-4"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          {experience.description}
        </p>

        <ul className="space-y-1 mb-4">
          {experience.highlights.map((highlight) => (
            <li key={highlight} className="text-sm flex gap-2">
              <span
                className="mt-1 shrink-0"
                style={{ color: "hsl(var(--primary))" }}
                aria-hidden="true"
              >
                ▸
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-xs font-mono"
              style={{
                backgroundColor: "hsl(var(--primary) / 0.1)",
                color: "hsl(var(--primary))",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
