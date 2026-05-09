import fs from 'fs';
import path from 'path';

const BASE = '/crochet_corner';
const DIST = 'dist';

const files = fs.readdirSync(DIST, { recursive: true });

for (const file of files) {
  if (typeof file !== 'string') continue;

  const filePath = path.join(DIST, file);
  if (!file.endsWith('.html') && !file.endsWith('.css')) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  content = content
    .replace(/href="\//g, `href="${BASE}/`)
    .replace(/src="\//g, `src="${BASE}/`)
    .replace(/href='\//g, `href='${BASE}/`)
    .replace(/src='\//g, `src='${BASE}/`)
    .replace(/url\('\//g, `url('${BASE}/`)
    .replace(/url\("\//g, `url("${BASE}/`)
    .replace(/url\(\'\//g, `url('${BASE}/`)
    .replace(/url\(\"\//g, `url("${BASE}/`)
    .replace(/url\(\//g, `url(${BASE}/`);

  fs.writeFileSync(filePath, content);
}

console.log('Fixed paths in HTML files');