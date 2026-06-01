import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(__dirname, "../../principles");
const OUT = path.resolve(__dirname, "../public/images");

// source file -> output name (web-ready)
const jobs = [
  { src: "emotional brief.png", out: "principle-emotional-brief.jpg", width: 1800 },
  { src: "lightasmaterial.JPG", out: "principle-light.jpg", width: 1200 },
  { src: "honest-matter.jpg", out: "principle-matter.jpg", width: 1200 },
  { src: "dialoguewiththeenv.jpg", out: "principle-dialogue.jpg", width: 1800 },
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
