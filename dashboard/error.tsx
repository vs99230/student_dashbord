'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';
import { motion } from 'framer-motion';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function DashboardError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Dashboard error:', error);
  }, [error]);

  return (
    <main className="flex-1 flex items-center justify-center min-h-screen bg-[#080809]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center gap-4 text-center max-w-sm px-6"
      >
        <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center">
          <AlertTriangle size={20} className="text-red-400" />
        </div>
        <h2 className="text-white font-semibold text-lg">Something went wrong</h2>
        <p className="text-white/40 text-sm">
          Could not load dashboard data. Please check your Supabase connection or try again.
        </p>
        <p className="text-white/20 text-xs font-mono bg-white/[0.04] px-3 py-1.5 rounded-lg">
          {error.message}
        </p>
        <button
          onClick={reset}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-white/70 text-sm transition-colors"
        >
          <RefreshCcw size={14} />
          Try again
        </button>
      </motion.div>
    </main>
  );
}