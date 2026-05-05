const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const LOGOS_DIR = path.resolve(__dirname, "../../LOGOS PAGINA");
const PUBLIC_DIR = path.resolve(__dirname, "../public");

async function main() {
  const logo07 = path.join(LOGOS_DIR, "PALETA COLORES SITIO WEB-07.jpg");
  const logo09 = path.join(LOGOS_DIR, "PALETA COLORES SITIO WEB-09.jpg");

  // --- Logo -07: Stacked wordmark for Navbar/Footer ---
  const meta07 = await sharp(logo07).metadata();
  console.log("Logo-07 size:", meta07.width, "x", meta07.height);

  const trimmed07 = await sharp(logo07)
    .trim({ threshold: 20 })
    .toBuffer({ resolveWithObject: true });
  console.log("Logo-07 trimmed:", trimmed07.info.width, "x", trimmed07.info.height);

  // Make white background transparent
  const raw07 = await sharp(trimmed07.data)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width: w07, height: h07 } = raw07.info;
  const px07 = raw07.data;

  for (let i = 0; i < px07.length; i += 4) {
    if (px07[i] > 230 && px07[i + 1] > 230 && px07[i + 2] > 230) {
      px07[i + 3] = 0;
    }
  }

  const transparentLogo07 = await sharp(px07, { raw: { width: w07, height: h07, channels: 4 } })
    .png()
    .toBuffer();

  await sharp(transparentLogo07)
    .toFile(path.join(PUBLIC_DIR, "icons/habitante-logo-stacked.png"));
  console.log("Created: habitante-logo-stacked.png");

  // --- Logo -09: HA.co compact mark ---
  const trimmed09 = await sharp(logo09)
    .trim({ threshold: 20 })
    .toBuffer({ resolveWithObject: true });
  console.log("Logo-09 trimmed:", trimmed09.info.width, "x", trimmed09.info.height);

  const raw09 = await sharp(trimmed09.data)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width: w09, height: h09 } = raw09.info;
  const px09 = raw09.data;

  for (let i = 0; i < px09.length; i += 4) {
    if (px09[i] > 230 && px09[i + 1] > 230 && px09[i + 2] > 230) {
      px09[i + 3] = 0;
    }
  }

  const transparentLogo09 = await sharp(px09, { raw: { width: w09, height: h09, channels: 4 } })
    .png()
    .toBuffer();

  // Favicon 32x32
  const logo32 = await sharp(transparentLogo09)
    .resize(26, null, { fit: "inside" })
    .toBuffer();
  const meta32 = await sharp(logo32).metadata();

  await sharp({
    create: { width: 32, height: 32, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 255 } },
  })
    .composite([{
      input: logo32,
      left: Math.round((32 - meta32.width) / 2),
      top: Math.round((32 - meta32.height) / 2),
    }])
    .png()
    .toFile(path.join(PUBLIC_DIR, "favicon-32x32.png"));
  console.log("Created: favicon-32x32.png");

  // Favicon 16x16
  const logo16 = await sharp(transparentLogo09)
    .resize(12, null, { fit: "inside" })
    .toBuffer();
  const meta16 = await sharp(logo16).metadata();

  await sharp({
    create: { width: 16, height: 16, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 255 } },
  })
    .composite([{
      input: logo16,
      left: Math.round((16 - meta16.width) / 2),
      top: Math.round((16 - meta16.height) / 2),
    }])
    .png()
    .toFile(path.join(PUBLIC_DIR, "favicon-16x16.png"));
  console.log("Created: favicon-16x16.png");

  // Apple touch icon 180x180
  const logoApple = await sharp(transparentLogo09)
    .resize(140, null, { fit: "inside" })
    .toBuffer();
  const metaApple = await sharp(logoApple).metadata();

  await sharp({
    create: { width: 180, height: 180, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 255 } },
  })
    .composite([{
      input: logoApple,
      left: Math.round((180 - metaApple.width) / 2),
      top: Math.round((180 - metaApple.height) / 2),
    }])
    .png()
    .toFile(path.join(PUBLIC_DIR, "apple-touch-icon.png"));
  console.log("Created: apple-touch-icon.png");

  // --- OG Image 1200x630 ---
  const ogLogo = await sharp(trimmed07.data)
    .resize(null, 180, { fit: "inside" })
    .toBuffer();
  const ogMeta = await sharp(ogLogo).metadata();

  await sharp({
    create: { width: 1200, height: 630, channels: 4, background: { r: 247, g: 245, b: 241, alpha: 255 } },
  })
    .composite([{
      input: ogLogo,
      left: Math.round((1200 - ogMeta.width) / 2),
      top: Math.round((630 - ogMeta.height) / 2) - 20,
    }])
    .jpeg({ quality: 90 })
    .toFile(path.join(PUBLIC_DIR, "images/og-image.jpg"));
  console.log("Created: images/og-image.jpg");

  // --- favicon.ico from PNGs ---
  const png32Data = fs.readFileSync(path.join(PUBLIC_DIR, "favicon-32x32.png"));
  const png16Data = fs.readFileSync(path.join(PUBLIC_DIR, "favicon-16x16.png"));

  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0);
  icoHeader.writeUInt16LE(1, 2);
  icoHeader.writeUInt16LE(2, 4);

  const dataOffset1 = 6 + 16 + 16;
  const dataOffset2 = dataOffset1 + png16Data.length;

  const entry1 = Buffer.alloc(16);
  entry1.writeUInt8(16, 0);
  entry1.writeUInt8(16, 1);
  entry1.writeUInt8(0, 2);
  entry1.writeUInt8(0, 3);
  entry1.writeUInt16LE(1, 4);
  entry1.writeUInt16LE(32, 6);
  entry1.writeUInt32LE(png16Data.length, 8);
  entry1.writeUInt32LE(dataOffset1, 12);

  const entry2 = Buffer.alloc(16);
  entry2.writeUInt8(32, 0);
  entry2.writeUInt8(32, 1);
  entry2.writeUInt8(0, 2);
  entry2.writeUInt8(0, 3);
  entry2.writeUInt16LE(1, 4);
  entry2.writeUInt16LE(32, 6);
  entry2.writeUInt32LE(png32Data.length, 8);
  entry2.writeUInt32LE(dataOffset2, 12);

  fs.writeFileSync(
    path.join(PUBLIC_DIR, "favicon.ico"),
    Buffer.concat([icoHeader, entry1, entry2, png16Data, png32Data])
  );
  console.log("Created: favicon.ico");

  console.log("\nAll brand assets generated successfully!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
