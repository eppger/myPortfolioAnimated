# Styleguide — myPortfolioAnimated

## Värvid

| Token | Hex | Kasutus |
|---|---|---|
| `--primary-color-headlines` | `#FF9BCF` | Pealkirjad, logo, nupude ääred, ikoonid, `hr` |
| `--primary-color-buttons` | `#FCFFC8` | Nupude taust, vormiväljade taust |
| `--primary-color-background` | `#ffffff` | Lehekülje taust |
| `--primary-color-text` | `#858383` | Põhitekst, lõigud, footer |
| `--primary-color-text-dark` | `#4a4a4a` | Kaartide pealkirjad, navigatsioon, sildid |
| *(staatiline)* | `#ffffff` | Tekst aktiivsel nupul (hover) |
| *(staatiline)* | `#e07db8` | Kontaktivormi nupp hover-olekus |

---

## Fondid

**Perefond:** Montserrat (Google Fonts)

Laetud raskused:
- `300` — Light
- `400` — Regular
- `400 italic` — Regular Italic
- `500` — Medium
- `600` — Semi-Bold
- `700` — Bold
- `800` — Extra-Bold

**Baasseaded:**
- Suurus: `15px`
- Reavahe: `1.65`
- Värv: `var(--primary-color-text)`

---

## Typograafia skaala

| Element | Mobiil | Tahvelarvuti | Desktop | Kaal |
|---|---|---|---|---|
| Logo | 28px | 36px | 40px | 800 |
| Sektsiooni pealkiri (`h3`) | 28px | 34px | 40px | 700 |
| Hero nimi (`span`) | — | 30px | 42px | 700 |
| Kaardi pealkiri (`h4`) | 18px | 17px | 20px | 700 |
| Põhitekst | 15–16px | 14px | 15–16px | 400 |
| Navigatsioon | — | 13px | 13px | 600 |
| Tag/märgend | 11px | 11px | 11px | 600 |
| Footer | 13px | 13px | 13px | 400 |

---

## Breakpointid

| Nimi | Laius |
|---|---|
| Mobiil | `< 600px` (vaikimisi) |
| Jagatud (tahvel + desktop) | `min-width: 600px` |
| Tahvelarvuti | `600px – 1024px` |
| Desktop | `min-width: 1025px` |

---

## Nupud

### Esmane nupp (outline)
- Taust: `--primary-color-buttons` (`#FCFFC8`)
- Tekst: `--primary-color-headlines` (`#FF9BCF`)
- Ääris: `2px solid --primary-color-headlines`
- Äärise raadius: `8px`
- Kaal: `600`
- **Hover:** taust muutub `#FF9BCF`, tekst `#ffffff`, liigub `2px` üles

### Kontaktvormi nupp (täidetud)
- Taust: `--primary-color-headlines` (`#FF9BCF`)
- Tekst: `#ffffff`
- Ääris: puudub
- Äärise raadius: `6px`
- Kaal: `600`
- **Hover:** taust muutub `#e07db8`, liigub `2px` üles

---

## Vormielemendid

- Taust: `--primary-color-buttons` (`#FCFFC8`)
- Ääris: puudub
- Äärise raadius: `4px`
- **Fookus:** `box-shadow: 0 0 0 2px #FF9BCF`

---

## Kaardid

- Ääris: `1px solid rgba(174, 174, 178, 0.4)`
- Äärise raadius: `12px`
- Paigutus: `grid` (ikoon + tekst)
- Tag-märgendid: `#FF9BCF` taust, `#ffffff` tekst, `border-radius: 10px`

---

## Animatsioonid

| Efekt | Kirjeldus |
|---|---|
| `fadeInUp` | Hero tekst ilmub alt üles, `opacity 0→1`, viivitused `0.1s / 0.35s / 0.6s` |
| Galerii hover | Pilt suureneb `scale(1.08)`, `transition: 0.35s` |
| Menüü hover | Link suureneb `scale(1.15)`, `transition: 0.2s` |
| Nupp hover | `translateY(-2px)`, värvimuutus `0.2s` |
