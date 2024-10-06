import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const hash = createHash('sha256');
    const contentStream = createReadStream(__dirname + '/files/fileToCalculateHashFor.txt');

    contentStream.on('data', (chunk) => {
        hash.update(chunk);
    });

    contentStream.on('end', () => {
        const contentHash = hash.digest('hex');
        console.log(contentHash);
    })
    
    contentStream.on('error', (e) => {
        console.error(e.message);
    });    
};

await calculateHash();