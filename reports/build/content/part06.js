const H = require('../helpers');
const { p, h1, h2, table, callout } = H;

const rows = [
  ['Ease of entry', 'Easy to start, hard to stand out. English, transparent procurement, fast company checks {A}', 'Easy. English widely used in business; buyers open to non-Big Four providers if credible {A}', 'Hard. Relationship-led, Bahasa preferred, longer sales cycles {A}', 'Moderate. English works for listed companies; Cantonese and Mandarin matter in mid-market and A+H issuers {A}'],
  ['Need for local presence', 'Low for advisory; helpful for grant-funded SME work where clients expect site visits {A}', 'Low to moderate; occasional KL or Penang visits close deals {A}', 'High; a local partner or associate is close to essential {A}', 'Moderate; local partner helps with Chinese-language clients {A}'],
  ['Local relationships', 'Important but meritocratic; referrals from partners and alumni networks work {A}', 'Important; referrals from audit firms, banks and associations carry weight {A}', 'Critical; introductions through partners, associations and alumni {A}', 'Important; CPA firm and company secretary relationships drive most issuer work {A}'],
  ['Language', 'English {F}', 'English for listed and MNC clients; Bahasa Malaysia helpful for SMEs and government programmes {A}', 'Bahasa Indonesia for most client work and all training; English with top issuers and MNC subsidiaries {A}', 'English and Traditional Chinese; Mandarin for mainland-linked clients {A}'],
  ['Business culture', 'Process-driven, price-aware, evidence-based; values credentials {A}', 'Relationship and trust first, then price; hierarchical decision-making in family groups {A}', 'Hierarchical, consensus-building, face-to-face preferred {A}', 'Fast-paced, cost-driven, deadline-focused around reporting season {A}'],
  ['Local partners available', 'Many: mid-tier firms, software vendors, associations {F}', 'Many: mid-tier audit, company secretarial, engineering firms, SEDG adopters {A}', 'Fewer high-quality partners; report-writing agencies and environmental consultancies most accessible {A}', 'Many CPA firms and boutiques {A}'],
  ['Ability to work remotely', 'High {A}', 'High {A}', 'Moderate; data work remote, workshops in person {A}', 'High for technical work; relationship meetings in person {A}'],
  ['Subcontracting to larger firms', 'Possible with global consultancies and software vendors; Big Four use specialists sparingly {A}', 'Good: mid-tier firms and Big Four are capacity-constrained as Groups 2 and 3 arrive {I}', 'Good later (2027-28) as PSPK work peaks; Big Four and local agencies will need help {I}', 'Good with CPA firms preparing for assurance; Big Four for Scope 3 data {I}'],
  ['Partnering with accounting firms', 'Good with mid-tier firms {A}', 'Very good; the strongest channel {I}', 'Good with network firms (Crowe, RSM, BDO affiliates) {A}', 'Very good; many small CPA firms need ESG depth {I}'],
  ['Partnering with certification bodies', 'Referral relationships; they cannot advise the clients they verify {A}', 'Same; SIRIM QAS and international TIC firms {A}', 'Sucofindo, Surveyor Indonesia and international TIC firms {A}', 'HKQAA and international TIC firms; potential accredited assurance providers {A}'],
  ['Partnering with software providers', 'Very good; many vendors need implementation partners [16] {A}', 'Good; local platforms and regional vendors expanding {A}', 'Good; Jejakin and regional vendors {A}', 'Moderate {A}'],
  ['Client procurement approach', 'Formal proposals with 2-3 quotes; grant rules shape scope {A}', 'Proposals with quotes; board approval for listed companies; often bundled with audit or secretarial work {A}', 'Formal tenders for large firms and SOEs; relationship-based awards for private groups {A}', 'Quote-based, price-led for small caps; panels for large caps {A}'],
  ['LinkedIn effectiveness', 'High {A}', 'High for listed and MNC decision makers {A}', 'Moderate; WhatsApp and personal introductions often work better {A}', 'Moderate to high {A}'],
  ['Cold email effectiveness', 'Low to moderate; better when tied to a deadline or grant {A}', 'Moderate when tied to NSRF group deadlines {A}', 'Low unless in Bahasa and from a known name {A}', 'Low to moderate {A}'],
  ['Conferences and events', 'Ecosperity Week (May) [86], Singapore International Energy Week (26-30 Oct 2026) [87], ISCA and SGX events {F}', 'IGEM (7-9 Oct 2026) [39], Bursa and SC sustainability events, UNGCMYB forums {F}', 'Indonesia International Sustainability Forum (6-7 Oct 2026), ISF [61], ASRRAT awards [56] {F}', 'Eco Expo Asia (26-29 Oct 2026) [79], HKQAA and HKGFA forums, BEC events {F}'],
  ['Industry associations', 'SBF, SMF, SCCCI, Sustainability Alliance, ISCA, SID {F}', 'FMM, MSIA, MISIF, MPOA, SME Association, MIA, ICDM, UNGCMYB {F}', 'Kadin, APINDO, GAPKI, API (textiles), IAI, IBCSD {F}', 'HKGCC, FHKI, HKSMEA, HKICPA, BEC, HKGFA {F}'],
  ['Government ESG programmes', 'ESP, SRG, EDGE; Enterprise Singapore-supported trade association cohorts [6,7,8] {F}', 'ESG tax deduction, SEDG, i-ESG, JC3 SME Focus Group, CGC guarantee [28,30,31,34] {F}', 'OJK sustainable finance programmes, Kemenperin industrial decarbonisation [50] {F}', 'GSF Grant Scheme, HKPC programmes, CASG tools [70,71] {F}'],
  ['Practical admin', 'Invoicing from abroad is common; services performed in Singapore by non-residents may attract withholding tax {E}', 'Fees for services performed in Malaysia by non-residents may attract withholding tax {E}', 'Payments to non-residents usually attract withholding tax unless a treaty applies; in-country work needs the right visa {E}', 'Generally simple to invoice from abroad {E}'],
];

module.exports = () => [
  h1('Part 6: Business development conditions', false),
  p('How hard is it for a foreign or remote consultant to win clients in each market? The table summarises the practical conditions. Tax and visa points are general observations; confirm them with an adviser before structuring contracts.'),
  table({ headers: ['Factor', 'Singapore', 'Malaysia', 'Indonesia', 'Hong Kong'], widths: [1.3, 2.4, 2.4, 2.4, 2.4], rows, landscape: true, size: 15 }),
  H.spacer(),
  callout('Bottom line on market access', [
    'Singapore and Malaysia can be developed largely remotely. Malaysia rewards an outsider more because buyers are less brand-driven and capacity is tighter. Hong Kong is accessible for technical work but relationships run through CPA firms. Indonesia needs a local partner and Bahasa delivery from the start. {I}',
  ], { landscape: true }),
];
