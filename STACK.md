# Stack tecnológico — Enrúmbate

## Hoy (HTML estático)
- HTML + CSS + JavaScript sin frameworks ni build.
- Datos de experiencias en `js/data.js`; header, footer y tarjetas en `js/site.js`.
- Tokens y componentes en `css/styles.css` y `css/site.css`, documentados en `designsystem.md` / `designsystem.html`.
- Fuentes: Fraunces y Manrope (Google Fonts).
- Deploy: GitHub Actions → FTP a `public_html` en cada push a `main`.

## Cuando pase a WordPress
| Pieza | Uso |
|---|---|
| **WordPress** | CMS |
| **Astra** (tema padre) | Base ligera del sitio |
| **Astra Child** (tema hijo) | Tokens, estilos y plantillas propias; aquí van `styles.css` / `site.css` adaptados |
| **Elementor Free** | Maquetación de páginas (inicio, Originales, Select, Nosotros, Contacto) |
| **ACF (Advanced Custom Fields)** | Campos de **eventos y experiencias** |

### Experiencias y eventos con ACF
- Un tipo de contenido `experiencia` con **página de listado** (archivo con filtros por línea y categoría) y **página interna** por experiencia, para poder compartir cada una con su propia URL e imagen al compartir (Open Graph).
- Campos, mismos que hoy en `js/data.js`:

| Campo ACF | Tipo | Notas |
|---|---|---|
| `linea` | Select | `originales` / `select` (podría ser taxonomía) |
| `categoria` | Taxonomía | conciertos, nocturna, recorridos, catas, escapadas, internacional, cenas, privadas |
| `desc` | Área de texto | Texto corto de la tarjeta |
| `fecha` | Fecha | Primera fecha; vacía = “Próximamente” |
| `fecha_fin` | Fecha | Al pasar, la experiencia se oculta sola |
| `fecha_texto` | Texto | Cómo se muestra la fecha |
| `lugar` | Texto | |
| `precio` | Texto | Opcional, p. ej. “$450 por persona · Aparta con $250” |
| `etiqueta` | Texto | Chip sobre la foto |
| `inicio` | Verdadero/falso | Aparece en “Próximas fechas” del inicio |
| Imagen destacada | — | Con texto alternativo |

### Notas de la migración
- Elementor Free no trae Theme Builder: las plantillas de listado e interna de experiencias se hacen en el **tema hijo** (`archive-experiencia.php`, `single-experiencia.php`) leyendo los campos de ACF.
- Registrar el tipo de contenido y la taxonomía en el tema hijo (o con ACF, que ya permite crearlos).
- Conservar los IDs del design system (`COL-xx`, `COM-xx`) como clases o variables globales para seguir pidiendo cambios por ID.
- Los botones siguen yendo a WhatsApp (`wa.me/523321570254`) con el mensaje prellenado.
