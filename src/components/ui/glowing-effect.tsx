import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils.ts";

interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: "default" | "white";
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
}

export function GlowingEffect({
  blur = 0,
  inactiveZone = 0.7,
  proximity = 64,
  spread = 20,
  variant = "default",
  glow = false,
  className,
  disabled = false,
  movementDuration = 2,
  borderWidth = 1,
}: GlowingEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastPosition = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    if (disabled) return;

    const container = containerRef.current;
    if (!container) return;

    function getContainerDimensions() {
      if (!container) return null;
      const rect = container.getBoundingClientRect();
      return {
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
        centerX: rect.left + rect.width / 2,
        centerY: rect.top + rect.height / 2,
      };
    }

    function handleMove(x: number, y: number) {
      if (!container) return;

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        const dims = getContainerDimensions();
        if (!dims) return;

        const dx = x - dims.centerX;
        const dy = y - dims.centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDim = Math.max(dims.width, dims.height);
        const inactiveRadius = maxDim * inactiveZone;

        if (distance < inactiveRadius) {
          container.style.setProperty("--active", "0");
          return;
        }

        const isNear =
          x >= dims.left - proximity &&
          x <= dims.left + dims.width + proximity &&
          y >= dims.top - proximity &&
          y <= dims.top + dims.height + proximity;

        container.style.setProperty("--active", isNear ? "1" : "0");

        if (isNear) {
          const angle = Math.atan2(dy, dx) * (180 / Math.PI);
          container.style.setProperty("--start", `${angle + 90}deg`);
        }

        lastPosition.current = { x, y };
      });
    }

    function onPointerMove(e: PointerEvent) {
      handleMove(e.clientX, e.clientY);
    }

    document.addEventListener("pointermove", onPointerMove);
    return () => {
      document.removeEventListener("pointermove", onPointerMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [disabled, inactiveZone, proximity]);

  return (
    <div
      ref={containerRef}
      style={
        {
          "--blur": `${blur}px`,
          "--spread": spread,
          "--start": "0deg",
          "--active": "0",
          "--glowingeffect-border-width": `${borderWidth}px`,
          "--repeating-conic-gradient-times": "5",
          "--gradient":
            variant === "white"
              ? `repeating-conic-gradient(
                    from calc(var(--start) - (360deg / (var(--repeating-conic-gradient-times) * 2))) at 50% 50%,
                    #ffffff 0%,
                    calc(25% / var(--repeating-conic-gradient-times)) 5%
                  )`
              : `radial-gradient(circle, #dd7ddf, #e46cbf, #e05097, #dd507a, #da5161, #e16e5b, #e88c58, #ebaa5e) 0% 0% / 300% 300%,
                   repeating-conic-gradient(
                    from calc(var(--start) - (360deg / (var(--repeating-conic-gradient-times) * 2))) at 50% 50%,
                    #dd7ddf 0%,
                    #e46cbf calc(25% / var(--repeating-conic-gradient-times)),
                    #e05097 calc(50% / var(--repeating-conic-gradient-times)),
                    #dd507a calc(75% / var(--repeating-conic-gradient-times)),
                    #da5161 calc(100% / var(--repeating-conic-gradient-times))
                  )`,
          transition: `opacity ${movementDuration}s`,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] opacity-[var(--active)] transition-opacity",
        glow && "blur-[var(--blur)]",
        className
      )}
    >
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          padding: "var(--glowingeffect-border-width)",
          background: "var(--gradient)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
    </div>
  );
}

// Wrapper that provides relative+rounded context for GlowingEffect
interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  glowProps?: Omit<GlowingEffectProps, "className">;
}

export function GlowingCard({
  children,
  className,
  glowProps,
}: GlowingCardProps) {
  return (
    <div className={cn("relative rounded-xl", className)}>
      <GlowingEffect {...glowProps} />
      {children}
    </div>
  );
}
