import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.resolve('./public/images');
const rawImagesDir = path.resolve('./raw_images/images');

async function optimizeFile(fileName, maxWidth, quality = 80) {
  const targetPath = path.join(imagesDir, fileName);
  
  // Find source either in raw_images/images or public/images
  let srcPath = path.join(rawImagesDir, fileName.replace('.webp', '.jpeg'));
  if (!fs.existsSync(srcPath)) {
    srcPath = path.join(rawImagesDir, fileName.replace('.webp', '.jpg'));
  }
  if (!fs.existsSync(srcPath)) {
    srcPath = path.join(rawImagesDir, fileName.replace('.webp', '.png'));
  }
  if (!fs.existsSync(srcPath)) {
    srcPath = targetPath;
  }

  if (!fs.existsSync(srcPath)) {
    console.log(`Skipping (not found): ${fileName}`);
    return;
  }

  try {
    const origStat = fs.existsSync(targetPath) ? fs.statSync(targetPath).size : fs.statSync(srcPath).size;
    
    // Process with sharp: resize if larger than maxWidth, convert to webp with high effort and optimized quality
    const image = sharp(srcPath);
    const metadata = await image.metadata();

    let pipeline = sharp(srcPath);
    if (metadata.width && metadata.width > maxWidth) {
      pipeline = pipeline.resize(maxWidth, null, { withoutEnlargement: true });
    }

    const buffer = await pipeline
      .webp({ quality, effort: 6 })
      .toBuffer();

    fs.writeFileSync(targetPath, buffer);
    const newStat = fs.statSync(targetPath).size;
    const savings = (((origStat - newStat) / origStat) * 100).toFixed(1);
    console.log(`✓ ${fileName}: ${(origStat/1024).toFixed(0)}KB -> ${(newStat/1024).toFixed(0)}KB (${savings}% saved)`);
  } catch (err) {
    console.error(`Error optimizing ${fileName}:`, err.message);
  }
}

async function run() {
  console.log('--- Starting Precision Image Optimization ---');

  // Desktop Slides (1920px max)
  await optimizeFile('age1.webp', 1920, 78);
  await optimizeFile('age2.webp', 1920, 78);
  await optimizeFile('age3.webp', 1920, 78);

  // Mobile Slides (750px max)
  await optimizeFile('age1mob.webp', 750, 78);
  await optimizeFile('age2mob.webp', 750, 78);
  await optimizeFile('age3mob.webp', 750, 78);

  // Hero banner (1920px max)
  await optimizeFile('hero-vitality-banner.webp', 1920, 78);

  // Why HOL Purpose Cards (600px max)
  await optimizeFile('our-aim.webp', 600, 80);
  await optimizeFile('our-vision.webp', 600, 80);
  await optimizeFile('our-mission.webp', 600, 80);
  await optimizeFile('our-objective.webp', 600, 80);
  await optimizeFile('why-hol-botanical-bg.webp', 1920, 75);

  // Cellular World Background (1920px max)
  await optimizeFile('cellular-world-teal-bg.webp', 1920, 75);
  await optimizeFile('2nd-optimized.webp', 1920, 75);

  // 12 Pillar Grid Circle Graphics (500px max)
  const pillarCircles = [
    'Balance-Nutrition.webp', 'Deep-Detox.webp', 'Artery-Cleanse.webp',
    'Alkaline-Chemistry.webp', 'Cellular-Vitality.webp', 'Gut-Reset.webp',
    'Inflammation.webp', 'Deep-Sleep.webp', 'Regular-Exercise.webp',
    'Immunity.webp', 'Nature-Connect.webp', 'Social-Connect.webp'
  ];
  for (const file of pillarCircles) {
    await optimizeFile(file, 500, 80);
  }

  // 12 Pillar Modal Posters (700px max)
  const pillarPosters = [
    'balanced-nutritionp.webp', 'deep-detoxp.webp', 'artery-cleansp.webp',
    'alkaline-chemistryp.webp', 'cellular-vitalityp.webp', 'gut-resetp.webp',
    'inflamantionp.webp', 'deep-sleepp.webp', 'regular-exercisep.webp',
    'immunityp.webp', 'nature-connectp.webp', 'social-connectp.webp'
  ];
  for (const file of pillarPosters) {
    await optimizeFile(file, 700, 80);
  }

  // Pathways (500px max)
  await optimizeFile('pathway-products-icon.webp', 500, 80);
  await optimizeFile('pathway-knowledge-icon.webp', 500, 80);
  await optimizeFile('pathway-opportunity-icon.webp', 500, 80);
  await optimizeFile('next-step-card-bg.webp', 1000, 75);

  // Avatar & Authority
  await optimizeFile('prana-energy-avatar.webp', 600, 80);
  await optimizeFile('dr-ashutosh-rastogi.webp', 600, 80);

  // Testimonials (300px max)
  await optimizeFile('testi-1.webp', 300, 80);
  await optimizeFile('testi-2.webp', 300, 80);
  await optimizeFile('testi-3.webp', 300, 80);
  await optimizeFile('testi-4.webp', 300, 80);

  console.log('--- Precision Image Optimization Completed ---');
}

run();
