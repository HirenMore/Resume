import { SectionTitle } from "@/components/ui/SectionTitle.tsx";
import { SkillBar } from "@/components/ui/SkillBar.tsx";
import type { Skill } from "@/data/index.ts";
import { resumeData } from "@/data/index.ts";

const CATEGORIES: Array<Skill["category"]> = [
  "frontend",
  "backend",
  "tooling",
  "other",
];

const CATEGORY_LABELS: Record<Skill["category"], string> = {
  frontend: "Frontend",
  backend: "Backend",
  tooling: "Tooling & DevOps",
  other: "Other",
};

export function Skills() {
  const { skills } = resumeData;
  const activeCategories = CATEGORIES.filter((cat) =>
    skills.some((s) => s.category === cat)
  );

  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-24 lg:px-40"
      style={{ backgroundColor: "hsl(var(--muted) / 0.2)" }}
    >
      <SectionTitle number="02" title="Skills" />
      <div className="grid md:grid-cols-2 gap-12">
        {activeCategories.map((category) => (
          <div key={category}>
            <h3
              className="text-sm font-semibold uppercase tracking-wider mb-6"
              style={{ color: "hsl(var(--primary))" }}
            >
              {CATEGORY_LABELS[category]}
            </h3>
            <div className="space-y-4">
              {skills
                .filter((s) => s.category === category)
                .map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
