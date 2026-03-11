# Mi Rowsoe Tilburg — Website

Website for **Mi Rowsoe** (tropical toko & shipping) in Tilburg. Content is based on their [Facebook page](https://www.facebook.com/mirowsoetilburg).

## Project structure

```
mi-rowsoe-website/
├── index.html          # Page structure and static copy (about, contact)
├── css/
│   ├── main.css        # Imports all styles — start here for layout
│   ├── variables.css   # Colors, spacing, fonts (edit to retheme)
│   ├── base.css       # Reset, body, .container
│   └── components.css # Header, nav, sections, cards, gallery, footer
├── js/
│   └── main.js        # Builds services & gallery from data, smooth scroll
├── data/
│   └── content.js     # Services, gallery images, copy — edit for content
├── images/            # Optional: put local images here, reference in content.js
└── README.md
```

## Editing the site

| What to change        | File to edit        |
|-----------------------|---------------------|
| Colors, fonts, spacing| `css/variables.css` |
| Layout and components | `css/components.css` |
| Services, gallery images, copy | `data/content.js` |
| About text, contact, nav | `index.html` |
| Behavior (e.g. smooth scroll) | `js/main.js` |

## Run locally

Open `index.html` in a browser, or use a local server:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve
```

Then open http://localhost:8000 (or the port shown).

## Images

Image URLs in `data/content.js` point to Facebook by default. If they stop loading, download the photos from [Mi Rowsoe’s Facebook](https://www.facebook.com/mirowsoetilburg/photos), save them in `images/`, and set the `image` / `src` fields in `data/content.js` to paths like `images/photo1.jpg`.
