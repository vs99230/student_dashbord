"use client";

import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";
import {
  BookOpen,
  Brain,
  Code2,
  Clock,
  ChevronRight,
  LucideIcon,
} from "lucide-react";

interface CourseCardProps {
  title: string;
  progress: number;
  icon_name?: string;
  index?: number;
}

const icons: Record<string, LucideIcon> = {
  BookOpen,
  Brain,
  Code2,
};

// Per-card accent colors — violet, cyan, emerald
const accents = [
  {
    icon: "bg-violet-500/10 border-violet-500/20",
    iconColor: "text-violet-300",
    dot: "bg-violet-400",
    badge: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    glow: "from-violet-500/10 via-transparent to-transparent",
  },
  {
    icon: "bg-cyan-500/10 border-cyan-500/20",
    iconColor: "text-cyan-300",
    dot: "bg-cyan-400",
    badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    glow: "from-cyan-500/10 via-transparent to-transparent",
  },
  {
    icon: "bg-emerald-500/10 border-emerald-500/20",
    iconColor: "text-emerald-300",
    dot: "bg-emerald-400",
    badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    glow: "from-emerald-500/10 via-transparent to-transparent",
  },
];

function getStatus(progress: number): { label: string; dotColor: string } {
  if (progress >= 80) return { label: "Almost done",   dotColor: "bg-emerald-400" };
  if (progress >= 40) return { label: "In progress",   dotColor: "bg-violet-400"  };
  return               { label: "Just started",  dotColor: "bg-zinc-500"    };
}

export default function CourseCard({
  title,
  progress,
  icon_name = "BookOpen",
  index = 0,
}: CourseCardProps) {
  const Icon    = icons[icon_name] || BookOpen;
  const accent  = accents[index % accents.length];
  const status  = getStatus(progress);

  // Rough time estimate from progress
  const remaining = Math.round(((100 - progress) / 100) * 4);

  return (
    <motion.article
      whileHover={{
        y: -5,
        scale: 1.015,
        transition: { type: "spring", stiffness: 300, damping: 22 },
      }}
      className="group relative flex flex-col overflow-hidden rounded-[26px] border border-white/[0.07] bg-[#0f0f14] p-6"
    >
      {/* Top edge shimmer */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Corner glow on hover */}
      <div
        className={`pointer-events-none absolute -left-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br ${accent.glow} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div className="relative z-10 flex flex-col gap-5">

        {/* Top row: icon + status badge */}
        <div className="flex items-start justify-between">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${accent.icon}`}
          >
            <Icon className={`h-5 w-5 ${accent.iconColor}`} />
          </div>

          {/* Status pill */}
          <div
            className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-mono tracking-wide ${accent.badge}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${status.dotColor}`} />
            {status.label}
          </div>
        </div>

        {/* Title */}
        <div>
          <h3 className="text-[15px] font-semibold leading-snug text-white/90">
            {title}
          </h3>
        </div>

        {/* Meta row */}
        <div className="flex items-center gap-4 text-[11px] text-white/30 font-mono">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3 w-3" />
            {remaining}h remaining
          </span>
          <span className="h-3 w-px bg-white/10" />
          <span>{progress < 100 ? `${100 - progress}% left` : "Complete"}</span>
        </div>

        {/* Progress bar */}
        <ProgressBar value={progress} />

        {/* CTA link */}
        <motion.button
          whileHover={{ x: 2 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className={`flex items-center gap-1 self-start text-[11px] font-mono tracking-wide ${accent.iconColor} opacity-60 hover:opacity-100 transition-opacity`}
        >
          Continue learning
          <ChevronRight className="h-3 w-3" />
        </motion.button>

      </div>
    </motion.article>
  );
}