"use client";
import { cn } from "@/lib/utils";

/* ── Oneindig doorlopende band ─────────────────────────────
   Gebruikt voor certificeringen en expertises. Pauzeert
   wanneer de bezoeker er met de muis overheen gaat. */
function Marquee({
  children,
  reverse = false,
  pauseOnHover = true,
  speed = 40,
  className = "",
}) {
  return (
    <div
      className={cn("group relative flex overflow-hidden", className)}
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1 ? "true" : undefined}
          className={cn(
            "flex shrink-0 items-center gap-4 pr-4",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
          style={{
            animation: `marqueeScroll ${speed}s linear infinite`,
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

export { Marquee };
