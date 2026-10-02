const H = require('../helpers');
const { p, h1, h2, bullets, table, callout, spacer, Paragraph, TextRun, AlignmentType, COLORS } = H;

function cover() {
  return [
    new Paragraph({ spacing: { before: 2200, after: 200 }, children: [new TextRun({ text: 'BUSINESS OPPORTUNITY STUDY  |  OCTOBER 2026', color: COLORS.accent, bold: true, size: 20 })] }),
    new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: 'Where ESG Clients Will Spend', color: COLORS.primary, bold: true, size: 56 })] }),
    new Paragraph({ spacing: { after: 400 }, children: [new TextRun({ text: 'ESG and sustainability services opportunity in Indonesia, Malaysia, Singapore and Hong Kong, 2026 to 2029', color: COLORS.ink, size: 30 })] }),
    p('Prepared for: an independent ESG and sustainability consultant (remote-first, technology-enabled, open to subcontracting)', { size: 21, color: COLORS.muted }),
    p('Research cut-off: 2 October 2026. Developments from 2024 to 2026 prioritised.', { size: 21, color: COLORS.muted }),
    p('Scope: regulation, corporate and SME demand, competition, pricing, momentum, entry strategy, target clients, lead sources and a 90-day business development plan.', { size: 21, color: COLORS.muted, after: 600 }),
    callout('The short answer', [
      '**Prioritise Malaysia now.** It has the broadest set of dated reporting and assurance obligations landing in 2026 to 2029, a mid-market that the Big Four do not fully serve, English-language business, and tax and bank incentives that help clients pay.',
      '**Build Indonesia over the next 12 months.** It is the biggest new wave (ISSB-based PSPK standards from 1 January 2027, with assurance and transition plans proposed by OJK), but you need a local partner and Bahasa delivery to capture it.',
      '**Use Singapore as your hub and premium channel.** Highest fees and easiest remote access, but its 2025 deferrals push most listed and large private companies to FY2028 to FY2030. Its value now lies in partnerships, Scope 3 programmes and grant-funded SME work.',
      '**Treat Hong Kong as opportunistic.** The largest reporting market by company count, but the low end is crowded and price-driven. Enter through CPA firms and assurance-readiness work rather than cold outreach.',
    ]),
  ];
}

function contents() {
  const parts = [
    'Executive summary',
    'How to read this report (evidence labels, exchange rates, limitations)',
    'Part 1: Market overview by country',
    'Part 2: Regulatory drivers',
    'Part 3: Corporate ESG demand by sector',
    'Part 4: SME opportunity',
    'Part 5: Competitor analysis and market gaps',
    'Part 6: Business development conditions',
    'Part 7: Pricing',
    'Part 8: Market momentum (current size versus growth)',
    'Part 9: Country comparison',
    'Part 10: Opportunity matrix',
    'Part 11: Market entry strategy',
    'Part 12: Target client profiles and outreach angles',
    'Part 13: Near-term opportunities, 2026 to 2028',
    'Part 14: Sources of leads',
    'Part 15: Final strategic assessment, prioritisation and 90-day plan',
    'Sources',
  ];
  return [
    h1('Contents'),
    ...parts.map((t) => new Paragraph({ children: [new TextRun({ text: t, size: 21 })], spacing: { after: 90 } })),
    spacer(200),
    p('Tip: in Word, open View > Navigation Pane to jump between parts using the built-in headings.', { size: 18, color: COLORS.muted, italics: true }),
  ];
}

function execSummary() {
  return [
    h1('Executive summary'),
    p('This study asks one commercial question: across Indonesia, Malaysia, Singapore and Hong Kong, where will companies spend money on ESG services between now and 2029, what will they buy, who signs off, and how can an independent consultant reach them? The answer differs sharply by market, and the main driver is timing. Each market has put sustainability reporting on a dated path, but those paths start and accelerate in different years.'),
    h2('Five findings that should shape your plan'),
    ...H.numbered([
      '**Malaysia has the strongest momentum right now.** The National Sustainability Reporting Framework (NSRF) moves all Bursa-listed companies and large non-listed companies (group revenue of RM2 billion or more) onto IFRS S1 and S2 in three waves: FY2025, FY2026 and FY2027. Reasonable assurance of Scope 1 and 2 emissions is targeted from FY2027 for the largest issuers, and Scope 3 is phased in from FY2027 to FY2030 [20,21,89]. Around 980 listed companies are affected {E}. Supply-chain pressure in electronics, palm oil, steel and data centres adds demand on top of regulation.',
      '**Singapore is the most developed ecosystem but has slowed for most companies.** In August 2025 the regulators kept FY2025 ISSB climate reporting for the 30 STI constituents but deferred other listed companies to FY2028 (market cap of S$1 billion or more) or FY2030 (below S$1 billion), made Scope 3 voluntary for non-STI companies, moved limited assurance to FY2029 and pushed large non-listed companies to FY2030 [1,2]. Fees are the highest in the region and grants co-fund the work, so Singapore stays valuable, but mainly for partnerships, premium niches and grant-funded SME projects in 2026 and 2027.',
      '**Indonesia is the biggest coming wave.** Indonesia ratified PSPK 1 and PSPK 2 (based on IFRS S1 and S2) in July 2025, effective 1 January 2027 [40]. An OJK draft regulation consulted on in February and March 2026 would phase in standards-based reporting from FY2027 to FY2029, add mandatory independent assurance and require transition plans [41,42]. Industrial companies must already report GHG data to the Ministry of Industry [49]. Very few providers can deliver ISSB-quality work in Bahasa Indonesia, so the gap is real, but it needs a local partner.',
      '**Hong Kong is large, mature and crowded at the low end.** More than 2,700 issuers already publish ESG reports. Scope 1 and 2 disclosure became mandatory for all Main Board issuers from FY2025, LargeCap issuers move to full climate disclosure including Scope 3 from FY2026, and the government roadmap targets full ISSB adoption for large publicly accountable entities by 2028, backed by a proposed assurance regime [62,63,66]. New money will flow to assurance readiness, Scope 3 and transition plans, mostly through existing CPA-firm relationships.',
      '**What clients will buy, 2026 to 2029:** ISSB/IFRS S2 gap assessments and first reports; GHG data systems built to pass assurance; Scope 3 and supplier data programmes; climate scenario analysis; transition plans; export carbon data for EU rules (CBAM, EUDR, battery carbon footprint); and low-cost SME packages funded by grants, tax deductions or bank programmes.',
    ]),
    h2('Recommended positioning'),
    table({
      headers: ['Market', 'Role in your plan', 'Lead offer', 'First targets', 'Main risk'],
      widths: [1.2, 1.6, 2.2, 2.2, 2],
      rows: [
        ['Malaysia', 'Primary revenue market from month 1', 'NSRF/IFRS S2 readiness and first report; GHG assurance-readiness; supplier carbon accounting', 'Group 2 Main Market issuers (FY2026 first year), Group 3 ACE issuers and large non-listed groups (FY2027), E&E and palm oil exporters', 'Price pressure from mid-tier audit firms; carbon tax on hold weakens urgency for some emitters'],
        ['Indonesia', 'Build over 12 months with a local partner', 'PSPK readiness (gap assessment, data systems, training in Bahasa); manufacturing GHG inventories', 'IDX Main Board issuers, large banks, palm oil, nickel, cement and textile exporters', 'Language, relationship-driven buying, regulatory timing slippage, rupiah weakness'],
        ['Singapore', 'Hub, partnerships and premium niche', 'Scope 3 supplier programmes; grant-funded SME carbon accounting; transition plans for bank borrowers', 'MNC regional HQs, carbon-software vendors, SMEs supplying MNCs, S$1bn+ listed companies preparing for FY2028', 'Deferrals reduce near-term listed demand; dense competition'],
        ['Hong Kong', 'Opportunistic, partner-led', 'Assurance-readiness, Scope 3 for LargeCap, HKFRS S1 readiness', 'CPA firms needing capacity; LargeCap and MidCap issuers; property and logistics', 'Commoditised report writing, Cantonese/Mandarin relationships, mainland-linked clients'],
      ],
      size: 16,
    }),
    spacer(),
    callout('Biggest strategic caution', [
      'Regulators in all four markets have shown they will delay obligations when costs bite: Singapore deferred most climate reporting in 2025, Malaysia put its carbon tax on hold in April 2026, and Indonesia has repeatedly postponed its carbon tax [1,23,45]. AI tools are also compressing the price of report drafting [77]. Build offers around data systems, assurance readiness and decisions (targets, transition plans, supplier programmes), not around writing reports. {A}',
    ], { fill: COLORS.warnFill, edge: 'A35200' }),
  ];
}

function howToRead() {
  return [
    h1('How to read this report'),
    h2('Evidence labels'),
    p('Every important claim carries a label so you can see how much weight it bears.'),
    table({
      headers: ['Label', 'Meaning'],
      widths: [1.3, 5],
      rows: [
        ['{F}', 'Confirmed fact from a regulator, exchange, government body or the primary document, or from reputable reporting of it.'],
        ['{E}', 'Industry estimate: a figure published by a market participant, vendor or research firm, or a price range assembled from limited public data. Treat as directional.'],
        ['{A}', 'Analyst view: an interpretation of the evidence, including scoring and ranking in this report.'],
        ['{I}', 'Strategic inference: a conclusion about what the evidence means for your business, which you should test in the market.'],
      ],
    }),
    spacer(),
    h2('Regulatory status labels'),
    table({
      headers: ['Label', 'Meaning'],
      widths: [1.3, 5],
      rows: [
        ['{IF}', 'Regulation already in force and producing obligations now.'],
        ['{AN}', 'Formally announced or finalised, with a set future effective date.'],
        ['{PR}', 'Proposed, under consultation, pending legislation, or announced and then put on hold.'],
        ['{VO}', 'Voluntary framework, guidance or market practice.'],
      ],
    }),
    spacer(),
    h2('Currency and pricing'),
    p('Prices are shown in local currency with an approximate US dollar equivalent. Planning exchange rates (late September 2026, rounded): **US$1 = S$1.28 = RM4.08 = IDR 17,900 = HK$7.80** {E}. Rupiah and ringgit have moved meaningfully during 2026, so refresh conversions before quoting.'),
    h2('Citations'),
    p('Bracketed superscript numbers such as [20] refer to the numbered source list at the end of the document, which includes links. Where a figure comes from a vendor or blog rather than a regulator, it is labelled as an estimate.'),
    h2('Limitations'),
    ...bullets([
      'Research was conducted through web sources available up to 2 October 2026. Several regulator websites could not be opened directly from the research environment, so some details rely on law-firm, Big Four and specialist summaries of the primary documents. Confirm dates against the regulator before using them in client material.',
      'Two items were still moving at the cut-off date: the final form of Indonesia\'s OJK regulation and the outcome of Hong Kong\'s AFRC assurance consultation. Both are labelled as proposed.',
      'Public pricing data for ESG consulting is thin in all four markets. Price ranges are estimates built from the few public anchors available (grant caps, published vendor prices, listed service prices and typical day rates) and should be validated through your first proposals.',
      'Scores in Parts 8, 9 and 15 are the analyst\'s judgement, made transparent so you can adjust weights.',
    ]),
  ];
}

module.exports = { cover, contents, execSummary, howToRead };
