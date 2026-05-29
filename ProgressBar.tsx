"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface ProgressBarProps {
  value: number;
}

export default function ProgressBar({ value }: ProgressBarProps) {
  const raw    = useMotionValue(0);
  // Spring physics — same config jo CourseCard hover mein use hua
  const spring = useSpring(raw, { stiffness: 60, damping: 14, mass: 0.8 });

  // Counter label ke liye
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    raw.set(value);
  }, [value, raw]);

  // Interpolate label text from spring value
  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (labelRef.current) {
        labelRef.current.textContent = Math.round(latest) + "%";
      }
    });
    return unsubscribe;
  }, [spring]);

  return (
    <div>
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-xs text-zinc-500 uppercase tracking-widest font-mono">
          Progress
        </span>
        <span
          ref={labelRef}
          className="text-xs font-medium text-violet-400 font-mono tabular-nums"
        >
          0%
        </span>
      </div>

      {/* Track */}
      <div className="relative h-1.5 rounded-full bg-white/[0.06] overflow-hidden">

        {/* Animated fill */}
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full origin-left"
          style={{
            width: spring.get() + "%",
            background:
              "linear-gradient(90deg, #7c3aed 0%, #c026d3 55%, #22d3ee 100%)",
          }}
          // width directly driven by spring
          animate={{ width: `${value}%` }}
          initial={{ width: "0%" }}
          transition={{ type: "spring", stiffness: 60, damping: 14, mass: 0.8 }}
        />

        {/* Shimmer pass — runs once after fill settles */}
        <motion.div
          className="absolute inset-y-0 w-1/3 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
          }}
          initial={{ x: "-100%" }}
          animate={{ x: "350%" }}
          transition={{
            delay: 1.1,       // after fill animation completes
            duration: 0.9,
            ease: "easeOut",
          }}
        />
      </div>
    </div>
  );
}