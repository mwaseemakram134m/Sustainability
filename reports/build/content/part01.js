const H = require('../helpers');
const { p, h1, h2, table, spacer, callout } = H;

const kv = (rows) => table({ headers: ['Dimension', 'Assessment'], widths: [1.55, 5.2], rows, size: 16 });

function singapore() {
  return [
    h2('1.1 Singapore'),
    p('Singapore is the most mature ESG market in Southeast Asia and the regional headquarters base for many of the multinationals that drive supplier requirements across the region. Its regulators moved first on ISSB-based climate reporting, then slowed the timetable for most companies in August 2025. The result is a market with deep expertise, high fees and strong government co-funding, but with near-term listed-company demand concentrated in the largest issuers. {A}'),
    kv([
      ['Size and maturity', 'Most mature in the four-market set. 643 SGX-listed companies have produced sustainability reports since FY2016 under SGX rules {F}. ESG and sustainability consulting across Southeast Asia is estimated to grow at about 17.6% a year to 2031 [88] {E}. Singapore captures a disproportionate share of regional sustainability budgets because regional HQs sit here {A}.'],
      ['Current business adoption', 'High among listed companies, MNC subsidiaries and banks. Low among SMEs: a 2025 survey of 560+ SMEs found three in four had taken no concrete sustainability steps, about half share carbon data with customers and fewer than 30% collect emissions data from their own suppliers [11] {F}.'],
      ['Government ESG and climate policy', 'Singapore Green Plan 2030 and net zero by 2050 {F}. Carbon tax on a rising path (below). Energy Conservation Act obligations for large energy users, Green Mark for buildings and a green data centre roadmap {F}.'],
      ['Mandatory sustainability reporting', 'All listed companies report Scope 1 and 2 from FY2025 {IF}. STI constituents report full ISSB-based climate disclosures from FY2025 and Scope 3 from FY2026 {IF}. Non-STI companies with market cap of S$1 billion or more follow from FY2028 and those below S$1 billion from FY2030; Scope 3 is voluntary for non-STI companies until further notice {AN}. Large non-listed companies (revenue S$1 billion or more and assets S$0.5 billion or more) deferred to FY2030 {AN} [1,2].'],
      ['Stock exchange requirements', 'SGX RegCo listing rules on sustainability reporting, 27 core ESG metrics, and the ESGenome disclosure portal, now powered by Gprnt (upgraded July 2026 for climate reporting and transition planning) [12] {F}.'],
      ['ISSB / IFRS S1 and S2', 'Climate-first. ACRA consulted from 27 July to 25 October 2026 on SFRS S1 and SFRS S2, based on the ISSB standards; S2 would be mandatory and S1 voluntary [4] {PR}.'],
      ['Carbon reporting', 'Facilities emitting 2,000 tCO2e or more must report emissions; those at 25,000 tCO2e or more pay carbon tax {F}. Listed companies now disclose Scope 1 and 2. External limited assurance of Scope 1 and 2 for listed companies from FY2029 {AN} [1].'],
      ['Carbon pricing', 'Carbon tax raised from S$25 to S$45 per tonne for 2026 and 2027, with S$50 to 80 targeted by 2030 {IF}/{AN}. Taxable facilities may offset up to 5% with eligible international carbon credits under Article 6 rules [5] {F}.'],
      ['Net-zero commitments', 'National net zero by 2050 {F}. Most STI constituents and many large private groups have published targets {A}.'],
      ['Corporate sustainability spending', 'Highest per company in the region {A}. The Sustainability Reporting Grant covers 30% of first-report costs up to S$150,000, which implies large-company projects well above S$500,000 at the top end [6] {I}.'],
      ['Sustainable finance and green financing', 'Singapore accounts for more than half of ASEAN\'s green, social, sustainability and sustainability-linked bond and loan market [14] {F}. Budget 2026 summaries report EFS-Green support for green loans extended to 31 March 2031 {F}.'],
      ['ESG-linked lending', 'MAS Guidelines on Transition Planning for banks, insurers and asset managers were finalised on 5 March 2026 [10] {IF}. Banks will ask corporate borrowers for emissions data and transition plans {I}.'],
      ['Carbon market development', 'Regional carbon services hub (Climate Impact X and many developers and brokers) with Article 6 agreements signed with several host countries, including Ghana, Papua New Guinea and Bhutan [5] {F}.'],
      ['Renewable-energy transition', 'Limited domestic renewables; reliance on imported low-carbon electricity and solar on rooftops and reservoirs {F}. Renewable procurement and Scope 2 market-based accounting matter for data centres and manufacturers {A}.'],
      ['Supply-chain requirements', 'Strong. MNCs headquartered or operating in Singapore push targets down to suppliers; the Gprnt and PwC barometer reports that 91% of MNCs with supply chains touching Singapore set supplier emission targets [11] {E}.'],
      ['International buyer pressure', 'Medium to high, mostly transmitted through MNC procurement and EU-facing customers {A}.'],
      ['SME adoption', 'Low, but heavily subsidised. Enterprise Sustainability Programme (S$180 million, aiming at 6,000 enterprises) [7]; Sustainability Reporting Grant at 50% for SMEs for applications from 1 April 2026 to 31 October 2027 [6]; the new EDGE grant (up to 70% for SMEs, S$100,000 annual cap) from 30 September 2026 [8] {IF}.'],
      ['Demand for ESG professionals', 'Singapore recorded the highest growth in demand for sustainability managers in Asia Pacific since 2016 (41%) and 27% year-on-year growth in roles needing green skills [18] {F}.'],
    ]),
  ];
}

function malaysia() {
  return [
    h2('1.2 Malaysia'),
    p('Malaysia is the fastest-moving market in this study. It has a single national framework (the NSRF) with firm dates, a clear assurance path and a deliberate push to bring SMEs into supply-chain disclosure. The carbon tax that was meant to start in 2026 is on hold, but the reporting and assurance obligations that drive consulting demand are not. {A}'),
    kv([
      ['Size and maturity', 'Mid-maturity, moving fast. Bursa has required sustainability statements since 2016, added TCFD-aligned climate reporting and common indicators in 2022, and amended its Listing Requirements in December 2024 to require reporting under IFRS S1 and S2 [22] {F}. About 980 companies are listed on Bursa {F}.'],
      ['Current business adoption', 'Listed companies comply; quality varies widely below the top 100 {A}. MSME adoption is low: an SME Corp survey found only 19% use environmentally friendly production processes [32] {F}.'],
      ['Government ESG and climate policy', 'National Energy Transition Roadmap (70% renewable capacity by 2050), New Industrial Master Plan 2030, net zero as early as 2050 {F}. NDC 3.0 (October 2025) sets Malaysia\'s first absolute target: cut 15 to 30 MtCO2e from peak by 2035 and peak no later than 2034 [27] {F}.'],
      ['Mandatory sustainability reporting', 'NSRF: Group 1 (Main Market, market cap RM2 billion or more) from FY2025 {IF}; Group 2 (other Main Market issuers) from FY2026 {IF}; Group 3 (ACE Market issuers and large non-listed companies with group revenue of RM2 billion or more) from FY2027 {AN}. Climate-first relief for two years (three for Group 3) [20,21].'],
      ['Stock exchange requirements', 'Bursa Listing Requirements embed IFRS S1 and S2; Bursa\'s Centralised Sustainability Intelligence (CSI) platform with LSEG supports data and reporting {F}. HKEX recognised Bursa as a stock exchange for secondary listings in July 2026 [38] {F}.'],
      ['ISSB / IFRS S1 and S2', 'Adopted in full through the NSRF {F}. Scope 3 phased: Group 1 from FY2027, Group 2 from FY2028, Group 3 from FY2030 [89,90] {AN}.'],
      ['Carbon reporting and assurance', 'Reasonable assurance on Scope 1 and 2 targeted from FY2027 (Group 1), FY2028 (Group 2) and FY2029 (Group 3) [20] {AN}. MGTC\'s LCOS platform (RM5,000 a year) and the SEDG GHG calculator support SMEs [35,29] {F}.'],
      ['Carbon pricing', 'Carbon tax on iron and steel and energy was announced for 2026 [24], then put on hold on 21 April 2026 because of cost pressures from the Middle East conflict [23] {PR}. The National Carbon Market Policy was launched in April 2026 [25] {IF}. A Climate Change Bill with an MRV system and a domestic emissions trading scheme was slated for tabling in 2026 [26] {PR}.'],
      ['Net-zero commitments', 'National: as early as 2050 {F}. Petronas, TNB and most large GLCs have 2050 targets {F}. Many Group 2 companies have no target yet {A}.'],
      ['Corporate sustainability spending', 'Rising from a low base {A}. The ESG tax deduction lets companies and MSMEs deduct up to RM50,000 a year (YA2024 to YA2027) for ESG reporting, GHG tracking software, verification and consultants [30] {IF}.'],
      ['Sustainable finance and green financing', 'Early leader in green and SRI sukuk; BNM\'s Climate Change and Principle-based Taxonomy guides bank classification {F}. CGC and 18 banks offer a RM1 billion portfolio guarantee for SME ESG financing [34] {F}.'],
      ['ESG-linked lending', 'Banks are building client emissions data through the JC3 SME Focus Group, the ESG Jumpstart portal and the Greening Value Chain programme, which offers SMEs affordable disclosure solutions [33,34] {F}.'],
      ['Carbon market development', 'Bursa Carbon Exchange (voluntary) since 2022; NCMP sets the framework for voluntary and compliance markets [25] {F}.'],
      ['Renewable-energy transition', 'Corporate Renewable Energy Supply Scheme (CRESS): 1.3 GW of agreements by June 2025, all linked to Johor data centres [36] {F}. Average base tariff up about 14% from July 2025 {F}.'],
      ['Supply-chain requirements', 'Strong and specific: electronics and semiconductors (purchased electricity was 77% of the sector footprint in 2023 [37]), palm oil and wood (EUDR), steel and aluminium (CBAM), gloves (buyer audits) {F}.'],
      ['International buyer pressure', 'High for export manufacturers; MNC customers, EU importers and banks already request Scope 1, 2 and material Scope 3 data from suppliers below the NSRF thresholds [89] {E}.'],
      ['SME adoption', '1.09 million MSMEs (96.1% of establishments, 39.5% of GDP, 48.7% of employment, 14.3% of exports) [32] {F}. Simplified ESG Disclosure Guide (SEDG) v2 aligns with the ASEAN SME guide [28] {VO}.'],
      ['Demand for ESG professionals', 'Strong; mid-tier audit firms and company secretarial firms are building ESG teams and buying in specialists {A}.'],
    ]),
  ];
}

function indonesia() {
  return [
    h2('1.3 Indonesia'),
    p('Indonesia is the largest economy in the set and the least mature ESG services market. Sustainability reports have been mandatory for listed companies and financial institutions since the POJK 51/2017 phase-in, but most are narrative. The shift to ISSB-based PSPK standards from 2027, an OJK proposal for mandatory assurance, mandatory GHG reporting for industry and heavy export exposure (palm oil, nickel, textiles) set up a large step-change in demand from 2026 to 2029. {A}'),
    kv([
      ['Size and maturity', 'Large but early. POJK 51/2017 requires annual sustainability reports from financial institutions, issuers and public companies, phased in from 2019 to 2025 {IF}. IDX reported 873 listed companies submitting sustainability reports [54] {F}; about 960 companies were listed in mid-2026 [55] {F}. Reports are largely narrative and GRI-referenced {A}.'],
      ['Current business adoption', 'Listed companies, banks and exporters report; quality is uneven and quantitative GHG data is often weak {A}. Mid-sized private companies and MSMEs have low adoption {A}.'],
      ['Government ESG and climate policy', 'Official net zero by 2060. President Prabowo stated at the G20 in November 2024 an aim of net zero by 2050 and phasing out coal and fossil power within 15 years; the second NDC does not yet reflect this [53] {F}. RUPTL 2025-2034 plans 69.5 GW of new capacity including 42.6 GW of renewables and 10.3 GW of storage [52] {F}.'],
      ['Mandatory sustainability reporting', 'PSPK 1 and PSPK 2 (based on IFRS S1 and S2) ratified 1 July 2025, effective 1 January 2027 [40] {AN}. OJK draft regulation (public consultation 12 February to 13 March 2026) would phase in PSPK-based reporting from FY2027 to FY2029, starting with Main Board issuers, large banks and the stock exchange, and add mandatory assurance and a transition plan [41,42] {PR}.'],
      ['Stock exchange requirements', 'IDX enforces OJK reporting; ESG indices (IDX ESG Leaders, SRI-KEHATI) and IDXCarbon exist {F}.'],
      ['ISSB / IFRS S1 and S2', 'Adopted through PSPK 1 and 2 with local adaptations {F} [43].'],
      ['Carbon reporting', 'Ministry of Industry Circular No. 2 of 2025 requires industrial companies and industrial estate operators to report GHG and air pollutant data through SIINas on a self-assessment basis [49] {IF}. PROPER environmental ratings cover thousands of companies (3,694 participants in 2023) {F}.'],
      ['Carbon pricing', 'Power-sector ETS since 2023, covering 146 coal plants in 2024, with gas plants added in 2025 to 2027 and all fossil plants, including captive plants, from 2027 [45] {IF}/{AN}. Carbon tax legislated in 2021 but still not implemented [45] {PR}. Presidential Regulation 110/2025 replaced 98/2021, reopened international carbon trading and created a national carbon unit registry [44] {IF}.'],
      ['Net-zero commitments', 'National 2060 (2050 aspiration). State-owned enterprises and large conglomerates have announced targets; many mid-caps have none {A}.'],
      ['Corporate sustainability spending', 'Low per company but rising; top-tier banks and resource companies spend most {A}.'],
      ['Sustainable finance', 'Indonesia Taxonomy for Sustainable Finance (TKBI): v1 February 2024, v2 February 2025 (construction, real estate, transport, forestry, palm oil), v3 March 2026 [51] {F}. Sovereign green sukuk programme {F}.'],
      ['ESG-linked lending', 'Banks run sustainable finance action plans under POJK 51; financed-emissions and transition-plan expectations will rise with the OJK draft {I}.'],
      ['Carbon market development', 'IDXCarbon launched 2023 and opened to international buyers in January 2025, but volumes are thin: total transactions of about IDR 78 billion (US$4.9 million) since launch [47] and 119,673 tonnes year-to-date in February 2026 [46] {F}.'],
      ['Renewable-energy transition', 'JETP financing approvals of roughly US$3.1 billion by December 2025 {E}; RUPTL renewables pipeline as above; coal still expanding in the near term [52] {F}.'],
      ['Supply-chain requirements', 'Very strong in palm oil (EUDR from 30 December 2026 for large and medium operators [82]), nickel and EV batteries (EU battery carbon-footprint thresholds, with non-compliant EV batteries barred from February 2028 [60]), textiles and footwear (brand programmes), pulp and paper, coffee, cocoa and rubber {F}.'],
      ['International buyer pressure', 'High for commodity and manufacturing exporters; low for domestic-facing firms {A}.'],
      ['SME adoption', 'About 65 million MSMEs, around 60% of GDP and 97% of employment [58] {F}. Awareness is low and willingness to pay is limited outside export supply chains {A}.'],
      ['Demand for ESG professionals', 'Rising quickly ahead of PSPK; shortage of practitioners who can do ISSB-quality climate work in Bahasa Indonesia {A}.'],
    ]),
  ];
}

function hongkong() {
  return [
    h2('1.4 Hong Kong'),
    p('Hong Kong has the largest number of companies already reporting under mandatory ESG rules, Asia\'s leading green and sustainable bond market and a clear path to full ISSB adoption by 2028. It is also the most crowded low-end ESG reporting market in the study, with many local firms writing reports for small-cap issuers at low prices. New money is moving to Scope 3, assurance readiness and transition planning. {A}'),
    kv([
      ['Size and maturity', 'Mature. More than 2,700 listed companies in 2026 (2,726 in May 2026) [80] {F}, all subject to the HKEX ESG Reporting Code since 2016 {F}. First-year reviews show 99% of issuers complied with at least 90% of the rules reviewed [65] {F}.'],
      ['Current business adoption', 'High in form, uneven in depth. Many small caps outsource the whole report {A}. Among SMEs, 77% of 302 firms surveyed by HKSMEA in December 2024 rated ESG important, though research from HKU finds limited risk awareness [73] {F}.'],
      ['Government ESG and climate policy', 'Climate Action Plan 2050: carbon neutrality before 2050 and a 50% cut by 2035 against 2005 [75] {F}. The 2025 Policy Address backs expansion of the Core Climate carbon platform and links with Greater Bay Area carbon markets [76] {F}.'],
      ['Mandatory sustainability reporting', 'HKEX Appendix C2 Part D (based on IFRS S2): Scope 1 and 2 mandatory for all issuers from FY2025 {IF}; Hang Seng Composite LargeCap constituents report full climate disclosures, including Scope 3, from FY2026 {IF}; other Main Board issuers on comply-or-explain [66] {IF}.'],
      ['Stock exchange requirements', 'HKEX will consult in 2027 on replacing Appendix C2 with a requirement to report under the HKFRS Sustainability Disclosure Standards, phased by issuer size [62] {AN}.'],
      ['ISSB / IFRS S1 and S2', 'HKFRS S1 and S2 issued December 2024, fully aligned with IFRS S1 and S2, effective 1 August 2025 {F}. Roadmap: large publicly accountable entities to adopt fully no later than 2028 [62] {AN}.'],
      ['Carbon reporting and assurance', 'AFRC proposed (29 December 2025) mandatory limited assurance for all entities reporting under the HK standards: Scope 1 and 2 from the third year of mandatory reporting, all other disclosures from the fifth year, carried out by registered providers that can include accredited non-CPA firms [63,64] {PR}.'],
      ['Carbon pricing', 'No domestic carbon tax or ETS {F}. Core Climate (HKEX) serves voluntary trading {F}.'],
      ['Net-zero commitments', 'Most LargeCap issuers have targets; property developers and utilities lead {A}.'],
      ['Corporate sustainability spending', 'High at the top, compressed at the bottom {A}. One industry estimate puts first-year compliance cost for a listed company at HK$1.5 to 5 million including systems, consultants and assurance [77] {E}.'],
      ['Sustainable finance', 'US$76.5 billion of green and sustainable debt issued in Hong Kong in 2025; Hong Kong arranged 40% of Asia\'s international green and sustainable bonds [69] {F}. Green and Sustainable Finance Grant Scheme extended to 2027 and refined from 24 April 2026 [70] {F}.'],
      ['ESG-linked lending', 'The CASG questionnaire for non-listed companies gives banks a standard template to collect climate data from SMEs and private borrowers [71] {VO}. The CASG\'s 2026 to 2028 priorities put transition planning and assurance first [67] {F}.'],
      ['Carbon market development', 'Core Climate; Greater Bay Area linkages proposed {PR}.'],
      ['Renewable-energy transition', 'Limited local renewables; decarbonisation runs mainly through power-sector fuel switching and buildings {F}. The amended Buildings Energy Efficiency Ordinance widens coverage to 11 building types including data centres and halves the audit cycle to five years; fully in force 20 September 2026 [74] {IF}.'],
      ['Supply-chain requirements', 'Moderate. Retail, consumer and electronics groups with Greater Bay Area and EU supply chains face Scope 3 and EU data demands {A}. Mainland China\'s first mandatory sustainability reports came from 457 listed companies in 2026, and a mainland climate standard is expected to be mandatory for listed companies from 2027 [78] {AN}.'],
      ['International buyer pressure', 'Moderate, mostly through EU customers and global brands {A}.'],
      ['SME adoption', 'About 360,000 SMEs, over 98% of enterprises and about 43% of private-sector employment [72] {F}.'],
      ['Demand for ESG professionals', 'Strong for assurance-capable and ISSB-literate staff; oversupplied for generic report writers {A}.'],
    ]),
    spacer(),
    callout('What Part 1 means for you', [
      'Singapore and Hong Kong have the most money in ESG today. Malaysia and Indonesia have the most new obligations arriving between 2026 and 2029. A remote consultant gains most where obligations are new, dated and arriving faster than local capacity can grow: Malaysia first, Indonesia next. {I}',
    ]),
  ];
}

module.exports = () => [
  h1('Part 1: Market overview by country'),
  p('Each profile covers the 19 dimensions requested. Labels show the strength of evidence and the status of each rule.'),
  ...singapore(),
  ...malaysia(),
  ...indonesia(),
  ...hongkong(),
];
