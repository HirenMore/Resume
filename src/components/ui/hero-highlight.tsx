import {
  motion,
  useMotionTemplate,
  useMotionValue,
  type Variants,
} from "framer-motion";
import type React from "react";
import { cn } from "@/lib/utils.ts";

// SVG dot patterns for light/dark backgrounds and hover states
const DOT_PATTERNS = {
  light: {
    default: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23d4d4d4' cx='10' cy='10' r='2.5'/%3E%3C/svg%3E")`,
    hover: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%236366f1' cx='10' cy='10' r='2.5'/%3E%3C/svg%3E")`,
  },
  dark: {
    default: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23404040' cx='10' cy='10' r='2.5'/%3E%3C/svg%3E")`,
    hover: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%238183f4' cx='10' cy='10' r='2.5'/%3E%3C/svg%3E")`,
  },
};

interface HeroHighlightProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  enableDotGrid?: boolean;
}

export function HeroHighlight({
  children,
  className,
  containerClassName,
  enableDotGrid = false,
}: HeroHighlightProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`;

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "group relative flex w-full items-center justify-center bg-white dark:bg-black",
        containerClassName
      )}
      onMouseMove={enableDotGrid ? handleMouseMove : undefined}
      role="presentation"
      aria-hidden="true"
    >
      {enableDotGrid && (
        <>
          {/* Static dot grid — light */}
          <div
            className="pointer-events-none absolute inset-0 dark:hidden"
            style={{ backgroundImage: DOT_PATTERNS.light.default }}
          />
          {/* Static dot grid — dark */}
          <div
            className="pointer-events-none absolute inset-0 hidden dark:block"
            style={{ backgroundImage: DOT_PATTERNS.dark.default }}
          />
          {/* Hover radial reveal — light */}
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 dark:hidden"
            style={{
              backgroundImage: DOT_PATTERNS.light.hover,
              WebkitMaskImage: maskImage,
              maskImage,
            }}
          />
          {/* Hover radial reveal — dark */}
          <motion.div
            className="pointer-events-none absolute inset-0 hidden opacity-0 transition duration-300 group-hover:opacity-100 dark:block"
            style={{
              backgroundImage: DOT_PATTERNS.dark.hover,
              WebkitMaskImage: maskImage,
              maskImage,
            }}
          />
        </>
      )}

      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
}

const highlightVariants: Variants = {
  initial: { backgroundSize: "0% 100%" },
  animate: {
    backgroundSize: "100% 100%",
    transition: { duration: 2, ease: "linear", delay: 0.5 },
  },
};

interface HighlightProps {
  children: React.ReactNode;
  className?: string;
}

export function Highlight({ children, className }: HighlightProps) {
  return (
    <motion.span
      variants={highlightVariants}
      initial="initial"
      animate="animate"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        "relative inline-block rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 px-1 pb-1 dark:from-indigo-500 dark:to-purple-500",
        className
      )}
    >
      {children}
    </motion.span>
  );
}
