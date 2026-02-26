const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'themes', 'Void Glass-color-theme.json');
let content = fs.readFileSync(targetFile, 'utf8');

// Replace stark white highlights with a pale frosted gold accent (#e6c27a)
// This applies to the cursor, selections, and active UI elements shown in the user's screenshot
content = content.replace(/"editorCursor\.foreground": "#ffffff"/, '"editorCursor.foreground": "#e6c27a"');
content = content.replace(/"editor\.selectionBackground": "#ffffff25"/, '"editor.selectionBackground": "#e6c27a25"');
content = content.replace(/"editor\.selectionHighlightBackground": "#ffffff15"/, '"editor.selectionHighlightBackground": "#e6c27a15"');
content = content.replace(/"editor\.wordHighlightBackground": "#ffffff10"/, '"editor.wordHighlightBackground": "#e6c27a10"');
content = content.replace(/"editor\.wordHighlightStrongBackground": "#ffffff20"/, '"editor.wordHighlightStrongBackground": "#e6c27a20"');
content = content.replace(/"editor\.findMatchBackground": "#ffffff40"/, '"editor.findMatchBackground": "#e6c27a40"');
content = content.replace(/"editor\.findMatchHighlightBackground": "#ffffff25"/, '"editor.findMatchHighlightBackground": "#e6c27a25"');
content = content.replace(/"editorBracketMatch\.background": "#ffffff15"/, '"editorBracketMatch.background": "#e6c27a15"');
content = content.replace(/"editorBracketMatch\.border": "#ffffff50"/, '"editorBracketMatch.border": "#e6c27a50"');

// UI active states
content = content.replace(/#ffffff/gi, '#e6c27a');

// Revert terminal white and actual text whites (like method names) back to #ffffff
content = content.replace(/"terminal\.ansiBrightWhite": "#e6c27a"/, '"terminal.ansiBrightWhite": "#ffffff"');
content = content.replace(/"terminal\.ansiWhite": "#eeeeee"/, '"terminal.ansiWhite": "#e6c27a"');
content = content.replace(/"foreground": "#e6c27a",\s*"fontStyle": "bold"/g, '"foreground": "#ffffff",\n                "fontStyle": "bold"');

fs.writeFileSync(targetFile, content);
console.log('Applied light gold accent.');
