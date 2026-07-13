"use client";

import { useEffect } from "react";

export default function AnimatedFavicon() {
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    let angle = 0;
    
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // 32x32 is a good size for a favicon
    canvas.width = 32;
    canvas.height = 32;
    
    const img = new Image();
    // Ensuring no caching issues
    img.src = "/logo.svg?" + new Date().getTime();

    const updateFavicon = () => {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      
      // Move to center, rotate, and move back
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((angle * Math.PI) / 180);
      ctx.translate(-canvas.width / 2, -canvas.height / 2);
      
      // Draw the SVG
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.restore();
      
      // Recreate the link element to force browser to refresh the favicon
      const oldLink = document.getElementById("dynamic-favicon");
      if (oldLink) oldLink.remove();
      
      // Remove existing static icons to prevent conflicts
      document.querySelectorAll("link[rel~='icon']").forEach(el => el.remove());
      
      const newLink = document.createElement("link");
      newLink.id = "dynamic-favicon";
      newLink.rel = "icon";
      newLink.type = "image/png";
      newLink.href = canvas.toDataURL("image/png");
      document.head.appendChild(newLink);
      
      // Increment rotation angle (adjust number for speed)
      angle = (angle + 3) % 360; 
    };

    img.onload = () => {
      // Run roughly 20 frames per second
      intervalId = setInterval(updateFavicon, 50); 
    };

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return null;
}
