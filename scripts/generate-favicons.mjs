/**
 * Generates sized favicon PNGs from the day/night source artwork.
 *
 * Usage: npm run favicons
 *
 * Small sizes are center-cropped so the DG monogram fills the tab icon.
 * Outputs public/favicons/favicon-{size}x{size}-{day|night}.png
 * plus apple-touch-icon.png and a 48x48 public/favicon.png fallback.
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'public');
const outDir = path.join(publicDir, 'favicons');

const SIZES = [16, 32, 48, 180, 192, 512];
const VARIANTS = [
  { name: 'day', src: path.join(publicDir, 'new-favicon-day.png') },
  { name: 'night', src: path.join(publicDir, 'new-favicon-night.png') },
];

/** Tighter crop on tab-sized icons; more padding on large/home-screen icons. */
function zoomFor(size) {
  if (size <= 16) return 2.35;
  if (size <= 48) return 2.15;
  return 1.7;
}

async function writeIcon(src, size, dest) {
  const { width = size, height = size } = await sharp(src).metadata();
  const side = Math.min(width, height);
  const crop = Math.max(1, Math.round(side / zoomFor(size)));
  const left = Math.round((width - crop) / 2);
  const top = Math.round((height - crop) / 2);

  await sharp(src)
    .extract({ left, top, width: crop, height: crop })
    .resize(size, size, { kernel: sharp.kernel.lanczos3 })
    .png({ compressionLevel: 9 })
    .toFile(dest);
}

await mkdir(outDir, { recursive: true });

for (const variant of VARIANTS) {
  const metadata = await sharp(variant.src).metadata();
  console.log(`Source ${variant.name}: ${metadata.width}x${metadata.height}`);

  for (const size of SIZES) {
    const dest = path.join(outDir, `favicon-${size}x${size}-${variant.name}.png`);
    await writeIcon(variant.src, size, dest);
    console.log(`Wrote ${path.relative(root, dest)}`);
  }
}

const appleTouch = path.join(outDir, 'apple-touch-icon.png');
await writeIcon(VARIANTS[0].src, 180, appleTouch);
console.log(`Wrote ${path.relative(root, appleTouch)}`);

const fallback = path.join(publicDir, 'favicon.png');
await writeIcon(VARIANTS[0].src, 48, fallback);
console.log(`Wrote ${path.relative(root, fallback)}`);
