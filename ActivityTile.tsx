"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const bars = [35, 55, 28, 72, 46, 82, 64];
const days = ["M", "T", "W", "T", "F", "S", "S"];
const TODAY_INDEX = 4;

const maxBar   = Math.max(...bars);
const totalHrs = (bars.reduce((a, b) => a + b, 0) / 60).toFixed(1);
const bestDay  = days[bars.indexOf(maxBar)];

export default function ActivityTile() {
  return (
    <motion.article
      whileHover={{
        scale: 1.015,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#0f0f14] p-6"
    >
      {/* Top edge highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 flex flex-col gap-5">

        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/30">
              Activity
            </p>
            <h3 className="mt-1.5 text-[17px] font-semibold text-white/90">
              Weekly Progress
            </h3>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-cyan-400/15 bg-cyan-400/[0.07]">
            <TrendingUp className="h-[18px] w-[18px] text-cyan-300/80" />
          </div>
        </div>

        {/* Stats row */}
        <div className="flex items-center gap-5">
          <div>
            <p className="text-[19px] font-semibold tabular-nums text-white/90">
              {totalHrs}h
            </p>
            <p className="font-mono text-[10px] tracking-wide text-white/30">
              this week
            </p>
          </div>
          <div className="h-8 w-px bg-white/[0.07]" />
          <div>
            <p className="text-[19px] font-semibold tabular-nums text-emerald-400">
              +12%
            </p>
            <p className="font-mono text-[10px] tracking-wide text-white/30">
              vs last week
            </p>
          </div>
          <div className="h-8 w-px bg-white/[0.07]" />
          <div>
            <p className="text-[19px] font-semibold text-white/90">{bestDay}</p>
            <p className="font-mono text-[10px] tracking-wide text-white/30">
              best day
            </p>
          </div>
        </div>

        {/* Bar chart */}
        <div
          className="flex items-end gap-[7px]"
          style={{ height: "84px" }}
        >
          {bars.map((val, i) => {
            const isToday  = i === TODAY_INDEX;
            const isBest   = val === maxBar;
            const barPx    = Math.round((val / maxBar) * 68);
            const opacity  = 0.35 + (val / maxBar) * 0.65;
            const barColor = isToday
              ? "#22d3ee"
              : isBest
              ? "#a78bfa"
              : "#6d28d9";

            return (
              <div
                key={i}
                className="group relative flex flex-1 flex-col items-center gap-1.5"
              >
                {/* Tooltip */}
                <div className="pointer-events-none absolute bottom-[calc(100%+4px)] left-1/2 -translate-x-1/2 whitespace-nowrap rounded border border-white/10 bg-[#0f0f14] px-1.5 py-0.5 font-mono text-[10px] text-white/60 opacity-0 transition-opacity duration-100 group-hover:opacity-100">
                  {val}m
                </div>

                {/* Bar */}
                <motion.div
                  className="w-full self-end rounded-[4px]"
                  style={{
                    backgroundColor: barColor,
                    opacity,
                    boxShadow: isToday
                      ? "0 0 0 1px rgba(34,211,238,0.25)"
                      : undefined,
                  }}
                  initial={{ height: 0 }}
                  animate={{ height: barPx }}
                  transition={{
                    delay: 0.05 + i * 0.07,
                    duration: 0.5,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                />

                {/* Day label */}
                <span
                  className={`font-mono text-[10px] leading-none ${
                    isToday ? "text-cyan-400/70" : "text-white/25"
                  }`}
                >
                  {days[i]}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </motion.article>
  );
}