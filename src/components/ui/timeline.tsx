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

  // Start filling as the section enters view, finish when you've scrolled
  // through 80% of it — keeps the fill in sync with your reading position.
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
      {/* ── Vertical track + animated fill ── */}
      {/* The track lives in a 2-rem wide left column; entries share that grid */}
      <div
        className="absolute left-[0.9375rem] top-0 w-[2px] overflow-hidden"
        style={{ height: `${containerHeight}px` }}
        aria-hidden="true"
      >
        {/* Muted track */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, hsl(var(--border)) 10%, hsl(var(--border)) 90%, transparent 100%)",
          }}
        />
        {/* Coloured fill */}
        <motion.div
          className="absolute top-0 left-0 w-full"
          style={{
            height: fillHeight,
            background: "linear-gradient(to bottom, #6366f1, #a855f7, #ec4899)",
          }}
        />
      </div>

      {/* ── Entries ── */}
      <div className="flex flex-col gap-14">
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
  const opacity = useTransform(scrollYProgress, [0, 1], [0.25, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [-12, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x }}
      // grid: [dot column 30px] [content]
      className="grid grid-cols-[1.875rem_1fr] items-start gap-x-4"
    >
      {/* ── Dot (centred in the 30px column, aligned with the first text line) ── */}
      <div
        className="flex items-center justify-center pt-0.5"
        aria-hidden="true"
      >
        <div className="relative flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-indigo-500 bg-white dark:bg-black">
          <div className="h-2 w-2 rounded-full bg-indigo-500" />
        </div>
      </div>

      {/* ── Date + card ── */}
      <div>
        <p className="text-sm font-semibold text-indigo-500 dark:text-indigo-400 mb-2 leading-none">
          {entry.title}
        </p>
        <div>{entry.content}</div>
      </div>
    </motion.div>
  );
}
