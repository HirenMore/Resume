import { motion, type Variants } from "framer-motion";
import { Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle.tsx";
import { resumeData } from "@/data/index.ts";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Contact() {
  const { personal } = resumeData;
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-24 lg:px-40 text-center">
      <SectionTitle number="05" title="Get In Touch" />
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-lg mx-auto"
      >
        <p className="mb-8" style={{ color: "hsl(var(--muted-foreground))" }}>
          I&apos;m currently open to new opportunities. Whether you have a
          question, want to collaborate, or just want to say hi — my inbox is
          always open!
        </p>

        <div className="flex items-center justify-center gap-2 mb-8">
          <a
            href={`mailto:${personal.email}`}
            className="px-8 py-3 rounded-lg font-semibold transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "hsl(var(--primary))",
              color: "hsl(var(--primary-foreground))",
            }}
          >
            Say Hello
          </a>
          <button
            type="button"
            onClick={copyEmail}
            aria-label="Copy email address"
            className="p-3 rounded-lg border transition-colors"
            style={{ borderColor: "hsl(var(--border))" }}
          >
            {copied ? (
              <Check size={18} style={{ color: "hsl(120 60% 50%)" }} />
            ) : (
              <Copy size={18} />
            )}
          </button>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            style={{ color: "hsl(var(--muted-foreground))" }}
            className="transition-opacity hover:opacity-70"
          >
            <Github size={24} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            style={{ color: "hsl(var(--muted-foreground))" }}
            className="transition-opacity hover:opacity-70"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Send email"
            style={{ color: "hsl(var(--muted-foreground))" }}
            className="transition-opacity hover:opacity-70"
          >
            <Mail size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
