"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log exception to diagnostic console
    console.error("Harmony of Life App Error:", error);
  }, [error]);

  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-background px-4 sm:px-8 py-24 text-primary selection:bg-accent/20">
      <div className="max-w-xl w-full text-center flex flex-col items-center">
        {/* Eyebrow Alert Badge */}
        <div className="inline-flex items-center gap-2 font-sans font-semibold text-xs tracking-[0.2em] text-red-800 uppercase bg-red-900/10 border border-red-800/30 px-3.5 py-1.5 rounded-full mb-6 shadow-xs">
          <AlertCircle className="w-3.5 h-3.5 text-red-800" />
          <span>System Disruption</span>
        </div>

        {/* Display Header */}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-[1.1] mb-2">
          Temporary Voltage Fluctuation
        </h1>
        <span className="font-heading italic text-xl sm:text-2xl text-accent font-medium mb-4 block">
          We encountered an unexpected disruption.
        </span>

        {/* Amber-Gold Divider */}
        <div className="w-14 h-[2.5px] bg-accent my-3 rounded-full" />

        {/* Narrative Description */}
        <p className="font-sans text-sm sm:text-base text-primary/80 leading-relaxed max-w-md mx-auto mb-8 font-normal">
          An unexpected error interrupted this session. You can try refreshing the cellular connection or return to the main sanctuary.
        </p>

        {/* Dual Button Action Cluster */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-[#a06f20] text-white font-sans text-sm font-semibold tracking-wide px-8 py-3.5 rounded-full shadow-[0_8px_24px_rgba(183,135,54,0.3)] hover:shadow-[0_12px_28px_rgba(183,135,54,0.4)] transition-all duration-300 active:scale-98 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Restore Connection</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#e9e0cf]/50 hover:bg-[#e9e0cf] text-primary border border-accent/50 font-sans text-sm font-semibold tracking-wide px-7 py-3.5 rounded-full backdrop-blur-md transition-all duration-300 active:scale-98 cursor-pointer"
          >
            <Home className="w-4 h-4 text-accent" />
            <span>Return to Sanctuary</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
