# BROCE Gemini AI Studio — Prompt Arsenal
> **Erstellt:** 2026-02-19 | **Version:** 2.0
> **v2.0 Änderungen:** Brand Soul integriert, 18.8/4.8 kN Dualität korrigiert, 
> Gibson-Ashby n=1.5 korrigiert, Design-Philosophie in alle Prompts eingebaut

## Quickstart

1. Öffne [aistudio.google.com](https://aistudio.google.com)
2. Erstelle einen neuen Chat
3. Kopiere `SYSTEM_INSTRUCTION.md` in das "System Instruction" Feld
4. Wähle einen der 5 Prompts → folge der Anleitung im Prompt-File

## Brand-Bilder (für Prompt 05 hochladen)

Diese 5 Bilder definieren BROCEs Seele — Gemini braucht sie als Kontext:
- **Logo:** Geflügelter Schild + Helm (Stärke die befreit)
- **Navy Suit seitlich:** Second-Skin, subtile Pad-Zonen
- **Protection Family:** Diverse Gruppe, Hautton-passend, Würde
- **Runner:** Explosive Bewegung, keine Einschränkung
- **Lamborghini:** Engineering-Perfektion unter eleganter Form

## Die 5 Prompts

| # | Datei | Zweck | Search? | Temp |
|---|-------|-------|---------|------|
| — | `SYSTEM_INSTRUCTION.md` | Basis-Kontext für JEDEN Chat | — | — |
| 01 | `01_TECHNICAL_DUE_DILIGENCE.md` | Vollständige technische Analyse des Codebase | OFF | 0.2 |
| 02 | `02_PATENT_CLAIM_SHARPENER.md` | Prior Art Recherche + Claim-Schärfung | **ON** | 0.1 |
| 03 | `03_REGULATORY_NAVIGATOR.md` | CE-Zertifizierung planen (EN 1621-1) | **ON** | 0.2 |
| 04 | `04_INVESTOR_PITCH_OPTIMIZER.md` | Pitch Surgery + Deck-Struktur + Marktdaten | **ON** | 0.4 |
| 05 | `05_VISION_MANIFEST.md` | DAS Goldstandard-Dokument für alle Stakeholder | OFF | 0.3 |

## Empfohlene Reihenfolge

```
1. 05_VISION_MANIFEST      → Das Fundament: Wer sind wir, was machen wir?
2. 02_PATENT_CLAIM_SHARPENER → IP sichern bevor irgendwas öffentlich wird
3. 03_REGULATORY_NAVIGATOR  → Wissen was CE kostet und wie lange es dauert
4. 04_INVESTOR_PITCH_OPTIMIZER → Pitch + Deck für Fördermittel/Investoren
5. 01_TECHNICAL_DUE_DILIGENCE → Deep-Dive für CTO/Tech-Advisor
```

## Warum Gemini?

| Feature | Wie BROCE es nutzt |
|---------|-------------------|
| **1M+ Token Context** | Gesamten Codebase + Docs hochladen |
| **Search Grounding** | Aktuelle Patente, Marktdaten, Lab-Preise recherchieren |
| **Multimodal** | Investor-Visuals + Visionboard-Bilder analysieren |
| **Structured Output** | Patent-Claims im DPMA-Format erzwingen |
| **Niedrige Temperature** | Technisch präzise statt kreativ |

## Dateien zum Hochladen (nach Prompt)

### Immer hochladen:
- `BRIEFING.md`

### Pro Prompt zusätzlich:

**01 — Technical Due Diligence:**
- `core/physics_module.py`, `core/en1621_sim.py`, `core/calibration.py`
- `core/physics_gateway.py`, `core/stf_transition.py`, `core/sim_calibrator.py`
- `services/intelligence/hypothesis_engine.py`
- `services/intelligence/physics_model.py`
- `tools/perfection/scoring.py`, `tools/perfection/generator.py`
- `patents/DPMA_001-003.md`

**02 — Patent Claims:**
- `patents/DPMA_001_STF_TPMS_Gitter.md`
- `patents/DPMA_002_Integriertes_Garment_System.md`
- `patents/DPMA_003_Koerperadaptive_Gradierung.md`

**03 — Regulatory:**
- `specs/material_stack.json` (falls vorhanden)

**04 — Investor:**
- `docs/FUNDING_STRATEGY.md`
- `docs/EXECUTION_PLAN.md`
- Bilder aus `docs/visuals/`

**05 — Vision Manifest:**
- `EVOLUTION_STRATEGY_2026Q1.md`
- `patents/DPMA_001-003.md`
- `docs/EXECUTION_PLAN.md`
- `docs/FUNDING_STRATEGY.md`

## Tipps

- **Separate Chats** für jeden Prompt — nicht mischen
- **System Instruction immer setzen** — sonst fehlt der Kontext
- **Search ON nur bei Prompts 02/03/04** — bei 01/05 braucht man Grounding nicht
- **Ergebnisse speichern** → Kopiere die Antwort als `.md` in `output/gemini/`
- **Iterieren:** Nach der ersten Antwort kann man gezielt nachfragen:
  - "Geh tiefer in Punkt 2.3"
  - "Das Prior Art Risiko bei US8887315 — zeig mir den genauen Claim-Overlap"
  - "Formuliere den unabhängigen Anspruch von DPMA-001 nochmal enger"
