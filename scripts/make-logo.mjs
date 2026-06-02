import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOGOS = path.resolve(__dirname, "../../LOGOS PAGINA");
const OUT = path.resolve(__dirname, "../public/images");

// Each source produces a brand-color knockout + a white (reversed) variant.
// `crop` sources also produce a "-mark" variant with the bottom word
// ("arquitectura") removed — used for the navbar.
const sources = [
  { file: "PALETA COLORES SITIO WEB-07.jpg", base: "logo-habitante", crop: true }, // stacked
  { file: "PALETA COLORES SITIO WEB-01.jpg", base: "logo-habitante-horizontal" }, // horizontal
];

const DENOM = 165; // R <= 90 -> fully opaque; 255 -> transparent

for (const { file, base, crop } of sources) {
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

  const alphaAt = (p) => {
    let a = (255 - data[p]) / DENOM;
    return a < 0 ? 0 : a > 1 ? 1 : a;
  };

  // Build an RGBA buffer for a horizontal slice of rows [rowStart, rowEnd).
  const buildRGBA = (color, rowStart = 0, rowEnd = height) => {
    const h = rowEnd - rowStart;
    const out = Buffer.alloc(width * h * 4);
    let o = 0;
    for (let y = rowStart; y < rowEnd; y++) {
      for (let x = 0; x < width; x++) {
        const a = alphaAt((y * width + x) * channels);
        out[o] = color[0];
        out[o + 1] = color[1];
        out[o + 2] = color[2];
        out[o + 3] = Math.round(a * 255);
        o += 4;
      }
    }
    return { buf: out, w: width, h };
  };

  const variants = [
    { suffix: "", color: fill },
    { suffix: "-white", color: [250, 249, 247] },
  ];

  // Full logo (with every word).
  for (const v of variants) {
    const { buf, w, h } = buildRGBA(v.color);
    await sharp(buf, { raw: { width: w, height: h, channels: 4 } })
      .png()
      .toFile(path.join(OUT, `${base}${v.suffix}.png`));
    console.log(`✓ ${base}${v.suffix}.png  (${w}x${h}, ink ${fill})`);
  }

  // Cropped "mark": detect horizontal content bands and drop the last one
  // (the "arquitectura" wordmark line) for a cleaner navbar lockup.
  if (crop) {
    const rowCov = new Array(height).fill(0);
    for (let y = 0; y < height; y++) {
      let c = 0;
      for (let x = 0; x < width; x++) {
        if (alphaAt((y * width + x) * channels) > 0.25) c++;
      }
      rowCov[y] = c;
    }
    const maxCov = Math.max(...rowCov);
    const onThresh = maxCov * 0.02;

    const bands = [];
    let s = -1;
    for (let y = 0; y < height; y++) {
      const on = rowCov[y] > onThresh;
      if (on && s < 0) s = y;
      if (!on && s >= 0) { bands.push([s, y - 1]); s = -1; }
    }
    if (s >= 0) bands.push([s, height - 1]);

    let cropEnd = height;
    if (bands.length >= 2) {
      const lastStart = bands[bands.length - 1][0];
      const prevEnd = bands[bands.length - 2][1];
      cropEnd = Math.round((prevEnd + lastStart) / 2);
    }

    for (const v of variants) {
      const { buf, w, h } = buildRGBA(v.color, 0, cropEnd);
      await sharp(buf, { raw: { width: w, height: h, channels: 4 } })
        .trim({ threshold: 1 })
        .png()
        .toFile(path.join(OUT, `${base}-mark${v.suffix}.png`));
      console.log(`✓ ${base}-mark${v.suffix}.png  (crop to ${cropEnd}/${height}, bands ${bands.length})`);
    }
  }
}
