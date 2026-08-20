"use client";
import { motion, useScroll, useSpring } from "framer-motion";

/* ── Scroll-voortgangsbalk bovenaan de pagina ──────────────
   Ziet eruit als een oplichtende netwerkkabel die zich vult
   naarmate de bezoeker verder scrollt. */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left"
    >
      <div
        className="h-full w-full"
        style={{
          background:
            "linear-gradient(90deg,#1D4ED8 0%,#2563EB 35%,#06B6D4 70%,#22D3EE 100%)",
          boxShadow: "0 0 12px rgba(37,99,235,0.7), 0 0 4px rgba(34,211,238,0.9)",
        }}
      />
    </motion.div>
  );
}

export { ScrollProgress };
