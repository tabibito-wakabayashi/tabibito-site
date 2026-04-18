import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const IMAGES_DIR = path.resolve('public/images');
const MAX_WIDTH = 1600;
const JPEG_QUALITY = 82;
const PNG_QUALITY = 82;

const TARGETS = [
  'ceo-1.jpg',
  'sns-hero.jpg',
  'school-1.png',
  'people-1.jpg',
  'people-4.jpg',
  'people-5.jpg',
  'people-6.jpg',
  'people/1.jpeg',
  'people/2.jpeg',
  'people/3.jpeg',
  'people/4.jpeg',
  'people/5.jpeg',
  'people/6.jpeg',
  'AdobeStock_1848977828.jpg',
  'AdobeStock_1025414470.jpg',
];

function fmt(bytes) {
  if (bytes > 1024 * 1024) return (bytes / 1024 / 1024).toFixed(2) + 'MB';
  return (bytes / 1024).toFixed(1) + 'KB';
}

for (const rel of TARGETS) {
  const abs = path.join(IMAGES_DIR, rel);
  try {
    const before = await stat(abs);
    const input = await sharp(abs).rotate();
    const meta = await input.metadata();
    const ext = path.extname(rel).toLowerCase();
    const width = Math.min(meta.width ?? MAX_WIDTH, MAX_WIDTH);

    let pipeline = sharp(abs).rotate().resize({ width, withoutEnlargement: true });

    if (ext === '.png') {
      pipeline = pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 });
    } else {
      pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
    }

    const buf = await pipeline.toBuffer();
    const { writeFile } = await import('node:fs/promises');
    await writeFile(abs, buf);
    const after = await stat(abs);
    console.log(`${rel}: ${fmt(before.size)} -> ${fmt(after.size)} (-${Math.round((1 - after.size / before.size) * 100)}%)`);
  } catch (e) {
    console.error(`FAIL ${rel}: ${e.message}`);
  }
}
