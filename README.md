# enrumbate.mx

Sitio estático (HTML/CSS) de Enrúmbate.

- `index.html` — Página "muy pronto" (portada pública por ahora)
- `inicio.html` — Home
- `originales.html`, `select.html` — Líneas de experiencias
- `experiencias.html` (filtros), `calendario.html`, `nosotros.html`, `contacto.html` (formulario a WhatsApp)
- `designsystem.html` — Design system para revisión del cliente
- `js/data.js` — **Experiencias, fechas y contacto: edita aquí** y se actualizan todas las páginas
- `js/site.js` — Header, footer, tarjetas e iconos compartidos
- `designsystem.md` — Colores, tipografía, retícula y componentes
- `css/styles.css` — Tokens y componentes base · `css/site.css` — Componentes de páginas
- `assets/` — Logo y fotos (créditos en el footer de la home)

## Deploy
Cada push a `main` sube el sitio por FTP a `public_html` (`.github/workflows/deploy.yml`).
Para borrar todo en el servidor y subir limpio: Actions → *Deploy FTP* → *Run workflow* → `clean = true`.
