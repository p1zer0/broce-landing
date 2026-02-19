# Prompt 02: Patent Claim Sharpener
# Für: Gemini 2.5 Pro in AI Studio
# Kontext-Upload: 3 DPMA-Drafts + FTO-Analyse + Wettbewerbsmatrix
# Temperature: 0.1 | Grounding: ON (Google Search) | Structured Output: OFF
# Geschätzte Antwortlänge: 5.000-10.000 Wörter

---

## ANLEITUNG

1. Öffne Google AI Studio → Neuer Chat
2. Setze `SYSTEM_INSTRUCTION.md` als System Instruction
3. **WICHTIG:** Aktiviere "Search Grounding" (Google Search)
4. Lade folgende Dateien hoch:
   - `patents/DPMA_001_STF_TPMS_Gitter.md`
   - `patents/DPMA_002_Integriertes_Garment_System.md`
   - `patents/DPMA_003_Koerperadaptive_Gradierung.md`
   - `BRIEFING.md` (Abschnitte 1, 8, 9 sind relevant)
5. Paste den Prompt unten

---

## DER PROMPT

```
Du bist ein erfahrener europäischer Patentanwalt (Fachgebiet: Materialwissenschaft 
und persönliche Schutzausrüstung). Du hast 15+ Jahre Erfahrung mit DPMA- und 
EPA-Anmeldungen im Bereich technischer Textilien und Sportschutz.

Dir wurden 3 Patententwürfe eines Startups vorgelegt, das den dünnsten 
CE Level 2 Körperschutz der Welt entwickelt.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AUFGABE 1: PRIOR ART DEEP SEARCH

Recherchiere AKTIV mit Google Search nach relevantem Stand der Technik.
Suche nach:

Suchbegriffe:
- "shear thickening fluid" AND "lattice" AND "protective" (Patent + Scholar)
- "TPMS" AND "impact protection" AND "body armor" (Scholar)
- "functionally graded" AND "lattice" AND "protective garment" (Patent)
- "ultrasonic welding" AND "impact protection" AND "multi-layer" (Patent)
- "non-Newtonian fluid" AND "3D printed" AND "energy absorption" (Scholar)
- D3O Patent: US8887315B2, US8088477B2
- MIPS Patent: Check for shear-layer claims
- Al-Ketan & Abu Al-Rub: "Functionally graded TPMS lattices" (2021)

Für jedes gefundene relevante Dokument:
- Patentnummer oder DOI
- Relevante Claims oder Findings
- OVERLAP mit BROCEs Claims (hoch/mittel/gering/keiner)
- Empfehlung: Claim anpassen? Claim fallenlassen? Kein Problem?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AUFGABE 2: CLAIM SHARPENING

Für jeden der 3 Patent-Drafts:

A) Analysiere den aktuellen unabhängigen Anspruch:
   - Ist er zu BREIT? (→ leicht angreifbar durch Prior Art)
   - Ist er zu ENG? (→ leicht umgehbar durch Wettbewerber)
   - Ist er optimal formuliert für maximalen Schutzbereich?

B) Formuliere den GESCHÄRFTEN unabhängigen Anspruch:
   - Im DPMA-konformen Deutsch
   - Format: "Schutzanordnung für [ZONE], umfassend..., dadurch 
     gekennzeichnet, dass..."
   - Jedes Merkmal muss technisch prüfbar sein
   - Quantitative Grenzen einbauen (z.B. "Wanddicke zwischen 0.3mm und 1.5mm")

C) Formuliere 3-5 abhängige Ansprüche, die den Schutzbereich erweitern:
   - Materialspezifisch (TPU Shore 85-98A)
   - Geometriespezifisch (Gyroid, Schwarz-P, Hybrid)
   - Verfahrensspezifisch (STF-Infiltration nach 3D-Druck)
   - Systemspezifisch (Integration in Kleidungsstück via Ultraschall)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AUFGABE 3: FEHLENDE PATENTIERBARE ASPEKTE

Basierend auf deiner Analyse des Standes der Technik:

Identifiziere 3-5 ZUSÄTZLICHE patentierbare Innovationen, die BROCE 
ÜBERSEHEN hat. Für jede:
- Titel (deutsch, DPMA-Format)
- Kurzbeschreibung (3 Sätze)
- Abgrenzung zum Stand der Technik
- Geschätzter Schutzumfang
- Priorität (Sofort anmelden / Kann warten / Nice-to-have)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AUFGABE 4: FILING-STRATEGIE

Empfehle die optimale Anmeldestrategie:

1. Reihenfolge der Anmeldungen (welches Patent zuerst?)
2. DPMA Gebrauchsmuster vs. Patent — was ist sinnvoller für ein Pre-Seed Startup?
3. Kostenoptimierung: Wie minimiert man die Kosten in den ersten 12 Monaten?
4. PCT-Strategie: Wann PCT-Anmeldung? Welche Länder in der nationalen Phase?
5. Defensive Publikation: Gibt es Claims, die besser veröffentlicht als 
   patentiert werden sollten (um Wettbewerber zu blockieren)?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AUFGABE 5: MINIMALER PHYSISCHER BEWEIS

Für jedes Patent: Was ist der EINE physische Test, der den Claim beweist?

Format:
| Patent | Test | Erwartetes Ergebnis | Kosten | Equipment |
|--------|------|---------------------|--------|-----------|

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

OUTPUT FORMAT:

## Executive Summary: IP-Stärke von BROCE (1 Absatz)
## 1. Prior Art Analyse
### 1.1 [Patent/Paper] → Overlap-Bewertung
## 2. Geschärfte Claims
### 2.1 DPMA-001 geschärft | 2.2 DPMA-002 geschärft | 2.3 DPMA-003 geschärft
## 3. Fehlende Patente
## 4. Filing-Strategie
## 5. Physischer Beweis pro Patent
## Anhang: Risikomatrix (Prior Art Overlap)

REGELN:
- Verwende DPMA-konforme Sprache für alle Ansprüche
- Wenn ein Claim nicht haltbar ist, sage es direkt
- Referenziere konkrete Patentnummern und Veröffentlichungen
- Sprache: Deutsch (Claims auf Deutsch, Recherche-Ergebnisse können englisch sein)
```
