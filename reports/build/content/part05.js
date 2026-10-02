const H = require('../helpers');
const { p, h1, h2, h3, table, callout, bullets } = H;

const HEAD = ['Segment', 'Examples (not exhaustive)', 'Where they focus', 'What it means for you'];
const W = [1.15, 1.9, 1.9, 2.0];
const T = (rows) => table({ headers: HEAD, widths: W, rows, size: 15 });

const sg = [
  ['Big Four', 'PwC, EY, Deloitte, KPMG', 'STI constituents, banks, MAS-regulated firms, assurance', 'Rarely profitable below about S$100k per engagement; they turn away or under-staff mid-cap and SME work and sometimes subcontract specialists {A}'],
  ['Global sustainability consultancies', 'ERM, Anthesis, South Pole, Ramboll, Arup, WSP, Accenture, strategy houses', 'MNC strategy, net zero, carbon markets, large Scope 3 programmes', 'Potential subcontracting for data-heavy Scope 3 and supplier work {I}'],
  ['Mid-tier audit and advisory', 'Baker Tilly, RSM, BDO, Grant Thornton, Forvis Mazars, Crowe', 'Listed mid-caps, SRG-funded first reports', 'Need specialist capacity for climate scenarios, Scope 3 and data systems; natural partners {I}'],
  ['Carbon and ESG software', 'Gprnt (ESGenome), Unravel Carbon, Terrascope, Zuno Carbon, Susgain and ~18 local carbon accounting start-ups [12,16,17]; global platforms (Workiva, Persefoni, Sweep, Watershed)', 'Data capture and reporting; most need implementation partners for SMEs and mid-caps', 'Implementation and white-label partnerships; avoid competing on software {I}'],
  ['Certification, verification, assurance', 'SGS, TÜV SÜD, Bureau Veritas, DNV, BSI, LRQA; audit firms for assurance', 'GHG verification, ISO 14064, carbon tax MRV verification', 'Referral partners: they cannot also do readiness work for the same client {I}'],
  ['Boutiques and independents', 'Large and growing number of local boutiques and ex-Big Four independents {A}', 'SMEs, small caps, grant-funded projects', 'Crowded; differentiate by sector depth (maritime, semiconductors, REITs) or by delivery inside MNC supplier programmes {I}'],
];

const my = [
  ['Big Four', 'PwC, EY, Deloitte, KPMG Malaysia', 'Group 1 issuers, banks, GLCs', 'Capacity is tight as Groups 2 and 3 arrive; fee floors leave mid and small caps open {A}'],
  ['Mid-tier audit, tax and corporate secretarial', 'Grant Thornton, BDO, Crowe, Baker Tilly, UHY, RSM, Nexia; company secretarial groups', 'Group 2 and ACE issuers, often bundled with audit or secretarial services', 'Strongest partnership channel. Many lack climate scenario, Scope 3 and assurance-readiness depth {A}'],
  ['Engineering and environmental consultancies', 'Local EIA firms; ERM, Arup and others in KL', 'Environmental permitting, energy audits, large industrial clients', 'Partners for site-level data; few do ISSB reporting {A}'],
  ['Carbon and ESG software', 'Bursa CSI platform (with LSEG), MGTC LCOS, Pantas, Lestar ESG (Mandrill Tech) and regional platforms [35]', 'Listed company data capture; SME calculators', 'Implementation demand exceeds vendor capacity; the ESG tax deduction covers software subscriptions [30] {I}'],
  ['Certification and verification', 'SIRIM QAS International, SGS, Bureau Veritas, TÜV, DNV, BSI, Control Union (MSPO, RSPO)', 'Verification, MSPO and RSPO audits, ISO 14064', 'Referral partners for readiness work ahead of reasonable assurance {I}'],
  ['Associations and programmes', 'UN Global Compact Network Malaysia and Brunei, ICDM, MIA and MICPA, CMM SEDG adopters, JC3 SME Focus Group', 'Training and SME programmes', 'Routes to market and credibility; deliver training through them {I}'],
  ['Boutiques and independents', 'Growing pool of KL-based boutiques {A}', 'Small caps and SMEs', 'Fewer specialists than Singapore; quality varies, which favours an experienced provider {A}'],
];

const id = [
  ['Big Four', 'PwC, Deloitte, EY, KPMG Indonesia', 'Large banks, state-owned enterprises, top issuers, assurance', 'Will absorb the top of the PSPK wave; limited capacity below {A}'],
  ['Report-writing agencies', 'Many local sustainability report writers and design agencies; NCCR (runs ASRRAT and training) [56]', 'POJK 51 narrative reports, often bundled with design', 'Cheap but weak on PSPK-level climate analysis; partner or out-compete on technical depth {A}'],
  ['Environmental consultancies', 'Local AMDAL/EIA firms, ERM Indonesia and others', 'Permitting, PROPER, environmental monitoring', 'Data partners for GHG inventories {I}'],
  ['Carbon platforms and developers', 'Jejakin (Scope 1-3 platform, US$2.7m raised) [57], Fairatmos, CarbonEthics', 'Carbon accounting, carbon credit projects', 'Possible implementation partnerships; carbon credit work is crowded {A}'],
  ['Testing, inspection, certification', 'Sucofindo, Surveyor Indonesia, SGS, TÜV Rheinland, Bureau Veritas, Control Union', 'Verification, ISPO and RSPO audits, GHG verification', 'Referral partners once OJK mandates assurance {I}'],
  ['Associations and institutes', 'IAI (accountants), IBCSD, Kadin, GAPKI, APINDO', 'Standards, training, member programmes', 'Key for credibility and introductions {I}'],
];

const hk = [
  ['Big Four', 'PwC, EY, Deloitte, KPMG', 'LargeCap, banks, assurance', 'Dominant at the top; potential subcontracting for Scope 3 and data work {A}'],
  ['Mid-tier and local CPA firms', 'BDO, Grant Thornton, Forvis Mazars, Crowe, Moore, SHINEWING, Baker Tilly and many smaller practices', 'ESG reports for small and mid caps; assurance under the coming regime', 'Main partnership channel. Need ISSB and Scope 3 depth as the AFRC regime arrives {I}'],
  ['Local ESG boutiques', 'Many, e.g. GreenCo, Clenergize, AVISTA and numerous small firms', 'Low-cost ESG report writing for small caps', 'Price competition is intense; avoid the commodity report market {A}'],
  ['Engineering and NGO-linked advisers', 'Arup, WSP, AECOM, Ramboll, ERM; BEC; Carbon Care Asia; HKPC', 'Buildings, energy, carbon audits, SME programmes', 'Partners for building energy data; HKPC and BEC run SME and member programmes {I}'],
  ['Software', 'Diginex (diginexESG) and regional and global platforms', 'Listed-company ESG data', 'Implementation partnerships possible {I}'],
  ['Certification and assurance', 'HKQAA, SGS, BSI, TÜV, Bureau Veritas, DNV, Intertek', 'Verification, ratings, green finance certification', 'Non-CPA providers may seek accreditation under the AFRC proposals; potential allies {I}'],
];

module.exports = () => [
  h1('Part 5: Competitor analysis and market gaps'),
  p('The competitive question for a small consultancy is not "who is in the market" but "which clients do the incumbents serve badly". In every market, the Big Four and global consultancies concentrate on the largest companies and financial institutions, and low-cost local providers concentrate on narrative report writing. The gaps sit between those two groups.'),
  h2('5.1 Singapore'),
  T(sg),
  h3('Gaps a smaller consultancy can exploit'),
  ...bullets([
    'Supplier-side delivery for MNC Scope 3 programmes: MNCs set targets, but someone has to collect and fix SME supplier data across the region. {I}',
    'Grant-funded first reports and carbon footprints for SMEs and S$100m+ private companies using the SRG, ESP and EDGE. {I}',
    'Implementation partner for carbon software vendors who need people to onboard clients, especially in Malaysia and Indonesia. {I}',
    'Readiness work for ≥S$1bn non-STI issuers ahead of FY2028; most will start in 2027. {I}',
  ]),
  h2('5.2 Malaysia'),
  T(my),
  h3('Gaps a smaller consultancy can exploit'),
  ...bullets([
    'IFRS S2 first-time reports for Group 2 (several hundred Main Market issuers) and Group 3 (ACE issuers and large non-listed groups), where Big Four fees do not fit. {I}',
    'Scope 1-2 reasonable-assurance readiness: the shift from limited to reasonable assurance is demanding, and most issuers have never had GHG data tested. {I}',
    'Subcontracted specialist capacity for mid-tier audit and secretarial firms selling NSRF bundles. {I}',
    'Large non-listed groups with RM2bn revenue: no listing-driven ESG history, often family-owned, need an outsourced ESG function. {I}',
    'SME delivery for bank Greening Value Chain programmes and MNC supplier programmes in electronics. {I}',
  ]),
  h2('5.3 Indonesia'),
  T(id),
  h3('Gaps a smaller consultancy can exploit'),
  ...bullets([
    'Technical PSPK capability (climate risk, scenario analysis, GHG to assurance standard) for issuers whose current report writer cannot provide it. {I}',
    'Train-the-team programmes in Bahasa for issuers, through IAI or associations. {I}',
    'Manufacturing GHG inventories for SIINas and CBAM, priced for mid-sized firms. {I}',
    'White-label technical support for local report-writing agencies that want to keep their clients through the PSPK transition. {I}',
  ]),
  h2('5.4 Hong Kong'),
  T(hk),
  h3('Gaps a smaller consultancy can exploit'),
  ...bullets([
    'Scope 3 inventories and supplier data for LargeCap issuers and their mid-cap followers. {I}',
    'Assurance-readiness for issuers before the third mandatory reporting year under the AFRC proposals. {I}',
    'Technical subcontracting for small CPA firms that sell ESG reports but lack climate scenario or Scope 3 expertise. {I}',
    'HKFRS S1 readiness (non-climate sustainability risks) once HKEX consults in 2027. {I}',
  ]),
  H.spacer(),
  callout('Cross-market gap summary', [
    'The most consistent gap across all four markets is **technical delivery for mid-sized companies that have a reporting obligation but no internal team**, sold either directly or through mid-tier audit firms, banks and software vendors. The least attractive space is generic narrative report writing, which is crowded and is being compressed by AI tools. {I}',
  ]),
];
