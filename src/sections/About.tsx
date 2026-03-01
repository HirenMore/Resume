import { motion, type Variants } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle.tsx";
import { resumeData } from "@/data/index.ts";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const fadeUpDelayed: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.15 } },
};

const STAT_ITEMS = (yearsOfExperience: number, location: string) =>
  [
    {
      icon: Briefcase,
      label: "Experience",
      value: `${yearsOfExperience}+ years`,
    },
    { icon: MapPin, label: "Location", value: location },
    { icon: Calendar, label: "Available", value: "Open to opportunities" },
  ] as const;

export function About() {
  const { personal } = resumeData;

  return (
    <section id="about" className="py-24 px-6 md:px-24 lg:px-40">
      <SectionTitle number="01" title="About Me" />
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4 leading-relaxed"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          <p>
            I&apos;m a frontend engineer with {personal.yearsOfExperience} years
            of experience crafting performant, accessible web applications. I
            love turning complex problems into simple, elegant interfaces.
          </p>
          <p>
            When I&apos;m not writing code, I&apos;m exploring new frameworks,
            contributing to open source, or levelling up my design skills.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUpDelayed}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-4"
        >
          {STAT_ITEMS(personal.yearsOfExperience, personal.location).map(
            ({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-3 p-4 rounded-lg border"
                style={{
                  backgroundColor: "hsl(var(--muted) / 0.5)",
                  borderColor: "hsl(var(--border))",
                }}
              >
                <Icon size={18} style={{ color: "hsl(var(--primary))" }} />
                <div>
                  <p
                    className="text-xs"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    {label}
                  </p>
                  <p className="font-medium text-sm">{value}</p>
                </div>
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
