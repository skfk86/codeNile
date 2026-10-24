#!/usr/bin/env node
// اختبارات CodeNile الشاملة (بدون متصفح): بنية البيانات، كل تحدي قابل للحل،
// الكود المبدئي لا ينجح، صحة الـ JavaScript في index.html، والدوال المربوطة بالأزرار.
// تشغيل: node tests/run-tests.js
const fs = require('fs'), path = require('path'), os = require('os'), cp = require('child_process');
const ROOT = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const dataSrc = fs.readFileSync(path.join(ROOT, 'challenges.js'), 'utf8');
const SOL = require('./solutions.js');

let fails = 0, passes = 0;
const ok = (cond, msg) => { if (cond) passes++; else { fails++; console.log('  ❌ ' + msg); if (process.env.GITHUB_ACTIONS) console.log('::error::' + msg); } };
const section = t => console.log('\n▶ ' + t);

// ── load data ──
const D = new Function(dataSrc + ';return {CHALLENGES,PATHS,BADGES,LESSONS,realChallenges};')();
const { CHALLENGES, PATHS, BADGES, LESSONS } = D;

// ── extract sandbox worker from index.html ──
const wa = html.indexOf('function _sbWorkerSrc'), wb = html.indexOf('function sbRun(code');
ok(wa > 0 && wb > wa, 'worker source found in index.html');
const helpers = new Function(html.slice(wa, wb) + ';return {_sbWorkerSrc,_sbSerializeTests};')();
const WSRC = helpers._sbWorkerSrc();
function runInWorker(code, ch, extra = {}) {
  return new Promise(resolve => {
    const timer = setTimeout(() => resolve({ timeout: true }), 5000);
    const self = { postMessage: m => { clearTimeout(timer); resolve(m); } };
    new Function('self', WSRC)(self);
    self.onmessage({ data: Object.assign({ code, fnName: ch.fn, tests: helpers._sbSerializeTests(ch.tests),
      ccSrc: ch.customCheck ? String(ch.customCheck) : null }, extra) });
  });
}

(async () => {
  section('بنية البيانات');
  const real = CHALLENGES.filter(c => c.type !== 'final');
  const ids = CHALLENGES.map(c => c.id);
  ok(new Set(ids).size === ids.length, 'IDs التحديات غير مكررة');
  ok(CHALLENGES[CHALLENGES.length - 1].type === 'final', 'الشاشة الختامية آخر عنصر');
  const cats = new Set(PATHS.map(p => p.cat));
  const fns = {};
  for (const c of real) {
    for (const f of ['title', 'diff', 'xp', 'cat', 'desc', 'hint', 'code', 'fn', 'tests'])
      ok(c[f] !== undefined && c[f] !== '', `#${c.id} فيه الحقل ${f}`);
    ok(cats.has(c.cat), `#${c.id} المسار "${c.cat}" موجود في PATHS`);
    ok(['سهل', 'متوسط', 'صعب'].includes(c.diff), `#${c.id} صعوبة صحيحة`);
    ok(Array.isArray(c.tests) && c.tests.length > 0, `#${c.id} فيه اختبارات`);
    ok(!fns[c.fn], `#${c.id} اسم الدالة ${c.fn} غير مكرر (مكرر مع #${fns[c.fn]})`); fns[c.fn] = c.id;
    ok(new RegExp('\\b' + c.fn + '\\b').test(c.code), `#${c.id} الكود المبدئي يحتوي ${c.fn}`);
  }
  for (const p of PATHS) {
    ok(real.some(c => c.cat === p.cat), `المسار ${p.title} فيه تحديات`);
    ok(Array.isArray(LESSONS[p.cat]) && LESSONS[p.cat].length >= 2, `المسار ${p.title} فيه دروس`);
    for (const l of LESSONS[p.cat] || []) {
      ok(l.title && l.body, `درس "${l.title}" مكتمل`);
      if (l.example) try { new Function(l.example); passes++; } catch (e) { ok(false, `مثال درس "${l.title}" فيه خطأ نحوي: ${e.message}`); }
    }
  }
  ok(new Set(BADGES.map(b => b.id)).size === BADGES.length, 'IDs الشارات غير مكررة');
  const cond = b => JSON.stringify(Object.keys(b).filter(k => !['id', 'emoji', 'name', 'req'].includes(k)).map(k => [k, b[k]]));
  ok(new Set(BADGES.map(cond)).size === BADGES.length, 'لا توجد شارتان بنفس الشرط');

  section('كل تحدي قابل للحل والكود المبدئي لا ينجح');
  for (const c of real) {
    const sol = SOL[c.id];
    ok(!!sol, `#${c.id} له حل مرجعي في tests/solutions.js`);
    if (!sol) continue;
    const r = await runInWorker(sol, c);
    const good = r.results && r.results.every(x => x.passed);
    ok(good, `#${c.id} (${c.fn}) الحل المرجعي ينجح ${good ? '' : JSON.stringify(r).slice(0, 200)}`);
    const st = await runInWorker(c.code, c);
    ok(!(st.results && st.results.every(x => x.passed)), `#${c.id} الكود المبدئي لا ينجح لوحده`);
  }

  section('الـ Sandbox');
  const c1 = real[0];
  let r = await runInWorker('function getType( {', c1);
  ok(r.compileError && r.compileError.isSyntax, 'الخطأ النحوي يُلتقط');
  r = await runInWorker('const x = 1;', c1);
  ok(r.notFound, 'الدالة غير الموجودة تُكتشف');
  r = await runInWorker('function getType(v){ console.log("<b>", v); return typeof v; }', c1);
  ok(r.results && r.results[0].logs[0].startsWith('<b>'), 'console.log يُلتقط');
  r = await runInWorker('console.log(1+1); setTimeout(()=>console.log("later"),50)', { fn: '__pg__', tests: [] }, { playground: true, waitMs: 200 });
  ok(r.logs && r.logs.join(',') === '2,later', 'الملعب يطبع المخرجات المتأخرة');
  r = await runInWorker('throw new Error("boom")', { fn: '__pg__', tests: [] }, { playground: true, waitMs: 0 });
  ok(r.logs && /boom/.test(r.logs[0]), 'خطأ وقت التشغيل في الملعب يظهر');
  ok(/SB_TIMEOUT_MS=\d+/.test(html) && /w\.terminate\(\)/.test(html), 'مهلة الحلقات اللانهائية موجودة');

  section('index.html');
  const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  scripts.forEach((s, i) => { try { new Function(s); passes++; } catch (e) { ok(false, `script #${i} خطأ نحوي: ${e.message}`); } });
  const mod = html.match(/<script type="module">([\s\S]*?)<\/script>/);
  if (mod) {
    const f = path.join(os.tmpdir(), 'cn-module-check.mjs'); fs.writeFileSync(f, mod[1]);
    try { cp.execFileSync(process.execPath, ['--check', f], { stdio: 'pipe' }); passes++; }
    catch (e) { ok(false, 'Firebase module script: ' + e.stderr); }
  }
  ok(/<script src="challenges\.js"><\/script>/.test(html), 'index.html يحمّل challenges.js');
  const badCalc = (html.match(/calc\([^;"]*\)/g) || []).filter(x => /[\w)][+][\w(-]/.test(x));
  ok(badCalc.length === 0, 'كل calc() صالحة ' + badCalc.join(' '));
  const all = scripts.join('\n') + dataSrc;
  const called = new Set([...html.matchAll(/on(?:click|input|change|keydown)="([A-Za-z_$][\w$]*)\(/g)].map(m => m[1]));
  const builtins = new Set(['event', 'document', 'toast', 'history', 'window']);
  for (const f of called) if (!builtins.has(f))
    ok(new RegExp('function\\s+' + f + '\\s*\\(|(?:window\\.|\\b)' + f + '\\s*=').test(all), `الدالة ${f} (مستخدمة في الأزرار) معرّفة`);
  const screensUsed = new Set([...html.matchAll(/go\('([\w-]+)'\)/g)].map(m => m[1]));
  for (const s of screensUsed) ok(html.includes(`id="s-${s}"`), `الشاشة s-${s} موجودة`);

  console.log(`\n${fails ? '❌' : '✅'} ${passes} نجح، ${fails} فشل`);
  process.exit(fails ? 1 : 0);
})();
