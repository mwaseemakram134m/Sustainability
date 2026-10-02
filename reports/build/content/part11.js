const H = require('../helpers');
const { p, h1, h2, h3, table, bullets, numbered, callout } = H;

const ch = [
  ['Accounting and audit firms', '**Strong.** Mid-tier firms selling SRG-funded reports need specialists', '**Strongest channel.** Mid-tier and secretarial firms bundle NSRF work', '**Good.** Network firms (Crowe, RSM, BDO affiliates) building PSPK teams', '**Strongest channel.** Small CPA firms need ESG depth before assurance'],
  ['Sustainability consultancies (subcontract)', '**Good** with global firms on Scope 3 and supplier work', '**Good;** Big Four overflow on Group 1 and 2', '**Good from 2027** when PSPK work peaks', '**Good** with Big Four for Scope 3 data'],
  ['Carbon and ESG software vendors', '**Strong;** many vendors need implementation partners', '**Strong;** tax deduction covers subscriptions', '**Moderate;** Jejakin and regional vendors', '**Moderate**'],
  ['ISO and environmental consultancies', '**Moderate;** ISO 14064 and energy audits', '**Good;** EIA and ISO firms have industrial clients', '**Good;** AMDAL and PROPER consultants have client access', '**Moderate;** energy assessors under BEEO'],
  ['Certification bodies', 'Referral only', 'Referral only (SIRIM QAS, TIC firms)', 'Referral only (Sucofindo, TIC firms)', 'Referral; possible future accredited assurance partners'],
  ['Banks', '**Good** for transition-plan referrals', '**Strong;** Greening Value Chain and CGC programmes need delivery partners', '**Moderate;** grows with OJK rules', '**Good** for SME questionnaire packages'],
  ['Chambers and industry associations', '**Strong;** Enterprise SG-funded sector cohorts', '**Strong;** FMM, MSIA, MISIF, MPOA', '**Critical** for credibility (Kadin, APINDO, GAPKI)', '**Moderate;** HKGCC, FHKI, HKSMEA'],
  ['LinkedIn outreach', '**Effective**', '**Effective**', '**Moderate;** pair with WhatsApp and introductions', '**Moderate to effective**'],
  ['Cold email', '**Weak** unless tied to a grant or deadline', '**Moderate** when tied to NSRF group dates', '**Weak** unless in Bahasa via a partner', '**Weak**'],
  ['Webinars', '**Good** for FY2028 tier', '**Very good** for Group 2 and 3 audiences', '**Good** in Bahasa with a partner', '**Moderate**'],
  ['Training (paid or partner-hosted)', '**Good** via ISCA, SID', '**Very good** (HRD Corp-claimable)', '**Very good** (PSPK in Bahasa)', '**Good** for directors and CPA firms'],
  ['Free ESG assessment or checklist', '**Moderate;** many offer it', '**Good;** NSRF readiness checklist by group', '**Good;** PSPK readiness checklist in Bahasa', '**Moderate**'],
  ['White-label carbon accounting', '**Good** for boutiques and vendors', '**Good** for secretarial and audit firms', '**Very good** for report agencies', '**Good** for CPA firms'],
];

module.exports = () => [
  h1('Part 11: Market entry strategy', false),
  p('All four markets can be entered without a local office. The question is which channel produces paying clients fastest in each one. The table rates each channel by market; the sections below set out the recommended route.'),
  table({ headers: ['Channel', 'Singapore', 'Malaysia', 'Indonesia', 'Hong Kong'], widths: [1.4, 1.5, 1.5, 1.5, 1.5], rows: ch, size: 15 }),
  h2('11.1 Malaysia: partner-led plus direct outreach to Group 2 and 3'),
  ...numbered([
    'Sign two or three referral or subcontract agreements with mid-tier audit or company secretarial firms in KL, offering IFRS S2, Scope 3 and assurance-readiness capacity under their brand or yours.',
    'Run a monthly webinar series built on the NSRF calendar ("Group 2: what your first IFRS S2 report must contain", "Group 3: FY2027 is your baseline year", "Reasonable assurance: what auditors will test").',
    'Publish a free NSRF readiness checklist by group and use it as the entry offer, followed by a fixed-price gap assessment.',
    'Register as an HRD Corp training provider (directly or through a partner) so clients can claim training costs.',
    'Approach one or two banks running Greening Value Chain programmes and offer a fixed-price SME package.',
    'Visit KL and Penang quarterly once the pipeline justifies it.',
  ], 'num_my'),
  h2('11.2 Singapore: channel and premium niche'),
  ...numbered([
    'Partner with two or three carbon software vendors as an implementation partner, which also gives you regional leads in Malaysia and Indonesia.',
    'Offer grant-funded SME carbon footprint and first-report packages through one or two trade associations.',
    'Target the non-STI ≥S$1bn tier with a "FY2028 countdown" readiness offer from Q1 2027.',
    'Build a Scope 3 supplier-programme offer that MNC HQs can deploy across their Southeast Asian suppliers.',
  ], 'num_sg'),
  h2('11.3 Indonesia: partner first, then training-led entry'),
  ...numbered([
    'Find a local partner: a network audit firm, an environmental consultancy or a sustainability report agency that lacks PSPK technical depth. Agree a white-label or co-delivery model.',
    'Lead with PSPK training in Bahasa, co-hosted with an association or institute, to build credibility and a contact list.',
    'Convert training attendees into gap assessments and GHG inventories (SIINas-ready).',
    'Add export-driven offers (EUDR, CBAM) through palm oil and industry associations.',
    'Plan in-person visits for workshops; keep analysis remote.',
  ], 'num_id'),
  h2('11.4 Hong Kong: CPA-firm subcontracting'),
  ...numbered([
    'Offer small and mid-sized CPA firms a technical bench for Scope 3, scenario analysis and assurance-readiness work.',
    'Position for the AFRC assurance regime: readiness reviews in the year before the third mandatory reporting year.',
    'Use LinkedIn to reach Heads of Sustainability at LargeCap issuers for Scope 3 and transition-plan work.',
    'Find a Mandarin-capable partner if you want A+H issuers.',
  ], 'num_hk'),
  H.spacer(),
  callout('Most realistic approach by market', [
    '- **Malaysia:** mid-tier audit and secretarial partners plus NSRF-calendar webinars.',
    '- **Singapore:** software vendor partnerships plus grant-funded SME cohorts.',
    '- **Indonesia:** a local delivery partner plus Bahasa training.',
    '- **Hong Kong:** subcontracting to CPA firms. {I}',
  ]),
];
