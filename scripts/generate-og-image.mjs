import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const width = 1200;
const height = 630;

// Embed the exact SVG logo paths from public/logo.svg
const logoSvg = `
<svg width="170" height="170" viewBox="0 0 1507 1507" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1154.53 568.223C1300.65 568.223 1429.68 641.383 1507 753.071C1429.68 864.759 1300.65 937.921 1154.53 937.921C1008.41 937.921 879.382 864.759 802.068 753.071C879.382 641.383 1008.41 568.223 1154.53 568.223Z" fill="#C7C3B8"/>
  <path d="M568.221 352.466C568.221 206.346 641.382 77.3134 753.07 -8.08003e-06C864.759 77.3134 937.919 206.346 937.919 352.466C937.919 498.586 864.759 627.618 753.07 704.932C641.382 627.618 568.221 498.586 568.221 352.466Z" fill="#8FAE9C"/>
  <path d="M352.466 937.92C206.346 937.92 77.3145 864.76 0.000960403 753.072C77.3143 641.383 206.347 568.222 352.468 568.222C498.587 568.222 627.618 641.383 704.932 753.07C627.618 864.759 498.586 937.92 352.466 937.92Z" fill="#E9DDC7"/>
  <path d="M937.92 1154.53C937.92 1300.65 864.76 1429.69 753.071 1507C641.383 1429.69 568.223 1300.65 568.223 1154.53C568.223 1008.41 641.383 879.382 753.071 802.068C864.76 879.382 937.92 1008.41 937.92 1154.53Z" fill="#5A7161"/>
</svg>
`;

// Create a rich SVG banner with gradient, ambient glows, border framing, and elegant typography
const fullOgSvg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#142b23" />
      <stop offset="50%" stop-color="#0e211a" />
      <stop offset="100%" stop-color="#081410" />
    </linearGradient>

    <!-- Gold Radial Aura -->
    <radialGradient id="goldGlow" cx="50%" cy="30%" r="45%">
      <stop offset="0%" stop-color="#ffd875" stop-opacity="0.38" />
      <stop offset="40%" stop-color="#b78736" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#142b23" stop-opacity="0" />
    </radialGradient>

    <!-- Bottom Sage Ambient Glow -->
    <radialGradient id="sageGlow" cx="50%" cy="95%" r="50%">
      <stop offset="0%" stop-color="#607860" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#142b23" stop-opacity="0" />
    </radialGradient>

    <!-- Gold Line Gradient -->
    <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#b78736" stop-opacity="0" />
      <stop offset="50%" stop-color="#ffd875" stop-opacity="1" />
      <stop offset="100%" stop-color="#b78736" stop-opacity="0" />
    </linearGradient>

    <!-- Badge Background Gradient -->
    <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#b78736" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#ffd875" stop-opacity="0.15" />
    </linearGradient>
  </defs>

  <!-- Background Base -->
  <rect width="${width}" height="${height}" fill="url(#bgGrad)" />

  <!-- Ambient Glows -->
  <rect width="${width}" height="${height}" fill="url(#goldGlow)" />
  <rect width="${width}" height="${height}" fill="url(#sageGlow)" />

  <!-- Subtle Constellation Nodes & Connecting Lines -->
  <g stroke="#b78736" stroke-opacity="0.15" stroke-width="1" fill="none">
    <line x1="120" y1="140" x2="280" y2="180" />
    <line x1="280" y1="180" x2="220" y2="340" />
    <line x1="220" y1="340" x2="140" y2="480" />
    <line x1="1080" y1="140" x2="920" y2="180" />
    <line x1="920" y1="180" x2="980" y2="340" />
    <line x1="980" y1="340" x2="1060" y2="480" />
  </g>
  <circle cx="120" cy="140" r="3" fill="#ffd875" opacity="0.3" />
  <circle cx="280" cy="180" r="4" fill="#ffd875" opacity="0.4" />
  <circle cx="220" cy="340" r="3" fill="#ffd875" opacity="0.3" />
  <circle cx="140" cy="480" r="4" fill="#ffd875" opacity="0.4" />
  <circle cx="1080" cy="140" r="3" fill="#ffd875" opacity="0.3" />
  <circle cx="920" cy="180" r="4" fill="#ffd875" opacity="0.4" />
  <circle cx="980" cy="340" r="3" fill="#ffd875" opacity="0.3" />
  <circle cx="1060" cy="480" r="4" fill="#ffd875" opacity="0.4" />

  <!-- Outer Decorative Border Frame -->
  <rect x="24" y="24" width="${width - 48}" height="${height - 48}" rx="20" fill="none" stroke="#b78736" stroke-opacity="0.3" stroke-width="1.5" />
  <rect x="32" y="32" width="${width - 64}" height="${height - 64}" rx="14" fill="none" stroke="#e9e0cf" stroke-opacity="0.08" stroke-width="1" />

  <!-- Corner Accents -->
  <circle cx="24" cy="24" r="3.5" fill="#ffd875" opacity="0.8" />
  <circle cx="${width - 24}" cy="24" r="3.5" fill="#ffd875" opacity="0.8" />
  <circle cx="24" cy="${height - 24}" r="3.5" fill="#ffd875" opacity="0.8" />
  <circle cx="${width - 24}" cy="${height - 24}" r="3.5" fill="#ffd875" opacity="0.8" />

  <!-- Top Eyebrow Chip -->
  <g transform="translate(410, 52)">
    <rect width="380" height="34" rx="17" fill="url(#badgeGrad)" stroke="#b78736" stroke-opacity="0.5" stroke-width="1" />
    <text x="190" y="21" fill="#ffd875" font-family="'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="11" font-weight="700" letter-spacing="2" text-anchor="middle">
      INDIA'S FIRST PERSONALISED WELLNESS COMMUNITY
    </text>
  </g>

  <!-- Centered Brandmark Emblem -->
  <g transform="translate(515, 102)">
    <!-- Behind Emblem Halo -->
    <circle cx="85" cy="85" r="95" fill="#ffd875" opacity="0.15" />
    <circle cx="85" cy="85" r="70" fill="#ffffff" opacity="0.08" />
    ${logoSvg}
  </g>

  <!-- Main Title: Harmony of Life -->
  <text x="600" y="355" fill="#f7f4ec" font-family="Georgia, 'Times New Roman', serif" font-size="56" font-weight="bold" letter-spacing="0.5" text-anchor="middle">
    Harmony of Life
  </text>

  <!-- Tagline / Italic Accent: The Science of Living Young -->
  <text x="600" y="408" fill="#ffd875" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="30" font-weight="normal" letter-spacing="0.5" text-anchor="middle">
    The Science of Living Young
  </text>

  <!-- Gold Accent Divider -->
  <rect x="460" y="432" width="280" height="2" fill="url(#goldLine)" />

  <!-- Subtitle / Value Proposition -->
  <text x="600" y="475" fill="#e9e0cf" font-family="'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="17" font-weight="400" letter-spacing="0.3" text-anchor="middle" opacity="0.95">
    Elevate Your Cellular Voltage &amp; Lifeforce • 12 Pillars of Longevity
  </text>

  <!-- Bottom Badges Strip -->
  <g transform="translate(290, 515)">
    <!-- Pill 1 -->
    <rect x="0" y="0" width="190" height="34" rx="17" fill="#142b23" stroke="#b78736" stroke-opacity="0.45" stroke-width="1" />
    <text x="95" y="22" fill="#ffd875" font-family="'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="12" font-weight="600" text-anchor="middle">
      ✦ 12 Longevity Pillars
    </text>

    <!-- Pill 2 -->
    <rect x="215" y="0" width="190" height="34" rx="17" fill="#142b23" stroke="#b78736" stroke-opacity="0.45" stroke-width="1" />
    <text x="310" y="22" fill="#ffd875" font-family="'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="12" font-weight="600" text-anchor="middle">
      ⚡ Cellular Voltage
    </text>

    <!-- Pill 3 -->
    <rect x="430" y="0" width="190" height="34" rx="17" fill="#142b23" stroke="#b78736" stroke-opacity="0.45" stroke-width="1" />
    <text x="525" y="22" fill="#ffd875" font-family="'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="12" font-weight="600" text-anchor="middle">
      🌿 Cellular Detox
    </text>
  </g>
</svg>
`;

async function generateOgImages() {
  const publicDir = path.resolve('./public');
  const appDir = path.resolve('./src/app');

  const svgBuffer = Buffer.from(fullOgSvg);

  // 1. Generate public/og-image.jpg (JPEG format, quality 92, ~60KB - optimal for WhatsApp & social platforms)
  const jpgBuffer = await sharp(svgBuffer)
    .jpeg({ quality: 92, mozjpeg: true })
    .toBuffer();

  const jpgPath = path.join(publicDir, 'og-image.jpg');
  fs.writeFileSync(jpgPath, jpgBuffer);
  console.log(`Generated: ${jpgPath} (${(jpgBuffer.length / 1024).toFixed(1)} KB)`);

  // 2. Generate public/og-image.png (PNG format, crisp 24-bit RGB)
  const pngBuffer = await sharp(svgBuffer)
    .png({ compressionLevel: 9 })
    .toBuffer();

  const pngPath = path.join(publicDir, 'og-image.png');
  fs.writeFileSync(pngPath, pngBuffer);
  console.log(`Generated: ${pngPath} (${(pngBuffer.length / 1024).toFixed(1)} KB)`);

  // 3. Generate src/app/opengraph-image.png for Next.js App Router route convention
  const nextOgPath = path.join(appDir, 'opengraph-image.png');
  fs.writeFileSync(nextOgPath, pngBuffer);
  console.log(`Generated Next.js App Router: ${nextOgPath}`);

  // 4. Generate src/app/twitter-image.png
  const nextTwitterPath = path.join(appDir, 'twitter-image.png');
  fs.writeFileSync(nextTwitterPath, pngBuffer);
  console.log(`Generated Next.js Twitter image: ${nextTwitterPath}`);
}

generateOgImages().catch(err => {
  console.error('Error generating OG image:', err);
  process.exit(1);
});
