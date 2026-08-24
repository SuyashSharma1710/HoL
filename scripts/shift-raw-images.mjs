import fs from 'fs';
import path from 'path';

const rawDir = path.resolve('./raw_images');
const rawImagesDir = path.resolve('./raw_images/images');
const publicDir = path.resolve('./public');
const publicImagesDir = path.resolve('./public/images');

fs.mkdirSync(rawDir, { recursive: true });
fs.mkdirSync(rawImagesDir, { recursive: true });

function moveNonWebpFiles(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return;
  const files = fs.readdirSync(srcDir);
  for (const file of files) {
    const filePath = path.join(srcDir, file);
    const stat = fs.statSync(filePath);
    if (stat.isFile()) {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        const destPath = path.join(destDir, file);
        fs.renameSync(filePath, destPath);
        console.log(`Moved: ${file} -> ${path.relative(process.cwd(), destPath)}`);
      }
    }
  }
}

// 1. Move root public non-webp images
moveNonWebpFiles(publicDir, rawDir);

// 2. Move public/images non-webp images
moveNonWebpFiles(publicImagesDir, rawImagesDir);

console.log('All non-webp images moved to raw_images successfully.');
