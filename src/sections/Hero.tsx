import { motion, type Variants } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { CanvasText } from "@/components/ui/canvas-text.tsx";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight.tsx";
import { resumeData } from "@/data/index.ts";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Hero() {
  const { personal } = resumeData;

  return (
    <HeroHighlight
      containerClassName="min-h-[90vh] px-6 md:px-24 lg:px-40 justify-start pt-32"
      className="w-full"
    >
      <section id="hero">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col"
        >
          <motion.p
            variants={item}
            className="font-mono text-sm mb-3 text-indigo-500 dark:text-indigo-400"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
          >
            <CanvasText
              text={personal.name}
              backgroundClassName="bg-white dark:bg-black"
              colors={[
                "rgba(139, 92, 246, 1)",
                "rgba(167, 139, 250, 0.9)",
                "rgba(109, 40, 217, 0.85)",
                "rgba(196, 181, 253, 0.75)",
                "rgba(124, 58, 237, 0.7)",
                "rgba(216, 180, 254, 0.6)",
              ]}
              lineGap={4}
              animationDuration={20}
            />
          </motion.h1>

          <motion.h2
            variants={item}
            className="text-2xl md:text-4xl font-bold mb-6"
          >
            <Highlight className="text-black dark:text-white">
              {personal.title}
            </Highlight>
          </motion.h2>

          <motion.p
            variants={item}
            className="max-w-xl text-base md:text-lg mb-8 leading-relaxed"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            {personal.tagline}
          </motion.p>

          <motion.div variants={item} className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg font-semibold transition-opacity hover:opacity-90 bg-indigo-600 text-white dark:bg-indigo-500"
            >
              View my work
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="px-6 py-3 rounded-lg font-semibold transition-colors border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div variants={item} className="flex gap-5 mt-10">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="transition-opacity hover:opacity-70"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              <Github size={22} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="transition-opacity hover:opacity-70"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              <Linkedin size={22} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Send email"
              className="transition-opacity hover:opacity-70"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              <Mail size={22} />
            </a>
          </motion.div>
        </motion.div>
      </section>
    </HeroHighlight>
  );
}
