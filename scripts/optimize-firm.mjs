import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(__dirname, "../../firm");
const OUT = path.resolve(__dirname, "../public/images");

const jobs = [
  { src: "residencial.jpg", out: "typology-residential.jpg", width: 1200 },
  { src: "comercial.jpg", out: "typology-commercial.jpg", width: 1200 },
  { src: "specialprojects.jpg", out: "typology-special.jpg", width: 1200 },
];

for (const job of jobs) {
  const input = path.join(SRC, job.src);
  const output = path.join(OUT, job.out);
  await sharp(input)
    .rotate()
    .resize({ width: job.width, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(output);
  console.log(`✓ ${job.src} -> public/images/${job.out}`);
}
