import { motion, type Variants } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { resumeData } from "@/data/index.ts";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Hero() {
  const { personal } = resumeData;

  return (
    <section
      id="hero"
      style={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      className="px-6 md:px-24 lg:px-40"
    >
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p
          variants={item}
          className="font-mono text-sm mb-2"
          style={{ color: "hsl(var(--primary))" }}
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
        >
          {personal.name}
        </motion.h1>

        <motion.h2
          variants={item}
          className="text-3xl md:text-5xl font-bold mb-6"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          {personal.title}
        </motion.h2>

        <motion.p
          variants={item}
          className="max-w-xl text-lg mb-8"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          {personal.tagline}
        </motion.p>

        <motion.div variants={item} className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg font-semibold transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "hsl(var(--primary))",
              color: "hsl(var(--primary-foreground))",
            }}
          >
            View my work
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="px-6 py-3 rounded-lg font-semibold transition-colors border"
            style={{ borderColor: "hsl(var(--border))" }}
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div variants={item} className="flex gap-5 mt-10">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{ color: "hsl(var(--muted-foreground))" }}
            className="transition-opacity hover:opacity-70"
          >
            <Github size={22} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: "hsl(var(--muted-foreground))" }}
            className="transition-opacity hover:opacity-70"
          >
            <Linkedin size={22} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            style={{ color: "hsl(var(--muted-foreground))" }}
            className="transition-opacity hover:opacity-70"
          >
            <Mail size={22} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
