# Swiftly — Website Developer Handoff
**Version:** 1.0  
**Stack:** Vanilla HTML · CSS · JavaScript (no frameworks, no build tools)

---

## 📁 Project Structure

```
swiftly-website/
├── index.html          ← All page content / markup
├── css/
│   └── style.css       ← All styles + design tokens
├── js/
│   └── main.js         ← All interactivity (nav, ROI calc, modal, FAQ)
├── assets/
│   └── logo.png        ← Swiftly logo (200×200px, replace as needed)
└── README.md           ← This file
```

---

## 🚀 How to Run Locally

No build step required. Just open in a browser:

```bash
# Option 1 — open directly
open index.html

# Option 2 — run a local server (recommended to avoid CORS on assets)
npx serve .
# or
python3 -m http.server 8080
```

---

## 🎨 How to Change Fonts

**Step 1** — Pick fonts at https://fonts.google.com  
**Step 2** — Replace the `<link>` in `index.html`:

```html
<!-- index.html, line ~10 -->
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap" rel="stylesheet"/>
```

**Step 3** — Update the variables in `css/style.css`:

```css
/* css/style.css — :root block at the top */
--font-display: 'Your Display Font', sans-serif; /* Headings */
--font-body:    'Your Body Font', sans-serif;    /* Everything else */
```

### Recommended Font Pairings

| Display (Headings) | Body | Vibe |
|---|---|---|
| `Syne` (current) | `DM Sans` (current) | Bold & modern |
| `Bricolage Grotesque` | `Inter` | Friendly & clean |
| `Playfair Display` | `Lato` | Premium & editorial |
| `Space Grotesk` | `Manrope` | Tech-forward |
| `Outfit` | `Nunito` | Approachable & round |

---

## 🎨 How to Change the Brand Color

Find and update these two variables in `css/style.css`:

```css
:root {
  --orange:      #FF4D00;  /* ← Primary accent — change this */
  --orange-dark: #CC3D00;  /* ← Hover state — keep ~20% darker */
}
```

The `--orange-soft` and `--orange-mid` variables are auto-derived from rgba(), so update them too if switching to a different hue:

```css
  --orange-soft: rgba(255,77,0,0.11);   /* ← tinted background */
  --orange-mid:  rgba(255,77,0,0.22);   /* ← tinted border */
```

---

## 🔠 How to Change Copy / Text

All page content lives in `index.html`. Each section is clearly labeled with HTML comments:

```html
<!-- ═══════════════════════════════════════
     HERO SECTION
     ═══════════════════════════════════════ -->
```

Key content areas:
- **Hero headline** — `<h1>` inside `.hero-layout`
- **Pricing** — `.pricing-card` blocks (search for "pricing-tier")
- **FAQ** — `.faq-item` blocks (add/remove as needed)
- **Testimonials** — `.testi-card` blocks
- **Footer links** — `.footer-links` anchor tags

---

## 💰 ROI Calculator — How to Adjust

The calculator logic is in `js/main.js`. To change the investment amount used in the break-even calculation:

```js
// js/main.js — near the top
const SWIFTLY_INVESTMENT = 14900; // ← Change to your actual price point
```

To change the formula itself, edit the `calcROI()` function.

---

## 📬 Contact Form — Connecting a Real Backend

The form currently shows an alert on submit. To connect a real backend:

**Option A — Calendly redirect:**
```js
// js/main.js — submitForm() function
function submitForm() {
  window.open('https://calendly.com/your-link', '_blank');
  closeModal();
}
```

**Option B — POST to an API:**
```js
function submitForm() {
  const data = {
    name:     document.querySelector('input[placeholder="Jay"]').value,
    email:    document.querySelector('input[type="email"]').value,
    phone:    document.querySelector('input[type="tel"]').value,
    business: document.querySelector('input[placeholder="Acme Co."]').value,
  };
  fetch('https://your-api.com/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  closeModal();
}
```

**Option C — Formspree (no backend needed):**
Add `action="https://formspree.io/f/YOUR_ID"` to the form tag.

---

## 🖼️ How to Replace the Logo

1. Export your logo as a PNG (recommend: 200×200px, transparent background)
2. Replace `assets/logo.png`
3. The logo is referenced in two places in `index.html` — nav and footer:
```html
<img src="assets/logo.png" alt="Swiftly logo"/>
```

---

## 📦 Deployment

This is a static site — deploy anywhere:

| Platform | Command |
|---|---|
| **Netlify** | Drag the folder into netlify.com/drop |
| **Vercel** | `npx vercel` in this directory |
| **GitHub Pages** | Push to repo → Settings → Pages → Deploy from main |
| **Cloudflare Pages** | Connect repo in Cloudflare dashboard |
| **Any web host** | Upload all files via FTP/cPanel |

---

## ✏️ Sections Checklist (before going live)

- [ ] Replace placeholder testimonial names with real clients
- [ ] Update pricing if different from $8,500 / $14,900 / Custom
- [ ] Connect the contact form to Calendly or a real backend
- [ ] Replace `assets/logo.png` with final hi-res logo
- [ ] Update `<meta name="description">` in `index.html` for SEO
- [ ] Add your domain to the page `<title>` tag
- [ ] Set up Google Analytics or Plausible tracking
- [ ] Add `favicon.ico` to root folder

---

## 🧑‍💻 Built by Lyra (AI CMO & PM)  
For: **Swiftly** — Mobile App Development Agency  
Design system: Dark editorial · Syne + DM Sans · Orange #FF4D00
