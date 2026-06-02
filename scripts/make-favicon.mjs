import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUB = path.resolve(__dirname, "../public");

// Source: the existing favicon artwork (white background, blue "HA.co" letters).
const SRC = path.join(PUB, "apple-touch-icon.png");

// Brand blue (the Habitante wordmark ink) for the inverted background.
const BLUE = [30, 49, 207];

const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({
  resolveWithObject: true,
});
const { width, height, channels } = info;

// Invert: white background -> brand blue, blue letters -> white.
// `m` is letter coverage derived from luminance (dark/blue = letter).
const out = Buffer.alloc(width * height * 4);
for (let p = 0, o = 0; p < data.length; p += channels, o += 4) {
  const r = data[p];
  const g = data[p + 1];
  const b = data[p + 2];
  const lum = 0.299 * r + 0.587 * g + 0.114 * b;
  let m = (230 - lum) / 120;
  m = m < 0 ? 0 : m > 1 ? 1 : m;
  out[o] = Math.round(BLUE[0] * (1 - m) + 255 * m);
  out[o + 1] = Math.round(BLUE[1] * (1 - m) + 255 * m);
  out[o + 2] = Math.round(BLUE[2] * (1 - m) + 255 * m);
  out[o + 3] = 255;
}

const master = sharp(out, { raw: { width, height, channels: 4 } });

const targets = [
  { name: "apple-touch-icon.png", size: 180 },
  { name: "icon-512.png", size: 512 },
  { name: "favicon-48x48.png", size: 48 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "favicon-16x16.png", size: 16 },
];

for (const t of targets) {
  await master
    .clone()
    .resize(t.size, t.size, { kernel: "mitchell" })
    .png()
    .toFile(path.join(PUB, t.name));
  console.log(`✓ ${t.name} (${t.size}x${t.size})`);
}
