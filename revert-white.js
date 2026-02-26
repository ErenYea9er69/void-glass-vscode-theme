const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'themes', 'Void Glass-color-theme.json');
let content = fs.readFileSync(targetFile, 'utf8');

// Revert all frosty cyan back to stark white
content = content.replace(/#7dd3fc/gi, '#ffffff');

fs.writeFileSync(targetFile, content);
console.log('Reverted all cyan highlights back to pure white.');
