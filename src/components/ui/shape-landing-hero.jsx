"use client";
import { motion } from "framer-motion";
import { Circle, Network, Wifi, Shield, Server, Cable } from "lucide-react";
import { cn } from "@/lib/utils";

/* ── Floating animated ellipse shapes ── */
function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.12]",
            "shadow-[0_8px_32px_0_rgba(37,99,235,0.12)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

/* ── Floating network nodes (dots with pulse rings) ── */
function NetworkNode({ x, y, delay = 0, size = 6 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      className="absolute"
      style={{ left: x, top: y }}
    >
      {/* Pulse ring */}
      <motion.div
        animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, delay: delay * 0.5 }}
        className="absolute inset-0 rounded-full bg-blue-500/30"
        style={{ width: size * 3, height: size * 3, marginLeft: -size, marginTop: -size }}
      />
      <div
        className="rounded-full bg-blue-400"
        style={{ width: size, height: size, boxShadow: '0 0 8px rgba(96,165,250,0.8)' }}
      />
    </motion.div>
  );
}

/* ── Floating tech icons ── */
function FloatingIcon({ Icon, delay, x, y }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="absolute hidden md:flex items-center justify-center"
      style={{ left: x, top: y }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }}
        className="w-12 h-12 rounded-xl border border-blue-500/20 bg-blue-600/10 backdrop-blur-sm flex items-center justify-center"
      >
        <Icon className="w-5 h-5 text-blue-400/70" />
      </motion.div>
    </motion.div>
  );
}

/* ── Main Hero component ── */
function HeroGeometric({
  badge = "IT Infrastructuur Specialist",
  title1 = "Toekomstbestendige",
  title2 = "IT-Infrastructuur",
  description = "MK Solidum Group — twee divisies, één partner. Transport en IT-infrastructuur. Wij ontzorgen u volledig.",
  ctaPrimary = { label: "Vrijblijvend gesprek →", href: "/contact" },
  ctaSecondary = { label: "Onze diensten", href: "/diensten" },
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #020817 0%, #0A1628 55%, #0F2044 100%)' }}>

      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.06] via-transparent to-cyan-500/[0.06] blur-3xl" />

      {/* Dot grid texture */}
      <div className="absolute inset-0 dot-pattern opacity-100" />

      {/* ── Floating ellipses ── */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={130}
          rotate={12}
          gradient="from-blue-600/[0.18]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={480}
          height={110}
          rotate={-15}
          gradient="from-cyan-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[68%] md:top-[72%]"
        />
        <ElegantShape
          delay={0.4}
          width={280}
          height={75}
          rotate={-8}
          gradient="from-indigo-500/[0.13]"
          className="left-[5%] md:left-[10%] bottom-[6%] md:bottom-[12%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={55}
          rotate={20}
          gradient="from-blue-400/[0.12]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[14%]"
        />
        <ElegantShape
          delay={0.7}
          width={140}
          height={38}
          rotate={-22}
          gradient="from-teal-500/[0.12]"
          className="left-[20%] md:left-[26%] top-[5%] md:top-[9%]"
        />
      </div>

      {/* ── Network nodes ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <NetworkNode x="12%" y="30%" delay={1.2} size={5} />
        <NetworkNode x="88%" y="22%" delay={1.4} size={4} />
        <NetworkNode x="75%" y="60%" delay={1.6} size={6} />
        <NetworkNode x="20%" y="72%" delay={1.8} size={4} />
        <NetworkNode x="55%" y="88%" delay={1.0} size={5} />
        <NetworkNode x="5%"  y="55%" delay={2.0} size={3} />
        <NetworkNode x="92%" y="45%" delay={1.5} size={4} />
      </div>

      {/* ── Floating tech icons ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingIcon Icon={Network}  delay={1.0} x="8%"  y="20%" />
        <FloatingIcon Icon={Server}   delay={1.3} x="85%" y="30%" />
        <FloatingIcon Icon={Wifi}     delay={1.5} x="80%" y="62%" />
        <FloatingIcon Icon={Shield}   delay={1.7} x="10%} " y="65%" />
        <FloatingIcon Icon={Cable}    delay={1.2} x="50%" y="10%" />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 md:mb-12"
            style={{
              background: 'rgba(37,99,235,0.08)',
              border: '1px solid rgba(37,99,235,0.25)',
            }}
          >
            <Circle className="h-2 w-2 fill-blue-400 text-blue-400" />
            <span className="text-sm text-blue-300/80 tracking-wide font-medium">{badge}</span>
          </motion.div>

          {/* Headline */}
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 tracking-tight font-raleway leading-none">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                {title1}
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white/90 to-cyan-300">
                {title2}
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-10 leading-relaxed font-light tracking-wide max-w-2xl mx-auto">
              {description}
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a href={ctaPrimary.href} className="btn-primary text-base">
              {ctaPrimary.label}
            </a>
            <a href={ctaSecondary.href} className="btn-outline text-base">
              {ctaSecondary.label}
            </a>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-16 pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-8"
          >
            {[
              { val: '500+', label: 'Projecten' },
              { val: '15+', label: 'Jaar ervaring' },
              { val: '98%', label: 'Tevredenheid' },
              { val: '24/7', label: 'Support' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                  {s.val}
                </div>
                <div className="text-xs text-white/40 mt-0.5 tracking-wide">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-[#020817]/60 pointer-events-none" />
    </div>
  );
}

export { HeroGeometric };
