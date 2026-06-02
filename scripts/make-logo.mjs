import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOGOS = path.resolve(__dirname, "../../LOGOS PAGINA");
const OUT = path.resolve(__dirname, "../public/images");

// Each source produces a brand-color knockout + a white (reversed) variant.
const sources = [
  { file: "PALETA COLORES SITIO WEB-07.jpg", base: "logo-habitante" }, // stacked
  { file: "PALETA COLORES SITIO WEB-01.jpg", base: "logo-habitante-horizontal" }, // horizontal
];

const DENOM = 165; // R <= 90 -> fully opaque; 255 -> transparent

for (const { file, base } of sources) {
  const { data, info } = await sharp(path.join(LOGOS, file))
    .trim({ threshold: 12 })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;

  // Sample the real ink color from the most saturated pixels.
  let sumR = 0, sumG = 0, sumB = 0, count = 0;
  for (let i = 0; i < data.length; i += channels) {
    if (data[i] < 60) {
      sumR += data[i];
      sumG += data[i + 1];
      sumB += data[i + 2];
      count++;
    }
  }
  const fill = count
    ? [Math.round(sumR / count), Math.round(sumG / count), Math.round(sumB / count)]
    : [27, 82, 166];

  const buildRGBA = (color) => {
    const out = Buffer.alloc(width * height * 4);
    for (let p = 0, o = 0; p < data.length; p += channels, o += 4) {
      let a = (255 - data[p]) / DENOM;
      a = a < 0 ? 0 : a > 1 ? 1 : a;
      out[o] = color[0];
      out[o + 1] = color[1];
      out[o + 2] = color[2];
      out[o + 3] = Math.round(a * 255);
    }
    return out;
  };

  for (const v of [
    { name: `${base}.png`, color: fill },
    { name: `${base}-white.png`, color: [250, 249, 247] },
  ]) {
    await sharp(buildRGBA(v.color), { raw: { width, height, channels: 4 } })
      .png()
      .toFile(path.join(OUT, v.name));
    console.log(`✓ ${v.name}  (${width}x${height}, ink ${fill})`);
  }
}
