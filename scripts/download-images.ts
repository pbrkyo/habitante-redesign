/**
 * Download all referenced images from habitante.co
 * Run: npx ts-node scripts/download-images.ts
 */
import https from "https";
import fs from "fs";
import path from "path";

const IMAGES = [
  // Hero sliders
  "https://www.habitante.co/wp-content/uploads/2025/12/slider1.webp",
  "https://www.habitante.co/wp-content/uploads/2025/12/slider2.webp",
  "https://www.habitante.co/wp-content/uploads/2025/12/slide3-1.webp",
  // Backgrounds
  "https://www.habitante.co/wp-content/uploads/2025/12/bg-home.webp",
  // Category images
  "https://www.habitante.co/wp-content/uploads/2025/12/residential-architecture-habitante-arquitectura-costa-rica-architects.webp",
  "https://www.habitante.co/wp-content/uploads/2025/12/commercial-architecture-habitante-arquitectura-costa-rica-architects-2.webp",
  "https://www.habitante.co/wp-content/uploads/2025/12/urban-architecture-habitante-arquitectura-costa-rica-architects-1.webp",
  // Logo
  "https://www.habitante.co/wp-content/uploads/2025/12/LOGO2.webp",
  // Casa Descalzo
  "https://www.habitante.co/wp-content/uploads/2024/04/Casa_Descalzo_Habitante_Arquitectura_05.png",
  "https://www.habitante.co/wp-content/uploads/2024/04/Casa_Descalzo_Habitante_Arquitectura_04.png",
  "https://www.habitante.co/wp-content/uploads/2024/04/Casa_Descalzo_Habitante_Arquitectura_03.png",
  "https://www.habitante.co/wp-content/uploads/2024/04/Casa_Descalzo_Habitante_Arquitectura_00.jpg",
  // Qatar House
  "https://www.habitante.co/wp-content/uploads/2024/04/QatarHouse_Habitante_01.jpg",
  "https://www.habitante.co/wp-content/uploads/2024/04/QatarHouse_Habitante_02.jpg",
  "https://www.habitante.co/wp-content/uploads/2024/04/QatarHouse_Habitante_03.jpg",
  "https://www.habitante.co/wp-content/uploads/2024/04/QatarHouse_Habitante_04.jpg",
  "https://www.habitante.co/wp-content/uploads/2024/04/QatarHouse_Habitante_05.jpg",
  // Testarossa
  "https://www.habitante.co/wp-content/uploads/2024/04/Terrarossa_habitante_01.jpg",
  // House 89
  "https://www.habitante.co/wp-content/uploads/2024/04/Casa89_Habitante_4.jpg",
  "https://www.habitante.co/wp-content/uploads/2024/11/A7303565-scaled.jpg",
  "https://www.habitante.co/wp-content/uploads/2024/05/A7303580-scaled.jpg",
  "https://www.habitante.co/wp-content/uploads/2024/05/A7303607-scaled.jpg",
  "https://www.habitante.co/wp-content/uploads/2024/05/A7303757-scaled.jpg",
  // Office Tamarindo
  "https://www.habitante.co/wp-content/uploads/2024/04/Office_Tamarindo_Habitante_01.jpg",
  "https://www.habitante.co/wp-content/uploads/2024/04/Office_Tamarindo_Habitante_02.jpg",
  "https://www.habitante.co/wp-content/uploads/2024/04/Office_Tamarindo_Habitante_03.jpg",
  "https://www.habitante.co/wp-content/uploads/2024/04/Office_Tamarindo_Habitante_04.jpg",
  "https://www.habitante.co/wp-content/uploads/2024/04/Office_Tamarindo_Habitante_05.jpg",
  // Parque Urbano
  "https://www.habitante.co/wp-content/uploads/2024/06/bg_parqueUrbano-Habitante-architecture-luxury-costa-rica-arquitectos.png",
  "https://www.habitante.co/wp-content/uploads/2024/06/parqueUrbano-Habitante-architecture-luxury-costa-rica-arquitectos.png",
  // Contact
  "https://www.habitante.co/wp-content/uploads/2025/02/habitante-arquitectura-67ab9ec4ee8ed.webp",
];

const OUTPUT_DIR = path.join(__dirname, "..", "public", "images");

function download(url: string): Promise<void> {
  const filename = path.basename(new URL(url).pathname);
  const dest = path.join(OUTPUT_DIR, filename);

  if (fs.existsSync(dest)) {
    console.log(`SKIP ${filename} (exists)`);
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          const redirectUrl = res.headers.location;
          if (redirectUrl) {
            download(redirectUrl).then(resolve).catch(reject);
            return;
          }
        }
        res.pipe(file);
        file.on("finish", () => {
          file.close();
          console.log(`OK   ${filename}`);
          resolve();
        });
      })
      .on("error", (err) => {
        fs.unlink(dest, () => {});
        console.error(`FAIL ${filename}: ${err.message}`);
        reject(err);
      });
  });
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`Downloading ${IMAGES.length} images to ${OUTPUT_DIR}\n`);

  for (const url of IMAGES) {
    try {
      await download(url);
    } catch {
      // continue on failure
    }
  }

  console.log("\nDone.");
}

main();
