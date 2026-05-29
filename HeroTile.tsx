"use client";

import { motion } from "framer-motion";
import { Flame, Zap, Trophy, ArrowRight } from "lucide-react";

const stats = [
  { label: "Day Streak",    value: "7",   icon: Flame,  color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" },
  { label: "Courses Active", value: "4",  icon: Zap,    color: "text-cyan-400",   bg: "bg-cyan-500/10   border-cyan-500/20"   },
  { label: "Completed",     value: "12",  icon: Trophy, color: "text-emerald-400",bg: "bg-emerald-500/10 border-emerald-500/20"},
];

const hours = new Date().getHours();
const greeting =
  hours < 5  ? "Good Night"    :
  hours < 12 ? "Good Morning"  :
  hours < 17 ? "Good Afternoon":
               "Good Evening";

export default function HeroTile() {
  return (
    <motion.article
      whileHover={{
        scale: 1.008,
        transition: { type: "spring", stiffness: 300, damping: 25 },
      }}
      className="relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#0f0f14] p-7 min-h-[260px] flex flex-col justify-between"
    >
      {/* ── Atmospheric background ── */}

      {/* Large violet orb — top right */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-violet-600/20 blur-[80px]" />

      {/* Smaller cyan orb — bottom left */}
      <div className="pointer-events-none absolute -bottom-12 -left-8 h-48 w-48 rounded-full bg-cyan-500/10 blur-[60px]" />

      {/* Noise grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Top edge shimmer */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col gap-6">

        {/* Greeting + heading */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3"
          >
            {greeting} · Daily Learning
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-white/95"
          >
            Welcome back,{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Vaibhav
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-3 text-sm text-white/40 max-w-md leading-relaxed"
          >
            Continue your learning journey and keep your momentum strong.
          </motion.p>
        </div>

        {/* CTA button */}
        <motion.button
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          whileHover={{
            x: 3,
            transition: { type: "spring", stiffness: 400, damping: 20 },
          }}
          className="flex items-center gap-2 self-start rounded-xl border border-violet-500/25 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300 transition-colors hover:border-violet-400/40 hover:bg-violet-500/15"
        >
          Resume last course
          <ArrowRight className="h-3.5 w-3.5" />
        </motion.button>

      </div>

      {/* ── Stats row ── */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="relative z-10 flex items-center gap-3 mt-2"
      >
        {stats.map(({ label, value, icon: Icon, color, bg }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: 0.22 + i * 0.07 }}
            className={`flex items-center gap-2 rounded-xl border px-3.5 py-2 ${bg}`}
          >
            <Icon className={`h-3.5 w-3.5 ${color}`} />
            <span className={`text-sm font-semibold tabular-nums ${color}`}>
              {value}
            </span>
            <span className="text-[11px] text-white/35 font-mono">
              {label}
            </span>
          </motion.div>
        ))}

        {/* Live indicator */}
        <div className="ml-2 flex items-center gap-2 shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono text-[10px] text-white/30 tracking-wide">
            Learning Consistently
          </span>
        </div>
      </motion.div>

    </motion.article>
  );
}