import sharp from 'sharp';
import { mkdir, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('public/assets/imagens');
const out = path.resolve('public/assets/generated');
const supported = new Set(['.png', '.jpg', '.jpeg']);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(file));
    else if (supported.has(path.extname(entry.name).toLowerCase())) files.push(file);
  }
  return files;
}

await mkdir(out, { recursive: true });
const files = await walk(root);
await Promise.all(files.map(async (file) => {
  const name = path.basename(file, path.extname(file)).replace(/[^a-z0-9_-]+/gi, '-').toLowerCase();
  const image = sharp(file).rotate();
  await Promise.all([
    image.clone().webp({ quality: 82, effort: 5 }).toFile(path.join(out, `${name}.webp`)),
    image.clone().avif({ quality: 62, effort: 5 }).toFile(path.join(out, `${name}.avif`)),
  ]);
}));
console.log(`Converted ${files.length} images to WebP and AVIF in ${path.relative(process.cwd(), out)}.`);
