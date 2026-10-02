// Assemble the ESG market opportunity study into a .docx file.
const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Header, Footer, AlignmentType, PageNumber,
  PageOrientation, LevelFormat, ExternalHyperlink, BorderStyle,
} = require('docx');
const H = require('./helpers');
const { SOURCES } = require('./content/sources');
const front = require('./content/front');

const part = (n) => require(`./content/part${String(n).padStart(2, '0')}`)();

function sourcesSection() {
  const out = [H.h1('Sources'), H.p('Numbers match the bracketed citations in the text. Links were checked during research up to 2 October 2026; some regulator pages may move.', { size: 18, color: H.COLORS.muted })];
  SOURCES.forEach(([title, url], i) => {
    out.push(new Paragraph({
      spacing: { after: 60, line: 240 },
      indent: { left: 480, hanging: 480 },
      children: [
        new TextRun({ text: `[${i + 1}]\t`, size: 16, bold: true, color: H.COLORS.primary }),
        new TextRun({ text: `${title}. `, size: 16 }),
        new ExternalHyperlink({ link: url, children: [new TextRun({ text: url, style: 'Hyperlink', size: 15 })] }),
      ],
    }));
  });
  return out;
}

const header = new Header({
  children: [new Paragraph({
    alignment: AlignmentType.RIGHT,
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: H.COLORS.border, space: 4 } },
    children: [new TextRun({ text: 'ESG Services Opportunity Study  |  Indonesia, Malaysia, Singapore, Hong Kong  |  October 2026', size: 15, color: H.COLORS.muted })],
  })],
});
const footer = new Footer({
  children: [new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [
      new TextRun({ text: 'Page ', size: 16, color: H.COLORS.muted }),
      new TextRun({ children: [PageNumber.CURRENT], size: 16, color: H.COLORS.muted }),
      new TextRun({ text: ' of ', size: 16, color: H.COLORS.muted }),
      new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 16, color: H.COLORS.muted }),
    ],
  })],
});
const blank = new Header({ children: [new Paragraph({ children: [] })] });
const blankFooter = new Footer({ children: [new Paragraph({ children: [] })] });

const MARGIN = { top: 1080, bottom: 1080, left: 1080, right: 1080, header: 500, footer: 500 };
function section(children, landscape = false, first = false) {
  return {
    properties: {
      titlePage: first,
      page: {
        size: { width: 11906, height: 16838, orientation: landscape ? PageOrientation.LANDSCAPE : PageOrientation.PORTRAIT },
        margin: MARGIN,
      },
    },
    headers: first ? { default: header, first: blank } : { default: header },
    footers: first ? { default: footer, first: blankFooter } : { default: footer },
    children,
  };
}

const bulletLevels = (indentStep) => [0, 1].map((level) => ({
  level,
  format: LevelFormat.BULLET,
  text: level === 0 ? '•' : '–',
  alignment: AlignmentType.LEFT,
  style: { paragraph: { indent: { left: indentStep * (level + 1), hanging: 260 } } },
}));
const numberRef = (reference) => ({
  reference,
  levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 400, hanging: 300 } } } }],
});

const doc = new Document({
  creator: 'ESG market research',
  title: 'ESG Services Opportunity Study: Indonesia, Malaysia, Singapore, Hong Kong (2026-2029)',
  description: 'Business opportunity study for an independent ESG consultant',
  features: { updateFields: false },
  styles: {
    default: { document: { run: { font: 'Arial', size: 20, color: H.COLORS.ink } } },
    paragraphStyles: [
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 32, bold: true, font: 'Arial', color: H.COLORS.primary },
        paragraph: { spacing: { before: 120, after: 200 }, outlineLevel: 0 } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 25, bold: true, font: 'Arial', color: H.COLORS.primary },
        paragraph: { spacing: { before: 260, after: 120 }, outlineLevel: 1, keepNext: true } },
      { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 21, bold: true, font: 'Arial', color: H.COLORS.accent },
        paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 2, keepNext: true } },
    ],
  },
  numbering: {
    config: [
      { reference: 'bullets', levels: bulletLevels(400) },
      { reference: 'cellbullets', levels: bulletLevels(220) },
      numberRef('numbers'), numberRef('num_my'), numberRef('num_sg'), numberRef('num_id'), numberRef('num_hk'),
    ],
  },
  sections: [
    section([...front.cover(), ...front.contents(), ...front.execSummary(), ...front.howToRead(), ...part(1)], false, true),
    section(part(2), true),
    section([...part(3), ...part(4), ...part(5)]),
    section([...part(6), ...part(7)], true),
    section(part(8)),
    section([...part(9), ...part(10)], true),
    section([...part(11), ...part(12), ...part(13), ...part(14), ...part(15), ...sourcesSection()]),
  ],
});

const out = path.join(__dirname, '..', 'ESG_Opportunity_Study_ID_MY_SG_HK_2026.docx');
Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(out, buf);
  console.log('wrote', out, buf.length, 'bytes');
});
