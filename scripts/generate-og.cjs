const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgOverlay = Buffer.from(`
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fffdf8" stop-opacity="0.88"/>
      <stop offset="40%" stop-color="#fff8eb" stop-opacity="0.6"/>
      <stop offset="70%" stop-color="#fef2f4" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#fdf5e6" stop-opacity="0.95"/>
    </linearGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#9a3412"/>
      <stop offset="50%" stop-color="#d97706"/>
      <stop offset="100%" stop-color="#b45309"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="3" stdDeviation="6" flood-color="#78350f" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Radiant warm festive gradient scrim -->
  <rect width="1200" height="630" fill="url(#grad)" />

  <!-- Elegant gold borders -->
  <rect x="28" y="28" width="1144" height="574" fill="none" stroke="#d97706" stroke-width="2" stroke-opacity="0.6" rx="16"/>
  <rect x="36" y="36" width="1128" height="558" fill="none" stroke="#d97706" stroke-width="0.8" stroke-opacity="0.35" rx="12"/>

  <!-- Top auspicious header -->
  <g transform="translate(600, 85)" text-anchor="middle" filter="url(#shadow)">
    <text font-family="Georgia, Garamond, serif" font-size="20" letter-spacing="4" fill="#9f1239" font-weight="bold">॥ श्री गणेशाय नमः ॥  ·  ॥ जय बुआ दाती ॥</text>
    <text y="26" font-family="system-ui, -apple-system, sans-serif" font-size="12" letter-spacing="4" fill="#b45309" font-weight="700">AUSPICIOUS WEDDING CELEBRATION</text>
  </g>

  <!-- Couple Names, Details, Date -->
  <g transform="translate(80, 400)" filter="url(#shadow)">
    <!-- Eyebrow -->
    <text x="0" y="0" font-family="system-ui, -apple-system, sans-serif" font-size="13" letter-spacing="3.5" fill="#9a3412" font-weight="700">TOGETHER WITH THEIR FAMILIES</text>
    
    <!-- Couple Names -->
    <text x="0" y="68" font-family="Georgia, Garamond, serif" font-size="66" font-weight="bold" fill="url(#gold)">
      Anish &amp; Dr. Archi
    </text>

    <!-- Date & Location -->
    <text x="0" y="118" font-family="system-ui, -apple-system, sans-serif" font-size="16" letter-spacing="2" fill="#78350f" font-weight="700">
      NOV 11 GRAND RECEPTION (VIVAH VATIKA)  ·  NOV 10 ROYAL BARAAT  ·  JAMMU
    </text>
  </g>

  <!-- Bottom Right: Call To Action Pill Button -->
  <g transform="translate(880, 500)" filter="url(#shadow)">
    <rect width="250" height="52" rx="26" fill="#be123c" stroke="#f59e0b" stroke-width="2"/>
    <text x="125" y="32" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="bold" letter-spacing="2" fill="#ffffff">
      ENTER CELEBRATION ✦
    </text>
  </g>
</svg>
`);

async function generate() {
  const baseImagePath = path.join(__dirname, '..', 'public', 'assets', 'lotus', 'social-card.webp');
  const outputJpg = path.join(__dirname, '..', 'public', 'og-image.jpg');
  const outputWebp = path.join(__dirname, '..', 'public', 'assets', 'lotus', 'social-card.webp');

  await sharp(baseImagePath)
    .resize(1200, 630)
    .composite([{ input: svgOverlay, top: 0, left: 0 }])
    .jpeg({ quality: 92 })
    .toFile(outputJpg);

  console.log('Generated public/og-image.jpg (1200x630)');

  // Also create a copy in public/assets/og-image.jpg
  const assetsDir = path.join(__dirname, '..', 'public', 'assets');
  if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });
  fs.copyFileSync(outputJpg, path.join(assetsDir, 'og-image.jpg'));
  console.log('Copied to public/assets/og-image.jpg');
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
