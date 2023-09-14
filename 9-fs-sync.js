const { readFileSync, writeFileSync, copyFileSync } = require('fs');

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

writeFileSync(
    './content/result-sync.txt',
    `Her er resultatet: ${first}, ${second}`,    // Denne teksten blir skrevet på en fil
    { flag: 'a' }   // Flag a betyr at den legger til teks (add)
);
