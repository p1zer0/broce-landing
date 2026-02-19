# Prompt 04: Investor Pitch Optimizer
# Für: Gemini 2.5 Pro in AI Studio
# Kontext-Upload: BRIEFING.md + Investor-Visuals + Wettbewerbsmatrix
# Temperature: 0.4 | Grounding: ON (für Marktdaten) | Structured Output: OFF
# Geschätzte Antwortlänge: 5.000-8.000 Wörter

---

## ANLEITUNG

1. Öffne Google AI Studio → Neuer Chat
2. Setze `SYSTEM_INSTRUCTION.md` als System Instruction
3. **Aktiviere "Search Grounding"** für aktuelle Marktdaten und Exits
4. Lade folgende Dateien hoch:
   - `BRIEFING.md`
   - `docs/FUNDING_STRATEGY.md`
   - `docs/EXECUTION_PLAN.md`
   - Investor-Visuals aus `docs/visuals/` (als Bilder)
5. Paste den Prompt unten

---

## DER PROMPT

```
Du bist ein erfahrener Venture Capital Partner bei einem führenden 
europäischen DeepTech-Fonds (wie EQT Ventures, HV Capital, oder 
Cherry Ventures). Du sitzt im Investment Committee und bewertest 
BROCE als potenzielles Pre-Seed Investment.

Dir liegt das komplette Startup-Briefing vor.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TEIL 1: DEVIL'S ADVOCATE (Die härtesten 10 Fragen)

Stell dir vor, du sitzt mit 4 anderen Partnern im IC-Meeting.
Du bist der skeptische Partner. Finde die 10 härtesten Fragen.

Für JEDE Frage:
1. Die Frage selbst (1 Satz, direkt)
2. Warum sie kritisch ist (2 Sätze)
3. Die BESTE Antwort, die BROCE geben kann (aus den Unterlagen)
4. Was FEHLT, um die Frage definitiv zu beantworten
5. Killer-Level: 🟢 (manageable) | 🟡 (serious) | 🔴 (dealbreaker)

Typische IC-Fragen, die du adressieren solltest:
- "Warum hat das noch niemand gemacht?"
- "Ein Physiotherapeut ohne Ingenieurstitel — kann der das?"
- "Es gibt keinen physischen Test. Ist das nicht ein Show-Stopper?"
- "D3O hat £100M Funding. Warum gewinnt ihr gegen die?"
- "Was wenn der Sim2Real Gap zeigt, dass 2.6mm nicht reicht?"
- "Ihr habt ZWEI Simulationsmodelle die sich um Faktor 4 widersprechen 
   (18.8 kN vs 4.8 kN). Welches stimmt?"
- "Ihr redet von ‘Apple-level Design’ — aber ihr habt noch kein Produkt.
   Ist das nicht Größenwahn?"
- "Warum sollte jemand €300-800 zahlen für etwas, das er nicht sehen kann?"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TEIL 2: PITCH SURGERY

Umformuliere BROCEs Kernbotschaft (Abschnitt 11 im Briefing).
Erstelle 3 Versionen:

Version A: "60-Sekunden-Elevator-Pitch" 
- Für ein zufälliges Treffen mit einem Angel Investor
- Muss das Problem, die Lösung, und den Koroyd-Exit erwähnen
- Max. 150 Wörter

Version B: "2-Minuten-Demo-Pitch"
- Für eine Startup-Nacht oder Demo Day
- Inkludiert Unit Economics und Team-Story
- Max. 400 Wörter

Version C: "5-Minuten-IC-Pitch"
- Für ein formelles VC Investment Committee
- Vollständige Argumentation: Problem → Lösung → Markt → Traction → Team → Ask
- Max. 800 Wörter

TONALITÄT-REGELN:
- "Physiotherapeut" = Unfair Advantage, NICHT Schwäche
- "Simulation-only" = "Pre-proof = Pre-dilution Opportunity"
- Koroyd-Exit = Beweis, dass der Markt reif ist
- €215 Gesamtkosten für fehlende Schritte = Kapitaleffizienz-Story
- Keine Buzzwords ("disruptive", "game-changer", "revolutionary")
- Stattdessen: Zahlen, Vergleiche, Kontraste
- WICHTIG: BROCE ist eine "Human Movement Company", nicht eine 
  "Safety Gear Company". Der Pitch muss die EMOTIONALE Dimension 
  transportieren: Mut, Wohlgefühl, Freude an Bewegung, Eleganz.
  Wie Lamborghini nicht "schnelles Auto" verkauft, sondern ein 
  Körpergefühl — verkauft BROCE nicht "Schutz", sondern Freiheit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TEIL 3: DECK-STRUKTUR (12 Slides)

Erstelle die exakte Struktur für ein Pre-Seed Pitch Deck:

Für JEDE Slide:
1. Slide-Nummer und Titel
2. Headline (1 Satz, der die Kernaussage ist)
3. Kerninhalt (3-5 Bullet Points oder 1 Grafik-Beschreibung)
4. Speaker Notes (was der Gründer dazu SAGT, 3 Sätze)
5. Datenquelle (woher die Zahlen kommen)

Standard Pre-Seed Deck-Struktur:
1. Cover
2. Problem
3. Lösung
4. Wie es funktioniert (Technologie)
5. Markt (TAM/SAM/SOM)
6. Wettbewerb
7. Geschäftsmodell / Unit Economics
8. Traction / Bisherige Ergebnisse
9. Patent / IP / Moat
10. Team
11. Finanzplan / Use of Funds
12. Ask / Call to Action

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TEIL 4: MARKTVALIDIERUNG (mit Google Search)

Recherchiere aktuelle Daten (2024-2026):

4.1 Exits und Fundraising im Bereich Body Protection:
- Koroyd Acquisition 2025 — Preis, Käufer, Multiples
- D3O Funding History — Total raised, letzte Bewertung
- MIPS AB — Börsenwert, Revenue Multiple
- Andere relevante Exits oder Deals

4.2 Marktgröße verifizieren:
- Global Impact Protection Market (aktuellste Quelle)
- Personal Protective Equipment EU-Markt
- Smart Textiles / Wearable Protection Segment

4.3 Benchmark-Vergleiche:
- Was haben vergleichbare Pre-Seed Material-Science Startups geraised?
- Welche Bewertung bei Pre-Seed für ähnliche Technologie-Tiefe?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TEIL 5: FUNDING-STRATEGIE OPTIMIERUNG

Bewerte BROCEs aktuelle Förder-Strategie und optimiere:

5.1 Priorisierung:
- Rangfolge der 5 Förderprogramme nach Erfolgswahrscheinlichkeit
- Was sollte ZUERST beantragt werden?

5.2 Non-Dilutive vs. Dilutive:
- Optimale Mischung für die nächsten 12 Monate
- Wann ist der richtige Zeitpunkt für den ersten Equity-Investor?

5.3 Milestone-basierte Strategie:
- Welcher Meilenstein erhöht die Bewertung am meisten?
  (Drop-Test > Patent > CE > Revenue?)
- In welcher Reihenfolge?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

OUTPUT FORMAT:

## 1. Devil's Advocate: 10 härteste IC-Fragen
## 2. Pitch Surgery
### 2A. Elevator (150 Wörter) | 2B. Demo (400 Wörter) | 2C. IC (800 Wörter)
## 3. Deck-Struktur (12 Slides, detailliert)
## 4. Marktvalidierung (mit Quellen)
## 5. Funding-Strategie Optimierung
## Anhang: "Red Flag / Green Flag" Matrix für Investoren

REGELN:
- Alles auf Deutsch
- Jede Zahl muss eine Quelle haben
- Pitch-Texte müssen sofort verwendbar sein (nicht "hier könnte stehen...")
- Sei ehrlich: Wenn etwas schwach ist, sage es — und liefere die Lösung gleich mit
```
