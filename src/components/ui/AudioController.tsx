"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { useFloatingTheme } from "@/hooks/useFloatingTheme";

export default function AudioController() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDark = useFloatingTheme(containerRef);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const AUDIO_BARS = [
    { delay: "0.0s", duration: "0.6s" },
    { delay: "0.2s", duration: "0.8s" },
    { delay: "0.4s", duration: "0.5s" },
    { delay: "0.6s", duration: "0.9s" },
    { delay: "0.8s", duration: "0.7s" },
  ];

  const toggleAudio = () => {
    if (!audioRef.current) return;
    const audio = audioRef.current;

    // Clear any existing fade transitions
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
    }

    if (isPlaying) {
      setIsPlaying(false);
      // Fade out
      fadeIntervalRef.current = setInterval(() => {
        if (audio.volume > 0.05) {
          audio.volume = Math.max(0, audio.volume - 0.05);
        } else {
          audio.volume = 0;
          audio.pause();
          if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
        }
      }, 50); // Fades out over ~1 second
    } else {
      setIsPlaying(true);
      // Fade in
      if (audio.paused) {
        audio.volume = 0;
        audio.play().catch(e => console.warn("Audio play blocked", e));
      }
      fadeIntervalRef.current = setInterval(() => {
        if (audio.volume < 0.95) {
          audio.volume = Math.min(1, audio.volume + 0.05);
        } else {
          audio.volume = 1;
          if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
        }
      }, 50); // Fades in over ~1 second
    }
  };

  return (
    <>
      <div className="fixed bottom-6 left-6 z-40 pointer-events-none flex items-center justify-center">
        <div className="px-6 py-3 opacity-0 pointer-events-none flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] hidden sm:block">
            {isPlaying ? "Sound On" : "Sound Off"}
          </span>
          <div className="flex items-end gap-[3px] h-4 w-6" />
        </div>
        <div className="absolute inset-0 backdrop-blur-3xl bg-foreground/10 border border-foreground/20 rounded-full shadow-2xl" />
      </div>

      <div 
        ref={containerRef}
        className={cn(
          "fixed bottom-6 left-6 z-50 transition-colors duration-300",
          isDark ? "text-white" : "text-foreground"
        )}
      >
        <audio ref={audioRef} loop src="/audio/HoL_med_aud.mp3" preload="none" />
        <button 
          onClick={toggleAudio}
          className="flex items-center gap-3 px-6 py-3 group transition-opacity opacity-70 hover:opacity-100"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] hidden sm:block">
            {isPlaying ? "Sound On" : "Sound Off"}
          </span>
          <div className="flex items-end gap-[3px] h-4 w-6 relative">
            {AUDIO_BARS.map((bar, i) => (
              <div
                key={i}
                className={cn(
                  "w-1 rounded-full transition-all duration-300",
                  isPlaying ? "bg-current animate-audio-bar" : "bg-current/50 group-hover:bg-current h-[20%]"
                )}
                style={isPlaying ? {
                  animationDelay: bar.delay,
                  animationDuration: bar.duration
                } : undefined}
              />
            ))}
            <style dangerouslySetInnerHTML={{ __html: `
              @keyframes audio-bar {
                0% { height: 20%; }
                100% { height: 100%; }
              }
              .animate-audio-bar {
                animation: audio-bar ease-in-out infinite alternate;
              }
            `}} />
          </div>
        </button>
      </div>
    </>
  );
}
