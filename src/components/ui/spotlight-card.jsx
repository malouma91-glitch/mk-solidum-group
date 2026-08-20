"use client";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

/* ── Kaart met een lichtvlek die de muis volgt ─────────────
   Geeft de divisiekaarten een levendig, "tech" gevoel zonder
   dat het afleidt van de inhoud. */
function SpotlightCard({ children, className = "", glow = "37,99,235", style }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={cn("relative overflow-hidden", className)}
      style={style}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: active ? 1 : 0,
          background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, rgba(${glow},0.16), transparent 65%)`,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

export { SpotlightCard };
