const H = require('../helpers');
const { p, h1, h2, table, callout } = H;

const F = ['Industry', 'Revenue / size', 'Employees', 'ESG maturity', 'Regulatory exposure', 'Export exposure', 'Main pain point', 'Decision makers', 'Best message angle'];
const icp = (a, b) => table({
  headers: ['Profile field', 'Primary ideal client', 'Secondary ideal client'],
  widths: [1.2, 2.8, 2.8],
  rows: F.map((f, i) => [f, a[i], b[i]]),
  size: 15,
});

const sgA = ['Non-STI SGX issuer: REITs, industrials, consumer, property', 'Market cap ≥S$1bn; revenue S$300m-3bn', '500-10,000', 'Reports under SGX rules; Scope 1-2 done in spreadsheets; no scenario analysis or transition plan', 'Full ISSB climate disclosures FY2028; limited assurance FY2029 [1]', 'Moderate', 'FY2028 report needs FY2027 data, financial-effects analysis and assurance-ready controls, without new headcount', 'Economic buyer: CFO. User: Head of Sustainability, IR or Company Secretary. Approver: Board sustainability or audit committee', '"Your FY2028 report starts with FY2027 data. A six-week readiness review now, with 30% SRG funding."'];
const sgB = ['SME supplier to MNCs: precision engineering, F&B, logistics, packaging', 'Revenue S$10-100m', '50-200', 'Low; owner or finance manager handles customer requests', 'None directly; customers\' Scope 3', 'Indirect, via MNC customers', 'Customer questionnaires and supplier targets they cannot answer', 'Owner or Managing Director; Finance Manager', '"Answer your customers\' carbon requests with a baseline that is up to 70% grant-funded."'];
const myA = ['Group 2 Main Market issuer: property, construction, industrial products, consumer, tech', 'Revenue RM200m-2bn; market cap below RM2bn', '300-5,000', 'Bursa sustainability statement with common indicators; basic Scope 1-2; no IFRS S2 experience', 'NSRF from FY2026; Scope 3 FY2028; reasonable assurance FY2028 [20,90]', 'Varies; high for manufacturers', 'First IFRS S2 report due in the 2027 annual report; data in spreadsheets; board needs to understand climate risk; limited budget', 'Economic buyer: CFO or Group Finance Director. User: Company Secretary or Sustainability Manager. Approver: Board sustainability committee', '"Your first IFRS S2 report: fixed price, assurance-ready, tax-deductible up to RM50k."'];
const myB = ['E&E and semiconductor suppliers; also palm oil mills and steel fabricators', 'Revenue RM20-500m', '100-2,000', 'Low to moderate; HSE manager owns environmental data', 'Indirect (customers\' Scope 3); CBAM or EUDR for some', 'Very high', 'MNC or EU customers want Scope 1-2, renewable plans and product footprints within months', 'General Manager or Operations Director; HSE Manager; Finance Director', '"Keep your customer: carbon data in six weeks, SEDG-aligned and tax-deductible."'];
const idA = ['IDX Main Board issuer: resources, manufacturing, consumer, property', 'Revenue IDR 2-30 trillion', '1,000-20,000', 'POJK 51 narrative report from an agency; partial GHG data', 'PSPK from 2027; OJK wave 1 FY2027 with assurance and transition plan (proposed) [41,42]', 'Moderate to high', 'Current report agency cannot deliver PSPK-level climate analysis or assurance-ready data', 'Economic buyer: Director of Finance. User: Corporate Secretary (owns the report), Head of Sustainability or HSE. Approver: Board of Directors', '"PSPK 2027: data ready, assurance ready. We fill the technical gap your current report partner cannot." (deliver in Bahasa)'];
const idB = ['Export manufacturers: palm oil, textiles, pulp and paper, nickel supply chain', 'Revenue IDR 500bn-5 trillion', '300-5,000', 'Low', 'SIINas GHG reporting [49]; EUDR, CBAM or battery rules', 'High', 'EU buyers require traceability, embedded emissions or GHG data before late 2026 and 2027', 'President Director or owner; Plant or HSE Manager; Export Manager', '"Keep your EU buyers: EUDR, CBAM and GHG data ready before the deadlines."'];
const hkA = ['LargeCap and MidCap issuers: property, retail, logistics, consumer', 'Revenue HK$5-50bn', '2,000-30,000', 'Established ESG reporting; Scope 3 and scenario analysis new', 'LargeCap Scope 3 FY2026 [66]; assurance proposed [63]; HKFRS S1 by 2028 [62]', 'Moderate', 'Scope 3 data across suppliers and tenants; preparing for assurance', 'Head of Sustainability; CFO; Company Secretary', '"Scope 3 numbers that will stand up to assurance."'];
const hkB = ['Small and mid-sized CPA firms (as partner-clients)', '20-200 ESG report clients', '20-300 staff', 'Can write ESG reports; thin on climate scenarios, Scope 3 and assurance standards', 'Their clients face Part D; the firm may seek to become a registered assurance provider', 'n/a', 'Need technical depth and seasonal capacity without hiring', 'Partner in charge of ESG or advisory', '"Your technical bench for Part D, Scope 3 and assurance readiness, under your brand."'];

const angles = [
  ['Listed company facing its first ISSB report', 'Deadline, fixed scope, co-funding', 'CFO, Company Secretary', '"Group 2 companies report under IFRS S2 for FY2026. Here is what the first Group 1 reports got wrong, and a fixed-price plan to avoid it."'],
  ['Listed company facing assurance', 'Risk of a qualified or modified assurance conclusion; data controls', 'CFO, Head of Sustainability, Audit Committee chair', '"Reasonable assurance tests evidence, not narrative. A readiness review shows what your assurer will find before they find it."'],
  ['SME supplier to an MNC', 'Keep the customer; answer requests fast', 'Owner, Managing Director', '"Your customer has a supplier target. We can give you the numbers and a credible plan in six weeks."'],
  ['Exporter to the EU', 'Market access and border cost', 'Owner, Export Manager, Plant Manager', '"From 2027 your EU importer pays for embedded carbon. Accurate installation data lowers that cost."'],
  ['Bank borrower', 'Access to and price of finance', 'CFO, Treasurer', '"Your bank will ask for a transition plan. Having one ready strengthens your next refinancing."'],
  ['Large private group', 'Coming mandate; lender and investor expectations', 'Group CFO, Executive Director', '"Non-listed groups with RM2bn revenue report from FY2027. Build the system once, properly."'],
  ['Audit, secretarial or CPA firm (partner)', 'Revenue without hiring; client retention', 'Managing Partner, Advisory Partner', '"Keep your ESG clients through the ISSB transition. We provide the technical bench under your brand."'],
  ['Carbon software vendor (partner)', 'Implementation capacity and regional reach', 'Head of Partnerships, Country Manager', '"We onboard your mid-market clients in Malaysia and Indonesia and turn data into compliant reports."'],
];

module.exports = () => [
  h1('Part 12: Target client profiles and outreach angles'),
  p('Each market has one primary and one secondary ideal client profile. The primary profile is where the regulatory deadline creates budget; the secondary is a volume play driven by customers or export rules.'),
  h2('12.1 Singapore'), icp(sgA, sgB),
  h2('12.2 Malaysia'), icp(myA, myB),
  h2('12.3 Indonesia'), icp(idA, idB),
  h2('12.4 Hong Kong'), icp(hkA, hkB),
  h2('12.5 Outreach message angles by company type'),
  table({ headers: ['Company type', 'Angle that works', 'Who to address', 'Example opening line'], widths: [1.5, 1.5, 1.3, 3.2], rows: angles, size: 15 }),
  H.spacer(),
  callout('Messaging rules', [
    '- Lead with their deadline or their customer, never with ESG in general.',
    '- Name the regulation, the group or tier, and the year.',
    '- Offer one fixed-price first step (checklist review, gap assessment or baseline).',
    '- In Indonesia, send messages in Bahasa through a partner\'s name where possible. {I}',
  ]),
];
