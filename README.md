# svg-medication-labels
Spritzenetiketten für Medikamente, nach DIVI Empfehlung, als SVG.

**Kleine Etiketten für Spritzen bis 20 ml**
- Wirkstoff und Konzentration
- 25-40 mm x 10-15 mm empfohlene Größe

**Große Etiketten für 50 ml Spritzen**
- Wirkstoff und Konzentration
- Wirkstoffmenge, Lösungsmittel und Lösungsvolumen
- Informationen zur Herstellung
- 60-80 mm x 30-40 mm empfohlene Größe

**Add-on Etiketten für Zusatzmedikation in Infusionslösungen**
- Wirkstoff und Menge
- 60-80 mm x 30-40 mm empfohlene Größe

**Leitungsetiketten für Infusionsleitungen**
- Wirkstoff
- 50-80 x 10-15 mm empfohlene Größe

## Standards
- Größtenteils kompatibel mit der DIVI Empfehlung[^1], welche wiederrum auf der ISO 26825 basiert.

## Vorschläge und Fehler
Falls Ungereimtheiten auffallen oder sonstige Vorschläge aufkommen, diese bitte als GitHub Issue anlegen.

## Roadmap
### 🔴 1.1.0 Datenmatrix - *To-Do*
- [ ] Etiketten mit **DSEC Datenmatrix** generieren
### 🟡 1.0.X Ergänzungen - *In Arbeit*
- [ ] **Variable Schriftgröße** Nach 7.3 der DIVI Empfehlung[^1] vorgesehen. Aktuell nur fettgedruckte Schrift

### 🟢 1.0.0 Grundlagen - *Abgeschlossen*
- [X] **Kleine, Große, Add-On und Leitungsetiketten**
- [X] **Korrekte Darstellung nach DIVI Empfehlung**[^1] innerhalb der empfohlenen Seitenverältnissen. *(Siehe oben für fehlende Funktionen)*
- [X] Alle **Beschriftungs- und Konzentrationsvorschläge** der DIVI[^2]

### 🔴 Zurückgestellt - *Aktuell ohne Zeitplan*
- [ ] **Beschriftung bearbeiten** außerhalb der Vorschläge
- [ ] Anpassungen für **"Print-on demand"-Drucker**

## Nutzung
Die wichtigsten Komponente ist `medications` als Liste aller Wirkstoffe und die Objekt-Eigenschaft `variations` jedes Wirkstoffs. Die `variations`-Eigenschaft enthält alle Label-Vorlagen für den Wirkstoff.

Somit wäre zur Nutzung folgendes beispielhaftes Vorgehen denkbar:
1. Nutzer wählt aus `medications` einen Wirkstoff
2. Nutzer wählt eine Variation aus `medications[ausgewählt].variations`
3. Label rendern

```ts
render(
    // Optionen zur Darstellung
    {
        // SVG als Vektorgrafik erlaubt dadurch
        // die verlustfreie Skalierung auf alle
        // Größen mit diesem Seitenverhältnis
        aspectRatio: breite / höhe,

        // Optional: Abrundung der Ecken
        // Standardwert meist ausreichend
        edgeRadius?: number,

        // Optional: Per Empfehlung ist sans-serif zu nutzen.
        font?: 'sans-serif' | 'mono'
    },

    // Das Element aus Labels.medications
    auswahl,

    // Der Index im .variations Array für die zu nutzende Variation
    variationIndex 
)
```

[^1]: [DIVI Empfehlung](https://www.divi.de/service/spritzenetiketten)
[^2]: [DIVI Beschriftungsvorschläge](https://www.divi.de/component/edocman/beschriftungsvorschlaege/download?Itemid=0)