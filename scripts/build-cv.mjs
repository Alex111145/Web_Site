// Builds public/assets/Alessio_Gervasini_CV.pdf (blue v3 design) from src/data.js.
// Skills = tools with done:true and cv !== false, certifications = the ones with a certImage or cv:true (cvAnno/cvSortYear override),
// projects = listProyek (cvDescription, or fullDescription when missing).
// Rendered with the local Google Chrome (headless print to PDF).
// Usage: npm run cv   (also runs inside npm run deploy)
import { createServer } from 'vite';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(root, 'public/assets/Alessio_Gervasini_CV.pdf');
const CHROME = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

// ── fixed parts of the CV (not in data.js) ──
const ABOUT = 'Co-Founder SolarDino | Passionate about Artificial Intelligence. Beyond a strong interest in image recognition and object detection.';
const HOBBIES = ['Volleyball', 'Reading AI Papers', 'Pilot & Developer DJI', 'Object Detection'];
const EDUCATION = [
  { title: 'Master in Machine Learning (ongoing)', years: '2026 - 2028', school: 'SUPSI · Lugano, Zurich (CH)' },
  { title: 'Bachelor of Computer Science', years: '2023 - 2026', school: 'University of Insubria · Varese (IT)' },
  { title: 'High School Diploma in Scientific Studies', years: '2018 - 2023', school: 'Manfredini High School · Varese (IT)' },
];

// ── data.js imports images, so load it through Vite ──
const vite = await createServer({
  root, logLevel: 'error', appType: 'custom',
  server: { middlewareMode: true, hmr: false, watch: null },
  optimizeDeps: { noDiscovery: true, include: [] },
});
const { listTools, listCertifications, listProyek } = await vite.ssrLoadModule('/src/data.js');
await vite.close();

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const skills = listTools.filter((t) => t.done && t.cv !== false).map((t) => t.nama).sort((a, b) => b.length - a.length);
const certs = listCertifications
  .filter((c) => c.certImage !== null || c.cv === true)
  .sort((a, b) => Number(b.cvSortYear ?? b.anno) - Number(a.cvSortYear ?? a.anno));
const projects = listProyek.map((p) => ({ title: p.title, anno: p.anno, text: p.cvDescription || p.fullDescription }));

// skills: 2 columns, long names on the left; rows shrink when the list grows (box 527pt → 723pt)
const skillRows = Math.max(1, Math.ceil(skills.length / 2));
const skillRowH = Math.min(14, 196 / skillRows);
const skillFont = Math.min(7.6, skillRowH * 0.54);

const item = (t, y, sub, cls) =>
  `<div class="item"><div class="row"><span class="t">${esc(t)}</span><span class="y">${esc(y)}</span></div>${sub ? `<div class="${cls}">${esc(sub)}</div>` : ''}</div>`;

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<title>Alessio Gervasini - CV</title>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Outfit:wght@300;400;600;700&display=swap" rel="stylesheet">
<style>
@page { size: A4; margin: 0 }
*{box-sizing:border-box;margin:0;padding:0}
:root{--navy:#1e3653;--dot:#60a5fa;--halo:#dbeafe;--line:#bfdbfe;--pill:#c7d4dc;--k:1}
html,body{width:595.3pt;height:841.9pt;overflow:hidden;-webkit-print-color-adjust:exact;print-color-adjust:exact}
body{position:relative;font-family:'Montserrat',sans-serif;color:#1f2937;background:#fff;font-size:8.6pt;line-height:1.45}
a{color:inherit;text-decoration:none}
.abs{position:absolute}
.blk-top{left:344pt;top:0;width:251.3pt;height:208pt;background:var(--navy)}
.blk-left{left:0;top:196pt;width:226pt;height:645.9pt;background:var(--navy)}
.photo{left:388.6pt;top:43.7pt;width:160.6pt;height:185.6pt;border-radius:80.3pt;border:1.6pt solid #f4f6f7;background:#eaeae8;object-fit:cover;object-position:50% 0%;object-view-box:inset(9px 33px 0 11px);box-shadow:0 0 0 .5pt #b7bfc8}
h1{left:36pt;top:46pt;font-family:'Outfit',sans-serif;color:var(--navy);line-height:1.02}
h1 .a{display:block;font-weight:300;font-size:36pt;letter-spacing:.5pt}
h1 .b{display:block;font-weight:700;font-size:38pt;letter-spacing:.3pt}
.head2{left:36pt;top:142pt;width:270pt;text-align:center}
.title{font-size:15pt;color:#111827;font-weight:400}
.sub{font-size:7.6pt;color:#6b7280;letter-spacing:0;margin:3pt -40pt 0;font-style:italic;white-space:nowrap;line-height:1.35}
.side h3{font-family:'Outfit',sans-serif;font-weight:700;font-size:14pt;letter-spacing:1.4pt;color:#fff;line-height:1.2}
.about{left:25.3pt;top:258pt;width:192pt;font-size:8.2pt;color:#eef3f9}
.c{left:21.5pt;width:200pt;display:flex;gap:9pt;align-items:center;font-size:7.4pt;color:#fff}
.c i{flex:none;width:11pt;height:11pt;background:#fcfcfc;border-radius:1.5pt;display:flex;align-items:center;justify-content:center}
.c svg{width:8pt;height:8pt;stroke:var(--navy);fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}
.skills{left:25pt;top:527pt;width:195pt;display:grid;grid-template-columns:115pt 80pt;grid-auto-flow:column;grid-template-rows:repeat(${skillRows},${skillRowH.toFixed(2)}pt);font-size:${skillFont.toFixed(2)}pt;color:#fff}
.skills span{line-height:${skillRowH.toFixed(2)}pt}
.skills span,.hob span{position:relative;padding-left:8pt;white-space:nowrap}
.hob span{line-height:14pt}
.skills span:before,.hob span:before{content:"";position:absolute;left:0;top:calc(50% - 1.8pt);width:3.6pt;height:3.6pt;border-radius:50%;background:var(--dot);box-shadow:0 0 0 .7pt rgba(219,234,254,.35)}
.hob{left:25pt;top:756pt;width:195pt;display:grid;grid-template-columns:115pt 80pt;grid-auto-rows:14pt;font-size:7.6pt;color:#fff}
.priv{left:14pt;top:797pt;width:198pt;text-align:center;font-size:6.2pt;line-height:1.4;color:#c3cfdf}
.right{left:231.6pt;top:277.7pt;right:0;bottom:16pt;display:flex;flex-direction:column;justify-content:space-between}
.sec h2{position:relative;height:24.3pt;margin-right:-30pt;border:1.3pt solid var(--pill);border-radius:12.2pt;padding-left:9pt;font-family:'Outfit',sans-serif;font-weight:700;font-size:14pt;letter-spacing:1.5pt;color:var(--navy);line-height:22pt;box-shadow:inset 0 -.6pt 0 #e3e9ed}
.list{padding:9pt 40.3pt 0 6.4pt;zoom:var(--k)}
.item{position:relative;padding-left:12pt;margin-bottom:6.5pt}
.item:last-child{margin-bottom:0}
.item:before{content:"";position:absolute;left:0;top:3.3pt;width:6.2pt;height:6.2pt;border-radius:50%;background:var(--dot);box-shadow:0 0 0 1.7pt var(--halo)}
.item:after{content:"";position:absolute;left:2.85pt;top:11.3pt;bottom:-8pt;width:.6pt;background:var(--line)}
.item:last-child:after{display:none}
.row{display:flex;justify-content:space-between;gap:8pt;align-items:baseline}
.t{font-weight:700;color:#111827}
.y{font-weight:700;color:var(--navy);font-size:8pt;white-space:nowrap}
.d,.sch{color:#4b5563;font-size:8.2pt;line-height:1.38}
.cert .item{margin-bottom:4.6pt}
.cert .item:after{bottom:-6.1pt}
.overflow{left:240pt;top:400pt;font-size:30pt;color:red;background:#fff}
</style></head><body>
<div class="abs blk-top"></div>
<div class="abs blk-left"></div>
<img class="abs photo" src="foto.jpg" alt="">

<h1 class="abs"><span class="a">ALESSIO</span><span class="b">GERVASINI</span></h1>
<div class="abs head2">
  <div class="title">AI and Computer Vision Specialist</div>
  <div class="sub">The difference between a junior and a senior is 10,000 failed experiments.</div>
</div>

<div class="side">
  <h3 class="abs" style="left:21.7pt;top:225pt">About Me</h3>
  <p class="abs about">${esc(ABOUT)}</p>

  <h3 class="abs" style="left:21.7pt;top:333pt">Contact</h3>
  <div class="abs c" style="top:366pt"><i><svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg></i><a href="tel:+393483476847">+39 348 347 68 47</a></div>
  <div class="abs c" style="top:390.5pt"><i><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 11v6M8 7.5v.01M12 17v-6M12 13a3 3 0 0 1 6 0v4"/></svg></i><a href="https://www.linkedin.com/in/891740368">https://www.linkedin.com/in/891740368</a></div>
  <div class="abs c" style="top:415pt"><i><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg></i><a href="mailto:agervasini1@gmail.com">agervasini1@gmail.com</a></div>
  <div class="abs c" style="top:439.5pt"><i><svg viewBox="0 0 24 24"><path d="M8 18l-5-6 5-6M16 6l5 6-5 6"/></svg></i><a href="https://github.com/Alex111145">https://github.com/Alex111145</a></div>
  <div class="abs c" style="top:464pt"><i><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg></i><a href="https://alessiogervasini.pages.dev">https://alessiogervasini.pages.dev</a></div>

  <h3 class="abs" style="left:25.3pt;top:499pt">Skills</h3>
  <div class="abs skills">${skills.map((s) => `<span>${esc(s)}</span>`).join('')}</div>

  <h3 class="abs" style="left:25.3pt;top:732pt">Hobbies</h3>
  <div class="abs hob">${HOBBIES.map((h) => `<span>${esc(h)}</span>`).join('')}</div>

  <div class="abs priv">I hereby authorize the processing of my personal data according to Legislative Decree 196/2003 and GDPR (EU Reg. 2016/679) for the purpose of personnel selection.</div>
</div>

<div class="abs right">
  <div class="sec">
    <h2>Experience - Project</h2>
    <div class="list">${projects.map((p) => item(p.title, p.anno, p.text, 'd')).join('')}</div>
  </div>
  <div class="sec cert">
    <h2>Certification</h2>
    <div class="list">${certs.map((c) => item(c.nama, c.cvAnno ?? c.anno)).join('')}</div>
  </div>
  <div class="sec">
    <h2>Education</h2>
    <div class="list">${EDUCATION.map((e) => item(e.title, e.years, e.school, 'sch')).join('')}</div>
  </div>
</div>
<script>
// more projects/certs than fit: shrink the right column a little; still too much -> big red mark (build fails)
document.fonts.ready.then(() => {
  const r = document.querySelector('.right');
  const need = () => [...r.children].reduce((s, c) => s + c.getBoundingClientRect().height, 0);
  let k = 1;
  while (need() > r.clientHeight && k > 0.8) { k -= 0.02; document.documentElement.style.setProperty('--k', k); }
  if (need() > r.clientHeight) document.body.insertAdjacentHTML('beforeend', '<div class="abs overflow">CV OVERFLOW</div>');
});
</script>
</body></html>`;

// ── render with Chrome ──
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'cv-'));
const profile = path.join(tmp, 'profile');
fs.writeFileSync(path.join(tmp, 'cv.html'), html);
fs.copyFileSync(path.join(root, 'scripts/cv/foto.jpg'), path.join(tmp, 'foto.jpg'));
const pdfTmp = path.join(tmp, 'cv.pdf');
try {
  execFileSync(CHROME, [
    '--headless=new', '--disable-gpu', '--no-pdf-header-footer', `--user-data-dir=${profile}`,
    '--virtual-time-budget=10000', '--run-all-compositor-stages-before-draw',
    `--print-to-pdf=${pdfTmp}`, `file://${path.join(tmp, 'cv.html')}`,
  ], { stdio: 'ignore' });

  // ── checks: 1 page, fonts embedded, nothing cut ──
  const pages = Number(/Pages:\s+(\d+)/.exec(execFileSync('pdfinfo', [pdfTmp], { encoding: 'utf8' }))?.[1]);
  const fonts = execFileSync('pdffonts', [pdfTmp], { encoding: 'utf8' });
  const text = execFileSync('pdftotext', [pdfTmp, '-'], { encoding: 'utf8' });
  const errors = [];
  if (pages !== 1) errors.push(`PDF has ${pages} pages, expected 1`);
  if (!/Montserrat/.test(fonts) || !/Outfit/.test(fonts)) errors.push('Montserrat/Outfit not embedded (Google Fonts not reachable?)');
  if (text.includes('CV OVERFLOW')) errors.push('right column too long: shorten cvDescription or remove an item');
  if (errors.length) {
    console.error('CV NOT updated:\n  ' + errors.join('\n  '));
    process.exit(1);
  }
  fs.copyFileSync(pdfTmp, OUT);
  console.log(`CV ok -> ${path.relative(root, OUT)} (${skills.length} skills, ${projects.length} projects, ${certs.length} certifications)`);
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
