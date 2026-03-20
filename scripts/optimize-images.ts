/**
 * Optimize downloaded images with Sharp
 * Converts to WebP and generates responsive sizes
 * Run: npx ts-node scripts/optimize-images.ts
 */
import sharp from "sharp";
import fs from "fs";
import path from "path";

const INPUT_DIR = path.join(__dirname, "..", "public", "images");
const OUTPUT_DIR = path.join(__dirname, "..", "public", "images", "optimized");

const SIZES = [
  { suffix: "-sm", width: 640 },
  { suffix: "-md", width: 1024 },
  { suffix: "-lg", width: 1920 },
];

async function optimizeImage(filepath: string) {
  const ext = path.extname(filepath).toLowerCase();
  if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) return;

  const basename = path.basename(filepath, ext);

  for (const size of SIZES) {
    const outputPath = path.join(OUTPUT_DIR, `${basename}${size.suffix}.webp`);

    if (fs.existsSync(outputPath)) {
      console.log(`SKIP ${basename}${size.suffix}.webp`);
      continue;
    }

    try {
      await sharp(filepath)
        .resize(size.width, undefined, { withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(outputPath);

      console.log(`OK   ${basename}${size.suffix}.webp`);
    } catch (err: any) {
      console.error(`FAIL ${basename}${size.suffix}: ${err.message}`);
    }
  }
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const files = fs
    .readdirSync(INPUT_DIR)
    .filter((f) => !fs.statSync(path.join(INPUT_DIR, f)).isDirectory())
    .map((f) => path.join(INPUT_DIR, f));

  console.log(`Processing ${files.length} images...\n`);

  for (const file of files) {
    await optimizeImage(file);
  }

  console.log("\nOptimization complete.");
}

main();
