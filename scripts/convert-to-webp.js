const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const roots = [
  path.join(__dirname, "..", "public", "images"),
  path.join(__dirname, "..", "public", "uploads"),
];

// Logo files must stay exactly as they are.
const skipNames = new Set(["klxn-coral.png", "klxn-white.png", "klxn-ink.png"]);
const imageExts = new Set([".jpg", ".jpeg", ".png"]);

async function run() {
  let totalBefore = 0;
  let totalAfter = 0;
  const converted = [];

  for (const root of roots) {
    const files = fs.readdirSync(root);
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (!imageExts.has(ext)) continue;
      if (skipNames.has(file)) continue;

      const fullPath = path.join(root, file);
      const before = fs.statSync(fullPath).size;
      const webpName = file.slice(0, -ext.length) + ".webp";
      const webpPath = path.join(root, webpName);

      await sharp(fullPath).webp({ quality: 82 }).toFile(webpPath);
      const after = fs.statSync(webpPath).size;

      totalBefore += before;
      totalAfter += after;
      converted.push({ from: file, to: webpName, before, after });

      fs.unlinkSync(fullPath);
    }
  }

  console.log(JSON.stringify({ converted, totalBefore, totalAfter }, null, 2));
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
