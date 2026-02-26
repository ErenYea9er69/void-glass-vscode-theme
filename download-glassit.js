const https = require('https');
const fs = require('fs');
const  = require('path');

const url = 'https://marketplace.visualstudio.com/_apis/public/gallery/publishers/s-nlf-fh/vsextensions/glassit/0.2.6/vspackage';
const dest = path.join(__dirname, 'glassit-0.2.6.vsix');

console.log('Starting download...');

https.get(url, (res) => {
    if (res.statusCode !== 200) {
        console.error('Failed to download, status code:', res.statusCode);
        process.exit(1);
    }

    const file = fs.createWriteStream(dest);
    res.pipe(file);

    file.on('finish', () => {
        file.close();
        console.log('Download complete!');
    });
}).on('error', (err) => {
    console.error('Error downloading:', err.message);
});
