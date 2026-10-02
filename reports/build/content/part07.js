const H = require('../helpers');
const { p, h1, h2, table, callout, bullets, price } = H;

// Each row: service, independent/boutique range, mid-tier/Big Four range, notes.
function rows(cur, data) {
  return data.map(([svc, a, b, c, d, note]) => [svc, a == null ? 'Not applicable' : price(cur, a, b), price(cur, c, d), note]);
}
const HEAD = ['Service', 'Independent or boutique', 'Mid-tier or Big Four', 'Notes'];
const W = [1.7, 2.2, 2.2, 3.1];
const T = (cur, data) => table({ headers: HEAD, widths: W, rows: rows(cur, data), landscape: true, size: 15 });

const sg = [
  ['ESG gap assessment', 8000, 25000, 30000, 80000, 'ISSB-gap versions for ≥S$1bn issuers sit at the top of the range'],
  ['Basic ESG report (SGX small cap)', 20000, 50000, 60000, 150000, 'SRG covers 30% (50% for SMEs to Oct 2027) [6]'],
  ['GRI sustainability report (full)', 30000, 80000, 80000, 200000, 'Includes materiality and stakeholder engagement'],
  ['Carbon footprint assessment (SME)', 5000, 15000, 15000, 40000, 'ESP and EDGE co-funding for SMEs [7,8]'],
  ['Scope 1 and 2 accounting', 6000, 20000, 20000, 60000, 'Multi-site groups at the top of the range'],
  ['Scope 1, 2 and 3 accounting', 25000, 80000, 80000, 250000, 'Spend-based first year; supplier-specific later'],
  ['ESG training (in-house, 1 day)', 2500, 6000, 6000, 15000, 'Public courses ~S$500-1,500 per person'],
  ['ESG strategy', 40000, 150000, 150000, 500000, ''],
  ['Net-zero roadmap', 40000, 120000, 120000, 300000, 'SBTi-aligned for MNC subsidiaries'],
  ['ESG software implementation', 15000, 60000, 60000, 200000, 'Plus subscription: mid-market platforms ~US$33-88k a year; Terrascope from US$25k [15]'],
];
const my = [
  ['ESG gap assessment', 15000, 50000, 60000, 150000, 'NSRF gap assessments for Group 2 and 3'],
  ['Basic sustainability statement (Bursa)', 25000, 70000, 80000, 200000, 'ESG tax deduction up to RM50k a year [30]'],
  ['GRI sustainability report (full)', 40000, 120000, 120000, 300000, ''],
  ['Carbon footprint assessment (SME)', 8000, 25000, 25000, 60000, 'LCOS subscription RM5k a year as a reference [35]'],
  ['Scope 1 and 2 accounting', 10000, 35000, 35000, 100000, 'Assurance-ready versions cost more'],
  ['Scope 1, 2 and 3 accounting', 40000, 150000, 150000, 400000, ''],
  ['ESG training (in-house, 1 day)', 3000, 10000, 10000, 25000, 'Register as an HRD Corp training provider so clients can claim'],
  ['ESG strategy', 60000, 250000, 250000, 800000, ''],
  ['Net-zero roadmap', 60000, 200000, 200000, 600000, ''],
  ['ESG software implementation', 20000, 80000, 80000, 250000, 'Software subscriptions qualify for the ESG tax deduction [30]'],
  ['First IFRS S2 report incl. scenario analysis', 100000, 350000, 300000, 800000, 'Core NSRF engagement for Group 2 and 3'],
];
const id = [
  ['ESG gap assessment', 75e6, 250e6, 250e6, 750e6, 'PSPK gap assessments'],
  ['Basic sustainability report (POJK 51)', 100e6, 350e6, 350e6, 900e6, 'Public anchor: one listed service at IDR 330m [59]'],
  ['GRI sustainability report (full)', 250e6, 750e6, 750e6, 2e9, ''],
  ['Carbon footprint assessment (SME)', 40e6, 120e6, 120e6, 300e6, ''],
  ['Scope 1 and 2 accounting', 60e6, 200e6, 200e6, 500e6, 'SIINas-ready inventories'],
  ['Scope 1, 2 and 3 accounting', 200e6, 800e6, 800e6, 2.5e9, ''],
  ['ESG training (in-house, 1 day)', 15e6, 50e6, 50e6, 120e6, 'Delivered in Bahasa Indonesia'],
  ['ESG strategy', 300e6, 1.2e9, 1.2e9, 4e9, ''],
  ['Net-zero roadmap', 300e6, 1e9, 1e9, 3e9, ''],
  ['ESG software implementation', 150e6, 600e6, 600e6, 1.5e9, ''],
  ['PSPK readiness (first ISSB-based report)', 400e6, 1.5e9, 1.5e9, 4e9, 'Large banks and SOEs at the top of the range'],
];
const hk = [
  ['ESG gap assessment', 40000, 150000, 150000, 400000, ''],
  ['Basic ESG report (HKEX small cap)', 60000, 200000, 200000, 500000, 'Highly price-competitive; some local providers go lower'],
  ['GRI / HKFRS-aligned report', 150000, 500000, 500000, 1500000, ''],
  ['Carbon footprint assessment (SME)', 20000, 60000, 60000, 150000, ''],
  ['Scope 1 and 2 accounting', 30000, 100000, 100000, 300000, ''],
  ['Scope 1, 2 and 3 accounting', 120000, 400000, 400000, 1200000, 'LargeCap Scope 3 work at the top'],
  ['ESG training (in-house, 1 session)', 15000, 40000, 40000, 100000, 'Director training is a separate niche'],
  ['ESG strategy', 200000, 800000, 800000, 2500000, ''],
  ['Net-zero roadmap', 200000, 600000, 600000, 1800000, ''],
  ['ESG software implementation', 80000, 300000, 300000, 800000, ''],
  ['Limited assurance (reference only)', null, null, 300000, 800000, 'Industry estimate for assurance fees [77]; not a service you would provide'],
];

module.exports = () => [
  h1('Part 7: Pricing'),
  p('Public, reliable pricing for ESG consulting is scarce in all four markets. The ranges below are **estimates** {E} assembled from the few public anchors (grant caps, a published Indonesian service price, published software prices and an industry estimate of Hong Kong assurance fees), typical day rates, and judgement about how scope drives effort. Use them to frame proposals, then adjust after your first five quotes. USD equivalents use the planning rates given in "How to read this report".'),
  h2('7.1 Singapore (SGD)'),
  T('SGD', sg),
  h2('7.2 Malaysia (MYR)'),
  T('MYR', my),
  h2('7.3 Indonesia (IDR)'),
  T('IDR', id),
  h2('7.4 Hong Kong (HKD)'),
  T('HKD', hk),
  H.spacer(),
  h2('7.5 Pricing guidance'),
  ...bullets([
    '**Price to the subsidy.** In Singapore and Malaysia, quote the client\'s net cost after the SRG, ESP or EDGE co-funding or the RM50,000 ESG tax deduction. It shortens decisions. {I}',
    '**Price assurance-readiness as a separate product.** It is easier to approve than a vague "ESG support" retainer and has a hard deadline. {I}',
    '**Expect lower fees in Indonesia in US dollar terms** (rupiah weakness in 2026) but higher volume per client once PSPK applies. Quote in rupiah for local clients and in USD for MNC subsidiaries. {I}',
    '**Avoid the Hong Kong small-cap report price war.** Compete on Scope 3, scenario analysis and assurance-readiness, where clients cannot easily compare quotes. {I}',
    '**Indicative day rates for an experienced independent** {E}: Singapore S$1,200-2,500; Malaysia RM2,500-5,000; Indonesia IDR 8-20 million; Hong Kong HK$6,000-12,000. Big Four partner rates run several times higher.',
  ], { size: 19 }),
];
