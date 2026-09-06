const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell' });
  const p = await b.newPage({ viewport: { width: 1200, height: 1400 } });
  await p.goto('file://' + __dirname + '/posts-ar.html', { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  // report any content overflowing its 1350px artboard
  const over = await p.evaluate(() => {
    const out = [];
    document.querySelectorAll('.post').forEach(s => {
      let max = 0;
      s.querySelectorAll('*').forEach(el => {
        const r = el.getBoundingClientRect(), sr = s.getBoundingClientRect();
        max = Math.max(max, r.bottom - sr.top);
      });
      if (max > 1350) out.push({ post: s.id, bottom: Math.round(max) });
    });
    return out;
  });
  console.log(over.length ? 'OVERFLOW ' + JSON.stringify(over) : 'no overflow');
  for (const id of ['post1','post2','post3','post4','post5']) {
    await p.locator('#' + id).screenshot({ path: `bedside-ar-${id}.png` });
  }
  await b.close();
  console.log('rendered');
})();
