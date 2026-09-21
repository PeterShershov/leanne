// Injects the prerendered markup produced by the SSR build into the built
// index.html, so the deployed HTML ships fully populated instead of as an
// empty <div id="root">, and emits sitemap.xml. Runs after both Vite builds;
// see package.json.

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { render } from "../dist-ssr/entry-server.js";

const INDEX = new URL("../dist/index.html", import.meta.url);
const SITEMAP = new URL("../dist/sitemap.xml", import.meta.url);
const DIST = new URL("../dist/", import.meta.url);
const PLACEHOLDER = '<div id="root"></div>';

/** Canonical origin. Must agree with index.html and public/robots.txt. */
const SITE_URL = "https://leanne-parenting.co.il/";

/** Absolute, so it can't be hashed or relative — asserted to exist below. */
const OG_IMAGE = "og-image.jpg";

/** Sections we expect to find in the output; a missing one means a broken render. */
const REQUIRED_IDS = ["about", "adlerian", "services", "contact"];

/** The about copy alone is ~800 characters, so an intact render clears this easily. */
const MIN_TEXT_LENGTH = 1000;

function fail(message) {
  console.error(`\nprerender: ${message}\n`);
  process.exit(1);
}

const html = readFileSync(INDEX, "utf8");
if (!html.includes(PLACEHOLDER)) {
  fail(`could not find ${PLACEHOLDER} in dist/index.html — did the shell change?`);
}

let markup = render();

// The client build honors base:'./' and emits "./assets/…", but the SSR build
// ignores it and emits root-absolute "/assets/…", which would 404 anywhere the
// site isn't served from the domain root. Match whatever convention the built
// shell already uses so the markup resolves under any deploy path.
if (/(?:src|href)="\.\/assets\//.test(html)) {
  markup = markup.replace(/((?:src|href)=")\/assets\//g, "$1./assets/");
}

// --- Assertions: fail the build rather than deploy an empty or broken page ---

const textLength = markup
  .replace(/<[^>]*>/g, " ")
  .replace(/\s+/g, " ")
  .trim().length;

if (textLength < MIN_TEXT_LENGTH) {
  fail(`rendered only ${textLength} characters of text (expected >= ${MIN_TEXT_LENGTH})`);
}

if (!markup.includes("<h1")) {
  fail("rendered markup has no <h1>");
}

for (const id of REQUIRED_IDS) {
  if (!markup.includes(`id="${id}"`)) {
    fail(`rendered markup is missing the #${id} section`);
  }
}

// The canonical URL, the sitemap and robots.txt all have to name the same
// origin, and nothing else would notice if one of them drifted.
if (!html.includes(`<link rel="canonical" href="${SITE_URL}"`)) {
  fail(`dist/index.html has no <link rel="canonical" href="${SITE_URL}">`);
}

// og:image is referenced by absolute URL, so the asset check below can't see
// it — but a bad path means every shared link previews blank.
if (!existsSync(fileURLToPath(new URL(OG_IMAGE, DIST)))) {
  fail(`og:image ${OG_IMAGE} is missing from dist/ — is it still in public/?`);
}

// Asset URLs are resolved independently by the client and SSR builds. If they
// ever disagree, the prerendered HTML points at files that were never emitted.
for (const [, src] of markup.matchAll(/(?:src|href)="([^"]*assets\/[^"]+)"/g)) {
  const resolved = fileURLToPath(new URL(src, DIST));
  if (!existsSync(resolved)) {
    fail(`references ${src}, which does not exist in dist/`);
  }
}

// A replacer function, not a string: as a string, a `$&` or `$1` occurring in
// the copy would be expanded as a replacement pattern and silently corrupt the
// output, and it would happen after every assertion above had already passed.
writeFileSync(INDEX, html.replace(PLACEHOLDER, () => `<div id="root">${markup}</div>`));

// One page, so one entry. lastmod is written at build time rather than checked
// in, so it can't drift from what actually deployed.
const lastmod = new Date().toISOString().slice(0, 10);
writeFileSync(
  SITEMAP,
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>
</urlset>
`,
);

console.log(`prerender: injected ${textLength} characters of text into dist/index.html`);
console.log(`prerender: wrote dist/sitemap.xml (lastmod ${lastmod})`);
