// Shared building blocks for the ESG market study document.
const {
  Paragraph, TextRun, Table, TableRow, TableCell, WidthType, ShadingType,
  BorderStyle, AlignmentType, HeadingLevel, VerticalAlign, ExternalHyperlink,
  PageBreak, ImageRun,
} = require('docx');
const fs = require('fs');

const COLORS = {
  primary: '0B4F6C',
  accent: '1C7C54',
  ink: '1F2328',
  muted: '57606A',
  border: 'C9D1D9',
  zebra: 'F3F6F8',
  headFill: '0B4F6C',
  calloutFill: 'EEF5F3',
  warnFill: 'FFF6E5',
};

// Evidence and regulatory-status tags. Written in source text as {F}, {E}, etc.
const TAGS = {
  F: { label: 'Fact', color: '1C5CAB' },
  E: { label: 'Estimate', color: 'A35200' },
  A: { label: 'Analyst view', color: '6B4FA0' },
  I: { label: 'Inference', color: '0F7A55' },
  IF: { label: 'In force', color: '1A7F37' },
  AN: { label: 'Announced', color: '9A6700' },
  PR: { label: 'Proposed', color: 'B42318' },
  VO: { label: 'Voluntary', color: '57606A' },
};

const PORTRAIT_W = 9746; // A4 portrait content width (DXA), 0.75" side margins
const LANDSCAPE_W = 14678; // A4 landscape content width (DXA)

// Parse inline markup into TextRuns:
//   **bold**, {F} style tags, [12] or [3,4] citations (rendered as superscript).
function runs(text, base = {}) {
  const out = [];
  const re = /(\*\*[^*]+\*\*|\{(?:F|E|A|I|IF|AN|PR|VO)\}|\[\d+(?:\s*[,–-]\s*\d+)*\])/g;
  let last = 0;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(new TextRun({ text: text.slice(last, m.index), ...base }));
    const tok = m[0];
    if (tok.startsWith('**')) {
      out.push(new TextRun({ text: tok.slice(2, -2), ...base, bold: true }));
    } else if (tok.startsWith('{')) {
      const t = TAGS[tok.slice(1, -1)];
      out.push(new TextRun({
        text: `[${t.label}]`, bold: true, color: t.color,
        size: Math.max((base.size || 20) - 4, 12), font: base.font,
      }));
    } else {
      out.push(new TextRun({ text: tok, superScript: true, color: COLORS.muted, size: base.size, font: base.font }));
    }
    last = m.index + tok.length;
  }
  if (last < text.length) out.push(new TextRun({ text: text.slice(last), ...base }));
  return out;
}

function p(text, opts = {}) {
  const { size, color, italics, align, after = 120, before = 0, bold, keepNext, indent } = opts;
  return new Paragraph({
    children: runs(text, { size, color, italics, bold }),
    alignment: align,
    spacing: { after, before, line: 276 },
    keepNext,
    indent,
  });
}

const h1 = (text, pageBreak = true) => new Paragraph({
  heading: HeadingLevel.HEADING_1, children: [new TextRun(text)], pageBreakBefore: pageBreak,
});
const h2 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(text)] });
const h3 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun(text)] });

function bullets(items, opts = {}) {
  const { level = 0, size, ref = 'bullets' } = opts;
  return items.map((t) => new Paragraph({
    numbering: { reference: ref, level },
    children: runs(t, { size }),
    spacing: { after: 60, line: 264 },
  }));
}

function numbered(items, ref = 'numbers') {
  return items.map((t) => new Paragraph({
    numbering: { reference: ref, level: 0 },
    children: runs(t),
    spacing: { after: 60, line: 264 },
  }));
}

// Content for a table cell: a string, or an array of strings where entries
// starting with "- " become compact bullets.
function cellParas(content, size, bold, color) {
  const list = Array.isArray(content) ? content : [content];
  return list.map((t) => {
    if (typeof t === 'string' && t.startsWith('- ')) {
      return new Paragraph({
        numbering: { reference: 'cellbullets', level: 0 },
        children: runs(t.slice(2), { size, bold, color }),
        spacing: { after: 30, line: 240 },
      });
    }
    return new Paragraph({ children: runs(String(t), { size, bold, color }), spacing: { after: 40, line: 240 } });
  });
}

const thin = { style: BorderStyle.SINGLE, size: 4, color: COLORS.border };
const cellBorders = { top: thin, bottom: thin, left: thin, right: thin };

// Generic table. widths are relative weights; they are scaled to the page width.
function table({ headers, rows, widths, landscape = false, size = 16, headSize, firstColBold = true, zebra = true, firstColFill }) {
  const total = landscape ? LANDSCAPE_W : PORTRAIT_W;
  const sum = widths.reduce((a, b) => a + b, 0);
  const cols = widths.map((w) => Math.floor((w / sum) * total));
  cols[cols.length - 1] += total - cols.reduce((a, b) => a + b, 0);
  const hs = headSize || size;

  const headRow = new TableRow({
    tableHeader: true,
    cantSplit: true,
    children: headers.map((h, i) => new TableCell({
      width: { size: cols[i], type: WidthType.DXA },
      borders: cellBorders,
      shading: { fill: COLORS.headFill, type: ShadingType.CLEAR, color: 'auto' },
      margins: { top: 70, bottom: 70, left: 90, right: 90 },
      verticalAlign: VerticalAlign.CENTER,
      children: cellParas(h, hs, true, 'FFFFFF'),
    })),
  });

  const bodyRows = rows.map((r, ri) => new TableRow({
    cantSplit: true,
    children: r.map((c, ci) => {
      let fill;
      if (ci === 0 && firstColFill) fill = firstColFill;
      else if (zebra && ri % 2 === 1) fill = COLORS.zebra;
      return new TableCell({
        width: { size: cols[ci], type: WidthType.DXA },
        borders: cellBorders,
        shading: fill ? { fill, type: ShadingType.CLEAR, color: 'auto' } : undefined,
        margins: { top: 60, bottom: 60, left: 90, right: 90 },
        children: cellParas(c, size, ci === 0 && firstColBold, undefined),
      });
    }),
  }));

  return new Table({
    width: { size: total, type: WidthType.DXA },
    columnWidths: cols,
    rows: [headRow, ...bodyRows],
  });
}

// Shaded call-out box (single-cell table) with a heading line and paragraphs.
function callout(title, lines, { landscape = false, fill = COLORS.calloutFill, edge = COLORS.accent } = {}) {
  const total = landscape ? LANDSCAPE_W : PORTRAIT_W;
  const children = [];
  if (title) children.push(new Paragraph({ children: [new TextRun({ text: title, bold: true, color: COLORS.primary, size: 21 })], spacing: { after: 80 } }));
  children.push(...cellParas(lines, 19));
  return new Table({
    width: { size: total, type: WidthType.DXA },
    columnWidths: [total],
    rows: [new TableRow({
      children: [new TableCell({
        width: { size: total, type: WidthType.DXA },
        shading: { fill, type: ShadingType.CLEAR, color: 'auto' },
        borders: {
          top: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
          bottom: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
          right: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
          left: { style: BorderStyle.SINGLE, size: 24, color: edge },
        },
        margins: { top: 140, bottom: 120, left: 200, right: 200 },
        children,
      })],
    })],
  });
}

const spacer = (after = 120) => new Paragraph({ children: [], spacing: { after } });

function image(path, widthPx, heightPx, caption) {
  const out = [new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 120, after: 60 },
    children: [new ImageRun({ type: 'png', data: fs.readFileSync(path), transformation: { width: widthPx, height: heightPx } })],
  })];
  if (caption) out.push(p(caption, { size: 17, color: COLORS.muted, italics: true, align: AlignmentType.CENTER, after: 200 }));
  return out;
}

function link(text, url, size = 17) {
  return new ExternalHyperlink({ link: url, children: [new TextRun({ text, style: 'Hyperlink', size })] });
}

// Planning exchange rates (local currency per USD), late September 2026.
const FX = { SGD: 1.28, MYR: 4.08, IDR: 17900, HKD: 7.8 };
const SYM = { SGD: 'S$', MYR: 'RM', IDR: 'IDR ', HKD: 'HK$' };

function fmtLocal(cur, v) {
  if (cur === 'IDR') {
    if (v >= 1e9) return `${+(v / 1e9).toFixed(2)}bn`;
    return `${Math.round(v / 1e6)}m`;
  }
  if (v >= 1e6) return `${+(v / 1e6).toFixed(2)}m`;
  return `${Math.round(v / 1e3)}k`;
}
function fmtUsd(v) {
  if (v >= 1e6) return `${+(v / 1e6).toFixed(2)}m`;
  if (v >= 1e4) return `${Math.round(v / 1e3)}k`;
  return `${+(v / 1e3).toFixed(1)}k`;
}
// Price range in local currency with an approximate USD equivalent.
function price(cur, lo, hi) {
  const s = SYM[cur];
  const u = (x) => x / FX[cur];
  return `${s}${fmtLocal(cur, lo)}–${fmtLocal(cur, hi)} (≈US$${fmtUsd(u(lo))}–${fmtUsd(u(hi))})`;
}

module.exports = {
  COLORS, TAGS, runs, p, h1, h2, h3, bullets, numbered, table, callout, spacer, image, link,
  price, FX, PORTRAIT_W, LANDSCAPE_W, PageBreak, Paragraph, TextRun, AlignmentType,
};
