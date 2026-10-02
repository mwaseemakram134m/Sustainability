const H = require('../helpers');
const { p, h1, h2, table, callout } = H;

const HEAD = ['Lead source', 'What it gives you', 'How to use it'];
const W = [1.6, 2.2, 3.0];
const T = (rows) => table({ headers: HEAD, widths: W, rows, size: 15 });

const sg = [
  ['SGX company list and STI constituents', 'All 643 issuers with market cap, sector, index membership', 'Segment into STI, non-STI ≥S$1bn (FY2028) and below S$1bn (FY2030). Pull sustainability reports to see who lacks scenario analysis or Scope 3'],
  ['ESGenome (SGX, powered by Gprnt) [12]', 'Structured ESG disclosures of listed companies', 'Identify issuers with gaps in core metrics and climate data'],
  ['Enterprise Singapore ESP partners and trade association cohorts [7]', 'SMEs already engaged in sustainability programmes', 'Partner with associations (SMF, SBF, SCCCI) to deliver cohort projects'],
  ['SBTi target dashboard and CDP responders', 'Singapore companies with targets or CDP disclosures', 'Those with targets need delivery (supplier engagement, Scope 3); those without targets but with MNC customers need baselines'],
  ['Job postings (MyCareersFuture, LinkedIn)', 'Companies hiring sustainability managers or analysts', 'A hiring company has budget and a gap; offer interim support or set-up work'],
  ['Event exhibitors and speakers (Ecosperity [86], SIEW [87])', 'Active companies and solution providers', 'Prospect lists for clients and partners; follow up within a week'],
  ['Green Mark building directory and REIT association members', 'Property owners with sustainability programmes', 'GRESB, Scope 3 and climate-risk offers'],
  ['Carbon software vendor partner programmes', 'Vendor client pipelines needing implementation', 'Join as implementation partner; ask for regional referrals'],
];

const my = [
  ['Bursa Malaysia listed company list (Main and ACE)', 'About 980 companies with market cap and sector', 'Segment into Group 1, 2 and 3 by market cap and market. Group 2 and ACE are the priority lists'],
  ['Bursa announcements and annual reports', 'Each issuer\'s sustainability statement', 'Score readiness: IFRS S2 elements present, Scope 1-2 quality, Scope 3 status, assurance. Use findings in outreach'],
  ['FTSE4Good Bursa Malaysia constituents', 'Better-rated ESG reporters', 'Targets for Scope 3 and assurance-readiness; non-constituents need basics'],
  ['Companies Commission (SSM) data and credit bureaus', 'Large non-listed companies by revenue', 'Build a list of groups with revenue ≥RM2bn for Group 3 outreach'],
  ['FMM directory, MSIA, MISIF, MPOA, MARGMA members', 'Manufacturers and exporters by sector', 'E&E supplier, steel CBAM, palm EUDR and glove programmes'],
  ['MSPO certificate holders and MPOB licensees', 'Palm oil mills, refiners and estates', 'EUDR and GHG outreach'],
  ['JC3 and bank Greening Value Chain programmes, CGC [33,34]', 'SMEs engaged by banks', 'Become a delivery partner'],
  ['IGEM exhibitors and visitors [39]', 'Green-tech companies and buyers', 'Partner and prospect lists'],
  ['ESG and sustainability award entrants (e.g., NACRA sustainability categories, The Edge ESG awards)', 'Companies investing in reporting', 'Upsell assurance-readiness and Scope 3'],
  ['Job postings (JobStreet, LinkedIn)', 'Companies hiring ESG roles', 'Offer interim or set-up support'],
];

const id = [
  ['IDX listed company list and board segment [55]', 'About 960 issuers by board and sector', 'Prioritise Main Board issuers for OJK wave 1'],
  ['Sustainability reports on IDX and company websites [54]', 'Current POJK 51 reports', 'Assess PSPK readiness; identify which agency wrote them (partner or competitor)'],
  ['OJK list of banks by core capital group', 'Large and smaller banks', 'Large banks for wave 1 (subcontract); smaller banks for later waves'],
  ['ASRRAT participants [56]', 'Companies investing in report quality', 'Warm targets for PSPK upgrades'],
  ['PROPER results', 'Companies rated by environmental performance', 'Green and Gold aspirants need decarbonisation evidence; Red and Black need compliance help'],
  ['GAPKI members; RSPO and ISPO certificate holders', 'Palm oil companies', 'EUDR and GHG outreach'],
  ['Industry associations (API textiles, cement, steel), Kadin, APINDO', 'Manufacturers by sector', 'SIINas GHG and export compliance programmes'],
  ['Exporter directories (trade ministry)', 'Exporters by product and destination', 'Filter EU exporters for CBAM, EUDR and supplier requests'],
  ['ESG indices (IDX ESG Leaders, SRI-KEHATI)', 'Leading reporters', 'Assurance-readiness and Scope 3 targets'],
  ['Sustainability forums (ISF [61], Indonesia International Sustainability Forum)', 'Active companies and partners', 'Partner search and prospect lists'],
];

const hk = [
  ['HKEX issuer list and HKEXnews ESG reports', '2,700+ issuers and their ESG reports', 'Segment by Hang Seng Composite LargeCap, MidCap and SmallCap. LargeCap: Scope 3 and S1. MidCap: Part D upgrades'],
  ['HKEX ESG Academy and annual review findings [65]', 'Common disclosure weaknesses', 'Use to frame outreach ("the review found ...")'],
  ['GSF Grant Scheme recipients and green bond issuers [70]', 'Issuers active in sustainable finance', 'Post-issuance reporting, transition plans'],
  ['HKICPA member firm lists', 'CPA firms with ESG practices', 'Partner prospects for subcontracting'],
  ['BEC, HKGFA, HKQAA and HKSMEA ESG Charter members', 'Companies engaged in sustainability', 'Partners and prospects'],
  ['Buildings under the amended BEEO; property management firms [74]', 'Owners facing energy audits', 'Energy-to-carbon roadmaps with energy assessors'],
  ['Eco Expo Asia exhibitors (26-29 Oct 2026) [79]', 'Solution providers and buyers', 'Partner and prospect lists'],
  ['Job postings (JobsDB, LinkedIn)', 'Companies hiring ESG roles', 'Offer interim or set-up support'],
];

const generic = [
  ['Companies publishing their first sustainability or climate report', 'Every market', 'They have just discovered how hard it is. Offer data systems and assurance-readiness for year two.'],
  ['Companies announcing net-zero targets', 'Every market', 'Targets need roadmaps, Scope 3 baselines and supplier programmes.'],
  ['Companies hiring ESG roles', 'Every market', 'Budget exists; the new hire often needs outside capacity in year one.'],
  ['Companies issuing green or sustainability-linked bonds and loans', 'Singapore, Hong Kong, Malaysia', 'They need KPI baselines, reporting and verification-ready data.'],
  ['Suppliers named in MNC supplier programmes', 'Malaysia, Indonesia, Singapore', 'Ask the MNC or the software vendor running the programme for introductions.'],
];

module.exports = () => [
  h1('Part 14: Sources of leads'),
  p('Build one database per market with segment tags (regulatory group or tier, sector, export exposure, ESG maturity score). The sources below are public or low-cost.'),
  h2('14.1 Singapore'), T(sg),
  h2('14.2 Malaysia'), T(my),
  h2('14.3 Indonesia'), T(id),
  h2('14.4 Hong Kong'), T(hk),
  h2('14.5 Trigger events that work in every market'),
  table({ headers: ['Trigger', 'Markets', 'Why it signals budget'], widths: [2, 1.2, 3.6], rows: generic, size: 15 }),
  H.spacer(),
  callout('Database discipline', [
    'Score each company on four fields before outreach: regulatory deadline (year), current report quality (1-5), export or MNC exposure (yes or no) and named decision maker (yes or no). Contact the high scorers first. Re-score after each reporting season. {I}',
  ]),
];
