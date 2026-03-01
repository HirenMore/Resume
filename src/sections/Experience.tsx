import { SectionTitle } from "@/components/ui/SectionTitle.tsx";
import { Timeline, type TimelineEntry } from "@/components/ui/timeline.tsx";
import { resumeData } from "@/data/index.ts";

function ExperienceContent({
  company,
  role,
  location,
  description,
  highlights,
  technologies,
}: {
  company: string;
  role: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}) {
  return (
    <div
      className="rounded-xl border p-5"
      style={{ borderColor: "hsl(var(--border))" }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
        <h3 className="text-lg font-bold">{company}</h3>
        <span
          className="text-sm"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          {location}
        </span>
      </div>
      <p
        className="font-medium mb-2"
        style={{ color: "hsl(var(--muted-foreground))" }}
      >
        {role}
      </p>
      <p
        className="text-sm mb-3 leading-relaxed"
        style={{ color: "hsl(var(--muted-foreground))" }}
      >
        {description}
      </p>
      <ul className="space-y-1 mb-4">
        {highlights.map((h) => (
          <li key={h} className="text-sm flex gap-2">
            <span className="text-indigo-500 mt-0.5 shrink-0">▸</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-0.5 rounded-full border"
            style={{
              borderColor: "hsl(var(--border))",
              color: "hsl(var(--muted-foreground))",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Experience() {
  const entries: TimelineEntry[] = resumeData.experience.map((exp) => ({
    title: `${exp.startDate} — ${exp.endDate}`,
    content: (
      <ExperienceContent
        company={exp.company}
        role={exp.role}
        location={exp.location}
        description={exp.description}
        highlights={exp.highlights}
        technologies={exp.technologies}
      />
    ),
  }));

  return (
    <section id="experience" className="py-24 px-6 md:px-24 lg:px-40">
      <SectionTitle number="03" title="Work Experience" />
      <Timeline data={entries} />
    </section>
  );
}
