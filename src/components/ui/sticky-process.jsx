"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

/* ── Vastgezette procesuitleg die meebeweegt met de scroll ──
   De linkerkolom blijft staan terwijl de stappen langskomen;
   de kabellijn "verbindt" zich stap voor stap. Op mobiel valt
   het terug op een gewone lijst, zodat het altijd leesbaar is. */
function StickyProcess({ steps, eyebrow, title, intro }) {
  const ref = useRef(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(steps.length - 1, Math.floor(v * steps.length));
    setActive(idx < 0 ? 0 : idx);
  });

  return (
    <section
      className="relative bg-white"
      style={{ background: "linear-gradient(180deg,#ffffff 0%,#F8FAFC 100%)" }}
    >
      {/* ── Mobiel: eenvoudige lijst ── */}
      <div className="md:hidden container-main py-20">
        <span className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3 block">
          {eyebrow}
        </span>
        <h2 className="text-3xl font-black font-raleway text-slate-900 mb-4">
          {title}
        </h2>
        <p className="text-slate-500 mb-10 leading-relaxed">{intro}</p>
        <ol className="space-y-8">
          {steps.map((s, i) => (
            <li key={s.title} className="flex gap-4">
              <div
                className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center text-white font-black text-sm"
                style={{
                  background: `linear-gradient(135deg,#2563EB ${i * 18}%,#06B6D4 100%)`,
                }}
              >
                {s.num}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* ── Desktop: sticky scroll ── */}
      <div
        ref={ref}
        className="hidden md:block relative"
        style={{ height: `${steps.length * 85}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="container-main w-full">
            <div className="grid grid-cols-2 gap-16 items-center">
              {/* Linkerkolom — vaste tekst */}
              <div>
                <span className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3 block">
                  {eyebrow}
                </span>
                <h2 className="text-4xl lg:text-5xl font-black font-raleway text-slate-900 mb-5 leading-tight">
                  {title}
                </h2>
                <p className="text-slate-500 leading-relaxed mb-10 max-w-md">
                  {intro}
                </p>

                {/* Voortgangsindicator */}
                <div className="flex items-center gap-3">
                  {steps.map((s, i) => (
                    <div key={s.num} className="flex items-center gap-3">
                      <button
                        type="button"
                        aria-label={s.title}
                        className="relative flex items-center justify-center rounded-full transition-all duration-500"
                        style={{
                          width: i === active ? 40 : 12,
                          height: 12,
                          background:
                            i <= active
                              ? "linear-gradient(90deg,#2563EB,#06B6D4)"
                              : "#E2E8F0",
                          boxShadow:
                            i === active
                              ? "0 0 14px rgba(37,99,235,0.55)"
                              : "none",
                        }}
                      />
                      {i < steps.length - 1 && (
                        <span
                          className="h-px w-8 transition-colors duration-500"
                          style={{
                            background: i < active ? "#2563EB" : "#E2E8F0",
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Rechterkolom — wisselende stap */}
              <div className="relative h-[420px]">
                {steps.map((s, i) => {
                  const isActive = i === active;
                  return (
                    <motion.div
                      key={s.num}
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 30,
                        scale: isActive ? 1 : 0.97,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="absolute inset-0"
                      style={{ pointerEvents: isActive ? "auto" : "none" }}
                    >
                      <div
                        className="h-full rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden"
                        style={{
                          background:
                            "linear-gradient(145deg,#0A1628 0%,#0F2044 60%,#132a5e 100%)",
                          boxShadow: "0 24px 70px rgba(15,32,68,0.35)",
                        }}
                      >
                        <div className="absolute inset-0 dot-pattern opacity-60" />
                        <div
                          className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl"
                          style={{ background: "rgba(37,99,235,0.28)" }}
                        />

                        <div className="relative">
                          <div
                            className="text-[7rem] leading-none font-black mb-2"
                            style={{
                              background:
                                "linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,255,255,0.12))",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                            }}
                          >
                            {s.num}
                          </div>
                          <h3 className="text-2xl font-black text-white mb-4 font-raleway">
                            {s.title}
                          </h3>
                          <p className="text-slate-300/80 leading-relaxed max-w-sm">
                            {s.desc}
                          </p>
                        </div>

                        <div className="relative flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-300/80">
                          <span className="glow-dot w-2 h-2 rounded-full bg-cyan-400 inline-block" />
                          Stap {i + 1} van {steps.length}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { StickyProcess };
