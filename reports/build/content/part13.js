const H = require('../helpers');
const { p, h1, h2, table, callout, bullets } = H;

const HEAD = ['Market', 'Development and status', 'What companies must prepare', 'Start approaching'];
const W = [0.8, 2.4, 2.4, 1.3];
const T = (rows) => table({ headers: HEAD, widths: W, rows, size: 15 });

const y2026 = [
  ['MY', 'Group 2 issuers in their first NSRF year (FY2026) {IF}; Group 1 in year two, relief ends after FY2026 [20]', 'FY2026 IFRS S2 report (published 2027); Group 1 must add full S1 and Scope 3 from FY2027', 'Now (Q4 2026). Crowding will build through H1 2027'],
  ['MY', 'National Carbon Market Policy launched; Climate Change Bill pending {IF}/{PR} [25,26]', 'Large emitters: MRV baseline for a future ETS', 'Q1 2027 for steel, cement, energy'],
  ['SG', 'Carbon tax S$45/t {IF}; STI Scope 3 first year {IF}; EDGE grant from 30 Sep {IF}; SAF levy on tickets sold from 1 Oct {AN} [5,8,9]', 'STI: Scope 3 inventory. SMEs: grant-funded baselines. Aviation and logistics: emissions pass-through data', 'Now for SMEs (grants); STI work is mostly Big Four'],
  ['SG', 'SFRS S1/S2 consultation closes 25 Oct 2026 {PR} [4]', 'Track final standards; plan FY2027 dry runs for the FY2028 tier', 'Q1 2027'],
  ['ID', 'OJK draft regulation expected to be finalised {PR}; SIINas GHG reporting {IF}; Perpres 110/2025 rollout {IF} [41,44,49]', 'Main Board issuers and large banks: PSPK gap assessment, FY2027 data systems, climate risk approach', 'Now. This is the window before demand crowds in 2027'],
  ['ID, MY', 'EUDR applies from 30 Dec 2026 for large and medium operators {AN} [82]', 'Geolocation, traceability, due diligence statements for palm oil, rubber, wood', 'Now; late movers will pay premium rates in Q4 2026'],
  ['HK', 'LargeCap full climate disclosure incl. Scope 3 (FY2026) {IF}; BEEO fully in force 20 Sep {IF}; AFRC assurance conclusions awaited {PR} [63,66,74]', 'Scope 3 inventories; building energy audits feeding carbon roadmaps; assurance planning', 'Now for Scope 3; 2027 for assurance-readiness'],
  ['All', 'EU CBAM definitive phase (2026 imports) {IF} [81]', 'Exporters of steel, aluminium, fertiliser supply verified embedded-emissions data to EU importers', 'Now, ahead of the first declaration in Sep 2027'],
];

const y2027 = [
  ['MY', 'Group 3 (ACE and large non-listed) starts NSRF {AN}; Group 1 reasonable assurance and Scope 3 begin {AN} [20,90]', 'Group 3: baseline year and first IFRS S2 report. Group 1: assured Scope 1-2, Scope 3 inventory', 'Group 3: Q4 2026 to Q1 2027. Assurance readiness: now'],
  ['MY', 'i-ESG Phase 2 (2027-2030) {AN}; ESG tax deduction final year (YA2027) {IF} [30,31]', 'Manufacturers: move from readiness to practice; use the tax deduction before it expires', 'Q1-Q3 2027 (deduction deadline)'],
  ['ID', 'PSPK effective 1 Jan 2027 {AN}; OJK wave 1 FY2027 {PR}; ETS covers all fossil plants incl. captive {AN} [40,42,45]', 'FY2027 data under PSPK; first reports in 2028; assurance planning; captive power MRV', 'Q4 2026 to Q2 2027'],
  ['ID, MY', 'EUDR for micro and small operators from 30 Jun 2027 {AN} [82]', 'Smallholder and SME supply-chain traceability', 'Q1 2027'],
  ['SG', 'Carbon tax S$45/t (final year at this rate); SRG SME rate closes 31 Oct 2027; 1% SAF target {AN} [5,6,9]', 'SMEs: use the 50% SRG rate before it closes. FY2028 tier: dry run of FY2027 data', 'Q1 2027 for FY2028 tier; through Q3 2027 for SRG'],
  ['HK', 'HKEX consults on full HKFRS S1/S2 for listed PAEs {AN}; assurance framework likely finalised {PR} [62,63]', 'S1 readiness; assurance-readiness reviews', 'Mid-2027'],
  ['HK', 'Mainland climate disclosure standard expected mandatory for listed companies {AN} [78]', 'A+H issuers align HKEX and mainland frameworks', 'Q1 2027 (Mandarin partner needed)'],
  ['All', 'CBAM certificates on sale from 1 Feb 2027; first annual declaration 30 Sep 2027 {AN} [81]', 'Importers will press exporters for verified data', 'Q4 2026 to Q2 2027'],
];

const y2028 = [
  ['SG', 'Non-STI issuers ≥S$1bn report full ISSB climate disclosures (FY2028) {AN} [1]', 'Scenario analysis, financial effects, transition plans; assurance planning for FY2029', 'Q1 2027 (dry run in FY2027)'],
  ['MY', 'Group 2 reasonable assurance and Scope 3 (FY2028) {AN} [20,90]', 'Assured Scope 1-2; Scope 3 inventory', 'Q2 2027'],
  ['ID', 'First PSPK-based reports published (FY2027); OJK wave 2 begins (FY2028) {PR} [42]', 'Wave 2 issuers, debt issuers and smaller banks start PSPK', 'Q3 2027'],
  ['HK', 'Full ISSB adoption for large PAEs no later than 2028 {AN}; assurance phase 1 approaches for early reporters {PR} [62,63]', 'HKFRS S1 reporting; assurance', 'Q3 2027'],
  ['ID', 'EU battery carbon-footprint thresholds bite (Feb 2028) {AN} [60]', 'Nickel and precursor producers need verified product footprints', 'Already late; act in 2026-27'],
  ['Later', 'SG: limited assurance FY2029; non-STI <S$1bn and large non-listed FY2030; carbon tax S$50-80 by 2030. MY: Group 3 assurance FY2029, Scope 3 FY2030 {AN} [1,5,20]', 'Second-wave readiness work', 'From 2028'],
];

module.exports = () => [
  h1('Part 13: Near-term opportunities, 2026 to 2028'),
  p('The aim is to reach companies before demand becomes crowded. As a rule, companies need to start 9 to 15 months before the first financial year that a new requirement covers, because the data for that year must be collected as it happens. Assurance readiness needs a full year of dry-run data before the first assured year. {A}'),
  h2('13.1 2026'), T(y2026),
  h2('13.2 2027'), T(y2027),
  h2('13.3 2028 and the next wave'), T(y2028),
  H.spacer(),
  callout('Timing rules of thumb', [
    '- **First-time reporting:** approach 12 to 15 months before the first covered financial year begins.',
    '- **Assurance readiness:** approach 18 months before the first assured year, so one full year can be dry-run.',
    '- **Export rules:** approach 9 to 12 months before the application date; demand spikes in the last quarter before it.',
    '- **Grant or tax windows:** approach two to three quarters before the window closes. {A}',
  ]),
];
