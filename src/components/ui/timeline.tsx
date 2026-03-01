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

// Layout constants (keep in sync with Tailwind classes below)
// Date column: 9rem (144px) | Line column: 2rem (32px) | Content: 1fr
// Track centre = 144 + 16 = 160px from left edge of container = left-40
const DATE_COL = "w-36"; // 9rem
const LINE_COL = "w-8"; // 2rem — dot + track live here

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
    offset: ["start 20%", "end 80%"],
  });

  const fillHeight = useTransform(
    scrollYProgress,
    [0, 1],
    [0, containerHeight]
  );

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      {/* ── Vertical track: centred in the 2rem line column ──
          date col (9rem) + half of line col (1rem) = 10rem = left-40  */}
      <div
        className="absolute left-40 top-0 w-[2px] -translate-x-1/2 overflow-hidden"
        style={{ height: `${containerHeight}px` }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, hsl(var(--border)) 8%, hsl(var(--border)) 92%, transparent 100%)",
          }}
        />
        <motion.div
          className="absolute top-0 left-0 w-full"
          style={{
            height: fillHeight,
            background: "linear-gradient(to bottom, #6366f1, #a855f7, #ec4899)",
          }}
        />
      </div>

      {/* ── Entries ── */}
      <div className="flex flex-col gap-12">
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
    offset: ["start 90%", "start 50%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [12, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      // 3-col grid: [date 9rem] [line 2rem] [content 1fr]
      className="grid grid-cols-[9rem_2rem_1fr] items-start"
    >
      {/* ── Date: right-aligned so it reads flush against the line ── */}
      <div className={cn("pr-4 pt-1 text-right", DATE_COL)}>
        <span className="text-sm font-semibold leading-snug text-indigo-500 dark:text-indigo-400">
          {entry.title}
        </span>
      </div>

      {/* ── Dot: centred in the 2rem column, aligned with the date text ── */}
      <div
        className={cn("flex justify-center pt-1", LINE_COL)}
        aria-hidden="true"
      >
        <div className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-indigo-500 bg-white dark:bg-black">
          <div className="h-2 w-2 rounded-full bg-indigo-500" />
        </div>
      </div>

      {/* ── Content card ── */}
      <div className="pl-4 pb-2">{entry.content}</div>
    </motion.div>
  );
}
