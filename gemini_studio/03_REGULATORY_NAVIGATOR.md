# Prompt 03: CE Regulatory Navigator
# Für: Gemini 2.5 Pro in AI Studio
# Kontext-Upload: BRIEFING.md + Simulations-Ergebnisse
# Temperature: 0.2 | Grounding: ON (Google Search) | Structured Output: OFF
# Geschätzte Antwortlänge: 4.000-8.000 Wörter

---

## ANLEITUNG

1. Öffne Google AI Studio → Neuer Chat
2. Setze `SYSTEM_INSTRUCTION.md` als System Instruction
3. **WICHTIG:** Aktiviere "Search Grounding" (Google Search)
4. Lade folgende Dateien hoch:
   - `BRIEFING.md`
   - `specs/material_stack.json` (falls vorhanden)
5. Paste den Prompt unten

---

## DER PROMPT

```
Du bist ein erfahrener CE-Zertifizierungsberater für persönliche 
Schutzausrüstung (PSA) nach EU-Verordnung 2016/425. Du hast 50+ 
Zertifizierungsverfahren begleitet, davon 15+ für innovative 
Materialien und Bauweisen.

PRODUKT-BESCHREIBUNG:

BROCE — Ultra-dünner Körperschutz für Integration in Alltagskleidung.

Technischer Aufbau (von außen nach innen):
1. Textilhülle: Dyneema SL (UHMWPE-beschichtet) oder Cordura
2. Energieverteilungsschicht: Ultraschall-verschweißte Dyneema-Membran
3. Kernstruktur: 3D-gedrucktes TPU-TPMS-Gitter (Gyroid-Topologie)
   - Material: TPU Shore 95A (Lubrizol Estane oder BASF Elastollan)
   - Herstellung: HP Multi Jet Fusion (MJF) oder SLS
   - Wanddicke: 0.5-1.2mm (funktional gradiert)
   - Zellgröße: 2.5-4.0mm
4. STF-Schicht: Nicht-Newtonisches Fluid in Gitter-Hohlräumen
   - Basis: Silica-Nanopartikel in Polyethylenglykol (PEG)
5. Comfort-Liner: 2mm EVA oder Spacer Mesh

Gesamtdicke: 2.6-5.0mm je nach Zone
Zielzonen: Hüfte, Knie, Ellbogen, Schulter, Handgelenk (FOOSH)

Simulations-Ergebnisse (NICHT physisch validiert):
- Legacy-Modell (v1): Apex 2.65mm → 18.8 kN
- Kalibriertes Modell (v3): Apex 2.65mm → 4.80 kN
- ZERO physische Testdaten. Nächster Schritt = Drop-Tower.
- CE Level 2 Grenze: 20 kN

DESIGN-KONTEXT:
Das Produkt ist KEIN separater Insert-Protektor. Es ist ein
Second-Skin-Kleidungsstück, bei dem die Schutzzonen nahtlos 
integriert sind (Ultraschallschweißen, kein Nähen). Das hat 
Implikationen für die CE-Prüfung: Wird das Gesamtkleidungsstück 
geprüft oder nur der Protektor-Insert?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AUFGABE 1: ANWENDBARE NORMEN

1.1 Hauptnorm: EN 1621-1:2012 (Limb protectors)
- Welche Abschnitte sind relevant für diesen Produkttyp?
- Ist EN 1621-1 die RICHTIGE Norm? Oder brauchen wir auch:
  - EN 1621-2 (Back protectors)?
  - EN 13595 (Motorcycle protective clothing)?
  - EN 14120 (Roller sports)?
- Für ein Produkt, das in "normale Kleidung" integriert ist — gibt es 
  regulatorische Grauzonen?

1.2 PPE-Kategorie
- In welche PSA-Kategorie fällt BROCE? (Kategorie I, II, oder III?)
- Welche Konformitätsbewertungsverfahren sind erforderlich?
- Brauchen wir eine Notified Body oder reicht Selbstzertifizierung?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AUFGABE 2: VOLLSTÄNDIGER PRÜFPLAN

Erstelle einen detaillierten Prüfplan:

2.1 Probenanzahl
- Wie viele Prüfkörper brauche ich MINDESTENS je Zone?
- Brauche ich separate Proben für jede Konditionierung?
- Wie viele "Opfer-Proben" (zerstörend) vs. "Kontroll-Proben"?

2.2 Konditionierungen
- Temperatur: Welche Bereiche? (Norm sagt -10°C, +20°C, +40°C?)
- Feuchtigkeit: Welche RH%?
- UV-Alterung: Erforderlich?
- Waschzyklen: Wie viele? Welche Norm (ISO 6330)?
- STF-spezifisch: Gibt es ZUSÄTZLICHE Konditionierungen für 
  nicht-Newtonische Fluide?

2.3 Prüfprozedur
- Fallhöhe, Amboss-Form, Aufprallenergie (5J, 10J, 50J?)
- Anzahl Schläge pro Probe
- Messpunkte und Akzeptanzkriterien
- Restkraft-Messung (kN) — wie genau muss gemessen werden?

2.4 Zusatzprüfungen für neuartige Materialien
- Biokompatibilität: Braucht STF ein Hautverträglichkeitstest?
- Toxikologie: Silica-Nanopartikel — REACH-relevant?
- Alterungsbeständigkeit: Wie lange muss STF stabil bleiben?
- Auslaufsicherheit: Was wenn die STF-Schicht beschädigt wird?
  Gibt es Normen für "Fluid Containment" in textilen Protektoren?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AUFGABE 3: LABORE UND KOSTEN

Recherchiere (mit Google Search) die besten akkreditierten Prüflabore:

3.1 Deutschland
- SATRA (UK, aber EU-anerkannt)?
- TÜV Süd / TÜV Rheinland — bieten die EN 1621-1 an?
- Hohenstein / DITF (Deutsche Institute für Textil- und Faserforschung)?
- FIBRE (Faserinstitut Bremen)?

3.2 Kosten
- Geschätzte Kosten für eine VOLLSTÄNDIGE Erstzertifizierung
- Aufschlüsselung: Probenherstellung + Prüfung + Bericht + CE-Zeichen
- Günstigste Option für ein Bootstrap-Startup

3.3 Timeline
- Vom ersten Lab-Kontakt bis zum CE-Kennzeichen: Wie viele Monate?
- Was kann parallelisiert werden?
- Wo sind die typischen Verzögerungen?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AUFGABE 4: REGULATORISCHE RISIKEN

4.1 STF-spezifische Risiken
- Silica-Nanopartikel: REACH-Registrierung nötig? (Verordnung 1907/2006)
- SVHC-Liste: Ist PEG oder Fumed Silica auf der Kandidatenliste?
- Hautkontaktklassifizierung: OEKO-TEX Standard 100 Klasse I?
- Worst Case: STF tritt aus → Hautiritation? Einatmung?

4.2 3D-Druck-spezifische Risiken
- Druckqualitätskontrolle: Wie wird Batch-Konsistenz nachgewiesen?
- Materialzertifikat: TPU-Hersteller-Datenblatt ausreichend?
- Anisotropie: 3D-Druckrichtung beeinflusst Festigkeit — prüfungsrelevant?

4.3 Häufigste Fehler bei Erstanmeldungen
- Die 5 häufigsten Gründe, warum CE-Erstanmeldungen scheitern
- Wie BROCE jeden dieser Fehler vermeiden kann

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AUFGABE 5: PRAGMATISCHER STUFENPLAN

Angenommen Budget = €5.000 für erste Validierung.
Was ist der MINIMALE Pfad zum CE-Kennzeichen?

Option A: Vollzertifizierung (teuer, langsam, sicher)
Option B: Stufenweise (intern testen → Labor vorqualifizieren → zertifizieren)
Option C: CE-Äquivalent (z.B. TÜV-geprüft ohne volle EN 1621-1)

Empfehlung: Welche Option für ein Pre-Seed Startup?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

OUTPUT FORMAT:

## Executive Summary (5 Sätze)
## 1. Anwendbare Normen
## 2. Prüfplan
### 2.1 Proben | 2.2 Konditionierung | 2.3 Prozedur | 2.4 Zusatz
## 3. Labore & Kosten (Tabelle)
## 4. Regulatorische Risiken
### 4.1 STF | 4.2 3D-Druck | 4.3 Häufige Fehler
## 5. Stufenplan (Entscheidungsmatrix)
## Anhang: Checkliste "Sind wir CE-ready?"

REGELN:
- Referenziere konkrete Norm-Abschnitte (z.B. "EN 1621-1:2012 §5.3.2")
- Gib realistische Kostenspannen (nicht "ca. €1.000-€50.000")
- Wenn du etwas nicht sicher weißt, sage "VERIFIZIERUNG ERFORDERLICH"
- Sprache: Deutsch
```
