import { PDFDocument, rgb } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import { listTools, listCertifications, listProyek } from '../../data';

const MAX_TITLE = 10;
const SUB_RATIO = 0.8;
const RIGHT_X = 555;
const PROJ_X = 250;

function wrapText(text, maxChars) {
  const words = text.split(' ');
  const lines = [];
  let current = '';
  for (const word of words) {
    const test = current ? current + ' ' + word : word;
    if (test.length <= maxChars) {
      current = test;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function calcProjHeight(ts, projs) {
  const ss = ts * SUB_RATIO;
  const chars = Math.floor(275 / (ss * 0.52));
  const tlh = ts * 1.4;
  const slh = ss * 1.3;
  return projs.reduce((sum, p) => sum + tlh + wrapText(p.fullDescription, chars).length * slh, 0);
}

function findProjTitleSize(projs) {
  for (let s = MAX_TITLE; s >= 6; s -= 0.5) {
    if (calcProjHeight(s, projs) <= 225) return s;
  }
  return 6;
}

function certNameSize(n) {
  for (let s = MAX_TITLE; s >= 7; s -= 0.5) {
    if (n * s * 1.3 <= 100) return s;
  }
  return 7;
}

export async function generateFilledCV() {
  const base = import.meta.env.BASE_URL;
  const response = await fetch(`${base}assets/CV.pdf`);
  const existingBytes = await response.arrayBuffer();

  const pdfDoc = await PDFDocument.load(existingBytes);
  pdfDoc.registerFontkit(fontkit);

  const [boldBytes, regBytes] = await Promise.all([
    fetch(`${base}assets/Montserrat-Bold-Static.ttf`).then(r => r.arrayBuffer()),
    fetch(`${base}assets/Montserrat-Regular-Static.ttf`).then(r => r.arrayBuffer()),
  ]);

  const bold = await pdfDoc.embedFont(boldBytes);
  const reg = await pdfDoc.embedFont(regBytes);
  const page = pdfDoc.getPages()[0];

  const white = rgb(1, 1, 1);
  const black = rgb(0, 0, 0);

  const doneTools = listTools.filter(t => t.done);
  const acquiredCerts = listCertifications
    .filter(c => c.certImage !== null)
    .sort((a, b) => Number(b.anno) - Number(a.anno));

  // ── SKILLS: white, regular, left panel, x=25, y=300, long names left col, short right ──
  const maxRows = Math.floor(200 / 14);
  const sortedTools = [...doneTools].sort((a, b) => b.nama.length - a.nama.length);
  sortedTools.forEach((tool, i) => {
    const col = i >= maxRows ? 1 : 0;
    const row = i >= maxRows ? i - maxRows : i;
    page.drawText('• ' + tool.nama, {
      x: 25 + col * 115,
      y: 300 - row * 14,
      size: 8.5,
      font: reg,
      color: white,
    });
  });

  // ── CERTIFICATIONS: black bold, x=250, y=225→125, dynamic size+gap ──
  const cs = certNameSize(acquiredCerts.length);
  const certContentH = acquiredCerts.length * cs * 1.3;
  const certGap = (100 - certContentH) / acquiredCerts.length;
  let curCertY = 225;

  acquiredCerts.forEach(c => {
    page.drawText(c.nama, {
      x: PROJ_X,
      y: curCertY,
      size: cs,
      font: bold,
      color: black,
    });
    const annoW = bold.widthOfTextAtSize(c.anno, cs);
    page.drawText(c.anno, {
      x: RIGHT_X - annoW,
      y: curCertY,
      size: cs,
      font: bold,
      color: black,
    });
    curCertY -= cs * 1.3 + certGap;
  });

  // ── PROJECTS: black bold title+anno, black regular subtitle, y=525→300, dynamic ──
  const ts = findProjTitleSize(listProyek);
  const ss = ts * SUB_RATIO;
  const chars = Math.floor(275 / (ss * 0.52));
  const tlh = ts * 1.4;
  const slh = ss * 1.3;
  const totalContent = calcProjHeight(ts, listProyek);
  const gap = (225 - totalContent) / listProyek.length;
  const bulletW = bold.widthOfTextAtSize('• ', ss);
  let curY = 525;

  listProyek.forEach(p => {
    page.drawText(p.title, {
      x: PROJ_X,
      y: curY,
      size: ts,
      font: bold,
      color: black,
    });
    const annoW = bold.widthOfTextAtSize(p.anno, ts);
    page.drawText(p.anno, {
      x: RIGHT_X - annoW,
      y: curY,
      size: ts,
      font: bold,
      color: black,
    });
    curY -= tlh;

    wrapText(p.fullDescription, chars).forEach((line, li) => {
      if (li === 0) {
        page.drawText('• ', { x: PROJ_X, y: curY, size: ss, font: bold, color: black });
        page.drawText(line, { x: PROJ_X + bulletW, y: curY, size: ss, font: reg, color: black });
      } else {
        page.drawText('  ' + line, { x: PROJ_X, y: curY, size: ss, font: reg, color: black });
      }
      curY -= slh;
    });

    curY -= gap;
  });

  const pdfBytes = await pdfDoc.save();
  return new Blob([pdfBytes], { type: 'application/pdf' });
}
