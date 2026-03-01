import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils.ts";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
  className?: string;
}

export function Timeline({ data, className }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(() => {
      setContainerHeight(el.scrollHeight);
    });
    observer.observe(el);
    setContainerHeight(el.scrollHeight);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const fillHeight = useTransform(
    scrollYProgress,
    [0, 1],
    [0, containerHeight]
  );

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      {/* Animated fill line */}
      <div
        className="absolute left-8 top-0 w-[2px] overflow-hidden"
        style={{ height: `${containerHeight}px` }}
        aria-hidden="true"
      >
        {/* Track */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent, hsl(var(--border)), transparent)",
          }}
        />
        {/* Fill */}
        <motion.div
          className="absolute top-0 left-0 w-full"
          style={{
            height: fillHeight,
            background: "linear-gradient(to bottom, #6366f1, #a855f7, #ec4899)",
          }}
        />
      </div>

      {/* Entries */}
      <div className="flex flex-col gap-16 pl-20">
        {data.map((entry, i) => (
          <TimelineItem key={`${entry.title}-${i}`} entry={entry} />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ entry }: { entry: TimelineEntry }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "start 40%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [-16, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, x }} className="relative">
      {/* Dot */}
      <div
        className="absolute -left-[3.25rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-indigo-500 bg-white dark:bg-black"
        aria-hidden="true"
      >
        <div className="h-2 w-2 rounded-full bg-indigo-500" />
      </div>

      <div className="text-sm font-semibold text-indigo-500 dark:text-indigo-400 mb-1">
        {entry.title}
      </div>
      <div>{entry.content}</div>
    </motion.div>
  );
}
