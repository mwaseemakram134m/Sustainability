const H = require('../helpers');
const path = require('path');
const { p, h1, h2, h3, table, callout, bullets, image } = H;

const qa = [
  ['1. Most developed ESG business ecosystem?', '**Singapore.** Highest concentration of regional HQs, consultancies, carbon-software vendors, assurance providers and carbon-market firms; the only market with a rising carbon tax on a published path; the deepest grant support. Hong Kong is a close second and leads on listed-company reporting volume and green bond arranging [69]. {A}'],
  ['2. Gaining ESG momentum fastest?', '**Malaysia.** Three NSRF waves in FY2025-27, reasonable assurance FY2027-29, Scope 3 FY2027-30, a new carbon market policy, an ESG tax deduction and a first absolute NDC, all within about 24 months [20,25,27,30]. Indonesia is second, with a steeper but later and less certain curve. {A}'],
  ['3. Strongest regulatory push?', '**Malaysia for 2025-2029,** because the obligations cover every listed company and large private group with firm dates and reasonable assurance. Hong Kong has the most companies already under mandatory climate rules today. Indonesia\'s push becomes the strongest in 2027-29 if OJK finalises its draft. {A}'],
  ['4. Largest SME opportunity?', '**By number: Indonesia** (~65 million MSMEs). **By money you can actually earn: Malaysia,** thanks to standard SEDG formats, a free calculator, the RM50k tax deduction, bank programmes and export exposure [28,29,30,34]. {I}'],
  ['5. Strongest carbon-accounting opportunity?', '**Malaysia now** (NSRF assurance, CBAM, data centres, electronics supply chain); **Indonesia over 3-5 years** (SIINas, ETS expansion to captive power, nickel and palm oil). {A}'],
  ['6. Strongest ESG-reporting opportunity?', '**Malaysia for 2026-2028** first-time IFRS S2 reports (Group 2 and 3). **Indonesia for 2027-2029** (PSPK). Hong Kong has the largest recurring volume, but much of it is commoditised. {A}'],
  ['7. Strongest Scope 3 opportunity?', '**Malaysia overall** because demand comes from both sides: listed buyers (Group 1 FY2027, Group 2 FY2028) and suppliers to MNCs. **Hong Kong** has the most immediate regulatory Scope 3 (LargeCap FY2026); **Singapore** is where supplier programmes are designed. {A}'],
  ['8. Best ESG software opportunity?', '**Malaysia for implementation services** (tax deduction covers subscriptions; tight vendor capacity; Bursa CSI). **Singapore for vendor partnerships,** which then feed regional implementation work. {I}'],
  ['9. Highest consulting fees?', '**Singapore,** with Hong Kong close at the top end. Indonesia has the lowest fees in USD terms. {E}'],
  ['10. Least saturated for smaller consultants?', '**Indonesia** for technical PSPK, GHG and export-compliance work (narrative report writing is crowded). **Malaysia\'s mid-market** is second. Hong Kong\'s small-cap report market and Singapore\'s SME market are the most crowded. {A}'],
  ['11. Easiest to enter remotely?', '**Singapore** operationally (English, digital procurement), with **Malaysia** close behind and easier to win as an outsider. {A}'],
  ['12. Strongest partnership and subcontracting opportunities?', '**Malaysia** (mid-tier audit and secretarial firms, banks\' SME programmes, software vendors), with **Hong Kong** close (CPA firms preparing for the assurance regime). {A}'],
  ['13. Where are multinational supply-chain requirements creating the most opportunities?', '**Malaysia** (semiconductors and electronics, palm oil, data centres, steel) and **Indonesia** (palm oil, nickel and batteries, textiles and footwear). Singapore is where many of these requirements are set by regional HQs. {A}'],
  ['14. Services with the strongest demand in 2026-2029?', 'In order: (1) ISSB/IFRS S2 gap assessments and first reports; (2) assurance-ready GHG inventories and data controls; (3) Scope 3 inventories and supplier data programmes; (4) climate scenario analysis and physical-risk assessments; (5) transition plans; (6) export carbon data (CBAM, EUDR, battery footprints); (7) ESG data-platform implementation; (8) SME packages funded by grants, tax deductions or banks; (9) ISSB and GHG training. {A}'],
];

const scoring = [
  ['Demand growth', '25%', '3 → 4', '5 → 4', '4 → 5', '3 → 4'],
  ['Access for a remote independent', '20%', '5 → 5', '4 → 4', '2 → 3', '3 → 3'],
  ['Competition (5 = least crowded)', '15%', '2 → 2', '4 → 3', '4 → 3', '2 → 2'],
  ['Fee levels', '15%', '5 → 5', '3 → 3', '2 → 3', '4 → 4'],
  ['Partnership and subcontract availability', '15%', '4 → 4', '5 → 5', '3 → 4', '4 → 4'],
  ['Language and cultural fit (English-speaking consultant)', '10%', '5 → 5', '4 → 4', '1 → 1', '3 → 3'],
  ['**Weighted score (now → 3-5 years)**', '100%', '**3.90 → 4.15**', '**4.25 → 3.85**', '**2.85 → 3.45**', '**3.15 → 3.40**'],
];

const prio = [
  ['Market to prioritise immediately', '**Malaysia.** Highest attractiveness now (4.25). Deadlines are dated and arriving (Group 2 reports in 2027, Group 3 from FY2027, reasonable assurance from FY2027), the mid-market is under-served, buyers accept outside providers and incentives lower the client\'s cost.'],
  ['Market worth developing over the next 12 months', '**Indonesia,** through a local delivery partner. It needs the longest lead time (partner, Bahasa materials, credibility), and its demand peaks in 2027-29. Start in 2026 or arrive after the market has chosen its providers. Run **Singapore** in parallel at low intensity as your hub (software vendor partnerships, MNC supplier programmes, grant-funded SMEs), then scale it up in 2027 ahead of the FY2028 and FY2030 waves; Singapore scores highest over 3-5 years (4.15) and is easy to enter at any time.'],
  ['Market worth monitoring for future growth', '**Hong Kong.** Large but crowded at the low end; new money (Scope 3, assurance, HKFRS S1) mostly flows through existing CPA-firm and Big Four relationships. Test one or two CPA-firm partnerships, and watch two triggers: the AFRC final assurance rules and HKEX\'s 2027 consultation on full HKFRS S1/S2 adoption.'],
  ['Type of clients to target', 'Mid-sized listed companies facing their first ISSB report or first assurance (Malaysia Group 2 and 3, Indonesia Main Board, Singapore ≥S$1bn tier from 2027); large private groups approaching a mandate; export manufacturers in MNC or EU supply chains; and partner firms that sell to these clients.'],
  ['ESG service to lead with', '**"ISSB readiness plus assurance-ready GHG inventory"** as a two-step fixed-price offer: (1) gap assessment and roadmap; (2) Scope 1-2 inventory with data controls, then Scope 3. Use an SME carbon baseline as the volume product for supplier and bank channels.'],
  ['Recommended market-entry strategy', 'Partner-led, deadline-driven: mid-tier audit and secretarial firms in Malaysia; software vendors and trade associations in Singapore; a local delivery partner in Indonesia; CPA firms in Hong Kong. Support with a webinar and content calendar tied to each market\'s regulatory dates, and targeted LinkedIn outreach to named decision makers.'],
  ['Biggest commercial opportunity', 'Roughly 1,000 Malaysian listed companies and large private groups needing first IFRS S2 reports, assurance-ready GHG data and Scope 3 between 2026 and 2030, followed by Indonesia\'s PSPK wave (Main Board issuers, banks and then the wider market) in 2027-29. {E}'],
  ['Biggest risk or barrier', 'Regulatory slippage (Singapore deferrals, Malaysia carbon tax on hold, Indonesia carbon tax pending) and price compression from AI-drafted reports. For a newcomer, the lack of local references is the main barrier; partnerships solve it faster than marketing. In Indonesia, add language and rupiah risk. Mitigate by selling data systems and assurance-readiness (harder to automate, tied to fixed deadlines) and by building two or three referenceable projects in Malaysia first.'],
];

const plan = [
  ['Markets', 'Malaysia (primary). Singapore (partners only).', 'Malaysia. Singapore SME cohorts. Indonesia partner search.', 'Malaysia (scale). Indonesia pilot. Hong Kong partner test.'],
  ['Industries', 'MY Group 2: property, construction, industrial products, consumer. E&E suppliers in Penang and Kulim.', 'Add palm oil (EUDR), steel and aluminium (CBAM). SG precision engineering, F&B manufacturing, logistics SMEs.', 'ID palm oil, cement, textiles, Main Board issuers. HK property and logistics (through partners).'],
  ['Target job titles', 'CFO / Group Finance Director; Company Secretary; Head of Sustainability; Sustainability Manager. Partners: Managing Partner, Advisory Partner, Head of Partnerships.', 'Add HSE Manager, Operations Director, Managing Director (SMEs); bank SME and sustainable finance heads; association secretariats.', 'ID: Direktur Keuangan, Corporate Secretary, Head of Sustainability. HK: Advisory Partner (CPA firms), Head of Sustainability (LargeCap).'],
  ['Partnership outreach', 'Shortlist 15 Malaysian mid-tier audit and secretarial firms and 10 carbon-software vendors; approach all 25; aim for 6 meetings.', 'Sign 2 agreements (1 Malaysian firm, 1 vendor). Approach 2 Malaysian banks with Greening Value Chain programmes and 1 Singapore trade association. Shortlist 10 Indonesian partners.', 'Sign 1 Indonesian delivery partner. Approach 8 Hong Kong CPA firms. Add a second Malaysian partner.'],
  ['LinkedIn strategy', 'Rewrite profile around "IFRS S2 and assurance-ready GHG data for Malaysian mid-caps". 3 posts a week ("NSRF countdown" series). Connect with 150 named decision makers.', '3 posts a week plus one long article on lessons from Group 1 reports. 150 more connections. Value-first message sequence (checklist, then webinar invite, then call).', 'Case study post (anonymised). 100 more connections, including Indonesia and Hong Kong. Event-based messages around webinars.'],
  ['Cold email strategy', 'Build a 300-contact Malaysian list (Group 2 and ACE CFOs and Company Secretaries). Set up a separate sending domain. Send to 100 with the readiness checklist offer.', 'Send to 200 more in Malaysia and 100 Singapore SMEs (grant angle). Short, deadline-specific emails; 3 touches each.', 'Follow up on 200. Send 100 in Bahasa through the Indonesian partner\'s name. Send 50 to Hong Kong CPA firms.'],
  ['Lead-generation sources', 'Bursa list segmented by group; sustainability statements; FMM and MSIA directories.', 'SGX list and ESGenome; Singapore association member lists; MSPO certificate holders; MISIF members.', 'IDX list and board segments; ASRRAT participants; GAPKI; HKEX MidCap list; HKICPA firms.'],
  ['Webinars and content', 'Publish the "NSRF Group 2 and 3 readiness checklist" as a lead magnet; two short explainers.', 'Webinar 1 with a partner firm: "Your first IFRS S2 report, lessons from Group 1". Webinar 2: "Reasonable assurance: what auditors will test". Singapore SME session on grant-funded baselines with an association.', 'Webinar 3 in Bahasa with the Indonesian partner: "PSPK 2027". Hong Kong short paper: "Scope 3 that survives assurance".'],
  ['Service packages to pitch', 'NSRF Readiness Review (fixed price); Scope 1-2 Assurance-Ready Inventory; SME Carbon Baseline.', 'Add Supplier Questionnaire Kit, Singapore grant-funded baseline and full first IFRS S2 report engagement.', 'Add PSPK Gap Assessment (Indonesia) and a white-label technical bench (Hong Kong and Indonesia partners).'],
  ['Companies to approach', '~150 companies and 25 potential partners', '~250 companies and 15 partners', '~250 companies and 20 partners'],
  ['Targets for the period {E}', '10 discovery calls; 6 partner meetings', '15-20 discovery calls; 5 proposals; 1-2 signed projects; 2 partner agreements', '20 discovery calls; 6-8 proposals; 2-3 more signed projects; Indonesian partner signed'],
];

module.exports = () => [
  h1('Part 15: Final strategic assessment'),
  h2('15.1 Answers to the fourteen questions'),
  table({ headers: ['Question', 'Answer and reasoning'], widths: [1.9, 5.0], rows: qa, size: 15 }),
  h2('15.2 Market prioritisation'),
  p('The scoring below weighs what matters to an independent, remote-first consultant. Each cell shows the score now and the expected score in three to five years (1 = poor, 5 = excellent). Language fit assumes English is your working language; if you work in Bahasa, Malay, Cantonese or Mandarin, raise the relevant score. {A}'),
  table({ headers: ['Criterion', 'Weight', 'Singapore', 'Malaysia', 'Indonesia', 'Hong Kong'], widths: [2.2, 0.7, 1.0, 1.0, 1.0, 1.0], rows: scoring, size: 15 }),
  ...image(path.join(__dirname, '..', 'charts', 'fig2_attractiveness.png'), 600, 309,
    'Figure 2. Attractiveness for an independent consultant, now and in three to five years (weighted scores from the table above).'),
  p('Two things stand out. Malaysia is the best market now, but its score eases as competitors build capacity. Singapore\'s score rises as its deferred waves arrive in FY2028-FY2030. Indonesia improves the most, but only if you have built local delivery capacity by then. That is why the sequence below is about lead times as much as scores. {I}'),
  table({ headers: ['Decision', 'Recommendation'], widths: [1.7, 5.2], rows: prio, size: 16 }),
  h2('15.3 90-day ESG business development plan'),
  p('The plan assumes one consultant working full time, with occasional help for list building. Numbers of companies and conversion targets are estimates to calibrate after the first month. {E}'),
  table({ headers: ['Element', 'Days 1-30', 'Days 31-60', 'Days 61-90'], widths: [1.2, 1.9, 1.9, 1.9], rows: plan, size: 15 }),
  H.spacer(),
  h3('Expected funnel after 90 days {E}'),
  ...bullets([
    'About 650 companies and 60 potential partners approached.',
    'Roughly 45 discovery calls (around 7% of companies approached), 12 to 15 proposals and 3 to 5 signed projects.',
    'Two to four partnership agreements, which should produce most of the second-quarter pipeline.',
    'A pipeline of roughly US$150,000 to 250,000 in proposals, weighted towards Malaysia.',
  ]),
  callout('What to review on day 90', [
    '- Which channel produced the most calls per hour spent: partners, webinars, LinkedIn or email? Double it.',
    '- Which package converted? Narrow the offer to the two best sellers.',
    '- Is the Indonesian partner able to deliver in Bahasa to the quality you need? If not, find another before the 2027 peak.',
    '- Re-check regulatory dates: OJK final regulation, AFRC assurance conclusions, Malaysia\'s Climate Change Bill and Singapore\'s final SFRS S1/S2. {I}',
  ]),
];
