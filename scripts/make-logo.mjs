import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(
  __dirname,
  "../../LOGOS PAGINA/PALETA COLORES SITIO WEB-07.jpg"
);
const OUT = path.resolve(__dirname, "../public/images");

// 1) Trim the surrounding white, then read raw RGB pixels.
const { data, info } = await sharp(SRC)
  .trim({ threshold: 12 })
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;

// 2) Sample the true logo color from the most saturated (darkest-red) pixels.
let sumR = 0,
  sumG = 0,
  sumB = 0,
  count = 0;
for (let i = 0; i < data.length; i += channels) {
  const r = data[i];
  if (r < 60) {
    sumR += data[i];
    sumG += data[i + 1];
    sumB += data[i + 2];
    count++;
  }
}
const fill = count
  ? [Math.round(sumR / count), Math.round(sumG / count), Math.round(sumB / count)]
  : [27, 82, 166];
console.log("Sampled logo color:", fill, `(${width}x${height})`);

// 3) Build an alpha matte from the red channel: blue ink -> opaque, white -> clear.
//    Pixels with R <= 90 are fully opaque; anti-aliased edges fade smoothly.
const DENOM = 165; // 255 - 90
function buildRGBA(color) {
  const out = Buffer.alloc(width * height * 4);
  for (let p = 0, o = 0; p < data.length; p += channels, o += 4) {
    const r = data[p];
    let a = (255 - r) / DENOM;
    a = a < 0 ? 0 : a > 1 ? 1 : a;
    out[o] = color[0];
    out[o + 1] = color[1];
    out[o + 2] = color[2];
    out[o + 3] = Math.round(a * 255);
  }
  return out;
}

const variants = [
  { name: "logo-habitante.png", color: fill },
  { name: "logo-habitante-white.png", color: [250, 249, 247] },
];

for (const v of variants) {
  await sharp(buildRGBA(v.color), { raw: { width, height, channels: 4 } })
    .png()
    .toFile(path.join(OUT, v.name));
  console.log(`✓ public/images/${v.name}`);
}
