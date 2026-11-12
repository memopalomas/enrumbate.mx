# enrumbate.mx

Sitio estático (HTML/CSS) de Enrúmbate.

- `index.html` — Página "muy pronto" (portada pública por ahora)
- `inicio.html` — Home
- `designsystem.md` — Colores, tipografía, retícula y componentes
- `css/styles.css` — Tokens y componentes base · `css/home.css` — Home
- `assets/` — Logo y fotos (créditos en el footer de la home)

## Deploy
Cada push a `main` sube el sitio por FTP a `public_html` (`.github/workflows/deploy.yml`).
Para borrar todo en el servidor y subir limpio: Actions → *Deploy FTP* → *Run workflow* → `clean = true`.
