import fs from 'fs';
import path from 'path';

const srcDir = path.resolve('./src');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js'))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;

      // Replace /hero-bg.png with /hero-bg.webp
      content = content.replace(/\/hero-bg\.png/g, '/hero-bg.webp');

      // Replace /images/(something).(png|jpg|jpeg) with /images/$1.webp (leave .svg untouched)
      content = content.replace(/\/images\/([^"'\s`]+)\.(png|jpg|jpeg)/gi, (match, name) => {
        return `/images/${name}.webp`;
      });

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated image paths in: ${path.relative(process.cwd(), fullPath)}`);
      }
    }
  }
}

processDir(srcDir);
console.log('All image paths updated to WebP successfully.');
