import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Harmony of Life | Elevate Your Cellular Voltage & Lifeforce",
    short_name: "Harmony of Life",
    description: "Restore your health at the cellular level. Evidence-based holistic protocols, cellular detox, and 12 Pillars of Longevity.",
    start_url: "/",
    display: "standalone",
    background_color: "#e9e0cf",
    theme_color: "#e9e0cf",
    icons: [
      {
        src: "/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
