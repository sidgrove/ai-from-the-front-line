// Builds the folder that goes on a USB stick: the deck with everything it
// needs, four doorways (one per look) and a PDF of the standard look.
//   node presentations/auto-bank-wreck/make-usb.mjs
// Output: USB/Auto Bank Wreck/ at the repo root (not committed). Run it again
// after any change to the deck. The PDF needs Playwright; point PLAYWRIGHT_FROM
// at a package.json whose node_modules has it (default: Sidgrove Intelligence).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../..');
const out = path.join(root, 'USB', 'Auto Bank Wreck');
const deck = path.join(out, 'deck');
const rel = 'deck/presentations/auto-bank-wreck/index.html';

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(deck, { recursive: true });
fs.cpSync(path.join(root, 'deck-stage.js'), path.join(deck, 'deck-stage.js'));
fs.cpSync(path.join(root, 'fonts'), path.join(deck, 'fonts'), { recursive: true });
fs.cpSync(here, path.join(deck, 'presentations', 'auto-bank-wreck'), {
  recursive: true,
  filter: (src) => !/README\.md$|make-usb\.mjs$/.test(src),
});

const door = (title, look) => `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>Auto Bank Wreck - ${title}</title>
<script>location.replace(${JSON.stringify(rel + '?screen=' + look)});</script></head>
<body><p><a href="${rel}?screen=${look}">Open Auto Bank Wreck (${title})</a></p></body></html>
`;
fs.writeFileSync(path.join(out, '1 - Normal screen.html'), door('normal screen', 'standard'));
fs.writeFileSync(path.join(out, '2 - Big screen, soft.html'), door('big screen, soft', 'venue-soft'));
fs.writeFileSync(path.join(out, '3 - Big screen.html'), door('big screen', 'venue'));
fs.writeFileSync(path.join(out, '4 - Big screen, extra strong.html'), door('big screen, extra strong', 'venue-max'));
fs.writeFileSync(path.join(out, 'READ ME.txt'), [
  'Auto Bank Wreck - Dave Sellick',
  '',
  'Double-click one of the four files. They are the same deck in four looks:',
  '  1 - Normal screen             laptops and good monitors',
  '  2 - Big screen, soft          a large screen that only washes out a little',
  '  3 - Big screen                a large bright LCD that washes colours out',
  '  4 - Big screen, extra strong  if number 3 still looks washed out',
  '',
  'Arrow keys move through the slides. F11 for full screen. V steps through the four looks live.',
  'N shows the speaker notes. No internet connection is needed.',
  'Auto Bank Wreck.pdf is the normal look, one slide per page.',
  '',
].join('\r\n'));

try {
  const require = createRequire(process.env.PLAYWRIGHT_FROM || 'C:/Users/david/Sidgrove Dev/~Internal Dev/Sidgrove Intelligence/package.json');
  const { chromium } = require('playwright');
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto(pathToFileURL(path.join(out, rel)).href + '?screen=standard');
  await page.waitForLoadState('networkidle');
  await page.evaluate(() => Promise.all([document.fonts.ready, ...[...document.images].map((i) => i.decode().catch(() => {}))]));
  await page.emulateMedia({ media: 'print' });
  await page.pdf({ path: path.join(out, 'Auto Bank Wreck.pdf'), printBackground: true, preferCSSPageSize: true, width: '1920px', height: '1080px' });
  await browser.close();
  console.log('PDF written');
} catch (err) {
  console.log('PDF not written:', err.message.split('\n')[0]);
}
console.log('USB folder:', out);
