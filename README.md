# enrumbate.mx

Sitio estático (HTML/CSS) de Enrúmbate.

- `index.html` — Página "muy pronto" (portada pública por ahora)
- `inicio.html` — Home
- `originales.html`, `select.html` — Líneas de experiencias
- `experiencias.html` (filtros), `calendario.html`, `nosotros.html`, `contacto.html` (formulario a WhatsApp)
- `designsystem.html` — Design system para revisión del cliente
- `textos.html` — Revisión de textos v1 (antes/después con IDs TXT-xx) para la clienta
- `js/data.js` — **Experiencias, fechas y contacto: edita aquí** y se actualizan todas las páginas
- `js/site.js` — Header, footer, tarjetas e iconos compartidos
- `designsystem.md` — Colores, tipografía, retícula y componentes
- `css/styles.css` — Tokens y componentes base · `css/site.css` — Componentes de páginas
- `STACK.md` — Stack actual y plan para WordPress (Astra + hijo, Elementor Free, ACF)
- `assets/` — Logo y fotos (créditos en el footer de la home)

## Deploy
Cada push a `main` sube el sitio por FTP a `public_html` (`.github/workflows/deploy.yml`).
Para borrar todo en el servidor y subir limpio: Actions → *Deploy FTP* → *Run workflow* → `clean = true`.

## Pendientes
- **Menú principal (7 enlaces):** evaluar juntar *Experiencias* y *Calendario* en una sola sección. Cambia la estructura del sitio; decidir con la clienta.
- **Franja de confianza en el inicio:** fotos reales de salidas, reseñas o foto de quien está detrás de Enrúmbate (material de la clienta).
- **Logo en vector (SVG/AI)** y versiones oficiales en claro y oscuro (LOG-02, LOG-03). Hoy `logo-mark.png` y `logo-mark-light.png` se recortaron de `logo.jpg`.
- **Confirmaciones de la clienta:** los cambios marcados *Confirmar* en `textos.html` (anticipo, forma de pago, traslados, hospedaje, etc.).
- **Historia real para Nosotros** (TXT-14) y precio de la Morat Fan Party.
