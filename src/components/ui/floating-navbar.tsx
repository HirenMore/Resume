import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils.ts";

export interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
  rightSlot?: React.ReactNode;
}

export function FloatingNav({
  navItems,
  className,
  rightSlot,
}: FloatingNavProps) {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    const diff = current - (scrollYProgress.getPrevious() ?? 0);
    if (current < 0.05) {
      setVisible(true);
    } else {
      setVisible(diff < 0);
    }
  });

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key="floating-nav"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={cn(
            "fixed top-4 inset-x-0 mx-auto z-[5000] flex max-w-fit items-center justify-center gap-2 rounded-full border px-4 py-2 shadow-lg",
            className
          )}
          style={{
            backgroundColor: "hsl(var(--background) / 0.85)",
            borderColor: "hsl(var(--border))",
            backdropFilter: "blur(12px)",
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.link}
              href={item.link}
              className={cn(
                "relative flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-full transition-colors",
                "hover:text-indigo-500 dark:hover:text-indigo-400"
              )}
              style={{ color: "hsl(var(--foreground))" }}
            >
              {item.icon && (
                <span className="h-4 w-4 shrink-0">{item.icon}</span>
              )}
              <span>{item.name}</span>
            </a>
          ))}
          {rightSlot && (
            <div
              className="ml-2 border-l pl-3"
              style={{ borderColor: "hsl(var(--border))" }}
            >
              {rightSlot}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
