const H = require('../helpers');
const { p, h1, h2, table, price } = H;

const HEAD = ['Country', 'ESG service', 'Target industry', 'Target company size', 'Why demand exists', 'Competition', 'Estimated project value', 'Business development approach'];
const W = [0.75, 1.45, 1.5, 1.15, 2.0, 1.05, 1.45, 1.85];
const T = (rows) => table({ headers: HEAD, widths: W, rows, landscape: true, size: 14, headSize: 15 });

const sg = [
  ['SG', 'Scope 3 supplier-programme delivery', 'Consumer goods, electronics, logistics MNCs with regional HQs', 'Large (S$1bn+ revenue)', 'STI Scope 3 from FY2026 [1]; MNCs set supplier targets [11]', 'High at strategy level; moderate for supplier-side execution', price('SGD', 40000, 150000), 'Subcontract to global consultancies and software vendors; LinkedIn to Heads of Sustainability and Procurement'],
  ['SG', 'ISSB climate readiness (FY2028 tier)', 'REITs, industrials, property, consumer', 'Listed, market cap ≥S$1bn, non-STI', 'Full climate disclosures from FY2028; FY2027 dry run needed [1]', 'Moderate', price('SGD', 50000, 150000) + ' before 30% SRG', '"FY2028 countdown" webinar; CFO outreach; mid-tier audit partners'],
  ['SG', 'Scope 1-2 assurance readiness', 'All sectors', 'Listed small and mid caps', 'Limited assurance from FY2029 [1]', 'Low-moderate', price('SGD', 15000, 50000), 'Bundle with annual inventory refresh; referrals from verifiers'],
  ['SG', 'Grant-funded SME carbon footprint and plan', 'Precision engineering, F&B manufacturing, logistics, construction trades', 'SMEs, S$5-100m revenue', 'ESP and EDGE co-funding of up to 70% [7,8]; MNC customer requests', 'High (many boutiques)', price('SGD', 8000, 30000), 'Trade association cohorts (SMF, SBF, SCCCI)'],
  ['SG', 'First sustainability report for private groups', 'Family groups, MNC subsidiaries', 'Revenue S$100m-1bn', 'SRG funding for non-listed firms with S$100m+ revenue [6]; lender and customer requests', 'Moderate', price('SGD', 30000, 80000), 'Bank relationship managers; CFO outreach'],
  ['SG', 'Transition plans for bank borrowers', 'Real estate, shipping, manufacturing, commodities', 'Mid and large borrowers', 'MAS Transition Planning Guidelines (Mar 2026) [10]', 'Moderate', price('SGD', 30000, 100000), 'Partner with banks\' sustainable finance teams'],
  ['SG', 'Maritime emissions reporting', 'Ship owners and managers', 'Mid-size fleets', 'EU ETS and FuelEU for EU voyages; IMO vote Oct 2026 [19]', 'Moderate (specialists)', price('SGD', 20000, 80000), 'Shipping association and MPA events'],
  ['SG', 'Data centre Scope 2 and renewable sourcing', 'Colocation and enterprise data centres', 'Mid and large', 'Green data centre requirements; hyperscaler demands', 'Moderate', price('SGD', 30000, 100000), 'SIEW (Oct 2026) [87]; industry associations'],
  ['SG', 'REIT GRESB and climate risk', 'S-REITs and property managers', 'Listed', 'Investor benchmarking; FY2028 disclosures', 'Moderate-high', price('SGD', 25000, 80000) + ' a year', 'REIT association events; LinkedIn'],
  ['SG', 'Carbon software implementation partner', 'Vendor clients across SEA', 'Mid-market', 'Vendors short of implementation capacity [16]', 'Low', price('SGD', 10000, 40000) + ' per client', 'Approach vendors directly with a partner proposal'],
  ['SG', 'ISSB and GHG training', 'Listed companies, accounting firms', 'All', 'SFRS S1/S2 consultation 2026 [4]; FY2029 assurance', 'Moderate', price('SGD', 3000, 8000) + ' per session', 'ISCA, SID, SMU Academy; in-house sessions'],
];

const my = [
  ['MY', 'First IFRS S2 report (Group 2)', 'Property, construction, manufacturing, consumer, tech', 'Main Market, market cap below RM2bn', 'NSRF from FY2026, first reports in 2027 [20]', 'Moderate', price('MYR', 100000, 350000), 'Mid-tier audit partners; CFO outreach; "lessons from Group 1" webinars'],
  ['MY', 'NSRF readiness (Group 3)', 'ACE issuers; family conglomerates', 'ACE issuers; non-listed with revenue ≥RM2bn', 'Reporting from FY2027 [20,89]', 'Low-moderate', price('MYR', 60000, 200000), 'Company secretarial firms; "FY2027 is your baseline year" campaign'],
  ['MY', 'Reasonable-assurance readiness (Scope 1-2)', 'Group 1 (FY2027) then Group 2 (FY2028)', 'Large and mid caps', 'Reasonable assurance targeted FY2027-29 [20]', 'Low', price('MYR', 30000, 120000), 'Referrals from assurance providers; Head of Sustainability'],
  ['MY', 'Scope 3 inventories', 'Plantations, telcos, banks, consumer, then Group 2', 'Large', 'Scope 3 from FY2027 (G1) and FY2028 (G2) [90]', 'Moderate', price('MYR', 60000, 200000), 'Direct, or subcontract to Big Four'],
  ['MY', 'Climate scenario analysis and physical risk', 'Plantations, property, manufacturing, utilities', 'Mid and large', 'IFRS S2 strategy and resilience requirements', 'Moderate', price('MYR', 50000, 150000), 'Bundle with reports; Risk Managers and CFOs'],
  ['MY', 'E&E supplier carbon accounting', 'Semiconductor and E&E suppliers in Penang, Kulim, Johor', 'SMEs and mid caps', 'MNC supplier targets; Scope 2 heavy sector [37]', 'Low-moderate', price('MYR', 15000, 60000), 'MSIA, InvestPenang, MNC supplier days'],
  ['MY', 'CBAM embedded-emissions data', 'Steel, aluminium, wire, fasteners, fertiliser exporters', 'SME to large', 'CBAM definitive 2026; certificates 2027 [81]', 'Low', price('MYR', 30000, 100000), 'MISIF; MATRADE exporter events'],
  ['MY', 'EUDR and GHG for palm, rubber and wood', 'Mills, refiners, aggregators, furniture makers', 'Mid', 'EUDR from Dec 2026 and Jun 2027 [82]', 'Moderate', price('MYR', 40000, 150000), 'MPOA and MPOB events; MSPO auditors'],
  ['MY', 'Data centre sustainability reporting', 'Data centre operators and developers', 'Mid and large', 'Johor boom, CRESS, water stress [36]', 'Moderate', price('MYR', 60000, 200000), 'Johor and MDEC events; LinkedIn'],
  ['MY', 'SME ESG starter (SEDG Basic + Scope 1-2 + policies)', 'Manufacturing SMEs, suppliers to listed companies', 'SMEs, RM5-100m revenue', 'SEDG, bank programmes, RM50k tax deduction [28,30,34]', 'Moderate', price('MYR', 8000, 25000), 'Bank Greening Value Chain programmes; FMM; SME Corp'],
  ['MY', 'Outsourced ESG function', 'Family conglomerates, GLC and MNC subsidiaries', 'Revenue ≥RM2bn, non-listed', 'Reporting from FY2027; lender requests', 'Low', price('MYR', 5000, 15000) + ' a month plus projects', 'Introductions through auditors and bankers'],
  ['MY', 'HRD Corp-claimable ISSB and GHG training', 'Listed and large companies', 'All', 'Capability gaps across Groups 2 and 3', 'Moderate', price('MYR', 3000, 10000) + ' per day', 'Register as HRD Corp provider; MIA and ICDM'],
];

const id = [
  ['ID', 'PSPK gap assessment and roadmap', 'Main Board issuers, all sectors', 'Large listed', 'PSPK from 2027 [40]; OJK wave 1 from FY2027 [41,42]', 'Moderate', price('IDR', 250e6, 750e6), 'Local partner; IAI events; CFO and Corporate Secretary'],
  ['ID', 'Bank PSPK and financed emissions', 'Large banks', 'Large', 'Large banks in OJK wave 1 [42]', 'High (Big Four)', price('IDR', 500e6, 2e9), 'Subcontract to Big Four or network firms'],
  ['ID', 'GHG inventory for SIINas', 'Cement, steel, chemicals, textiles, F&B, pulp and paper', 'Mid and large manufacturers', 'Circular 2/2025 [49]; decarbonisation roadmap [50]', 'Low-moderate', price('IDR', 60e6, 200e6), 'Industry associations; local partner; Kemenperin events'],
  ['ID', 'Palm oil EUDR and GHG', 'Plantation groups, mills, refiners', 'Mid', 'EUDR from 30 Dec 2026 [82]', 'Moderate', price('IDR', 200e6, 800e6), 'GAPKI; RSPO and ISPO events; buyer referrals'],
  ['ID', 'Nickel and battery product carbon footprints', 'Smelters, precursor producers', 'Large', 'EU battery thresholds; non-compliant EV batteries barred from Feb 2028 [60]', 'Moderate (specialist LCA)', price('IDR', 500e6, 2e9), 'Team up with LCA specialists; offtakers'],
  ['ID', 'Textile and apparel supplier decarbonisation', 'Garment and footwear factories in Java', 'Mid', 'Brand supplier targets; EU VSME requests [83]', 'Moderate', price('IDR', 50e6, 200e6) + ' per facility', 'Brand-sponsored programmes; textile association'],
  ['ID', 'Assurance readiness for PSPK', 'Main Board issuers', 'Large', 'Mandatory assurance proposed [42]', 'Low', price('IDR', 100e6, 400e6), 'Upsell after gap assessments'],
  ['ID', 'Scenario analysis and transition plans', 'Coal, energy, mining, banks', 'Large', 'PSPK 2; OJK transition plan proposal [41]', 'Moderate', price('IDR', 300e6, 1e9), 'Local partner; Heads of Risk and Strategy'],
  ['ID', 'PSPK training in Bahasa', 'Issuers, accountants, banks', 'All', 'Capability gap ahead of 2027', 'Low-moderate', price('IDR', 15e6, 50e6) + ' per day', 'IAI, IDX and corporate secretary association partnerships'],
  ['ID', 'White-label technical support for report agencies', 'Local sustainability report writers', 'Small firms', 'Agencies need PSPK capability to keep clients', 'Low', price('IDR', 50e6, 200e6) + ' per engagement', 'Direct approach to agencies'],
  ['ID', 'Captive power ETS MRV', 'Smelters and industrial parks with captive coal', 'Large', 'ETS covers captive plants from 2027 [45]', 'Low', price('IDR', 200e6, 600e6), 'Industrial park operators'],
];

const hk = [
  ['HK', 'LargeCap Scope 3 inventories', 'Property, retail, consumer, logistics', 'LargeCap', 'Mandatory from FY2026 [66]', 'High at the top; data work often outsourced', price('HKD', 200000, 800000), 'Subcontract; direct to Heads of Sustainability'],
  ['HK', 'Part D quality upgrade for MidCap', 'Main Board mid caps', 'MidCap', 'Comply-or-explain today; mandatory expected later [62]', 'High at the low end', price('HKD', 80000, 250000), 'CPA firm partners; CFO outreach'],
  ['HK', 'Scope 1-2 assurance readiness', 'All Main Board sectors', 'Listed', 'AFRC proposal for mandatory assurance [63]', 'Low-moderate', price('HKD', 60000, 200000), 'CPA firms and non-CPA assurance providers'],
  ['HK', 'Transition plans', 'LargeCap; banks\' corporate clients', 'Large', 'CASG 2026-28 priorities [67]; transition finance guide [68]', 'Moderate', price('HKD', 150000, 500000), 'HKGFA and bank networks'],
  ['HK', 'A+H dual-framework reporting', 'Mainland-linked issuers', 'Large', 'Mainland mandatory reports from 2026; climate standard expected 2027 [78]', 'Moderate', price('HKD', 150000, 500000), 'Mandarin-capable partner'],
  ['HK', 'Building energy-to-carbon roadmaps', 'Landlords, property managers, data centres', 'Mid and large', 'Amended BEEO fully in force 20 Sep 2026 [74]', 'Moderate', price('HKD', 80000, 300000), 'Registered energy assessors'],
  ['HK', 'CASG questionnaire packages for SMEs', 'Bank borrowers', 'SMEs', 'Banks collect climate data from non-listed clients [71]', 'Moderate', price('HKD', 15000, 50000), 'Banks, HKSMEA, HKPC'],
  ['HK', 'Green and transition finance frameworks', 'Issuers using the GSF grant', 'Mid and large', 'GSF Grant Scheme to 2027 [70]', 'High', price('HKD', 100000, 300000), 'Arrangers; HKGFA'],
  ['HK', 'HKFRS S1 readiness', 'LargeCap and MidCap', 'Large', 'HKEX consultation 2027; full adoption by 2028 [62]', 'Low (early)', price('HKD', 150000, 500000), 'Thought leadership from 2027'],
  ['HK', 'Director and finance team training', 'Listed boards, CPA firms', 'All', 'Board competence expectations under the climate rules', 'Moderate', price('HKD', 15000, 40000) + ' per session', 'Directors\' institute and HKICPA CPD'],
];

module.exports = () => [
  h1('Part 10: Opportunity matrix'),
  p('The 44 opportunities below are those where the evidence supports paid demand. Project values are estimates for an independent or boutique provider {E}; Big Four fees are typically higher. Competition ratings reflect how crowded each service is for a small provider. {A}'),
  h2('10.1 Singapore'),
  T(sg),
  h2('10.2 Malaysia'),
  T(my),
  h2('10.3 Indonesia'),
  T(id),
  h2('10.4 Hong Kong'),
  T(hk),
];
