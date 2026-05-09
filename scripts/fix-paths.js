import fs from 'fs';
import path from 'path';

const BASE = '/crochet_corner';
const DIST = 'dist';

const files = fs.readdirSync(DIST, { recursive: true });

for (const file of files) {
  if (typeof file !== 'string') continue;

  const filePath = path.join(DIST, file);
  if (!file.endsWith('.html')) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  content = content
    .replace(/href="\/(?!crochet_corner)/g, `href="${BASE}/`)
    .replace(/src="\/(?!crochet_corner)/g, `src="${BASE}/`)
    .replace(/href='\/(?!crochet_corner)/g, `href='${BASE}/`)
    .replace(/src='\/(?!crochet_corner)/g, `src='${BASE}/`)
    .replace(/\/crochet_corner\/crochet_corner\//g, '/crochet_corner/')
    .replace(/url\('\/(?!crochet_corner)/g, `url('${BASE}/`)
    .replace(/url\("\/(?!crochet_corner)/g, `url("${BASE}/`)
    .replace(/url\(\'\/(?!crochet_corner)/g, `url('${BASE}/`)
    .replace(/url\(\"\/(?!crochet_corner)/g, `url("${BASE}/`)
    .replace(/url\(\/(?!crochet_corner)/g, `url(${BASE}/`);

  fs.writeFileSync(filePath, content);
}

console.log('Fixed paths in HTML files');