const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgOverlay = Buffer.from(`
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#040c1d" stop-opacity="0.6"/>
      <stop offset="35%" stop-color="#040c1d" stop-opacity="0.1"/>
      <stop offset="65%" stop-color="#040c1d" stop-opacity="0.75"/>
      <stop offset="100%" stop-color="#040c1d" stop-opacity="0.96"/>
    </linearGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="40%" stop-color="#f5e7c8"/>
      <stop offset="100%" stop-color="#e6c68a"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#000" flood-opacity="0.9"/>
    </filter>
  </defs>

  <!-- Gradient scrim for readable text -->
  <rect width="1200" height="630" fill="url(#grad)" />

  <!-- Elegant dual border -->
  <rect x="28" y="28" width="1144" height="574" fill="none" stroke="#e6c68a" stroke-width="1.2" stroke-opacity="0.45" />
  <rect x="36" y="36" width="1128" height="558" fill="none" stroke="#e6c68a" stroke-width="0.6" stroke-opacity="0.25" />

  <!-- Top auspicious header -->
  <g transform="translate(600, 78)" text-anchor="middle" filter="url(#shadow)">
    <text font-family="Georgia, Garamond, serif" font-size="18" letter-spacing="4" fill="#e6c68a" font-weight="bold">॥ शुभ विवाह ॥</text>
    <text y="24" font-family="system-ui, -apple-system, sans-serif" font-size="11" letter-spacing="3.5" fill="#f4efe8" fill-opacity="0.85" font-weight="600">WEDDING CELEBRATION INVITATION</text>
  </g>

  <!-- Bottom Left: Couple Names, Details, Date -->
  <g transform="translate(70, 420)" filter="url(#shadow)">
    <!-- Eyebrow -->
    <text x="0" y="0" font-family="system-ui, -apple-system, sans-serif" font-size="12" letter-spacing="3.5" fill="#e6c68a" font-weight="600">TOGETHER WITH THEIR FAMILIES</text>
    
    <!-- Couple Names -->
    <text x="0" y="65" font-family="Georgia, Garamond, serif" font-size="64" font-weight="500" fill="url(#gold)">
      Anish &amp; Dr. Archi
    </text>

    <!-- Date & Location -->
    <text x="0" y="112" font-family="system-ui, -apple-system, sans-serif" font-size="16" letter-spacing="2" fill="#f4efe8" fill-opacity="0.92">
      NOVEMBER 6 – 11, 2026  ·  JAMMU, J&amp;K
    </text>
  </g>

  <!-- Bottom Right: Call To Action Pill Button -->
  <g transform="translate(930, 508)" filter="url(#shadow)">
    <rect width="200" height="46" rx="23" fill="#07101d" fill-opacity="0.9" stroke="#e6c68a" stroke-width="1.5"/>
    <text x="100" y="28" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600" letter-spacing="2" fill="#e6c68a">
      OPEN INVITATION ✦
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
