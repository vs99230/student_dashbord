"use client";

import {
  Home,
  BookOpen,
  Activity,
  GraduationCap,
  Settings,
  LogOut,
  Flame,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navItems = [
  { id: "home", icon: Home, label: "Dashboard", badge: null },
  { id: "courses", icon: BookOpen, label: "Courses", badge: "4" },
  { id: "activity", icon: Activity, label: "Activity", badge: null },
];

const bottomItems = [{ id: "settings", icon: Settings, label: "Settings" }];

export default function Sidebar() {
  const [active, setActive] = useState("home");

  return (
    <>
      <aside className="relative hidden h-screen w-[72px] shrink-0 flex-col border-r border-white/[0.06] bg-[#09090e] md:flex lg:w-[240px]">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-violet-500/20 to-transparent" />

        <div className="flex items-center gap-3 border-b border-white/[0.05] px-4 py-5">
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />
            <GraduationCap className="relative z-10 h-[18px] w-[18px] text-white" />
          </div>

          <div className="hidden flex-col overflow-hidden lg:flex">
            <span className="text-[15px] font-bold leading-none tracking-tight text-white/90">
              LearnOS
            </span>
            <span className="mt-1 font-mono text-[10px] uppercase tracking-widest text-white/30">
              Student Dashboard
            </span>
          </div>
        </div>

        <p className="hidden px-4 pb-2 pt-5 font-mono text-[9px] uppercase tracking-[0.18em] text-white/20 lg:block">
          Menu
        </p>

        <nav className="flex flex-1 flex-col gap-1 px-2">
          {navItems.map(({ id, icon: Icon, label, badge }) => {
            const isActive = active === id;

            return (
              <button
                key={id}
                onClick={() => setActive(id)}
                className="group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left"
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    className="absolute inset-0 rounded-xl border border-white/[0.09] bg-white/[0.07]"
                  />
                )}

                {!isActive && (
                  <div className="absolute inset-0 rounded-xl bg-white/0 transition-colors duration-150 group-hover:bg-white/[0.03]" />
                )}

                <div
                  className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors duration-150 ${
                    isActive
                      ? "bg-violet-500/15 text-violet-400"
                      : "text-white/35 group-hover:text-white/60"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>

                <div className="relative z-10 hidden flex-1 items-center justify-between overflow-hidden lg:flex">
                  <span
                    className={`text-sm font-medium transition-colors duration-150 ${
                      isActive
                        ? "text-white/90"
                        : "text-white/40 group-hover:text-white/65"
                    }`}
                  >
                    {label}
                  </span>

                  {badge && (
                    <span
                      className={`rounded-md px-1.5 py-0.5 font-mono text-[10px] ${
                        isActive
                          ? "bg-violet-500/20 text-violet-300"
                          : "bg-white/[0.06] text-white/30"
                      }`}
                    >
                      {badge}
                    </span>
                  )}
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={{ scaleY: 1, opacity: 1 }}
                      exit={{ scaleY: 0, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 28,
                      }}
                      className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-violet-500"
                    />
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </nav>

        <div className="mx-2 mb-3 hidden lg:block">
          <div className="relative overflow-hidden rounded-2xl border border-orange-500/15 bg-orange-500/[0.07] p-4">
            <div className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full bg-orange-500/20 blur-2xl" />

            <div className="relative z-10 mb-2 flex items-center gap-2">
              <Flame className="h-3.5 w-3.5 text-orange-400" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-orange-400/70">
                Streak
              </span>
            </div>

            <p className="relative z-10 text-2xl font-bold tabular-nums text-white/90">
              7 <span className="text-sm font-normal text-white/30">days</span>
            </p>

            <p className="relative z-10 mt-1 text-[11px] leading-snug text-white/30">
              Keep it going - you&apos;re on a roll!
            </p>
          </div>
        </div>

        <div className="mx-4 mb-2 h-px bg-white/[0.05]" />

        <div className="flex flex-col gap-1 px-2 pb-4">
          {bottomItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white/25 transition-colors duration-150 group-hover:text-white/55">
                <Icon className="h-4 w-4" />
              </div>
              <span className="hidden text-sm text-white/25 transition-colors duration-150 group-hover:text-white/55 lg:block">
                {label}
              </span>
            </button>
          ))}

          <button className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white/20 transition-colors duration-200 group-hover:text-red-400">
              <LogOut className="h-4 w-4" />
            </div>
            <span className="hidden text-sm text-white/20 transition-colors duration-200 group-hover:text-red-400 lg:block">
              Log out
            </span>
          </button>
        </div>
      </aside>

      <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-white/[0.07] bg-[#09090e]/95 px-2 py-3 backdrop-blur-xl md:hidden">
        {navItems.map(({ id, icon: Icon, label }) => {
          const isActive = active === id;

          return (
            <button
              key={id}
              onClick={() => setActive(id)}
              className="relative flex flex-col items-center gap-1 px-4 py-1"
            >
              {isActive && (
                <motion.div
                  layoutId="mobile-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  className="absolute inset-0 rounded-xl bg-white/[0.07]"
                />
              )}

              <Icon
                className={`relative z-10 h-5 w-5 transition-colors duration-150 ${
                  isActive ? "text-violet-400" : "text-white/30"
                }`}
              />
              <span
                className={`relative z-10 font-mono text-[9px] uppercase tracking-wide transition-colors duration-150 ${
                  isActive ? "text-violet-400" : "text-white/25"
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
