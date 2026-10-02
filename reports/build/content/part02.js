const H = require('../helpers');
const { p, h1, h2, table, spacer, callout, bullets } = H;

const HEAD = ['Regulation or programme', 'Authority', 'Who is affected', 'Effective date', 'Reporting requirements', 'SMEs', 'Business impact and service opportunity'];
const W = [1.55, 0.95, 1.5, 1.45, 2.0, 1.05, 2.45];
const T = (rows) => table({ headers: HEAD, widths: W, rows, landscape: true, size: 15 });

const sg = [
  ['SGX climate-related disclosures (ISSB-based) {IF}/{AN}', 'SGX RegCo, ACRA', 'All 643 listed issuers, in three tiers', 'Scope 1-2: FY2025 (all). Full CRD: STI FY2025, non-STI ≥S$1bn FY2028, <S$1bn FY2030. Scope 3: STI FY2026, voluntary for others. Limited assurance of Scope 1-2: FY2029 [1,2]', 'IFRS S2-based climate disclosures in the annual sustainability report; GHG Protocol inventories', 'Indirect: STI Scope 3 pulls supplier data', 'Scope 1-2 data controls now; ISSB gap assessments for ≥S$1bn caps in 2026-27 so they can dry-run FY2027; assurance readiness in 2027-28. Big Four dominate STI; mid-caps are open {I}'],
  ['Large non-listed company climate reporting {AN}', 'ACRA', 'Revenue ≥S$1bn and total assets ≥S$0.5bn', 'FY2030 (deferred from FY2027) [1]', 'ISSB-based climate disclosures incl. Scope 1-2', 'No', 'Long-dated. Early movers will buy readiness in 2028-29; useful as a pipeline for later years {I}'],
  ['Singapore Sustainability Disclosure Standards (SFRS S1, S2) {PR}', 'ACRA Interim Sustainability Standards Committee', 'Entities that ACRA and SGX require to report', 'Consultation 27 Jul to 25 Oct 2026 [4]', 'S2 mandatory; S1 voluntary (proposed)', 'No', 'Training and mapping work in 2027 once final; S1 voluntary means limited extra demand {A}'],
  ['Carbon tax (Carbon Pricing Act) {IF}', 'NEA, NCCS', 'Facilities ≥25,000 tCO2e (taxable); ≥2,000 tCO2e (reportable)', 'S$45/t in 2026-27; S$50-80/t by 2030 [5]', 'Annual emissions report and verified MRV; ICC offsets up to 5%', 'Indirect via energy costs and customer data requests', 'Abatement cost curves, MRV support, international credit strategy. Specialist niche; best reached via subcontracting {A}'],
  ['Sustainability Reporting Grant {IF}', 'Enterprise Singapore', 'SGX-listed companies; non-listed with revenue ≥S$100m', 'Open; SME rate 50% for applications 1 Apr 2026 to 31 Oct 2027 [6]', 'Funds first sustainability report with ISSB-based climate disclosures', 'Direct (SME rate 70% to Mar 2026, then 50%)', 'Grant-led selling: clients can claim external consultancy, assurance, software and training costs. Use the grant as the hook in proposals {I}'],
  ['Enterprise Sustainability Programme and EDGE grant {IF}', 'Enterprise Singapore', 'SMEs and larger local enterprises', 'ESP ongoing (S$180m, 6,000 firms) [7]; EDGE from 30 Sep 2026 (up to 70% for SMEs, S$100k a year cap) [8]', 'None (support schemes)', 'Direct', 'Co-funded SME carbon footprints, sustainability strategies and capability projects; trade associations run sector cohorts {I}'],
  ['MAS Guidelines on Transition Planning {IF}', 'MAS', 'Banks, insurers, asset managers', 'Published 5 Mar 2026 [10]', 'Supervisory expectations for transition planning, client engagement and data governance', 'Indirect: borrowers asked for data and plans', 'Corporate transition plans and emissions baselines for bank borrowers; FI portfolio data work is Big Four territory {A}'],
  ['SAF levy {AN}', 'CAAS', 'Airlines, passengers, cargo, business aviation', 'Tickets sold from 1 Oct 2026 for flights from 1 Jan 2027; cargo from 2028; 1% SAF target from 2027 [9]', 'Levy collection; reporting by airlines', 'Indirect (freight forwarders)', 'Niche: aviation and logistics emissions accounting for Scope 3 category 4 and 6 {I}'],
];

const my = [
  ['NSRF: IFRS S1 and S2 via Bursa Listing Requirements {IF}/{AN}', 'SC (ACSR), Bursa Malaysia', 'Group 1: Main Market, mkt cap ≥RM2bn (about 130 firms {E}). Group 2: other Main Market. Group 3: ACE Market and large non-listed (revenue ≥RM2bn)', 'G1 FY2025; G2 FY2026; G3 FY2027 [20,21]. Climate-first relief: 2 years (G1, G2), 3 years (G3)', 'IFRS S2 first, then S1; three years of comparative data for indicators; Scope 3: G1 FY2027, G2 FY2028, G3 FY2030 [89,90]', 'Indirect: Scope 3 and customer data requests from FY2027', 'The core opportunity. Gap assessments, first IFRS S2 reports, scenario analysis, materiality, data systems. G2 (several hundred mid and small caps) is the best fit for 2026-27; G3 for 2027-28 {I}'],
  ['Assurance of Scope 1 and 2 {AN}', 'SC, Audit Oversight Board', 'NSRF reporters', 'Reasonable assurance targeted: G1 FY2027, G2 FY2028, G3 FY2029 [20]', 'Reasonable (not limited) assurance on Scope 1-2', 'No', 'Readiness work: inventory boundaries, emission factors, evidence trails, internal controls, dry runs. Independence rules stop assurers from doing it themselves, so they refer it out {I}'],
  ['Large non-listed company reporting {AN}', 'SC, SSM', 'Non-listed groups with revenue ≥RM2bn for two consecutive years', 'S2 from FY2027, S1 from FY2028, Scope 3 FY2030 [89]', 'Same as Group 3', 'No', 'Under-served: family conglomerates, GLC subsidiaries and MNC subsidiaries with no in-house ESG team. Good fit for an outsourced ESG function {I}'],
  ['Carbon tax on iron, steel and energy {PR}', 'MOF, NRES', 'Iron and steel; energy', 'Announced for 2026 [24]; put on hold 21 Apr 2026 [23]', 'Mechanism not released', 'No', 'Delay removes urgency, but CBAM and NSRF still need installation-level emissions data. Sell baseline and CBAM data now, abatement later {I}'],
  ['National Carbon Market Policy and Climate Change Bill {IF}/{PR}', 'NRES', 'Large emitters (thresholds to be set), project developers', 'NCMP launched Apr 2026 [25]; Bill slated for 2026 tabling [26]', 'MRV system; emissions thresholds for an ETS', 'No', 'MRV readiness for large emitters from 2027; carbon credit project advisory is a specialist field {A}'],
  ['ESG tax deduction {IF}', 'MOF, LHDN', 'Companies, Bursa issuers, MSMEs, banks', 'YA2024 to YA2027; up to RM50,000 per year [30]', 'None', 'Direct', 'Lets you frame SME and mid-cap packages as tax-deductible; covers consultants, GHG software, verification and training {I}'],
  ['SEDG v2, GHG calculator, JC3 SME Focus Group, CGC ESG guarantee {VO}', 'Capital Markets Malaysia, BNM, banks, CGC', 'SMEs in supply chains; bank borrowers', 'SEDG 2023; v2 aligned to ASEAN guide 2025; calculator Jul 2025 [28,29]; RM1bn CGC guarantee [34]', 'Basic, intermediate and advanced disclosures; Scope 1-2', 'Direct', 'Standard SME formats create a repeatable product: SEDG Basic plus Scope 1-2 plus policy pack. Banks need delivery partners {I}'],
  ['i-ESG framework {VO}', 'MITI', 'Manufacturers, especially MSMEs', 'Phase 1 2024-2026; Phase 2 (accelerate) 2027-2030 [31]', 'Readiness assessments (iESGReady, iESGStart)', 'Direct', 'Manufacturing ESG readiness programmes through FMM and state agencies {A}'],
];

const id = [
  ['POJK 51/2017 sustainability report {IF}', 'OJK', 'Financial institutions, issuers, public companies', 'Phased 2019-2025; all in scope now', 'Annual sustainability report (narrative, OJK format)', 'No', 'Commoditised report writing today; the upgrade to PSPK is where value moves {A}'],
  ['PSPK 1 and PSPK 2 {AN}', 'DSK IAI (Indonesian Institute of Accountants)', 'Entities required by regulators to apply them', 'Effective 1 Jan 2027 [40,43]', 'IFRS S1 and S2-based general and climate disclosures', 'No', 'ISSB readiness, climate risk and scenario analysis, GHG inventories to PSPK quality, training in Bahasa {I}'],
  ['OJK draft regulation revising POJK 51 {PR}', 'OJK', 'Wave 1: Main Board issuers, large banks, IDX. Later: other issuers, debt issuers, smaller banks', 'Phased FY2027 to FY2029 (first wave reports published in 2028) [41,42]', 'PSPK-based sustainability report; mandatory independent assurance; climate transition plan', 'No', 'The largest new wave in the study. Companies need 2026-27 gap work and FY2027 data systems; assurance-readiness from 2027 {I}'],
  ['Ministry of Industry GHG reporting (Circular 2/2025, SIINas) {IF}', 'Kemenperin', 'Industrial companies and industrial estate operators', 'In force from 2025 [49]', 'GHG and air pollutant data, self-assessment, via SIINas', 'Direct for industrial SMEs', 'Volume demand for basic GHG inventories in cement, steel, chemicals, pulp and paper, textiles, F&B and others in the industrial decarbonisation roadmap [50] {I}'],
  ['Presidential Regulation 110/2025 on carbon economic value {IF}', 'Coordinating and line ministries', 'Regulated installations, project developers, buyers', 'Signed 10 Oct 2025 [44]', 'National carbon registry (SRUK), domestic and international trading', 'Indirect', 'MRV and carbon credit advisory; specialist and developer-dominated {A}'],
  ['Power-sector ETS {IF}/{AN}', 'ESDM', 'Coal plants; gas plants (2025-27); all fossil plants incl. captive (from 2027)', '2023 onwards; expansion 2027 [45]', 'Emissions intensity caps and trading', 'No', 'Captive power at smelters and industrial parks will need MRV support from 2027 {I}'],
  ['PROPER rating {IF}', 'Ministry of Environment', 'Companies with significant environmental impact (thousands)', 'Annual', 'Environmental performance documentation; innovation for Green/Gold ratings', 'Some', 'Decarbonisation and innovation documentation; overlaps with GHG work {A}'],
  ['TKBI taxonomy v1-v3 {VO}', 'OJK', 'Financial institutions, issuers', 'v2 Feb 2025; v3 Mar 2026 [51]', 'Reference for green indicators in sustainability reports', 'Indirect', 'Taxonomy alignment assessments for borrowers and bond issuers {I}'],
];

const hk = [
  ['HKEX ESG Reporting Code, Part D climate {IF}', 'SEHK (HKEX)', 'All 2,700+ issuers; LargeCap constituents mandatory in full', 'Scope 1-2 mandatory FY2025; LargeCap full climate incl. Scope 3 FY2026; others comply-or-explain [66]', 'IFRS S2-based climate disclosures; Scope 3 with reasonable-information relief', 'Indirect', 'Scope 3 inventories for LargeCap; second-year quality upgrades for Main Board issuers; scenario analysis {I}'],
  ['Roadmap and HKFRS S1/S2 {AN}', 'FSTB, HKICPA, HKEX', 'Publicly accountable entities; significant non-listed financial institutions', 'Full adoption for large PAEs no later than 2028; HKEX consultation in 2027 [62]', 'HKFRS S1 (all sustainability topics) and S2', 'No', 'S1 readiness (non-climate risks and opportunities) for LargeCap and MidCap in 2027-28 {I}'],
  ['Sustainability assurance framework {PR}', 'AFRC', 'Entities reporting under HK standards; assurance providers', 'Consultation closed 30 Mar 2026; limited assurance on Scope 1-2 from 3rd year of mandatory reporting, all disclosures from 5th year [63,64]', 'Assurance under HKSSA 5000 by registered providers', 'No', 'Readiness work for issuers; a chance to partner with accredited non-CPA providers. Becoming a registered provider yourself would need a local entity and quality system {A}'],
  ['HKMA climate supervision and CASG questionnaire {VO}', 'HKMA, CASG', 'Banks; borrowers including SMEs', 'Questionnaire available via the Sustainability Disclosure e-portal [71]', 'Three versions for micro, small and medium firms', 'Direct', 'Questionnaire-completion and Scope 1-2 packages for bank borrowers; banks may refer {I}'],
  ['Buildings Energy Efficiency (Amendment) Ordinance 2025 {IF}', 'EMSD', 'Owners of 11 building categories incl. commercial buildings and data centres', 'Staged 20 Sep 2025 and 20 Sep 2026 [74]', 'Energy audits every 5 years (was 10); disclosure of technical data', 'Some (owners)', 'Energy data feeds Scope 2 and decarbonisation roadmaps for property owners; partner with registered energy assessors {I}'],
  ['Green and Sustainable Finance Grant Scheme {IF}', 'HKMA', 'Issuers of green, sustainable and transition bonds and loans', 'Extended to 2027; refined 24 Apr 2026 [70]', 'External review and reporting costs subsidised', 'No', 'Framework drafting and post-issuance impact reports; external reviewers dominate {A}'],
  ['Mainland China sustainability disclosure (exchange guidelines and MOF standards) {IF}/{AN}', 'CSRC, SSE, SZSE, MOF', 'A+H dual-listed issuers; mainland subsidiaries', 'First mandatory reports 2026 (457 companies); climate standard expected mandatory for listed from 2027 [78]', 'Double materiality; local carbon accounting rules', 'No', 'Dual-framework mapping for A+H issuers; needs Mandarin {A}'],
];

const ext = [
  ['EU CBAM {IF}', 'European Commission', 'EU importers of steel, aluminium, cement, fertilisers, hydrogen, electricity; their exporters supply the data', 'Definitive phase from 1 Jan 2026; certificates on sale 1 Feb 2027; first annual declaration 30 Sep 2027; 50-tonne de minimis [81]', 'Embedded emissions per installation and product', 'Direct for small exporters in these goods', 'Installation-level emissions calculations for Malaysian and Indonesian steel, aluminium and fertiliser exporters {I}'],
  ['EU Deforestation Regulation {AN}', 'European Commission', 'Operators placing palm oil, rubber, wood, cocoa, coffee, soy or cattle on the EU market', 'Large and medium: 30 Dec 2026; micro and small: 30 Jun 2027 [82]', 'Due diligence statements with geolocation and legality evidence', 'Direct for smallholder supply chains', 'Traceability, risk assessment and documentation for Malaysian and Indonesian palm oil, rubber and timber exporters {I}'],
  ['EU Omnibus I (CSRD and CSDDD) {IF}', 'EU', 'EU companies >1,000 employees and >€450m turnover; non-EU groups with >€450m EU turnover', 'In force 18 Mar 2026 [83]', 'Value-chain requests capped at the voluntary SME standard (VSME) for firms under 1,000 employees', 'Indirect', 'Less direct demand, but VSME becomes the default format for supplier data requests from EU customers {I}'],
  ['EU Battery Regulation carbon footprint {IF}/{AN}', 'European Commission', 'EV battery makers and their nickel, cobalt and lithium supply chains', 'Declarations since Feb 2025; thresholds by delegated act due Aug 2026; non-compliant EV batteries barred from Feb 2028 [60]', 'Product carbon footprint to mineral source', 'No', 'Product carbon footprints for Indonesian nickel processors; specialist LCA work {A}'],
  ['IMO Net-Zero Framework {PR}', 'IMO', 'International shipping', 'Adoption vote postponed to Oct 2026 [19]', 'Fuel standard and global carbon price (if adopted)', 'No', 'Shipping in Singapore and Hong Kong; wait for the vote {A}'],
];

module.exports = () => [
  h1('Part 2: Regulatory drivers', false),
  p('The tables below list the rules that create paid work, with status labels. The final column states the consulting opportunity, with particular attention to obligations that make companies hire outside help (first-time reporting, assurance, new data types and deadlines the company cannot meet with existing staff).'),
  h2('2.1 Singapore'),
  T(sg),
  h2('2.2 Malaysia'),
  T(my),
  h2('2.3 Indonesia'),
  T(id),
  h2('2.4 Hong Kong'),
  T(hk),
  h2('2.5 External rules that reach these markets'),
  T(ext),
  spacer(),
  callout('Which requirements will make companies hire consultants', [
    '- **First-time ISSB reporting** where no internal team exists: Malaysia Group 2 and 3, Indonesia\'s OJK wave 1, Singapore\'s non-STI companies from FY2028, Hong Kong LargeCap for HKFRS S1.',
    '- **Assurance** of GHG data, because the assurer cannot design the system it will test: Malaysia from FY2027, Hong Kong from the third mandatory year, Singapore FY2029, Indonesia once OJK finalises.',
    '- **Scope 3** inventories, which need data and methods most companies lack: Hong Kong LargeCap FY2026, Singapore STI FY2026, Malaysia Group 1 FY2027 and Group 2 FY2028.',
    '- **Export data rules** with a hard border consequence: CBAM, EUDR and the EU battery rules.',
    '- **Grant or tax-funded SME programmes** that require an external provider: Singapore SRG, ESP and EDGE; Malaysia ESG tax deduction and bank Greening Value Chain programmes.',
  ], { landscape: true }),
];
