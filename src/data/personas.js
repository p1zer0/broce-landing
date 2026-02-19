/* ═══════════════════════════════════════════════
   BROCE™ Persona Data
   ═══════════════════════════════════════════════ */

export const personaData = {
    commuter: {
        title: 'Urban Commuter',
        summary: {
            en: 'Prioritizes lateral hip and FOOSH wrist pathways from mixed-surface city movement.',
            de: 'Priorisiert laterale Hüft- und FOOSH-Handgelenkspfade bei gemischtem Stadtverkehr.'
        },
        risk: {
            en: 'Side-fall impact around hip and wrist',
            de: 'Seitenaufprall an Hüfte und Handgelenk'
        },
        zones: {
            en: 'Hip, wrist, elbow',
            de: 'Hüfte, Handgelenk, Ellenbogen'
        },
        stack: {
            en: 'Balanced lattice density and flexible articulation',
            de: 'Ausgewogene Gitterdichte und flexible Artikulation'
        },
        program: 'Pro Pilot',
        bars: [88, 84, 86, 90]
    },
    emobility: {
        title: 'E-Mobility Rider',
        summary: {
            en: 'Weights high-speed lateral events, elbow-first contact, and repeated hard-surface exposure.',
            de: 'Gewichtet Hochgeschwindigkeits-Seitenereignisse, Ellenbogen-Erstkontakt und wiederholte Hartflächenexposition.'
        },
        risk: {
            en: 'High-velocity side impact with elbow emphasis',
            de: 'Hochgeschwindigkeits-Seitenaufprall mit Ellenbogenschwerpunkt'
        },
        zones: {
            en: 'Elbow, shoulder, hip',
            de: 'Ellenbogen, Schulter, Hüfte'
        },
        stack: {
            en: 'Higher dissipation stack with shoulder transition reinforcement',
            de: 'Höherer Dissipationsstapel mit Schulterübergangsverstärkung'
        },
        program: 'Velocity Pilot',
        bars: [92, 79, 82, 87]
    },
    longevity: {
        title: 'Longevity 60+',
        summary: {
            en: 'Focuses severe-fracture prevention while preserving comfort and sustained daily adherence.',
            de: 'Fokussiert auf schwere Frakturprävention bei Bewahrung von Komfort und täglicher Nutzung.'
        },
        risk: {
            en: 'Low-height falls with high fracture cost',
            de: 'Stürze aus geringer Höhe mit hohen Frakturkosten'
        },
        zones: {
            en: 'Hip, wrist, shoulder',
            de: 'Hüfte, Handgelenk, Schulter'
        },
        stack: {
            en: 'Comfort-first shell with high-priority trochanter response',
            de: 'Komfort-zuerst-Schale mit hochpriorisierter Trochanter-Reaktion'
        },
        program: 'Longevity Pilot',
        bars: [90, 91, 85, 93]
    },
    performance: {
        title: 'Performance Athlete',
        summary: {
            en: 'Optimizes multi-angle protection behavior under high-range mobility and repeated dynamic load.',
            de: 'Optimiert Mehrwinkel-Schutzverhalten bei hoher Mobilität und wiederholter dynamischer Last.'
        },
        risk: {
            en: 'Multi-vector impacts at high movement amplitude',
            de: 'Multivektoraufpralle bei hoher Bewegungsamplitude'
        },
        zones: {
            en: 'Shoulder, elbow, hip',
            de: 'Schulter, Ellenbogen, Hüfte'
        },
        stack: {
            en: 'Fast-response structure with articulation segmentation',
            de: 'Schnellreaktionsstruktur mit Artikulationssegmentierung'
        },
        program: 'Performance Pilot',
        bars: [89, 83, 88, 88]
    }
};

export const presetProfiles = {
    urban: {
        label: { en: 'Urban Fleet', de: 'Urbane Flotte' },
        note: { en: 'Preset loaded: Urban Fleet baseline.', de: 'Preset geladen: Urbane Flotte Basis.' },
        persona: 'commuter',
        exposure: 10, risk: 3, adoption: 78,
        objective: 'balanced', cohort: 120, budget: 260, compliance: 3
    },
    rider: {
        label: { en: 'E-Mobility Network', de: 'E-Mobility-Netzwerk' },
        note: { en: 'Preset loaded: high-velocity rider environment.', de: 'Preset geladen: Hochgeschwindigkeits-Fahrer-Umgebung.' },
        persona: 'emobility',
        exposure: 16, risk: 4, adoption: 72,
        objective: 'reduction', cohort: 180, budget: 380, compliance: 4
    },
    longevity: {
        label: { en: 'Longevity Program', de: 'Langlebigkeitsprogramm' },
        note: { en: 'Preset loaded: high-adoption prevention cohort.', de: 'Preset geladen: Hochakzeptanz-Präventionskohorte.' },
        persona: 'longevity',
        exposure: 7, risk: 3, adoption: 88,
        objective: 'adoption', cohort: 150, budget: 300, compliance: 3
    },
    insurance: {
        label: { en: 'Insurance Pilot', de: 'Versicherungspilot' },
        note: { en: 'Preset loaded: rapid proof-of-value insurance pilot.', de: 'Preset geladen: Schnellbeweis-Versicherungspilot.' },
        persona: 'performance',
        exposure: 12, risk: 4, adoption: 69,
        objective: 'velocity', cohort: 210, budget: 340, compliance: 5
    }
};

export const zoneWeights = {
    commuter: { Hip: 90, Wrist: 86, Elbow: 79, Shoulder: 68 },
    emobility: { Elbow: 92, Shoulder: 88, Hip: 83, Wrist: 71 },
    longevity: { Hip: 94, Wrist: 84, Shoulder: 82, Elbow: 69 },
    performance: { Shoulder: 90, Elbow: 86, Hip: 80, Wrist: 74 }
};
