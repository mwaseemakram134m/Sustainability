const H = require('../helpers');
const { p, h1, table, callout } = H;

const rows = [
  ['ESG market maturity', '**Most mature.** Reporting since FY2016, ISSB climate rules in force for the top tier, dense ecosystem of consultants, platforms and assurers.', '**Mid-maturity, rising fast.** Reporting since 2016, ISSB adopted in full through the NSRF; quality drops sharply below the top 130 issuers.', '**Early.** Mandatory narrative reporting since 2019-25; ISSB-based standards only from 2027.', '**Mature in reporting volume.** 2,700+ issuers report; depth of climate analysis uneven below LargeCap.'],
  ['Current ESG demand', '**Strong but concentrated** in STI firms, banks, MNC HQs and grant-funded SMEs.', '**Strong and broadening:** Group 1 in year two, Group 2 in year one, Group 3 preparing.', '**Moderate today;** driven by POJK 51 reports, SIINas GHG and exporters.', '**Strong, recurring:** annual ESG reports for all issuers; LargeCap Scope 3 new in FY2026.'],
  ['Regulatory momentum', '**Slowed for most companies** after Aug 2025 deferrals; picks up again toward FY2028-30.', '**Highest.** Three reporting waves (FY2025-27), reasonable assurance FY2027-29, Scope 3 FY2027-30.', '**High but pending.** PSPK effective 2027; OJK assurance and transition plans proposed.', '**Steady.** LargeCap 2026, assurance proposed, full ISSB by 2028.'],
  ['Carbon accounting demand', '**Moderate-high:** carbon tax facilities, Scope 1-2 for all listed, MNC supplier data.', '**Very high:** NSRF, reasonable assurance, CBAM, data centres, E&E supply chain.', '**High and rising:** SIINas, power ETS expansion, CBAM, nickel, palm oil.', '**Moderate-high:** Scope 1-2 for all issuers, Scope 3 for LargeCap.'],
  ['ESG reporting demand', '**Moderate near term;** larger from FY2028.', '**Very high 2026-28** for first IFRS S2 reports.', '**Very high 2027-29** if OJK finalises.', '**Very high in volume;** low price at the bottom.'],
  ['SME opportunity', '**Good value per client** thanks to 50-70% co-funding; small pool, crowded.', '**Best overall:** standard formats, tax deduction, bank programmes, export pressure.', '**Largest in number, weakest in ability to pay;** exporters and industrial SMEs are the exception.', '**Moderate;** bank questionnaires and large-customer requests.'],
  ['Scope 3 opportunity', '**High for programme design** (MNC HQs, STI FY2026).', '**High on both sides:** buyers (G1 FY2027, G2 FY2028) and suppliers (E&E, palm).', '**High on the supplier side** (palm, textiles, nickel); regulatory Scope 3 later.', '**High for LargeCap** (FY2026) and retail and property groups.'],
  ['ESG software opportunity', '**Best for vendor partnerships;** many platforms headquartered here.', '**Best for implementation:** tax deduction covers software; Bursa CSI; tight vendor capacity.', '**Emerging;** implementation in Bahasa needed.', '**Moderate;** issuers rely on consultants and spreadsheets.'],
  ['Sustainability training demand', '**High;** SkillsFuture-style funding and professional bodies.', '**High;** HRD Corp-claimable training and director programmes.', '**Very high** for PSPK, in Bahasa.', '**Moderate-high;** director and CPA-firm training.'],
  ['Competition level', '**Very high** at all levels.', '**Moderate;** Big Four stretched, mid-tier still building capability.', '**Low for technical work, high for narrative reports.**', '**Very high** at the low end; moderate for Scope 3 and assurance-readiness.'],
  ['Ease of market entry', '**Easy to enter, hard to stand out.**', '**Easy;** English, receptive to outsiders.', '**Hard;** partner and language required.', '**Moderate;** relationships through CPA firms.'],
  ['Remote consulting potential', '**High.**', '**High.**', '**Moderate;** workshops in person.', '**High for technical work.**'],
  ['Partnership potential', '**High** with software vendors and mid-tier firms.', '**Very high** with mid-tier audit, secretarial firms and banks.', '**Moderate-high** with network audit firms and report agencies.', '**Very high** with CPA firms facing the assurance regime.'],
  ['Pricing potential', '**Highest** fees in the region.', '**Moderate;** offset by volume and incentives.', '**Lowest in USD terms;** large ticket sizes for top issuers.', '**High at the top, compressed at the bottom.**'],
  ['Market growth momentum', '**Moderate now, rising toward 2028.**', '**Fastest.**', '**Second-fastest, back-loaded to 2027-29.**', '**Moderate and steady.**'],
  ['3-5 year opportunity', '**High:** FY2028-30 waves plus assurance; easy access.', '**High:** continued assurance and Scope 3 work after the reporting waves.', '**High upside, execution risk:** depends on OJK and on building local capability.', '**Moderate-high:** full ISSB and assurance by 2028-30, through partners.'],
];

module.exports = () => [
  h1('Part 9: Country comparison', false),
  p('Each cell gives a short verdict in bold followed by the reason. All ratings are analyst judgements based on the evidence in Parts 1 to 8. {A}'),
  table({ headers: ['Factor', 'Singapore', 'Malaysia', 'Indonesia', 'Hong Kong'], widths: [1.35, 2.4, 2.4, 2.4, 2.4], rows, landscape: true, size: 15 }),
  H.spacer(),
  callout('How to use this comparison', [
    'If you can only work one market hard, it is Malaysia. If you can work two, add Singapore as a channel (partners and premium niches). If you have the patience to build, Indonesia is the largest new opportunity of 2027-29. Hong Kong suits partner-led technical subcontracting. {I}',
  ], { landscape: true }),
];
