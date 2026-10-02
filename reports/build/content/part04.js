const H = require('../helpers');
const { p, h1, h2, table, callout, bullets, price, spacer } = H;

const factors = [
  ['Number and weight of SMEs', '~370,000 SMEs (99% of firms), ~70% of local workforce, ~half of GDP [13] {F}', '1.09m MSMEs (96.1% of establishments), 39.5% of GDP, 48.7% of jobs, 14.3% of exports [32] {F}', '~65m MSMEs, ~60% of GDP, ~97% of employment, low export share [58] {F}', '~360,000 SMEs (98%+ of firms), ~43% of private employment [72] {F}'],
  ['ESG awareness', 'Moderate; 3 in 4 have taken no concrete steps [11] {F}', 'Low to moderate; 19% use environmentally friendly processes [32] {F}', 'Low outside exporters {A}', 'Moderate; 77% rate ESG important but risk awareness is limited [73] {F}'],
  ['Regulatory pressure', 'None directly; indirect via STI Scope 3 and grants {F}', 'Indirect via NSRF Scope 3 from FY2027 (G1) and FY2028 (G2) {AN}', 'Direct for industrial SMEs through SIINas GHG reporting [49] {IF}', 'None directly; indirect via LargeCap Scope 3 FY2026 {IF}'],
  ['Customer and supply-chain pressure', 'High for MNC suppliers: 91% of MNCs set supplier targets [11] {E}', 'High for E&E, palm oil and component suppliers {A}', 'High for palm oil, textile and nickel suppliers; low elsewhere {A}', 'Moderate; concentrated in suppliers to LargeCap and global brands {A}'],
  ['Export-market pressure', 'Moderate (re-export and services economy) {A}', 'High: CBAM (steel, aluminium), EUDR (palm, rubber, wood) {F}', 'High: EUDR, CBAM (steel, fertiliser), EU battery rules {F}', 'Moderate (Greater Bay Area manufacturing owned from Hong Kong) {A}'],
  ['Financing pressure', 'Growing as banks implement MAS transition guidelines [10] {I}', 'Growing: CGC RM1bn ESG guarantee, bank Greening Value Chain programmes [34] {F}', 'Early; will rise with OJK and TKBI {I}', 'Growing: banks use the CASG questionnaire for non-listed borrowers [71] {F}'],
  ['Carbon accounting need', 'Scope 1-2 and product data for customers {A}', 'Scope 1-2 via SEDG calculator or LCOS; Scope 3 data for customers [29,35] {F}', 'Scope 1-2 for SIINas; product data for exporters {F}', 'Scope 1-2 for questionnaires {A}'],
  ['Reporting need', 'Customer questionnaires (CDP, EcoVadis), grant-funded first reports {A}', 'SEDG-based disclosure for customers and banks [28] {VO}', 'Basic GHG reports and buyer questionnaires {A}', 'CASG questionnaire; customer questionnaires {VO}'],
  ['Willingness to pay', 'Highest, especially with 50-70% co-funding {E}', 'Moderate; improved by RM50k tax deduction [30] {E}', 'Low except exporters and larger family firms {E}', 'Moderate; price-sensitive {E}'],
  ['Internal sustainability teams', 'Rare; usually the owner, finance or HSE lead {A}', 'Rare; usually finance or HSE {A}', 'Very rare; HSE manager at best {A}', 'Rare; usually finance or company secretary {A}'],
  ['Best SME entry point', 'Grant-funded projects through trade associations and ESP partners {I}', 'Bank Greening Value Chain programmes, FMM and SEDG adopter networks {I}', 'Industry associations, exporter clusters and bank programmes, in Bahasa {I}', 'Banks, HKSMEA ESG Charter, HKPC programmes {I}'],
];

const pk = (label, contents, sg, my, id, hk) => [label, contents, sg, my, id, hk];
const packages = [
  pk('ESG Starter', 'Gap check against customer and bank requests, 5-7 core policies, one-page ESG profile', price('SGD', 4000, 10000), price('MYR', 6000, 15000), price('IDR', 25e6, 75e6), price('HKD', 20000, 50000)),
  pk('Scope 1-2 Carbon Baseline', 'GHG Protocol inventory, emission factors, calculator set-up, short report', price('SGD', 5000, 12000), price('MYR', 8000, 20000), price('IDR', 35e6, 100e6), price('HKD', 20000, 50000)),
  pk('Supplier Questionnaire Kit', 'Answers and evidence for CDP, EcoVadis, SEDG or CASG questionnaires', price('SGD', 3000, 8000), price('MYR', 5000, 12000), price('IDR', 20e6, 60e6), price('HKD', 15000, 40000)),
  pk('SME Sustainability Report', 'Short report on SEDG, VSME or GRI basis', price('SGD', 8000, 20000), price('MYR', 12000, 30000), price('IDR', 50e6, 150e6), price('HKD', 40000, 100000)),
  pk('Export Compliance Pack', 'CBAM embedded emissions or EUDR traceability data pack', 'Limited demand', price('MYR', 15000, 60000), price('IDR', 75e6, 300e6), price('HKD', 40000, 120000)),
  pk('Outsourced ESG Desk (monthly)', 'Data collection, questionnaire answers, customer requests, annual update', price('SGD', 1500, 4000), price('MYR', 2500, 6000), price('IDR', 10e6, 30e6), price('HKD', 8000, 25000)),
  pk('Team training (half day)', 'GHG basics, customer requirements, data collection', price('SGD', 1500, 3500), price('MYR', 2500, 6000), price('IDR', 10e6, 25e6), price('HKD', 8000, 20000)),
];

module.exports = () => [
  h1('Part 4: SME opportunity'),
  p('SMEs rarely face reporting rules directly. They buy when a customer, a bank or an export rule forces the issue, and when a grant or tax break cuts the cost. The table compares those triggers market by market.'),
  table({ headers: ['Factor', 'Singapore', 'Malaysia', 'Indonesia', 'Hong Kong'], widths: [1.2, 1.6, 1.6, 1.6, 1.6], rows: factors, size: 15 }),
  spacer(),
  h2('4.1 Where the SME money is'),
  ...bullets([
    '**Malaysia offers the largest SME opportunity you can actually monetise.** It combines a standard disclosure format (SEDG v2, aligned with the ASEAN guide [28]), a free government calculator [29], a tax deduction worth up to RM50,000 a year [30], a RM1 billion SME ESG financing guarantee and bank programmes that need delivery partners [34], and heavy export exposure. {I}',
    '**Singapore pays best per SME** because the state co-funds 50 to 70% of the cost [6,7,8], but the pool is smaller and competition from local boutiques and platforms is intense. {I}',
    '**Indonesia has the largest SME population** but low ability to pay. The opportunity is in exporter clusters (palm oil, textiles, furniture, coffee) and industrial SMEs that must report through SIINas. It needs a low-cost, Bahasa-language, tool-based delivery model, ideally sponsored by a buyer, bank or association. {I}',
    '**Hong Kong SMEs** respond mostly to bank questionnaires and large-customer requests. Bank and HKPC channels work better than direct sales. {I}',
  ]),
  h2('4.2 Affordable SME packages and indicative prices'),
  p('Prices are estimates for an independent or boutique provider, before any grant or tax relief. Treat them as starting points to test. {E}', { size: 18 }),
  table({ headers: ['Package', 'Contents', 'Singapore', 'Malaysia', 'Indonesia', 'Hong Kong'], widths: [1.15, 1.75, 1.3, 1.3, 1.35, 1.35], rows: packages, size: 15 }),
  spacer(),
  callout('SME delivery model that works across markets', [
    '- Productise: fixed scope, fixed price, two to four weeks, delivered mostly remotely with a standard data request template.',
    '- Use free or low-cost tools where clients expect them (SEDG calculator, LCOS, SME Climate Hub, CASG questionnaire) and charge for interpretation, data quality and the deliverable.',
    '- Sell through a sponsor: a bank programme, trade association, MNC supplier programme or software vendor. Direct cold outreach to individual SMEs is expensive per sale.',
    '- Add a low monthly retainer for ongoing customer requests; this is where SME margins come from. {I}',
  ]),
];
