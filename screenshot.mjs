// Screenshot helper for the Privé live-look site.
// Usage: node screenshot.mjs <url> [label] [--mobile] [--viewport]
//   node screenshot.mjs http://localhost:3000/online-course.html course
//   node screenshot.mjs http://localhost:3000/online-course.html course-m --mobile
// Saves to ./temporary screenshots/screenshot-N[-label].png (auto-incremented).
//
// Uses puppeteer-core against the Chrome already in the user's puppeteer cache,
// so nothing needs downloading. Full-page by default; pass --viewport for above-the-fold only.

import puppeteer from 'puppeteer-core';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const args = process.argv.slice(2);
const url = args.find((a) => a.startsWith('http'));
const flags = args.filter((a) => a.startsWith('--'));
const label = args.find((a) => !a.startsWith('http') && !a.startsWith('--'));

if (!url) {
  console.error('Usage: node screenshot.mjs <url> [label] [--mobile] [--viewport]');
  process.exit(1);
}

const isMobile = flags.includes('--mobile');
const fullPage = !flags.includes('--viewport');

// Locate Chrome in the puppeteer cache (version-agnostic).
function findChrome() {
  const base = path.join(os.homedir(), '.cache', 'puppeteer', 'chrome');
  if (!fs.existsSync(base)) return null;
  const builds = fs.readdirSync(base).sort().reverse();
  for (const b of builds) {
    for (const exe of [
      path.join(base, b, 'chrome-win64', 'chrome.exe'),
      path.join(base, b, 'chrome-linux64', 'chrome'),
      path.join(base, b, 'chrome-mac-x64', 'Google Chrome for Testing.app', 'Contents', 'MacOS', 'Google Chrome for Testing'),
    ]) {
      if (fs.existsSync(exe)) return exe;
    }
  }
  return null;
}

const chromePath = process.env.CHROME_PATH || findChrome();
if (!chromePath) {
  console.error('No Chrome found in the puppeteer cache. Run: npx @puppeteer/browsers install chrome@stable');
  process.exit(1);
}

const outDir = path.join(process.cwd(), 'temporary screenshots');
fs.mkdirSync(outDir, { recursive: true });

// Auto-increment so nothing is ever overwritten.
const existing = fs.readdirSync(outDir).filter((f) => /^screenshot-\d+/.test(f));
const next = existing.reduce((m, f) => Math.max(m, parseInt(f.match(/^screenshot-(\d+)/)[1], 10)), 0) + 1;
const outFile = path.join(outDir, `screenshot-${next}${label ? `-${label}` : ''}.png`);

const browser = await puppeteer.launch({
  executablePath: chromePath,
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars'],
});

try {
  const page = await browser.newPage();
  await page.setViewport(
    isMobile
      ? { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true }
      : { width: 1440, height: 900, deviceScaleFactor: 2 }
  );

  await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

  // The site reveals sections on scroll via IntersectionObserver. Scroll to the
  // bottom and back so every .reveal block is in its settled state before capture,
  // otherwise a full-page shot catches half the page mid-fade.
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let y = 0;
      const step = () => {
        window.scrollBy(0, window.innerHeight);
        y += window.innerHeight;
        if (y < document.body.scrollHeight) setTimeout(step, 60);
        else {
          window.scrollTo(0, 0);
          setTimeout(resolve, 400);
        }
      };
      step();
    });
  });

  // The scroll pass above triggers most `.reveal` blocks, but IntersectionObserver
  // only reports the state it sees at each delivery tick — on a very long page some
  // sections are scrolled past between ticks and never fire, so they capture blank
  // or mid-fade. Force every reveal into its settled state before the shot.
  // Capture-time only; it does not touch the page source.
  await page.addStyleTag({
    content: '.reveal{opacity:1 !important;transform:none !important;transition:none !important;transition-delay:0s !important;}',
  });
  await new Promise((r) => setTimeout(r, 250));

  await page.screenshot({ path: outFile, fullPage });
  console.log(outFile);
} finally {
  await browser.close();
}
