// اختبار شامل في متصفح حقيقي (Chromium) — يشغّل التطبيق بدون إنترنت تماماً
// تشغيل:  node tests/e2e.mjs <مجلد الويب>   (مثلاً www بعد vendorize)
// VENDORED=1 → يتأكد أن CodeMirror والأيقونات والخط تعمل بدون إنترنت
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const SOL = require('./solutions.js');

const DIR = path.resolve(process.argv[2] || '.');
const SHOTS = path.resolve(process.env.SHOTS || 'e2e-screens');
fs.mkdirSync(SHOTS, { recursive: true });
const VENDORED = process.env.VENDORED === '1';
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.png': 'image/png' };
const srv = http.createServer((q, r) => {
  const f = path.join(DIR, decodeURIComponent(q.url.split('?')[0]));
  if (!f.startsWith(DIR) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); return r.end(); }
  r.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(r);
}).listen(0);
const base = `http://localhost:${srv.address().port}`;

let fails = 0, passes = 0;
const ok = (c, m) => { if (c) { passes++; console.log('  ✓ ' + m); } else { fails++; console.log('  ❌ ' + m); if (process.env.GITHUB_ACTIONS) console.log('::error::E2E: ' + m); } };

const exe = process.env.CHROME_PATH || undefined;
const browser = await chromium.launch(exe ? { executablePath: exe } : {});
const page = await browser.newPage({ viewport: { width: 390, height: 820 } });
const errors = [], external = [];
page.on('pageerror', e => errors.push(e.message));
await page.route('**/*', r => { const u = r.request().url(); if (u.startsWith(base)) return r.continue(); external.push(u); return r.abort(); });
const shot = n => page.screenshot({ path: path.join(SHOTS, n + '.png') });

try {
  await page.goto(base + '/index.html');
  await page.waitForTimeout(7500); // Firebase offline → offline mode
  // cmEditor is a top-level `let` (not on window) — set code through the real editor when CodeMirror loaded
  await page.evaluate(() => { window.setCode = c => { if (typeof cmEditor !== 'undefined' && cmEditor) cmEditor.setValue(c); else document.getElementById('code-ed').value = c; }; });
  await page.evaluate(() => { document.querySelectorAll('.scr').forEach(s => s.classList.remove('on')); S.firstVisit = false; S.username = 'علوش'; go('home'); });
  await page.waitForTimeout(400); await shot('01-home');
  ok(await page.isVisible('#s-home.on'), 'الشاشة الرئيسية تظهر بدون إنترنت');

  if (VENDORED) {
    ok(await page.evaluate(() => typeof CodeMirror === 'function'), 'CodeMirror يعمل بدون إنترنت');
    ok(await page.evaluate(() => !document.body.classList.contains('no-fa')), 'أيقونات Font Awesome تعمل بدون إنترنت');
    ok(await page.evaluate(async () => { await document.fonts.ready; const L=[...document.fonts].filter(f=>f.status==='loaded').map(f=>f.family); return L.some(f=>/Plex Sans Arabic/.test(f)) && L.some(f=>/Noto Kufi Arabic/.test(f)); }), 'الخطوط العربية (Plex + Kufi) تعمل بدون إنترنت');
    ok(await page.evaluate(() => !!window._fbOnAuth), 'مكتبة Firebase محمّلة محلياً');
    ok(!external.some(u => /cdnjs\.cloudflare|www\.gstatic|fonts\.(googleapis|gstatic)/.test(u)), 'لا طلبات لـ CDN: ' + external.filter(u => /cdnjs\.cloudflare|www\.gstatic|fonts\.(googleapis|gstatic)/.test(u)).slice(0, 3).join(' '));
  }

  // ── حل تحدي عبر الواجهة ──
  const xp0 = await page.evaluate(() => S.xp);
  await page.evaluate(() => openChallenge(5));
  await page.waitForTimeout(400);
  await page.evaluate(code => { setCode(code); }, SOL[5]);
  await page.evaluate(() => submitCode()); await page.waitForTimeout(1500); await shot('02-result');
  ok(await page.isVisible('#s-result.on'), 'تسليم حل صحيح يفتح شاشة النجاح');
  ok(await page.evaluate(x => S.xp > x && S.solved.includes(5), xp0), 'XP زاد والتحدي سُجّل محلولاً');
  ok(await page.evaluate(() => S.week && S.week.xp > 0), 'XP الأسبوعي للدوري يُحسب');

  // ── حل خاطئ ──
  await page.evaluate(() => openChallenge(7)); await page.waitForTimeout(300);
  await page.evaluate(() => { const c = 'function isEven(n){ return true; }'; setCode(c); });
  await page.evaluate(() => submitCode()); await page.waitForTimeout(1200); await shot('03-fail');
  ok(await page.isVisible('#s-fail.on'), 'حل خاطئ يفتح شاشة الفشل');
  ok(await page.evaluate(() => (S.failedIds || []).includes(7)), 'المحاولة الفاشلة تُسجّل (لشارة "دقيق")');

  // ── حلقة لا نهائية لا تجمّد التطبيق ──
  await page.evaluate(() => openChallenge(7)); await page.waitForTimeout(300);
  await page.evaluate(() => { const c = 'function isEven(n){ while(true){} }'; setCode(c); runCode(); });
  await page.waitForTimeout(600);
  ok(await page.evaluate(() => 1 + 1) === 2, 'الواجهة تستجيب أثناء تشغيل حلقة لا نهائية');
  await page.waitForTimeout(4500);
  ok(/وقتاً طويلاً/.test(await page.innerText('#out-box')), 'رسالة الحلقة اللانهائية تظهر');

  // ── Async challenge ──
  await page.evaluate(() => openChallenge(45)); await page.waitForTimeout(300);
  await page.evaluate(code => { setCode(code); }, SOL[45]);
  await page.evaluate(() => submitCode()); await page.waitForTimeout(2000);
  ok(await page.isVisible('#s-result.on'), 'تحدي Async يُحل في المتصفح');

  // ── الملعب ──
  await page.evaluate(() => go('playground')); await page.waitForTimeout(400);
  await page.evaluate(() => { pgSet('console.log("مرحبا", [1,2].map(x=>x*2)); setTimeout(()=>console.log("بعد"),100)'); pgRun(); });
  await page.waitForTimeout(2000); await shot('04-playground');
  const pgOut = await page.innerText('#pg-out');
  ok(/مرحبا/.test(pgOut) && /\[2,4\]/.test(pgOut) && /بعد/.test(pgOut), 'الملعب يشغّل الكود ويعرض المخرجات');

  // ── الدروس ──
  await page.evaluate(() => go('paths')); await page.waitForTimeout(300); await shot('05-paths');
  const nPaths = await page.$$eval('.path-card', e => e.length);
  ok(nPaths === (await page.evaluate(() => PATHS.length)), 'كل المسارات تظهر (' + nPaths + ')');
  await page.click('.path-card'); await page.waitForTimeout(300);
  ok(await page.isVisible('#s-lessons.on'), 'الضغط على مسار يفتح دروسه');
  await page.click('.ls-head'); await page.waitForTimeout(200); await shot('06-lessons');
  ok(await page.isVisible('.ls-card.open .ls-body'), 'الدرس يتفتح');
  await page.click('.ls-card.open .btn-ol'); await page.waitForTimeout(600);
  ok(await page.isVisible('#s-playground.on') && /let|const/.test(await page.evaluate(() => pgGet())), 'زر "جرّبه في الملعب" ينقل المثال');

  // ── الشهادة ──
  await page.evaluate(() => { realChallenges().filter(c => c.cat === 'نصوص').forEach(c => { if (!S.solved.includes(c.id)) S.solved.push(c.id); }); saveState(); go('paths'); });
  await page.waitForTimeout(300);
  ok(await page.evaluate(() => /الشهادة/.test(document.getElementById('paths-list').innerText)), 'زر الشهادة يظهر عند إكمال المسار');
  await page.evaluate(() => openCertificate('نصوص')); await page.waitForTimeout(1200); await shot('07-certificate');
  ok(await page.isVisible('#_cert img'), 'صورة الشهادة تُرسم');
  ok(await page.evaluate(() => calcBadges().includes(14)), 'شارة "خريج مسار" تُمنح');
  await page.evaluate(() => document.getElementById('_cert').remove());

  // ── الدوري والمتصدرين ──
  await page.evaluate(() => go('leaderboard')); await page.waitForTimeout(1500); await shot('08-leaderboard');
  ok(/الدوري/.test(await page.innerText('#lb-league')), 'بطاقة الدوري تظهر');
  await page.evaluate(() => { S.week = { key: '2000-W01', xp: 999 }; S.league = 0; cnRollPeriods(); });
  ok(await page.evaluate(() => S.league === 1 && S.week.xp === 0), 'الصعود للدوري التالي عند بداية أسبوع جديد');
  await page.evaluate(() => { S.week = { key: '2000-W01', xp: 0 }; cnRollPeriods(); });
  ok(await page.evaluate(() => S.league === 0), 'الهبوط عند XP أسبوعي ضعيف');

  // ── كل الشاشات تفتح بدون أخطاء ──
  for (const s of ['home', 'challenges', 'daily', 'paths', 'badges', 'leaderboard', 'profile', 'about', 'playground']) {
    await page.evaluate(x => go(x), s); await page.waitForTimeout(150);
    ok(await page.isVisible(`#s-${s}.on`), `الشاشة ${s} تفتح`);
  }
  await page.evaluate(() => { const d = getDailyChallenge(getTodayKey()); window.__d = d; });
  ok(await page.evaluate(() => window.__d && window.__d.type !== 'final'), 'تحدي اليوم ليس الشاشة الختامية');

  // ── عرض بدون تمرير أفقي ──
  ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), 'لا يوجد تمرير أفقي على شاشة الهاتف');
} catch (e) {
  ok(false, 'استثناء أثناء الاختبار: ' + e.message);
}
ok(errors.length === 0, 'لا أخطاء JavaScript في الصفحة ' + errors.slice(0, 3).join(' | '));
await browser.close(); srv.close();
console.log(`\n${fails ? '❌' : '✅'} E2E: ${passes} نجح، ${fails} فشل — الصور في ${SHOTS}`);
process.exit(fails ? 1 : 0);
