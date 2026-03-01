import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number;
}

export function SkillBar({ name, level }: SkillBarProps) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span style={{ color: "hsl(var(--muted-foreground))" }}>{level}%</span>
      </div>
      <div
        className="h-2 rounded-full overflow-hidden"
        style={{ backgroundColor: "hsl(var(--muted))" }}
      >
        <motion.div
          initial={{ width: "0%" }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="h-full rounded-full"
          style={{ backgroundColor: "hsl(var(--primary))" }}
        />
      </div>
    </div>
  );
}
