import { motion, type Variants } from "framer-motion";

interface SectionTitleProps {
  number: string;
  title: string;
}

const titleVariant: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export function SectionTitle({ number, title }: SectionTitleProps) {
  return (
    <motion.div
      variants={titleVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex items-center gap-4 mb-12"
    >
      <span
        className="font-mono text-sm"
        style={{ color: "hsl(var(--primary))" }}
      >
        {number}.
      </span>
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      <div
        className="flex-1 h-px"
        style={{ backgroundColor: "hsl(var(--border))" }}
      />
    </motion.div>
  );
}
