const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://marketplace.visualstudio.com/_apis/public/gallery/publishers/be5invis/vsextensions/vscode-custom-css/latest/vspackage';
const dest = path.join(__dirname, 'custom-css.vsix');

console.log(`Downloading VSIX from: ${url}`);
const file = fs.createWriteStream(dest);

const downloadFile = (downloadUrl) => {
    https.get(downloadUrl, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            console.log(`Following redirect to ${res.headers.location}`);
            downloadFile(res.headers.location);
        } else if (res.statusCode === 200) {
            res.pipe(file);
            res.on('end', () => console.log('Download complete successfully!'));
        } else {
            console.error(`Failed with status code: ${res.statusCode}`);
        }
    }).on('error', err => console.error('Download error:', err));
};

downloadFile(url);
