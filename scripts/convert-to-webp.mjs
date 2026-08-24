import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve('./public');
const imagesDir = path.resolve('./public/images');

async function convertFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) {
    return;
  }

  const dir = path.dirname(filePath);
  const baseName = path.basename(filePath, ext);
  const targetPath = path.join(dir, `${baseName}.webp`);

  try {
    const stat = fs.statSync(filePath);
    await sharp(filePath)
      .webp({ quality: 88, effort: 6 })
      .toFile(targetPath);
    
    const newStat = fs.statSync(targetPath);
    const reduction = (((stat.size - newStat.size) / stat.size) * 100).toFixed(1);
    console.log(`Converted: ${path.basename(filePath)} (${(stat.size/1024).toFixed(0)}KB) -> ${baseName}.webp (${(newStat.size/1024).toFixed(0)}KB) [${reduction}% smaller]`);
  } catch (err) {
    console.error(`Error converting ${filePath}:`, err.message);
  }
}

async function run() {
  console.log('--- Starting WebP Batch Conversion ---');
  
  // 1. Root public files
  const rootFiles = fs.readdirSync(publicDir);
  for (const file of rootFiles) {
    const fullPath = path.join(publicDir, file);
    if (fs.statSync(fullPath).isFile()) {
      await convertFile(fullPath);
    }
  }

  // 2. public/images files
  const imgFiles = fs.readdirSync(imagesDir);
  for (const file of imgFiles) {
    const fullPath = path.join(imagesDir, file);
    if (fs.statSync(fullPath).isFile()) {
      await convertFile(fullPath);
    }
  }

  console.log('--- WebP Conversion Completed ---');
}

run();
