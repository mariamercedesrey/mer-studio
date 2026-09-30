import { chromium } from 'playwright';
// QA: no element may make the page wider than the viewport (document.scrollingElement.scrollWidth === clientWidth) at 360 and 390 px,
// on every page. Usage: npm run build && npx astro preview --port 4322 &  then  npm run qa:overflow [-- http://localhost:4322]
const base = process.argv[2] || 'http://localhost:4322';
const b = await chromium.launch();
const pages = ['/', '/ai-visibility/', '/start-a-project/', '/start-a-project/thanks/', '/404.html', '/work/asociart/', '/work/the-mile/', '/work/orchard-mile/', '/work/quilmes/', '/work/carbon-optimum/', '/work/agente-mama/', '/work/american-padel-systems/', '/work/hifi-hub/'];
let bad = 0;
for (const w of [360, 390]) {
  const ctx = await b.newContext({ viewport: { width: w, height: 800 } });
  const p = await ctx.newPage();
  await p.addInitScript(() => { try { sessionStorage.setItem('mer-intro','1'); } catch {} });
  for (const url of pages) {
    await p.goto(base + url, { waitUntil: 'networkidle' });
    await p.evaluate(async () => { for (let y = 0; y < document.scrollingElement.scrollHeight; y += 700) { scrollTo(0, y); await new Promise(r => setTimeout(r, 40)); } scrollTo(0, 0); });
    await p.waitForTimeout(300);
    const r = await p.evaluate(() => {
      const se = document.scrollingElement, vw = document.documentElement.clientWidth;
      const off = [];
      const clipped = (el) => { for (let a = el.parentElement; a && a !== document.body; a = a.parentElement) { const o = getComputedStyle(a); if (o.overflowX !== 'visible' || o.contain.includes('paint')) return true; } return false; };
      if (se.scrollWidth > vw) for (const el of document.body.querySelectorAll('*')) { const r = el.getBoundingClientRect(); const cs = getComputedStyle(el); if (r.width && r.right > vw + 1 && cs.position !== 'fixed' && !clipped(el)) off.push((el.className && el.className.toString().slice(0, 40) || el.tagName) + ' →' + Math.round(r.right)); }
      return { sw: se.scrollWidth, cw: vw, off: off.slice(0, 6) };
    });
    const ok = r.sw === r.cw;
    if (!ok) bad++;
    console.log(w, url.padEnd(34), ok ? 'ok' : `OVERFLOW scrollWidth ${r.sw} > ${r.cw}  ${r.off.join(' | ')}`);
  }
  await ctx.close();
}
await b.close(); process.exit(bad ? 1 : 0);
