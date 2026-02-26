const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'themes', 'Void Glass-color-theme.json');
let content = fs.readFileSync(targetFile, 'utf8');

// Replace all instances of #ffffff (white) with #7dd3fc (frosty cyan)
content = content.replace(/#ffffff/gi, '#7dd3fc');

// Keep terminal white as white if needed (optional, but let's be thorough)
content = content.replace(/"terminal\.ansiBrightWhite": "#7dd3fc"/, '"terminal.ansiBrightWhite": "#ffffff"');

fs.writeFileSync(targetFile, content);
console.log('Replaced all stark white with frosty cyan accents.');
