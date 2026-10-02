const H = require('../helpers');
const path = require('path');
const { p, h1, h2, table, callout, bullets, image } = H;

const sizeRows = [
  ['Companies already under mandatory ESG reporting', '4 (643 listed since FY2016)', '4 (~980 listed since 2016)', '4 (~960 listed; reports since 2021-25)', '5 (2,700+ listed since 2016)'],
  ['MNC and regional HQ concentration; corporate budgets', '5', '3', '3', '5'],
  ['Sustainable finance volume', '5 (>half of ASEAN GSSSL market [14])', '3', '2', '5 (US$76.5bn in 2025 [69])'],
  ['Ecosystem density (consultants, software, assurance)', '5', '3', '2', '4'],
  ['Fee levels', '5', '3', '2', '4'],
  ['**Current size score (out of 25)**', '**24 (96/100)**', '**16 (64/100)**', '**13 (52/100)**', '**23 (92/100)**'],
];

const momRows = [
  ['Newly in-scope companies, 2025-2028', '2 (most non-STI deferred to FY2028/30)', '5 (all listed plus large non-listed by FY2027)', '5 (OJK waves FY2027-29, if finalised)', '3 (LargeCap FY2026; full ISSB by 2028)'],
  ['Assurance trajectory', '2 (limited, FY2029)', '5 (reasonable, FY2027-29)', '4 (mandatory, proposed)', '4 (limited, proposed, phased)'],
  ['Carbon pricing and MRV change, 2024-2026', '4 (S$25 to S$45; S$50-80 by 2030)', '3 (NCMP launched; tax on hold)', '3 (Perpres 110/2025; ETS expansion)', '1 (none)'],
  ['Supply-chain and export pressure growth', '3', '5', '5', '3'],
  ['Sustainable finance and bank data demands', '4 (MAS TPG 2026)', '4 (JC3, CGC, GVC)', '3 (TKBI v3)', '4 (CASG priorities)'],
  ['Government support for adoption', '5 (SRG, ESP, EDGE)', '4 (tax deduction, SEDG)', '2', '3'],
  ['Talent and consulting demand growth', '3', '4', '4', '3'],
  ['**Momentum score (out of 35)**', '**23 (66/100)**', '**30 (86/100)**', '**26 (74/100)**', '**21 (60/100)**'],
];

const indicators = [
  ['New ESG regulation, 2024-2026', 'SFRS S1/S2 consultation (2026); MAS TPG (Mar 2026); SAF levy; but deferrals (Aug 2025)', 'NSRF (Sep 2024); Bursa rules (Dec 2024); ESG tax rules (Jun 2025); NCMP (Apr 2026); Climate Change Bill (2026)', 'PSPK (Jul 2025); SIINas GHG (2025); Perpres 110 (Oct 2025); OJK draft (Feb 2026); TKBI v3 (Mar 2026)', 'HKFRS S1/S2 (Dec 2024); Part D (Jan 2025); AFRC assurance (Dec 2025); BEEO (2025-26)'],
  ['ISSB adoption path', 'Climate-first; S1 voluntary', 'Full S1 and S2', 'Full via PSPK', 'Full by 2028 for large PAEs'],
  ['Carbon policy direction', 'Tightening on schedule', 'Market-first after tax delay', 'Market framework rebuilt; tax still pending', 'Voluntary only'],
  ['Corporate net-zero commitments', 'Widespread at the top', 'Large caps and GLCs; spreading', 'SOEs and conglomerates; thin below', 'Widespread among LargeCap'],
  ['Renewable investment signal', 'Imports and solar', 'CRESS 1.3 GW tied to data centres [36]', 'RUPTL 42.6 GW of renewables [52]', 'Limited'],
  ['Supply-chain requirements', 'MNC-driven', 'E&E, palm, steel, data centres', 'Palm, nickel, textiles, steel', 'Brand and EU-driven'],
  ['Events and ecosystem activity', 'Ecosperity, SIEW', 'IGEM targets RM22.5bn in leads [39]', 'Several new sustainability forums', 'Eco Expo Asia'],
];

module.exports = () => [
  h1('Part 8: Market momentum', false),
  p('This part separates two things that are easy to confuse: how big the ESG services market is today, and how fast new demand is arriving. A mature market can be large and slow; a less mature market can be small and fast. Both scores below are analyst judgements on a 1-5 scale per indicator, shown so you can change the weights. {A}'),
  h2('8.1 Current market size'),
  table({ headers: ['Indicator', 'Singapore', 'Malaysia', 'Indonesia', 'Hong Kong'], widths: [2.1, 1.35, 1.35, 1.35, 1.35], rows: sizeRows, size: 15 }),
  h2('8.2 Future growth momentum (2025-2029)'),
  table({ headers: ['Indicator', 'Singapore', 'Malaysia', 'Indonesia', 'Hong Kong'], widths: [2.1, 1.35, 1.35, 1.35, 1.35], rows: momRows, size: 15 }),
  ...image(path.join(__dirname, '..', 'charts', 'fig1_size_vs_momentum.png'), 600, 391,
    'Figure 1. Current ESG services market size versus growth momentum, 2025-2029 (analyst scores out of 100, from the tables above). Dashed lines separate the larger and smaller, faster and slower groups.'),
  h2('8.3 Measurable momentum indicators'),
  table({ headers: ['Indicator', 'Singapore', 'Malaysia', 'Indonesia', 'Hong Kong'], widths: [1.45, 1.55, 1.55, 1.55, 1.55], rows: indicators, size: 15 }),
  h2('8.4 Reading the momentum picture'),
  ...bullets([
    '**Malaysia is gaining momentum fastest.** It is the only market where every listed company and large private group moves to ISSB reporting within three years, with reasonable assurance and Scope 3 following on fixed dates. The carbon tax delay is a setback, but the reporting and assurance obligations that drive consulting fees are unaffected. {A}',
    '**Indonesia has the steepest step-change ahead but more execution risk.** If OJK finalises its draft as proposed, demand jumps in 2027 and 2028. Until then, the SIINas GHG requirement and EU export rules carry demand. {A}',
    '**Singapore is the largest market but has decelerated.** The August 2025 deferrals moved most listed and large private company demand to FY2028-FY2030. Its momentum score will rise again from 2027 as those dates approach. {A}',
    '**Hong Kong is large and steady.** Growth comes from LargeCap Scope 3 (FY2026), assurance and the 2028 full-ISSB target, rather than from new companies entering reporting. {A}',
  ]),
  callout('Current size versus future momentum, in one line', [
    'Largest today: Singapore, then Hong Kong. Growing fastest: Malaysia, then Indonesia. {A}',
  ]),
];
