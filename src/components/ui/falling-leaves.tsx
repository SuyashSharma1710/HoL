"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Using the exact colors from the logo, minus the primary background so they are visible
const LEAF_COLORS = [
  "#E9E0CF", // Cream
  "#607860", // Sage Green
  "#B69C5F", // Gold
  "#2a4437", // Lighter subtle green
];

interface Leaf {
  id: number;
  x: number; 
  color: string;
  delay: number;
  duration: number;
  rotationStart: number;
  rotationEnd: number;
  size: number;
  settleX: number;
  settleY: number;
  repeatDelay: number;
}

export const FallingLeaves = () => {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    // Generate 15 leaves that will slowly fall
    const initialLeaves: Leaf[] = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)],
      delay: Math.random() * 20, // Spread the falling over 20 seconds
      duration: 7 + Math.random() * 8, // 7-15s fall time for slow floating effect
      rotationStart: Math.random() * 360,
      rotationEnd: Math.random() * 1080 - 540,
      size: 15 + Math.random() * 20, // 15-35px leaves
      settleX: (Math.random() - 0.5) * 80, // Horizontal drift
      settleY: -(Math.random() * 15 + 5), // Stack slightly up from the bottom border
      repeatDelay: Math.random() * 5, // Random pause before falling again
    }));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLeaves(initialLeaves);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-50 mask-image-bottom">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute"
          style={{
            left: `${leaf.x}%`,
            width: leaf.size,
            height: leaf.size,
            backgroundColor: leaf.color,
            borderRadius: "0 100% 0 100%", // Thinner, sleeker petal shape
            boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
          }}
          initial={{ 
            top: "-10%", 
            x: 0,
            rotate: leaf.rotationStart, 
            opacity: 0 
          }}
          animate={{ 
            top: "120%", // Fall entirely past the bottom
            x: leaf.settleX,
            rotate: leaf.rotationEnd,
            opacity: [0, 1, 1, 0], // Fade out at the bottom
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeatDelay: leaf.repeatDelay, // Random pause before falling again
            ease: "linear", // Linear is better for continuous gravity
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}
    </div>
  );
};
