const H = require('../helpers');
const { p, h1, h2, table, callout } = H;

const HEAD = ['Sector', 'Why ESG demand is rising', 'What they will buy', 'Potential'];
const W = [1.25, 3.1, 2.1, 0.9];
const T = (rows) => table({ headers: HEAD, widths: W, rows, size: 16 });

const sg = [
  ['Real estate and REITs', 'S-REITs are a large share of SGX by value, many fall in the ≥S$1bn tier (full climate disclosure from FY2028), and investors benchmark them through GRESB. Green Mark and building energy rules add data needs. {A}', 'GRESB submissions, Scope 3 (tenant energy, embodied carbon), CRREM-style pathways, climate physical-risk screening', 'High'],
  ['Banks, insurers, asset managers', 'MAS Transition Planning Guidelines (Mar 2026) and environmental risk guidelines require client engagement and portfolio data [10]. {F}', 'Financed emissions (PCAF), client transition-plan assessments, data governance. Mostly Big Four; you sell to their corporate clients', 'High (indirect)'],
  ['Maritime and shipping', 'Singapore is a top bunkering and ship-management hub; EU ETS and FuelEU apply to voyages to Europe; the IMO framework vote moved to October 2026 [19]. {F}', 'Fleet emissions MRV, fuel-transition strategy, customer Scope 3 data (category 4)', 'Medium-high'],
  ['Aviation and air logistics', 'SAF levy on tickets sold from 1 October 2026; 1% SAF target from 2027 [9]. {F}', 'Emissions accounting for freight forwarders and corporate travel; customer reporting', 'Medium'],
  ['Data centres', 'Power-hungry, under green data centre requirements, with hyperscaler customers asking for renewable and efficiency data. {A}', 'Scope 2 market-based accounting, renewable procurement strategy, PUE and water reporting', 'Medium-high'],
  ['Semiconductors and precision engineering', 'Export manufacturers in MNC supply chains face supplier emission targets and customer audits; carbon tax raises energy costs for large plants [5,11]. {F}', 'Product carbon footprints, supplier questionnaire responses, decarbonisation roadmaps', 'High'],
  ['Logistics and supply-chain services', 'MNC customers request shipment-level emissions for Scope 3; EU customers may use VSME-style requests. {I}', 'Transport emissions calculators (GLEC), customer reporting packs', 'Medium-high'],
  ['Agri-commodity traders and F&B', 'Regional HQs of palm oil, cocoa, coffee and grain traders face EUDR due diligence and FLAG targets. {F}', 'EUDR systems, supplier programmes, Scope 3 FLAG', 'Medium (concentrated)'],
  ['Energy and chemicals', 'Carbon tax rising to S$45 and S$50-80 by 2030 [5]. In-house teams are strong. {A}', 'Specialist MRV and abatement studies, usually subcontracted', 'Low-medium for independents'],
];

const my = [
  ['Electrical and electronics, semiconductors', 'Malaysia is a top chip exporter. Purchased electricity was 77% of the sector\'s footprint in 2023 [37]. MNC customers set supplier targets; Group 1 Scope 3 from FY2027 pulls data from suppliers. {F}', 'Scope 1-2 inventories, renewable procurement (CRESS), product carbon footprints, supplier questionnaire responses', 'Very high'],
  ['Palm oil and plantations', 'EUDR applies from 30 December 2026 for large and medium operators [82]; buyers demand traceability and GHG data; several plantation groups are in Group 1. {F}', 'EUDR traceability and due diligence, MSPO/RSPO GHG, FLAG targets, NSRF reporting', 'Very high'],
  ['Data centres', 'Johor has drawn about RM165 billion of investment; load more than doubled between 2024 and 2025; CRESS contracts are tied to data centres [36]. Water stress is now a permitting issue. {F}', 'Scope 2 accounting, renewable procurement strategy, water and energy reporting for hyperscaler clients', 'High'],
  ['Iron, steel, aluminium, cement', 'CBAM definitive phase since 1 January 2026 [81]; domestic carbon tax announced then put on hold [23]. {F}', 'Installation-level embedded emissions, CBAM data packs, abatement studies', 'High'],
  ['Oil, gas and power utilities', 'NETR, the CCUS Act 2025 and vendor ESG requirements from Petronas and TNB cascade to contractors. {A}', 'Vendor ESG compliance for contractors, methane and flaring data, transition plans', 'Medium-high'],
  ['Property and construction', 'Many Group 2 issuers are developers and contractors; banks classify loans under the BNM taxonomy; green building certification is common. {A}', 'NSRF reporting, embodied carbon, climate physical-risk assessments', 'High'],
  ['Rubber gloves and medical devices', 'Export-oriented with buyer audits on labour and environment; several are listed. {A}', 'Social compliance plus GHG, NSRF reporting', 'Medium'],
  ['Banks and insurers', 'BNM climate risk management and stress testing; JC3 work on SME data; financed emissions [33]. {F}', 'Big Four for core work; banks need partners for SME Greening Value Chain delivery', 'Medium (channel value)'],
  ['Furniture and wood products', 'EUDR covers wood; heavy EU and US export exposure. {F}', 'EUDR due diligence, product footprints', 'Medium'],
];

const id = [
  ['Palm oil and pulp and paper', 'EUDR from 30 December 2026 [82]; ISPO mandatory; NDPE buyer policies. {F}', 'Traceability, deforestation risk assessment, GHG (PalmGHG), PSPK reporting for listed groups', 'Very high'],
  ['Nickel, mining and the EV battery chain', 'EU battery carbon-footprint thresholds bar non-compliant EV batteries from February 2028 [60]; coal-fired processing is carbon-intensive; captive power enters the ETS from 2027 [45]. {F}', 'Product carbon footprints, captive power MRV, decarbonisation pathways, IRMA-style assurance support', 'High (specialist)'],
  ['Coal, power and energy', 'Power-sector ETS; JETP; PSPK transition plans; investor and lender scrutiny. {F}', 'Transition plans, ETS compliance, scenario analysis', 'High'],
  ['Banks and financial services', 'First OJK wave targets large banks [41]; financed emissions and taxonomy reporting (TKBI v3) [51]. {F}', 'PSPK readiness, PCAF, client data; Big Four lead, subcontracting possible', 'High'],
  ['Cement, steel, chemicals, fertiliser', 'Mandatory GHG reporting via SIINas [49]; industrial decarbonisation roadmap [50]; CBAM for steel and fertiliser [81]. {F}', 'GHG inventories, CBAM data, abatement roadmaps', 'High'],
  ['Textiles, apparel and footwear', 'Global brands require supplier emissions data and reduction targets; EU customers will use VSME formats. {A}', 'Facility GHG baselines, Higg FEM support, renewable energy plans', 'High (volume)'],
  ['Food, beverage and FMCG', 'In the industrial decarbonisation roadmap [50]; MNC brand owners need Scope 3 supplier data. {F}', 'GHG inventories, packaging and supplier programmes', 'Medium-high'],
  ['Industrial estates and real estate', 'Industrial estate operators must report through SIINas [49]; TKBI v2 covers construction and real estate [51]. {F}', 'Estate-level GHG systems, tenant data programmes, green building', 'Medium'],
];

const hk = [
  ['Property developers and landlords', 'Several are LargeCap (Scope 3 from FY2026); the amended Buildings Energy Efficiency Ordinance halves the audit cycle and covers more building types from 20 September 2026 [74]. {F}', 'Scope 3 (embodied, tenant), energy-to-carbon roadmaps, GRESB, physical-risk assessments', 'High'],
  ['Banks, insurers, asset managers', 'HKMA supervision; transition finance guidance (May 2026) [68]; CASG priorities on transition plans [67]. {F}', 'Transition plans, financed emissions; client-side questionnaires', 'High (mostly Big Four)'],
  ['Shipping, ports and logistics', 'Global shipping rules (EU ETS now, IMO later); green fuel bunkering plans in the 2025 Policy Address [76]. {F}', 'Fleet and terminal emissions, customer Scope 3 packs', 'Medium-high'],
  ['Retail and consumer brands', 'LargeCap retailers face Scope 3; supply chains in the Greater Bay Area and Southeast Asia. {A}', 'Supplier engagement programmes, product footprints', 'Medium-high'],
  ['A+H and mainland-linked industrials', 'Dual reporting under HKEX rules and mainland standards (climate standard expected mandatory for listed companies from 2027) [78]. {F}', 'Framework mapping, double materiality, data consolidation across subsidiaries', 'High (Mandarin needed)'],
  ['Hospitality and tourism', 'Corporate travel buyers and international hotel brands ask for property-level data. {A}', 'Hotel footprinting (HCMI), energy and waste programmes', 'Medium'],
  ['Data centres', 'Now within the Buildings Energy Efficiency Ordinance [74]; hyperscaler customer demands. {F}', 'Scope 2, PUE and energy audits', 'Medium'],
  ['Construction', 'Government projects increasingly specify carbon assessment; developers pass requirements down. {A}', 'Embodied carbon, site emissions tracking', 'Medium'],
];

module.exports = () => [
  h1('Part 3: Corporate ESG demand by sector', false),
  p('For each market, the sectors below show the clearest link between a pressure (rule, buyer, lender or investor) and a purchase. "Potential" is an analyst judgement of how much paid work the sector can generate for a small consultancy over 2026 to 2029. {A}'),
  h2('3.1 Singapore'),
  T(sg),
  h2('3.2 Malaysia'),
  T(my),
  h2('3.3 Indonesia'),
  T(id),
  h2('3.4 Hong Kong'),
  T(hk),
  H.spacer(),
  callout('Cross-market pattern', [
    'Demand is strongest where a sector faces two pressures at once, for example Malaysian electronics (NSRF plus MNC customers), Indonesian palm oil (EUDR plus PSPK) or Hong Kong property (LargeCap Scope 3 plus building energy rules). Lead your sector focus with these double-pressure sectors. {I}',
  ]),
];
