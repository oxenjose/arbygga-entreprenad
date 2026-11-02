# Arbygga Entreprenad - Webbplats

En modern, responsiv och interaktiv webbplats för byggfirman **Arbygga Entreprenad** i Stockholm. Webbplatsen är byggd med Python och Flask, och fokuserar på att skapa ett professionellt förtroende samt underlätta för kunder att begära en offert.

## 📸 Skärmbilder (Screenshots)

*(Här kan du lägga till dina bilder senare. Spara dem i en mapp som heter `screenshots` och skriv t.ex.:)*
![Startsida Arbygga Entreprenad](screenshots/hero.png)

## ✨ Funktioner (Features)

Webbplatsen består av en startsida med flera sektioner samt tre undersidor för tjänsterna.

*   **Hero-sektion:** En stor, inbjudande bild med en tydlig uppmaning (Call to Action) att ringa eller begära en gratis offert. Inkluderar en pulserande telefonikon i toppmenyn för att öka konverteringen.
*   **Om oss (Vi är Arbygga Entreprenad):** En kort presentation av företaget med en tillhörande bild.
*   **Tjänstekort (Måleri, Golv, Snickeri):** Tre interaktiva kort som presenterar företagets huvudtjänster. Korten har en inbyggd **3D-tilt-effekt** som följer muspekaren och leder till respektive undersida.
*   **Projektprocess (Så här går det till):** En tydlig 6-stegsguide som visar kunden hur ett projekt går till, från förfrågan till slutbesiktning.
*   **Kontaktformulär:** Ett snyggt, mörkt formulär där kunder kan fylla i sina uppgifter och beskriva sitt projekt.
*   **Scroll-animationer:** Element tonas in mjukt (fade-in) när användaren scrollar ner för en lyxig känsla.
*   **Responsiv design:** Webbplatsen anpassar sig automatiskt efter mobil, surfplatta och datorskärm.

## 🛠️ Tekniker som används

*   **Backend:** Python, Flask
*   **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
*   **Typsnitt:** Google Fonts (Roboto för brödtext, Playfair Display för rubriker)
*   **Ikoner:** Font Awesome (CDN)

## 📁 Projektstruktur

```text
arbygga-entreprenad/
│
├── venv/                  # Virtuell miljö (ignoreras av Git)
├── .gitignore             # Filer som inte ska laddas upp till Git
├── requirements.txt       # Lista på Python-paket (Flask)
├── app.py                 # Huvudfilen för Flask (rutter och logik)
│
├── static/
│   ├── css/
│   │   └── style.css      # All styling för webbplatsen
│   ├── js/
│   │   └── script.js      # Interaktivitet (scroll-animationer, 3D-effekter)
│   └── images/            # Bilder (logo.png, hero-bg.png, tak.png, golv.png, etc.)
│
└── templates/
    ├── base.html          # Huvudmall med navbar och footer
    ├── index.html         # Startsidan
    ├── maleri.html        # Undersida för Måleri
    ├── golv.html          # Undersida för Golv
    └── snickeri.html      # Undersida för Snickeri
