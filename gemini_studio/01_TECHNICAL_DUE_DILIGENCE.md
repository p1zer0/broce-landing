# Prompt 01: Technical Due Diligence Report
# Für: Gemini 2.5 Pro in AI Studio
# Kontext-Upload: BRIEFING.md + core/*.py + services/intelligence/*.py + tools/perfection/*.py
# Temperature: 0.2 | Grounding: OFF | Structured Output: OFF
# Geschätzte Antwortlänge: 8.000-15.000 Wörter
# v2.0 — korrigierte Zahlen + Design-Philosophie-Layer

---

## ANLEITUNG

1. Öffne Google AI Studio → Neuer Chat
2. Setze `SYSTEM_INSTRUCTION.md` als System Instruction
3. Lade folgende Dateien hoch:
   - `BRIEFING.md`
   - `core/physics_module.py`
   - `core/en1621_sim.py`
   - `core/calibration.py`
   - `core/physics_gateway.py`
   - `core/stf_transition.py`
   - `core/sim_calibrator.py`
   - `services/intelligence/hypothesis_engine.py`
   - `services/intelligence/physics_model.py`
   - `services/intelligence/knowledge_rules.py`
   - `tools/perfection/scoring.py`
   - `tools/perfection/generator.py`
   - `tools/perfection/filters.py`
   - `patents/DPMA_001_STF_TPMS_Gitter.md`
   - `patents/DPMA_002_Integriertes_Garment_System.md`
   - `patents/DPMA_003_Koerperadaptive_Gradierung.md`
4. Paste den Prompt unten

---

## DER PROMPT

```
Du bist Partner bei einem DeepTech-VC-Fonds und führst eine technische 
Due Diligence für BROCE durch — ein Startup, das behauptet, den dünnsten 
CE Level 2 Körperschutz der Welt entwickelt zu haben (2.6mm).

Dir wurde der GESAMTE technische Stack übergeben. Du hast Zugriff auf:
- Den Physik-Engine-Code
- Die Simulations-Modelle
- Die Optimierungs-Pipeline
- Die Patent-Drafts
- Das Startup-Briefing

DEINE AUFGABE: Erstelle einen Technical Due Diligence Report.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TEIL 1: PHYSICS ENGINE VALIDITY (30% der Analyse)

1.1 GIBSON-ASHBY MODELL
- Der Code verwendet σ_plateau = C1 · σ_ys · (ρ*)^n mit C1=0.30, σ_ys=35 MPa, n=1.5
- Sind diese Koeffizienten für Gyroid-TPMS publizierbar? 
- Referenziere konkrete Publikationen (Ashby 1997, Al-Ketan 2018, etc.)
- Quantifiziere den erwarteten Fehler vs. echten Drucktests

1.2 STF-MODELL
- Der v3-Code nutzt ein non-lineares Sigmoid-Viskositätsmodell (3 Regime)
- Bei Apex-Scherrate (~2662/s) mit STF 75% ergibt sich Multiplikator 33.75×
- Ist dieses Modell:
  a) Physikalisch vertretbar für eine Patentanmeldung?
  b) Ausreichend für eine Pre-Seed Due Diligence?
  c) Was wäre das MINIMALE physikalisch korrekte η(γ̇) Modell?

1.3 KRAFTVORHERSAGE-GENAUIGKEIT
ACHTUNG — Zwei Modelle existieren mit drastisch unterschiedlichen Ergebnissen:
- v1 (legacy, F=E/(2·d·α)): Apex = 18.8 kN (in allen Gründungsdokumenten)
- v3 (Gibson-Ashby + STF + K_CAL): Apex = 4.80 kN (aktuelles Modell)
- Es gibt ZERO physische Drop-Tower-Daten. "Measured" im Code = Selbstkalibration.
- Wie groß ist die erwartete Abweichung zur Realität für BEIDE Modelle?
- Berücksichtige: Materialstreuung, Temperatureffekte, Fertigungstoleranzen
- Gib ein realistisches Konfidenzintervall: "Wir erwarten X-Y kN"

1.4 ENERGIEBILANZ
- Verfolge die Energie durch die gesamte Pipeline:
  E_impact = 50J → E_absorbed + E_transmitted + E_stored
- Gibt es Codepfade, wo Energie erzeugt oder vernichtet wird?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TEIL 2: IP DEFENSIBILITY (25% der Analyse)

2.1 PATENT-CLAIM-MAPPING
Für jeden der 3 DPMA-Drafts:
- Welche EXAKTE Codezeile implementiert den Kernanspruch?
- Ist der Anspruch durch den Code BEWEISBAR?
- Was ist der minimale physische Test, der den Claim stützt?

2.2 PRIOR ART RISIKO
- Suche aktiv nach Prior Art, die diese Claims invalidieren könnte
- Fokus auf: D3O (US8887315, US8088477), MIPS, Koroyd
- Bewerte das Infringement-Risiko auf einer 1-10 Skala

2.3 WHITE SPACE VALIDIERUNG
Die FTO-Analyse behauptet 4 White Spaces:
1. STF-gefüllte TPMS-Hohlräume
2. Funktional gradierte Wanddicken in Schutzkleidung
3. Ultraschallschweißen als strukturelles Element
4. Auxetische Gyroid-Hybride (AGH)
- Sind diese White Spaces noch offen? (Stand: Februar 2026)
- Welcher White Space ist am WERTVOLLSTEN für eine Erstanmeldung?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TEIL 3: ARCHITECTURE MATURITY (20% der Analyse)

3.1 CODEBASE-QUALITÄT
- Ist das ein "Startup-Ready" Codebase oder ein Forschungs-Prototyp?
- Code Smell Analysis: Gib mir die 5 kritischsten Probleme
- Was müsste ein CTO in der ERSTEN WOCHE ändern?

3.2 INTELLIGENCE SYSTEM
- Die Hypothesis Engine (1233 LOC) ist das Herzstück. Bewerte:
  - Ist der Bayesian Confidence Update mathematisch korrekt?
  - Ist die Cross-Hypothesis Propagation (Gaussian Kernel) sinnvoll?
  - Funktioniert die Surprise Detection in der Praxis?

3.3 TESTABDECKUNG
- 45 Test-Suites existieren. Aber welche KRITISCHEN Pfade sind ungetestet?
- Identifiziere die 5 gefährlichsten nicht-getesteten Funktionen

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TEIL 4: SIMULATION vs. REALITÄT (15% der Analyse)

4.1 SIM2REAL GAP
- Zwei Modellvorhersagen: v1=18.8 kN, v3=4.80 kN (Faktor 4× Unterschied!)
- Publizierte Sim2Real-Gaps für ähnliche Systeme:
  - Fan et al. (2018): 15-35% für SLS TPU Gitter
  - Al-Ketan & Abu Al-Rub (2019): 20-40% für TPMS
- Welches Modell ist wahrscheinlich näher an der Realität? Begründe.
- Was ist die EHRLICHE Erwartung als Konfidenzintervall?

4.2 KRITISCHE ANNAHMEN
Liste alle Annahmen, die im Code IMPLIZIT sind, aber NICHT validiert:
- Temperaturunabhängigkeit?
- Isotrope Materialeigenschaften?
- Ideale Gitterqualität (keine Druckfehler)?
- STF gleichmäßig verteilt in Hohlräumen?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TEIL 5: DESIGN-PHILOSOPHIE AUDIT (10% der Analyse)

BROCE positioniert sich nicht als Safety-Gear-Firma, sondern als
"Human Movement Company" mit Apple-level Design und Lamborghini-level
Engineering. Bewerte:

5.1 Spiegelt der Codebase diese Vision wider?
- Gibt es aesthetic scoring? Comfort scoring? Movement scoring?
- Oder ist es rein technisch (nur Kraft + Dicke)?

5.2 STÄRKEN (warum investieren)
5.3 RISIKEN (warum nicht investieren)
5.4 DEALBREAKER (was müsste sofort behoben werden)
5.5 EMPFEHLUNG: Invest / Pass / Conditional Invest

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

OUTPUT FORMAT:

## Executive Summary (max. 300 Wörter)
## 1. Physics Engine Validity
### 1.1 Gibson-Ashby | 1.2 STF | 1.3 Kraftvorhersage | 1.4 Energie
## 2. IP Defensibility  
### 2.1 Claim-Mapping | 2.2 Prior Art | 2.3 White Space
## 3. Architecture Maturity
### 3.1 Code-Qualität | 3.2 Intelligence | 3.3 Tests
## 4. Simulation vs. Realität
### 4.1 Sim2Real Gap | 4.2 Kritische Annahmen
## 5. Investment Verdict
## Anhang: Risikomatrix (5×5 Impact vs. Probability)
## Anhang: 15 priorisierte Action Items

REGELN:
- Jede Behauptung mit Datei + Funktion + Zeilennummer belegen
- Keine generischen Ratschläge — nur spezifische, umsetzbare Empfehlungen
- Wenn etwas unklar ist, sage "NICHT BEWERTBAR: [Grund]"
- Sprache: Deutsch
```
