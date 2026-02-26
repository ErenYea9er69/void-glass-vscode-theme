const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'themes', 'Void Glass-color-theme.json');
let content = fs.readFileSync(targetFile, 'utf8');

// Revert all light gold (#e6c27a) back to pure white (#ffffff)
content = content.replace(/#e6c27a/gi, '#ffffff');

fs.writeFileSync(targetFile, content);
console.log('Reverted all gold highlights back to pure white.');
