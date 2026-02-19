/* ═══════════════════════════════════════════════
   BROCE™ Internationalization System
   ═══════════════════════════════════════════════ */

const translations = {
    en: {
        // Gate
        'gate.label': 'Access Code',
        'gate.placeholder': 'Enter password',
        'gate.enterCode': 'Please enter the access code',
        'gate.granted': 'Access granted — entering BROCE',
        'gate.invalid': 'Invalid access code',
        'gate.hint': 'Press Enter ↵ to submit',
        'gate.tagline': 'Invitation Only',
        'gate.footer': '© 2026 BROCE™ — Confidential',

        // Top Note
        'topNote': 'Limited 2026 pilot slots open for EU mobility, active, and longevity cohorts.',

        // Nav
        'nav.problem': 'Problem',
        'nav.intelligence': 'Intelligence',
        'nav.architecture': 'Architecture',
        'nav.gallery': 'Gallery',
        'nav.simulator': 'Simulator',
        'nav.decision': 'Decision Desk',
        'nav.insights': 'Insights',
        'nav.rollout': 'Rollout',
        'nav.faq': 'FAQ',
        'nav.cta': 'Book Pilot',

        // Hero
        'hero.eyebrow': 'BROCE Protection Intelligence Platform',
        'hero.title': 'From protection product to protection intelligence.',
        'hero.lead': 'BROCE combines anatomy-aware risk modeling, adaptive impact architecture, and premium garment integration to increase protection performance and daily adoption at the same time.',
        'hero.cta1': 'Request Pilot Workshop',
        'hero.cta2': 'Open Intelligence Simulator',
        'hero.metric1.value': '2.6mm',
        'hero.metric1.label': 'Target profile',
        'hero.metric2.value': '12',
        'hero.metric2.label': 'Dynamic zones',
        'hero.metric3.value': '91%',
        'hero.metric3.label': 'Pilot readiness',
        'hero.metric4.value': '14d',
        'hero.metric4.label': 'Cycle target',
        'hero.overlay.title': 'Decision Snapshot',
        'hero.overlay.status': 'Program Confidence: High',
        'hero.overlay.detail': 'Persona-weighted protection planning active',

        // Decision Card
        'hero.decision.kicker': 'Current recommendation',
        'hero.decision.title': 'Pro Pilot Track',
        'hero.decision.item1': 'Priority zones: hip, wrist, elbow',
        'hero.decision.item2': 'Integration mode: premium low-profile',
        'hero.decision.item3': 'Validation path: staged cohort rollout',

        // Problem
        'problem.eyebrow': 'Executive Framing',
        'problem.title': 'The protection market does not fail on impact, it fails on adoption.',
        'problem.card1.kicker': 'Observed failure mode',
        'problem.card1.title': 'Protection is often visible, rigid, and dropped after onboarding.',
        'problem.card1.text': 'Traditional systems optimize single-event impact but underperform in long-term wearability, style compatibility, and daily adherence.',
        'problem.card2.kicker': 'BROCE response',
        'problem.card2.title': 'Risk intelligence + wearable elegance + controlled rollout discipline.',
        'problem.card2.text': 'BROCE treats protection as a living decision system where zone design, garment integration, and cohort behavior are optimized together.',

        // Intelligence
        'intel.eyebrow': 'Adaptive Intelligence Engine',
        'intel.title': 'Switch persona logic and see the platform re-prioritize in real time.',
        'intel.aside.kicker': 'Intelligence output',
        'intel.aside.title': 'Zone maps become program decisions',
        'intel.aside.text': 'Every persona profile can map directly into a deployable pilot structure with clear validation gates.',

        // Persona labels
        'persona.activeProfile': 'Active profile',
        'persona.primaryRisk': 'Primary risk',
        'persona.priorityZones': 'Priority zones',
        'persona.moduleProfile': 'Module profile',
        'persona.recommendedTrack': 'Recommended track',
        'persona.bar1': 'Impact relevance',
        'persona.bar2': 'Wearability fit',
        'persona.bar3': 'Aesthetic adoption',
        'persona.bar4': 'Rollout confidence',

        // Architecture
        'arch.eyebrow': 'Engineering Architecture',
        'arch.title': 'Three layers aligned for impact control and daily wearability.',
        'arch.card1.title': 'Adaptive lattice core',
        'arch.card1.text': 'TPMS-inspired response tuned for controlled crush behavior under scenario-specific loads.',
        'arch.card2.title': 'Anatomy-aware mapping',
        'arch.card2.text': 'Body geometry and movement constraints inform module placement and contour strategy.',
        'arch.card3.title': 'Premium garment integration',
        'arch.card3.text': 'Material stack and seam architecture preserve mobility while protecting product quality.',

        // Gallery
        'gallery.eyebrow': 'Design Language',
        'gallery.title': 'Where protection meets aesthetic intelligence.',
        'gallery.subtitle': 'Every seam follows anatomy. Every pad dissolves into fabric. This is what invisible protection looks like — from body mapping to final garment.',
        'gallery.cat.all': 'All',
        'gallery.cat.garment': 'Garments',
        'gallery.cat.detail': 'Details',
        'gallery.cat.pads': 'Pads',
        'gallery.cat.tech': 'Technology',

        // Simulator
        'sim.eyebrow': 'Intelligence Simulator',
        'sim.title': 'Estimate impact reduction and program value before pilot launch.',
        'sim.exposure': 'Weekly exposure hours',
        'sim.risk': 'Environment risk level',
        'sim.adoption': 'Expected adoption rate',
        'sim.reduction': 'Projected incident reduction',
        'sim.value': 'Estimated annual cost avoidance',
        'sim.payback': 'Estimated payback period',
        'sim.tier': 'Recommended rollout track',

        // Decision Desk
        'desk.eyebrow': 'Executive Decision Desk',
        'desk.title': 'Translate strategic assumptions into board-ready deployment choices.',
        'desk.subtitle': 'Tune core constraints and BROCE projects the recommended rollout lane, financial value, and first-wave execution priorities.',
        'desk.objective': 'Strategic objective',
        'desk.cohort': 'Pilot cohort size',
        'desk.budget': 'Annual pilot budget',
        'desk.compliance': 'Compliance strictness',
        'desk.readiness': 'Readiness',
        'desk.lane': 'Recommended lane',
        'desk.riskDrop': 'Projected incident reduction',
        'desk.annualValue': 'Annual cost avoidance',
        'desk.payback': 'Estimated payback',
        'desk.budgetFit': 'Budget fit',
        'desk.horizon': 'Wave-1 horizon',
        'desk.memo': 'Board memo preview',
        'desk.obj.balanced': 'Balanced outcome',
        'desk.obj.reduction': 'Maximum incident reduction',
        'desk.obj.adoption': 'Maximum adoption consistency',
        'desk.obj.velocity': 'Fastest deployment velocity',

        // Desk Memo strings
        'desk.memo.enterprise': 'Use a two-wave program with certification documentation from day one.',
        'desk.memo.pro': 'Run one focused wave, then scale only zones with validated outcomes.',
        'desk.memo.core': 'Start narrow, prove adoption behavior first, and expand after signal quality is stable.',
        'desk.memo.adoption.high': 'Assign adoption KPIs to style, comfort, and usage continuity owners.',
        'desk.memo.adoption.low': 'Anchor adoption KPIs to weekly wear-time and cohort retention metrics.',
        'desk.memo.horizon': 'Target wave-1 horizon',
        'desk.memo.forecast': 'Forecasted annual value',
        'desk.memo.reduction': 'projected reduction',

        // Insights
        'insights.eyebrow': 'Intelligence Briefing',
        'insights.title': 'Preset scenarios and live strategic interpretation.',
        'insights.subtitle': 'Use one-click scenarios to simulate real partner contexts. BROCE composes a live executive brief, priority zone map, and deployment guidance from your chosen assumptions.',
        'insights.scenario': 'Scenario presets',
        'insights.brief': 'Executive brief',
        'insights.zones': 'Priority zone map',
        'insights.capital': 'Capital signal',
        'insights.readiness': 'Readiness signal',
        'insights.execution': 'Execution signal',
        'insights.preset.urban': 'Urban Fleet',
        'insights.preset.rider': 'E-Mobility Network',
        'insights.preset.longevity': 'Longevity Program',
        'insights.preset.insurance': 'Insurance Pilot',

        // Insights generated text
        'insights.headline.balanced': 'Balanced deployment profile with controlled upside.',
        'insights.headline.enterprise': 'Scale-ready profile with strong governance confidence.',
        'insights.headline.pro': 'High-confidence pilot profile with expansion potential.',
        'insights.headline.velocity': 'Fast-learning pilot profile with staged risk control.',
        'insights.obj.balanced': 'balanced value creation',
        'insights.obj.reduction': 'maximum incident reduction',
        'insights.obj.adoption': 'adoption continuity',
        'insights.obj.velocity': 'deployment velocity',
        'insights.zone.highconf': 'high confidence envelopes',
        'insights.zone.guardrail': 'Operational guardrail',
        'insights.zone.governance': 'Governance trigger',

        // Rollout
        'rollout.eyebrow': 'Rollout Blueprint',
        'rollout.title': 'Structured deployment from intake to scaled validation.',
        'rollout.step1': 'Assess',
        'rollout.step1.text': 'Define cohort context, scenario profile, and economic objectives.',
        'rollout.step2': 'Configure',
        'rollout.step2.text': 'Generate persona-specific zone maps and module architecture decisions.',
        'rollout.step3': 'Deploy',
        'rollout.step3.text': 'Integrate into premium garments and launch controlled pilot cohorts.',
        'rollout.step4': 'Validate',
        'rollout.step4.text': 'Measure impact, adoption, and economics before expansion waves.',
        'rollout.gov1.kicker': 'Readiness track',
        'rollout.gov1.title': 'Certification pathway',
        'rollout.gov1.text': 'Program design supports staged certification and compliance progression by market.',
        'rollout.gov2.kicker': 'Readiness track',
        'rollout.gov2.title': 'Manufacturing strategy',
        'rollout.gov2.text': 'Pilot-to-scale architecture aligns modular production, quality control, and cost discipline.',
        'rollout.gov3.kicker': 'Readiness track',
        'rollout.gov3.title': 'Data governance',
        'rollout.gov3.text': 'Profile and simulation logic can run with configurable handling for privacy-sensitive cohorts.',

        // FAQ
        'faq.eyebrow': 'FAQ',
        'faq.title': 'Answers for decision-makers, operators, and investors.',
        'faq.q1': 'Is BROCE positioned as a medical device?',
        'faq.a1': 'No. BROCE is engineered protective apparel. Compliance and certification paths are built per program type and market.',
        'faq.q2': 'Can one program include multiple risk personas?',
        'faq.a2': 'Yes. Mixed cohorts can be configured with persona-specific zone weighting and rollout structures.',
        'faq.q3': 'What differentiates BROCE from standard protectors?',
        'faq.a3': 'Standard protectors optimize isolated impacts. BROCE optimizes impact response, wearability, and adoption economics together.',
        'faq.q4': 'How quickly can a pilot start?',
        'faq.a4': 'After scope alignment, pilot cohorts can start in staged waves with explicit validation checkpoints.',

        // CTA
        'cta.eyebrow': 'Contact',
        'cta.title': 'Build intelligent protection programs with BROCE.',
        'cta.text': 'We are currently onboarding selected partners for mobility, active, and longevity deployments.',
        'cta.email': 'hello@broce.eu',
        'cta.investor': 'Investor Portal',
        'cta.chip1': 'Adaptive risk intelligence',
        'cta.chip2': 'Low-profile engineering',
        'cta.chip3': 'Premium adoption design',

        // Footer
        'footer.tagline': 'Protection intelligence designed for real movement behavior.',
        'footer.about': 'About',
        'footer.technology': 'Technology',
        'footer.products': 'Products',
        'footer.contact': 'Contact',
        'footer.copy': '© 2026 BROCE. All rights reserved.',

        // Units
        'unit.months': 'months',
        'unit.weeks': 'weeks',
        'unit.participants': 'participants',

        // Page-level navigation
        'page.technology': 'Technology',
        'page.products': 'Products',
        'page.about': 'About',
        'page.investor': 'Investor Portal',

        // ── Technology Page ──
        'tech.hero.eyebrow': 'Innovation Lab',
        'tech.hero.title': 'The Science of Invisible Protection',
        'tech.hero.subtitle': 'Revolutionary materials and engineering that redefine what protective apparel can be—comfortable, stylish, and virtually undetectable.',
        'tech.card1.title': 'Impact Absorption Matrix',
        'tech.card1.text': 'Non-Newtonian polymers that remain soft and flexible during normal movement, instantly hardening upon impact to dissipate force across a wider area.',
        'tech.card2.title': 'Biomorphic Fit System',
        'tech.card2.text': '3D body scanning creates custom pad geometries that follow your unique skeletal structure, ensuring zero bulk while maximizing coverage.',
        'tech.card3.title': 'Smart Response Fabric',
        'tech.card3.text': 'TPMS lattice cores detect impact velocity and direction in microseconds, triggering localized stiffening precisely where protection is needed.',
        'tech.card4.title': 'Aerospace Textiles',
        'tech.card4.text': 'Ultra-high-molecular-weight polyethylene and aramid fiber composites deliver unparalleled strength-to-weight ratios.',
        'tech.card5.title': 'Layered Architecture',
        'tech.card5.text': 'Multi-layer construction combines moisture-wicking base, protective core, and premium outer shell into a single seamless garment.',
        'tech.card6.title': 'Thermal Regulation',
        'tech.card6.text': 'Phase-change materials and ventilation zones maintain optimal body temperature during intense activity or varying environments.',
        'tech.highlight.title': 'Protection Without Compromise',
        'tech.highlight.text': 'Our patented integration technology embeds protective elements directly into the garment structure. No external padding, no bulky panels—just clean lines and quiet confidence.',
        'tech.highlight.stat1': 'Impact reduction',
        'tech.highlight.stat2': 'Max thickness',
        'tech.highlight.stat3': 'Coverage',
        'tech.cta.eyebrow': 'Explore Further',
        'tech.cta.title': 'Ready to experience invisible protection?',
        'tech.cta.text': 'Start with our Intelligence Simulator or schedule a pilot workshop.',
        'tech.cta.btn1': 'Explore Platform',
        'tech.cta.btn2': 'Contact Us',

        // ── Products Page ──
        'products.hero.eyebrow': 'The Collection',
        'products.hero.title': 'Invisible Protection, Visible Style',
        'products.hero.subtitle': 'Explore our range of protective apparel designed for every situation.',
        'products.details': 'View Details',
        'products.cta.eyebrow': 'Custom Fit Available',
        'products.cta.title': 'Protection tailored to your exact measurements',
        'products.cta.text': 'Get protection tailored to your exact body geometry with our 3D scanning service.',
        'products.cta.btn': 'Book a Fitting',

        // ── About Page ──
        'about.hero.eyebrow': 'Our Story',
        'about.hero.title': 'Protection Engineered for the Future',
        'about.hero.subtitle': 'We\'re on a mission to make protective apparel invisible—so you can focus on living without limits.',
        'about.mission.title': 'Born from Necessity, Built for Tomorrow',
        'about.mission.text1': 'BROCE began with a simple question: why should protection mean compromise? Every existing solution demanded trade-offs—comfort for safety, style for function.',
        'about.mission.text2': 'We assembled a team of material scientists, fashion engineers, and biomechanics experts to reimagine what protective apparel could be. The result is a new category: invisible protection that adapts to you.',
        'about.values.title': 'What Drives Us',
        'about.value1.title': 'Human First',
        'about.value1.text': 'Every design decision starts with the wearer\'s experience and ends with their confidence.',
        'about.value2.title': 'Layered Innovation',
        'about.value2.text': 'We stack breakthroughs in materials, manufacturing, and design to create something new.',
        'about.value3.title': 'Uncompromising Safety',
        'about.value3.text': 'We exceed industry standards because your safety isn\'t a feature—it\'s the foundation.',
        'about.value4.title': 'Zero Visibility',
        'about.value4.text': 'The best protection is the kind you forget you\'re wearing—until you need it.',
        'about.timeline.title': 'Our Journey',
        'about.tl1.event': 'The Beginning',
        'about.tl1.desc': 'Founding team assembles at the intersection of fashion tech and protective engineering.',
        'about.tl2.event': 'First Prototype',
        'about.tl2.desc': 'Successfully integrate TPMS lattice pads into everyday apparel without visible bulk.',
        'about.tl3.event': 'CE Certification',
        'about.tl3.desc': 'Our impact absorption technology achieves Level 2 CE certification across all protection zones.',
        'about.tl4.event': 'Public Launch',
        'about.tl4.desc': 'BROCE goes public with our flagship collection, redefining protective apparel for the modern world.',
        'about.cta.eyebrow': 'Join Us',
        'about.cta.title': 'Interested in what we\'re building?',
        'about.cta.text': 'Whether you\'re a potential partner, investor, or pilot participant—we\'d love to hear from you.',
        'about.cta.btn': 'Get in Touch',
        'about.cta.btn2': 'Investor Portal',

        // ── Investor Page ──
        'investor.hero.eyebrow': 'Investor Relations',
        'investor.hero.title': 'Building the Category of Precision Bodywear',
        'investor.hero.subtitle': 'BROCE is defining a new market at the intersection of materials science, biomechanics, and fashion engineering.',
        'investor.metric1': 'TAM Europe',
        'investor.metric2': 'Patent Families Filed',
        'investor.metric3': 'Pilot Partners',
        'investor.metric4': 'Public Launch',
        'investor.portal.eyebrow': 'Investor Resources',
        'investor.portal.title': 'Everything you need to evaluate BROCE',
        'investor.card1.title': 'Executive Summary',
        'investor.card1.text': 'One-page thesis, market sizing, and competitive differentiation.',
        'investor.card2.title': 'Financial Projections',
        'investor.card2.text': '5-year P&L, unit economics, and scenario-weighted revenue forecasts.',
        'investor.card3.title': 'IP Portfolio',
        'investor.card3.text': '7 patent families covering TPMS lattice, garment integration, and personalization.',
        'investor.card4.title': 'Market Analysis',
        'investor.card4.text': 'TAM/SAM/SOM breakdown, competitive landscape, and go-to-market strategy.',
        'investor.progress.eyebrow': 'Execution Progress',
        'investor.progress.title': 'From concept to market readiness',
        'investor.progress.label': 'complete',
        'investor.ms1.title': 'Research & IP',
        'investor.ms1.desc': 'Material science validated, patents filed',
        'investor.ms2.title': 'First Prototypes',
        'investor.ms2.desc': 'TPMS lattice pads manufactured & tested',
        'investor.ms3.title': 'Pilot Program',
        'investor.ms3.desc': 'Partner cohorts live, data collection active',
        'investor.ms4.title': 'Market Launch',
        'investor.ms4.desc': 'DTC + B2B channels, EU first',
        'investor.evidence.eyebrow': 'Evidence Base',
        'investor.evidence.title': 'Data-backed validation',
        'investor.ev1.title': 'Impact Performance',
        'investor.ev1.m1': 'Impact reduction',
        'investor.ev1.m2': 'Max pad thickness',
        'investor.ev1.m3': 'Certification',
        'investor.ev2.title': 'Market Opportunity',
        'investor.ev2.m1': 'European TAM',
        'investor.ev2.m2': 'Growth rate',
        'investor.ev2.m3': 'Direct competitors',
        'investor.verified': 'Verified',
        'investor.pending': 'Projected',
        'investor.cta.eyebrow': 'Connect',
        'investor.cta.title': 'Join the BROCE journey',
        'investor.cta.text': 'We are fundraising for our seed round to scale from pilot to production.',
        'investor.cta.btn1': 'Request Deck',
        'investor.cta.btn2': 'Schedule a Call',
    },

    de: {
        // Gate
        'gate.label': 'Zugangscode',
        'gate.placeholder': 'Passwort eingeben',
        'gate.enterCode': 'Bitte Zugangscode eingeben',
        'gate.granted': 'Zugang freigegeben — BROCE wird geladen',
        'gate.invalid': 'Ungültiger Zugangscode',
        'gate.hint': 'Enter ↵ drücken zum Bestätigen',
        'gate.tagline': 'Nur auf Einladung',
        'gate.footer': '© 2026 BROCE™ — Vertraulich',

        // Top Note
        'topNote': 'Begrenzte Pilotplätze 2026 für EU-Mobilität, Aktiv- und Langlebigkeits-Kohorten verfügbar.',

        // Nav
        'nav.problem': 'Problem',
        'nav.intelligence': 'Intelligenz',
        'nav.architecture': 'Architektur',
        'nav.gallery': 'Galerie',
        'nav.simulator': 'Simulator',
        'nav.decision': 'Decision Desk',
        'nav.insights': 'Einblicke',
        'nav.rollout': 'Rollout',
        'nav.faq': 'FAQ',
        'nav.cta': 'Pilot buchen',

        // Hero
        'hero.eyebrow': 'BROCE Protection Intelligence Platform',
        'hero.title': 'Vom Schutzprodukt zur Schutzintelligenz.',
        'hero.lead': 'BROCE kombiniert anatomie-bewusstes Risikomodelling, adaptive Impact-Architektur und Premium-Garment-Integration, um Schutzleistung und tägliche Akzeptanz gleichzeitig zu steigern.',
        'hero.cta1': 'Pilot-Workshop anfragen',
        'hero.cta2': 'Intelligenz-Simulator öffnen',
        'hero.metric1.value': '2,6mm',
        'hero.metric1.label': 'Zielprofil',
        'hero.metric2.value': '12',
        'hero.metric2.label': 'Dynamische Zonen',
        'hero.metric3.value': '91%',
        'hero.metric3.label': 'Pilotbereitschaft',
        'hero.metric4.value': '14T',
        'hero.metric4.label': 'Zyklusziel',
        'hero.overlay.title': 'Entscheidungs-Snapshot',
        'hero.overlay.status': 'Programmvertrauen: Hoch',
        'hero.overlay.detail': 'Persona-gewichtete Schutzplanung aktiv',

        // Decision Card
        'hero.decision.kicker': 'Aktuelle Empfehlung',
        'hero.decision.title': 'Pro Pilot Track',
        'hero.decision.item1': 'Prioritätszonen: Hüfte, Handgelenk, Ellenbogen',
        'hero.decision.item2': 'Integrationsmodus: Premium Low-Profile',
        'hero.decision.item3': 'Validierungspfad: Gestaffelter Kohorten-Rollout',

        // Problem
        'problem.eyebrow': 'Executive Framing',
        'problem.title': 'Der Schutzmarkt scheitert nicht am Aufprall – er scheitert an der Akzeptanz.',
        'problem.card1.kicker': 'Beobachteter Fehlermodus',
        'problem.card1.title': 'Schutz ist oft sichtbar, starr und wird nach dem Onboarding abgelegt.',
        'problem.card1.text': 'Traditionelle Systeme optimieren den Einzelaufprall, aber versagen bei langfristiger Tragbarkeit, Stilkompatibilität und täglicher Nutzung.',
        'problem.card2.kicker': 'BROCE Antwort',
        'problem.card2.title': 'Risikointelligenz + tragbare Eleganz + kontrollierte Rollout-Disziplin.',
        'problem.card2.text': 'BROCE behandelt Schutz als ein lebendiges Entscheidungssystem, bei dem Zonendesign, Kleidungsintegration und Kohortenverhalten zusammen optimiert werden.',

        // Intelligence
        'intel.eyebrow': 'Adaptive Intelligenz-Engine',
        'intel.title': 'Persona-Logik umschalten und die Plattform in Echtzeit neu priorisieren sehen.',
        'intel.aside.kicker': 'Intelligenz-Output',
        'intel.aside.title': 'Zonenkarten werden zu Programmentscheidungen',
        'intel.aside.text': 'Jedes Persona-Profil kann direkt in eine einsatzbereite Pilotstruktur mit klaren Validierungsgates übertragen werden.',

        // Persona labels
        'persona.activeProfile': 'Aktives Profil',
        'persona.primaryRisk': 'Primäres Risiko',
        'persona.priorityZones': 'Prioritätszonen',
        'persona.moduleProfile': 'Modulprofil',
        'persona.recommendedTrack': 'Empfohlener Track',
        'persona.bar1': 'Aufprallrelevanz',
        'persona.bar2': 'Tragbarkeit',
        'persona.bar3': 'Ästhetische Akzeptanz',
        'persona.bar4': 'Rollout-Vertrauen',

        // Architecture
        'arch.eyebrow': 'Engineering-Architektur',
        'arch.title': 'Drei Schichten ausgerichtet für Aufprallkontrolle und tägliche Tragbarkeit.',
        'arch.card1.title': 'Adaptiver Gitterkern',
        'arch.card1.text': 'TPMS-inspirierte Reaktion, abgestimmt auf kontrolliertes Crushverhalten unter szenariospezifischen Lasten.',
        'arch.card2.title': 'Anatomie-bewusstes Mapping',
        'arch.card2.text': 'Körpergeometrie und Bewegungsbeschränkungen bestimmen Modulplatzierung und Konturstrategie.',
        'arch.card3.title': 'Premium-Garment-Integration',
        'arch.card3.text': 'Materialstapel und Nahtarchitektur bewahren Mobilität und schützen die Produktqualität.',

        // Gallery
        'gallery.eyebrow': 'Designsprache',
        'gallery.title': 'Wo Schutz auf ästhetische Intelligenz trifft.',
        'gallery.subtitle': 'Jede Naht folgt der Anatomie. Jedes Pad verschmilzt mit dem Stoff. So sieht unsichtbarer Schutz aus — vom Body-Mapping bis zum fertigen Kleidungsstück.',
        'gallery.cat.all': 'Alle',
        'gallery.cat.garment': 'Kleidung',
        'gallery.cat.detail': 'Details',
        'gallery.cat.pads': 'Pads',
        'gallery.cat.tech': 'Technologie',

        // Simulator
        'sim.eyebrow': 'Intelligenz-Simulator',
        'sim.title': 'Impact-Reduktion und Programmwert vor dem Pilotstart schätzen.',
        'sim.exposure': 'Wöchentliche Expositionsstunden',
        'sim.risk': 'Umgebungsrisiko-Level',
        'sim.adoption': 'Erwartete Akzeptanzrate',
        'sim.reduction': 'Prognostizierte Vorfallreduktion',
        'sim.value': 'Geschätzte jährliche Kostenvermeidung',
        'sim.payback': 'Geschätzte Amortisationszeit',
        'sim.tier': 'Empfohlener Rollout-Track',

        // Decision Desk
        'desk.eyebrow': 'Executive Decision Desk',
        'desk.title': 'Strategische Annahmen in vorstandsreife Einsatzentscheidungen übersetzen.',
        'desk.subtitle': 'Kernparameter anpassen und BROCE projiziert die empfohlene Rollout-Spur, den finanziellen Wert und die First-Wave-Ausführungsprioritäten.',
        'desk.objective': 'Strategisches Ziel',
        'desk.cohort': 'Pilot-Kohortengröße',
        'desk.budget': 'Jährliches Pilotbudget',
        'desk.compliance': 'Compliance-Strenge',
        'desk.readiness': 'Bereitschaft',
        'desk.lane': 'Empfohlene Spur',
        'desk.riskDrop': 'Prognostizierte Vorfallreduktion',
        'desk.annualValue': 'Jährliche Kostenvermeidung',
        'desk.payback': 'Geschätzte Amortisation',
        'desk.budgetFit': 'Budget-Passung',
        'desk.horizon': 'Welle-1-Horizont',
        'desk.memo': 'Vorstandsnotiz-Vorschau',
        'desk.obj.balanced': 'Ausgewogenes Ergebnis',
        'desk.obj.reduction': 'Maximale Vorfallreduktion',
        'desk.obj.adoption': 'Maximale Akzeptanzkonsistenz',
        'desk.obj.velocity': 'Schnellste Einsatzgeschwindigkeit',

        // Desk Memo strings
        'desk.memo.enterprise': 'Zwei-Wellen-Programm mit Zertifizierungsdokumentation von Tag eins.',
        'desk.memo.pro': 'Eine fokussierte Welle durchführen, dann nur Zonen mit validierten Ergebnissen skalieren.',
        'desk.memo.core': 'Schmal starten, Adoptionsverhalten zuerst nachweisen, erst nach stabiler Signalqualität erweitern.',
        'desk.memo.adoption.high': 'Adoptions-KPIs an Stil, Komfort und Nutzungskontinuität koppeln.',
        'desk.memo.adoption.low': 'Adoptions-KPIs an wöchentliche Tragedauer und Kohorten-Retention koppeln.',
        'desk.memo.horizon': 'Ziel-Welle-1-Horizont',
        'desk.memo.forecast': 'Prognostizierter Jahreswert',
        'desk.memo.reduction': 'prognostizierte Reduktion',

        // Insights
        'insights.eyebrow': 'Intelligenz-Briefing',
        'insights.title': 'Voreingestellte Szenarien und Live-Strategieinterpretation.',
        'insights.subtitle': 'Ein-Klick-Szenarien nutzen, um reale Partnerkontexte zu simulieren. BROCE erstellt ein Live-Executive-Briefing, eine Prioritätszonen-Karte und Einsatzleitfaden aus Ihren gewählten Annahmen.',
        'insights.scenario': 'Szenario-Presets',
        'insights.brief': 'Executive-Briefing',
        'insights.zones': 'Prioritätszonen-Karte',
        'insights.capital': 'Kapitalsignal',
        'insights.readiness': 'Bereitschaftssignal',
        'insights.execution': 'Ausführungssignal',
        'insights.preset.urban': 'Urbane Flotte',
        'insights.preset.rider': 'E-Mobility-Netzwerk',
        'insights.preset.longevity': 'Langlebig­keits­programm',
        'insights.preset.insurance': 'Versicherungspilot',

        // Insights generated text
        'insights.headline.balanced': 'Ausgewogenes Einsatzprofil mit kontrolliertem Potenzial.',
        'insights.headline.enterprise': 'Skalierbares Profil mit starkem Governance-Vertrauen.',
        'insights.headline.pro': 'Hochvertrauen-Pilotprofil mit Expansionspotenzial.',
        'insights.headline.velocity': 'Schnell-lernendes Pilotprofil mit gestufter Risikokontrolle.',
        'insights.obj.balanced': 'ausgewogene Wertschöpfung',
        'insights.obj.reduction': 'maximale Vorfallreduktion',
        'insights.obj.adoption': 'Adoptionskontinuität',
        'insights.obj.velocity': 'Einsatzgeschwindigkeit',
        'insights.zone.highconf': 'hohe Konfidenz-Envelopes',
        'insights.zone.guardrail': 'Operativer Leitplanken',
        'insights.zone.governance': 'Governance-Auslöser',

        // Rollout
        'rollout.eyebrow': 'Rollout-Blueprint',
        'rollout.title': 'Strukturierter Einsatz von der Aufnahme bis zur skalierten Validierung.',
        'rollout.step1': 'Bewerten',
        'rollout.step1.text': 'Kohortenkontext, Szenarioprofil und wirtschaftliche Ziele definieren.',
        'rollout.step2': 'Konfigurieren',
        'rollout.step2.text': 'Persona-spezifische Zonenkarten und Modularchitektur-Entscheidungen generieren.',
        'rollout.step3': 'Einsetzen',
        'rollout.step3.text': 'In Premium-Kleidungsstücke integrieren und kontrollierte Pilot-Kohorten starten.',
        'rollout.step4': 'Validieren',
        'rollout.step4.text': 'Impact, Akzeptanz und Wirtschaftlichkeit vor Expansionswellen messen.',
        'rollout.gov1.kicker': 'Bereitschaftstrack',
        'rollout.gov1.title': 'Zertifizierungspfad',
        'rollout.gov1.text': 'Programmdesign unterstützt gestufte Zertifizierung und Compliance-Progression nach Markt.',
        'rollout.gov2.kicker': 'Bereitschaftstrack',
        'rollout.gov2.title': 'Fertigungsstrategie',
        'rollout.gov2.text': 'Pilot-to-Scale-Architektur harmonisiert modulare Produktion, Qualitätskontrolle und Kostendisziplin.',
        'rollout.gov3.kicker': 'Bereitschaftstrack',
        'rollout.gov3.title': 'Daten-Governance',
        'rollout.gov3.text': 'Profil- und Simulationslogik kann mit konfigurierbarer Handhabung für datenschutzsensible Kohorten betrieben werden.',

        // FAQ
        'faq.eyebrow': 'FAQ',
        'faq.title': 'Antworten für Entscheider, Betreiber und Investoren.',
        'faq.q1': 'Ist BROCE als Medizinprodukt positioniert?',
        'faq.a1': 'Nein. BROCE ist technisch entwickelte Schutzbekleidung. Compliance- und Zertifizierungspfade werden pro Programmtyp und Markt erstellt.',
        'faq.q2': 'Kann ein Programm mehrere Risikopersonen umfassen?',
        'faq.a2': 'Ja. Gemischte Kohorten können mit persona-spezifischer Zonengewichtung und Rollout-Strukturen konfiguriert werden.',
        'faq.q3': 'Was unterscheidet BROCE von Standard-Protektoren?',
        'faq.a3': 'Standard-Protektoren optimieren isolierte Aufpralle. BROCE optimiert Aufprallreaktion, Tragbarkeit und Akzeptanzökonomie zusammen.',
        'faq.q4': 'Wie schnell kann ein Pilot starten?',
        'faq.a4': 'Nach Scope-Abstimmung können Pilot-Kohorten in gestuften Wellen mit expliziten Validierungskontrollpunkten starten.',

        // CTA
        'cta.eyebrow': 'Kontakt',
        'cta.title': 'Intelligente Schutzprogramme mit BROCE aufbauen.',
        'cta.text': 'Wir onboarden derzeit ausgewählte Partner für Mobilitäts-, Aktiv- und Langlebigkeitseinsätze.',
        'cta.email': 'hello@broce.eu',
        'cta.investor': 'Investorenportal',
        'cta.chip1': 'Adaptive Risikointelligenz',
        'cta.chip2': 'Low-Profile Engineering',
        'cta.chip3': 'Premium-Akzeptanzdesign',

        // Footer
        'footer.tagline': 'Schutzintelligenz, entwickelt für reales Bewegungsverhalten.',
        'footer.about': 'Über uns',
        'footer.technology': 'Technologie',
        'footer.products': 'Produkte',
        'footer.contact': 'Kontakt',
        'footer.copy': '© 2026 BROCE. Alle Rechte vorbehalten.',

        // Units
        'unit.months': 'Monate',
        'unit.weeks': 'Wochen',
        'unit.participants': 'Teilnehmer',

        // Page-level navigation
        'page.technology': 'Technologie',
        'page.products': 'Produkte',
        'page.about': 'Über uns',
        'page.investor': 'Investorenportal',

        // ── Technology Page ──
        'tech.hero.eyebrow': 'Innovationslabor',
        'tech.hero.title': 'Die Wissenschaft des unsichtbaren Schutzes',
        'tech.hero.subtitle': 'Revolutionäre Materialien und Ingenieurskunst, die neu definieren, was Schutzbekleidung sein kann – komfortabel, stilvoll und praktisch nicht wahrnehmbar.',
        'tech.card1.title': 'Impact-Absorptionsmatrix',
        'tech.card1.text': 'Nicht-Newtonsche Polymere, die bei normaler Bewegung weich und flexibel bleiben und bei Aufprall sofort verhärten, um Kraft über eine größere Fläche zu verteilen.',
        'tech.card2.title': 'Biomorphes Passsystem',
        'tech.card2.text': '3D-Bodyscanning erstellt maßgeschneiderte Pad-Geometrien, die Ihrer einzigartigen Skelettstruktur folgen – null Auftrag bei maximaler Abdeckung.',
        'tech.card3.title': 'Smart Response Fabric',
        'tech.card3.text': 'TPMS-Gitterkerne erkennen Aufprallgeschwindigkeit und -richtung in Mikrosekunden und lösen lokalisierte Versteifung genau dort aus, wo Schutz benötigt wird.',
        'tech.card4.title': 'Aerospace-Textilien',
        'tech.card4.text': 'Ultrahochmolekulares Polyethylen und Aramidfaser-Verbundwerkstoffe liefern unübertroffene Festigkeits-Gewichts-Verhältnisse.',
        'tech.card5.title': 'Schichtarchitektur',
        'tech.card5.text': 'Mehrschichtige Konstruktion vereint feuchtigkeitsableitende Basis, Schutzkern und Premium-Außenschale in einem nahtlosen Kleidungsstück.',
        'tech.card6.title': 'Thermoregulation',
        'tech.card6.text': 'Phasenwechselmaterialien und Belüftungszonen halten die optimale Körpertemperatur bei intensiver Aktivität oder wechselnden Umgebungen.',
        'tech.highlight.title': 'Schutz ohne Kompromisse',
        'tech.highlight.text': 'Unsere patentierte Integrationstechnologie bettet Schutzelemente direkt in die Kleidungsstruktur ein. Kein externes Polster, keine klobigen Paneele – nur klare Linien und leises Vertrauen.',
        'tech.highlight.stat1': 'Impact-Reduktion',
        'tech.highlight.stat2': 'Max. Dicke',
        'tech.highlight.stat3': 'Abdeckung',
        'tech.cta.eyebrow': 'Weiter erkunden',
        'tech.cta.title': 'Bereit, unsichtbaren Schutz zu erleben?',
        'tech.cta.text': 'Starten Sie mit unserem Intelligenz-Simulator oder vereinbaren Sie einen Pilot-Workshop.',
        'tech.cta.btn1': 'Plattform erkunden',
        'tech.cta.btn2': 'Kontaktieren Sie uns',

        // ── Products Page ──
        'products.hero.eyebrow': 'Die Kollektion',
        'products.hero.title': 'Unsichtbarer Schutz, sichtbarer Stil',
        'products.hero.subtitle': 'Entdecken Sie unser Sortiment an Schutzbekleidung für jede Situation.',
        'products.details': 'Details ansehen',
        'products.cta.eyebrow': 'Maßanfertigung verfügbar',
        'products.cta.title': 'Schutz nach Ihren exakten Maßen',
        'products.cta.text': 'Erhalten Sie Schutz, der exakt auf Ihre Körpergeometrie zugeschnitten ist – mit unserem 3D-Scanning-Service.',
        'products.cta.btn': 'Fitting buchen',

        // ── About Page ──
        'about.hero.eyebrow': 'Unsere Geschichte',
        'about.hero.title': 'Schutz, für die Zukunft entwickelt',
        'about.hero.subtitle': 'Unsere Mission: Schutzbekleidung unsichtbar machen – damit Sie ohne Grenzen leben können.',
        'about.mission.title': 'Aus Notwendigkeit geboren, für morgen gebaut',
        'about.mission.text1': 'BROCE begann mit einer einfachen Frage: Warum sollte Schutz Kompromisse bedeuten? Jede bestehende Lösung forderte Zugeständnisse – Komfort für Sicherheit, Stil für Funktion.',
        'about.mission.text2': 'Wir haben ein Team aus Materialwissenschaftlern, Mode-Ingenieuren und Biomechanik-Experten zusammengestellt, um neu zu denken, was Schutzbekleidung sein kann.',
        'about.values.title': 'Was uns antreibt',
        'about.value1.title': 'Mensch zuerst',
        'about.value1.text': 'Jede Designentscheidung beginnt mit der Erfahrung des Trägers und endet mit seinem Vertrauen.',
        'about.value2.title': 'Geschichtete Innovation',
        'about.value2.text': 'Wir stapeln Durchbrüche in Materialien, Fertigung und Design, um etwas Neues zu schaffen.',
        'about.value3.title': 'Kompromisslose Sicherheit',
        'about.value3.text': 'Wir übertreffen Industriestandards, weil Ihre Sicherheit kein Feature ist – sie ist das Fundament.',
        'about.value4.title': 'Null Sichtbarkeit',
        'about.value4.text': 'Der beste Schutz ist der, den man vergisst zu tragen – bis man ihn braucht.',
        'about.timeline.title': 'Unsere Reise',
        'about.tl1.event': 'Der Anfang',
        'about.tl1.desc': 'Gründungsteam formiert sich an der Schnittstelle von Mode-Tech und Schutztechnik.',
        'about.tl2.event': 'Erster Prototyp',
        'about.tl2.desc': 'Erfolgreiche Integration von TPMS-Gitter-Pads in Alltagskleidung ohne sichtbaren Auftrag.',
        'about.tl3.event': 'CE-Zertifizierung',
        'about.tl3.desc': 'Unsere Impact-Absorptionstechnologie erreicht Level 2 CE-Zertifizierung in allen Schutzzonen.',
        'about.tl4.event': 'Öffentlicher Start',
        'about.tl4.desc': 'BROCE geht mit der Flagship-Kollektion an die Öffentlichkeit und definiert Schutzbekleidung neu.',
        'about.cta.eyebrow': 'Mitmachen',
        'about.cta.title': 'Interessiert an dem, was wir bauen?',
        'about.cta.text': 'Ob potenzieller Partner, Investor oder Pilot-Teilnehmer – wir freuen uns von Ihnen zu hören.',
        'about.cta.btn': 'Kontakt aufnehmen',
        'about.cta.btn2': 'Investorenportal',

        // ── Investor Page ──
        'investor.hero.eyebrow': 'Investorenbeziehungen',
        'investor.hero.title': 'Die Kategorie Precision Bodywear aufbauen',
        'investor.hero.subtitle': 'BROCE definiert einen neuen Markt an der Schnittstelle von Materialwissenschaft, Biomechanik und Mode-Engineering.',
        'investor.metric1': 'TAM Europa',
        'investor.metric2': 'Patentfamilien eingereicht',
        'investor.metric3': 'Pilot-Partner',
        'investor.metric4': 'Öffentlicher Start',
        'investor.portal.eyebrow': 'Investoren-Ressourcen',
        'investor.portal.title': 'Alles, was Sie zur Bewertung von BROCE benötigen',
        'investor.card1.title': 'Executive Summary',
        'investor.card1.text': 'Einseitige These, Marktdimensionierung und Wettbewerbsdifferenzierung.',
        'investor.card2.title': 'Finanzprognosen',
        'investor.card2.text': '5-Jahres-GuV, Unit Economics und szenariengewichtete Umsatzprognosen.',
        'investor.card3.title': 'IP-Portfolio',
        'investor.card3.text': '7 Patentfamilien für TPMS-Gitter, Garment-Integration und Personalisierung.',
        'investor.card4.title': 'Marktanalyse',
        'investor.card4.text': 'TAM/SAM/SOM-Aufschlüsselung, Wettbewerbslandschaft und Go-to-Market-Strategie.',
        'investor.progress.eyebrow': 'Fortschritt',
        'investor.progress.title': 'Vom Konzept zur Marktreife',
        'investor.progress.label': 'abgeschlossen',
        'investor.ms1.title': 'Forschung & IP',
        'investor.ms1.desc': 'Materialwissenschaft validiert, Patente eingereicht',
        'investor.ms2.title': 'Erste Prototypen',
        'investor.ms2.desc': 'TPMS-Gitter-Pads gefertigt & getestet',
        'investor.ms3.title': 'Pilotprogramm',
        'investor.ms3.desc': 'Partner-Kohorten live, Datenerfassung aktiv',
        'investor.ms4.title': 'Markteinführung',
        'investor.ms4.desc': 'DTC + B2B-Kanäle, EU zuerst',
        'investor.evidence.eyebrow': 'Evidenzbasis',
        'investor.evidence.title': 'Datengestützte Validierung',
        'investor.ev1.title': 'Impact-Performance',
        'investor.ev1.m1': 'Impact-Reduktion',
        'investor.ev1.m2': 'Max. Pad-Dicke',
        'investor.ev1.m3': 'Zertifizierung',
        'investor.ev2.title': 'Marktchance',
        'investor.ev2.m1': 'Europäischer TAM',
        'investor.ev2.m2': 'Wachstumsrate',
        'investor.ev2.m3': 'Direkte Wettbewerber',
        'investor.verified': 'Verifiziert',
        'investor.pending': 'Prognostiziert',
        'investor.cta.eyebrow': 'Verbinden',
        'investor.cta.title': 'Werden Sie Teil der BROCE-Reise',
        'investor.cta.text': 'Wir fundraisen für unsere Seed-Runde, um von Pilot zu Produktion zu skalieren.',
        'investor.cta.btn1': 'Deck anfordern',
        'investor.cta.btn2': 'Gespräch vereinbaren',
    }
};

class I18n {
    constructor() {
        this.lang = this._inferLang();
        this._listeners = new Set();
    }

    _inferLang() {
        const saved = localStorage.getItem('broce-lang');
        if (saved === 'de' || saved === 'en') return saved;
        const inferred = (navigator.language || '').toLowerCase().startsWith('de') ? 'de' : 'en';
        localStorage.setItem('broce-lang', inferred);
        return inferred;
    }

    get currentLang() {
        return this.lang;
    }

    t(key) {
        return translations[this.lang]?.[key] || translations.en?.[key] || key;
    }

    setLang(lang) {
        if (lang !== 'en' && lang !== 'de') return;
        this.lang = lang;
        localStorage.setItem('broce-lang', lang);
        document.documentElement.lang = lang;
        this._listeners.forEach(fn => fn(lang));
    }

    onChange(fn) {
        this._listeners.add(fn);
        return () => this._listeners.delete(fn);
    }
}

export const i18n = new I18n();
export const t = (key) => i18n.t(key);
