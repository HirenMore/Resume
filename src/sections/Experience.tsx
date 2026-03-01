import { ExperienceCard } from "@/components/ui/ExperienceCard.tsx";
import { SectionTitle } from "@/components/ui/SectionTitle.tsx";
import { resumeData } from "@/data/index.ts";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-24 lg:px-40">
      <SectionTitle number="03" title="Work Experience" />
      <div className="max-w-3xl">
        {resumeData.experience.map((exp, i) => (
          <ExperienceCard key={exp.id} experience={exp} index={i} />
        ))}
      </div>
    </section>
  );
}
