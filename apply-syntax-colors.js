const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'themes', 'Void Glass-color-theme.json');
let data = JSON.parse(fs.readFileSync(targetFile, 'utf8'));

// Apply the Material Palenight / Night Owl style palette from the screenshot
// Purple/Magenta: #c792ea
// Cyan/Light Blue: #82aaff
// Green: #c3e88d
// Red/Pink: #f07178
// Yellow/Gold: #ffcb6b
// Orange: #f78c6c
// Pale Blue/White: #eeffff
// Pale Cyan (Operators): #89ddff
// Comments: #676e95

data.tokenColors = [
    {
        "scope": ["comment", "punctuation.definition.comment"],
        "settings": { "foreground": "#676e95", "fontStyle": "italic" }
    },
    {
        "scope": [
            "keyword", "keyword.control", "keyword.operator.new",
            "keyword.operator.expression", "keyword.operator.logical",
            "storage.type", "storage.modifier"
        ],
        "settings": { "foreground": "#c792ea" }
    },
    {
        "scope": ["variable.language.this", "variable.language.super"],
        "settings": { "foreground": "#f07178", "fontStyle": "italic" }
    },
    {
        "scope": ["variable.parameter"],
        "settings": { "foreground": "#f07178", "fontStyle": "italic" }
    },
    {
        "scope": ["string", "string.quoted", "string.template", "punctuation.definition.string"],
        "settings": { "foreground": "#c3e88d" }
    },
    {
        "scope": ["string.regexp"],
        "settings": { "foreground": "#89ddff" }
    },
    {
        "scope": ["constant.numeric", "constant.language", "constant.character"],
        "settings": { "foreground": "#f78c6c" }
    },
    {
        "scope": ["entity.name.function", "support.function", "meta.function-call"],
        "settings": { "foreground": "#82aaff" }
    },
    {
        "scope": ["entity.name.type", "entity.name.class", "support.type", "support.class"],
        "settings": { "foreground": "#ffcb6b" }
    },
    {
        "scope": ["entity.name.tag", "punctuation.definition.tag"],
        "settings": { "foreground": "#f07178" }
    },
    {
        "scope": ["entity.other.attribute-name"],
        "settings": { "foreground": "#c792ea", "fontStyle": "italic" }
    },
    {
        "scope": ["variable", "variable.other.readwrite", "meta.block variable.other", "support.variable"],
        "settings": { "foreground": "#eeffff" }
    },
    {
        "scope": ["variable.other.property", "support.variable.property", "variable.other.object.property", "variable.other.constant"],
        "settings": { "foreground": "#f07178" }
    },
    {
        "scope": [
            "keyword.operator", "punctuation.separator", "punctuation.terminator",
            "punctuation.definition.parameters", "punctuation.definition.arguments", "meta.brace"
        ],
        "settings": { "foreground": "#89ddff" }
    },
    {
        "scope": ["markup.heading", "markup.bold"],
        "settings": { "foreground": "#ffcb6b", "fontStyle": "bold" }
    },
    {
        "scope": ["markup.italic"],
        "settings": { "foreground": "#c792ea", "fontStyle": "italic" }
    },
    {
        "scope": ["markup.inserted"],
        "settings": { "foreground": "#c3e88d" }
    },
    {
        "scope": ["markup.deleted"],
        "settings": { "foreground": "#f07178" }
    },
    {
        "scope": ["markup.changed"],
        "settings": { "foreground": "#82aaff" }
    }
];

data.semanticTokenColors = {
    "variable": "#eeffff",
    "variable.declaration": "#eeffff",
    "variable.readonly": "#82aaff",
    "property": "#f07178",
    "property.declaration": "#f07178",
    "property.readonly": "#f07178",
    "function": "#82aaff",
    "function.declaration": "#82aaff",
    "method": "#82aaff",
    "method.declaration": "#82aaff",
    "parameter": { "foreground": "#f07178", "fontStyle": "italic" },
    "type": "#ffcb6b",
    "class": "#ffcb6b",
    "class.declaration": "#82aaff",
    "interface": { "foreground": "#82aaff", "fontStyle": "italic" },
    "enum": "#ffcb6b",
    "keyword": "#c792ea",
    "string": "#c3e88d",
    "number": "#f78c6c",
    "operator": "#89ddff",
    "comment": { "foreground": "#676e95", "fontStyle": "italic" }
};

fs.writeFileSync(targetFile, JSON.stringify(data, null, 4));
console.log('Applied Material Pale syntax highlighting successfully.');
