// Renders the app to static HTML after `vite build` so the page content is in
// dist/index.html itself — readable by crawlers and AI assistants that don't run JavaScript.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const indexPath = path.join(root, 'dist/index.html');
const ssrDir = path.join(root, 'dist-ssr');

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

const placeholder = '<div id="root"></div>';
const template = fs.readFileSync(indexPath, 'utf8');
if (!template.includes(placeholder)) {
  throw new Error(`prerender: ${placeholder} not found in dist/index.html`);
}

fs.writeFileSync(indexPath, template.replace(placeholder, `<div id="root">${render()}</div>`));
fs.rmSync(ssrDir, { recursive: true, force: true });

console.log('prerender: wrote dist/index.html');
