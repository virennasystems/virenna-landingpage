# VIRENNA · Landingpage

📍 Barrierefreie, DSGVO-konforme Plattform für Menschen mit ME/CFS, Long COVID, POTS, MCAS

## 🎯 Mission
VIRENNA ist ein nicht-ausbeutendes Unterstützungssystem, entwickelt aus Betroffenenerfahrung.
Diese Seite dient als Einstiegspunkt für Betroffene, Ärzt:innen und Partner.

## 📁 Inhalte

- `index.html` – Startseite mit Navigation zu allen Unterbereichen
- `agb.html`, `datenschutz.html`, `impressum.html`, `manifest.html` – zweisprachige Rechtstexte
- `style.css` – basierend auf Open Props (WCAG-konform)
- `/images/` – Screenshot- & QR-Assets
- `/downloads/` – ZIP mit Ressourcenstruktur

## 🔐 Datenschutz & Ethik

- Kein Tracking, keine Cookies, keine Werbung
- Zero Analytics-by-default
- Offlinefähig & minimierter JavaScript-Einsatz
- Ethikmanifest: [`manifest.html`](manifest.html)

## 🚀 Deployment

1. Repo bei GitHub erstellen (`virenna/landingpage`)
2. Dateien wie oben strukturiert pushen
3. GitHub Pages aktivieren:
   - Branch: `main` oder `gh-pages`
   - Pfad: `/(root)`
4. `Settings > Pages` → Domain `virenna.org` eintragen
5. `.nojekyll` & `CNAME` müssen im Root sein

## ✅ Barrierefreiheit (WCAG 2.1 AAA orientiert)

- Sprachumschaltung DE/EN per Button
- ARIA-Labels & Rollenstrukturen für alle Navigationselemente
- Kontrast ≥ 7:1
- Tastaturbedienung & Screenreader getestet

## 📊 Tools für Qualitätsprüfung

- [axe-core](https://www.deque.com/axe/)
- [tota11y](https://khan.github.io/tota11y/)
- Chrome Lighthouse / Firefox A11Y Checker

## 🧠 Weiterentwicklung

- 🧩 Theme-Mode (Dark/Light Toggle)
- 📬 Newsletter-Modul (mit Double Opt-in DSGVO-konform)
- 🧪 Feedbacksystem für Community-Beteiligung

---

Mit ❤️ von Betroffenen für Betroffene
