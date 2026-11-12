# Enrúmbate — Design System

> v0.1 · 2026-11-11 · Derivado del logo (`assets/logo.jpg`)
> Implementación en código: `css/styles.css` (tokens en `:root`).

---

## 1. Concepto de marca

El logo es un **pin de ubicación** que contiene un **camino sinuoso** (doble trazo navy + magenta) que avanza hacia una **estrella de cuatro puntas**. Lo traducimos a tres ideas que guían todo el sistema:

| Idea | Del logo | En la interfaz |
|---|---|---|
| **Destino** | El pin | Bloques con esquinas redondeadas, formas contenidas, navegación clara |
| **Trayecto** | El camino en "S" | Curvas, líneas onduladas como separadores, ritmo asimétrico |
| **Chispa** | La estrella | Acentos amarillos puntuales: nunca como fondo grande, siempre como detalle |

Tono: cercano, alegre, profesional. Experiencias en México y durante tus viajes.

---

## 2. Color

### 2.1 Paleta base (muestreada del logo)

| Token | HEX | RGB | Uso |
|---|---|---|---|
| `--navy-700` **Noche** | `#053067` | 5, 48, 103 | Color principal. Texto de titulares, fondos de sección destacados, footer |
| `--magenta-500` **Rumba** | `#EA0C7B` | 234, 12, 123 | Acción. Botones primarios, enlaces, eyebrows |
| `--yellow-400` **Chispa** | `#F3D036` | 243, 208, 54 | Acento. Estrella, viñetas, subrayados, detalles sobre navy |
| `--cream-50` **Arena** | `#F5F4F0` | 245, 244, 240 | Fondo general de la web |

### 2.2 Escalas extendidas

| Navy | | Magenta | | Amarillo | | Neutros | |
|---|---|---|---|---|---|---|---|
| 900 | `#021B3D` | 700 | `#B00A5D` | 600 | `#C9A514` | white | `#FFFFFF` |
| 700 | `#053067` | 600 | `#CC0A6B` | 400 | `#F3D036` | cream-50 | `#F5F4F0` |
| 500 | `#2A5490` | 500 | `#EA0C7B` | 100 | `#FBF1C4` | cream-100 | `#ECE9E1` |
| 300 | `#8DA4C7` | 100 | `#FCE0EE` | | | ink-500 | `#4A5670` |
| 100 | `#E3E9F3` | | | | | line | `#D9D5CA` |

### 2.3 Roles semánticos

| Token | Valor | Uso |
|---|---|---|
| `--color-bg` | cream-50 | Fondo de página |
| `--color-surface` | white | Tarjetas |
| `--color-surface-alt` | cream-100 | Bandas alternas |
| `--color-text` | navy-700 | Texto principal |
| `--color-text-muted` | ink-500 | Texto secundario |
| `--color-accent` | magenta-500 | CTA, links |
| `--color-accent-hover` | magenta-700 | Hover de CTA |
| `--color-spark` | yellow-400 | Detalles |
| `--color-inverse-bg` | navy-700 | Secciones oscuras |
| `--color-inverse-text` | cream-50 | Texto sobre navy |

### 2.4 Contraste (WCAG)

| Combinación | Ratio | Resultado |
|---|---|---|
| Navy `#053067` sobre Arena `#F5F4F0` | ≈ 11.7 : 1 | AAA |
| Arena sobre Navy | ≈ 11.7 : 1 | AAA |
| Blanco sobre Magenta `#EA0C7B` | ≈ 4.3 : 1 | AA solo texto grande / bold ≥ 18.6px |
| Blanco sobre Magenta-700 `#B00A5D` | ≈ 6.9 : 1 | AA |
| Amarillo `#F3D036` sobre Navy | ≈ 8.5 : 1 | AAA |
| Amarillo sobre Arena | ≈ 1.4 : 1 | ❌ Nunca como texto sobre fondo claro |

**Reglas**
- Botones: fondo `magenta-600` (5.5:1 con blanco, AA en cualquier tamaño); `magenta-500` puro queda para formas, iconos y titulares grandes.
- El amarillo solo vive sobre navy o como forma decorativa (estrella, subrayado, punto).
- Proporción aproximada por pantalla: **60 % Arena · 25 % Navy · 10 % Magenta · 5 % Amarillo**.

---

## 3. Tipografía

Familias (Google Fonts):

| Rol | Familia | Por qué |
|---|---|---|
| **Display** (titulares) | **Fraunces** — 600/700, con *italic* | Serif suave con curvas “blandas” (eje SOFT) que eco del camino del logo; da calidez y carácter de viaje. |
| **Texto / UI** | **Manrope** — 400/500/700 | Sans geométrica amable, muy legible en móvil, buen soporte de acentos en español. |

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,600..700,100;1,9..144,600..700,100&family=Manrope:wght@400;500;700&display=swap" rel="stylesheet">
```

### 3.1 Escala tipográfica (fluida, ratio ~1.25)

| Token | Tamaño (móvil → desktop) | Familia / peso | Line-height | Uso |
|---|---|---|---|---|
| `--fs-display` | 44 → 88px | Fraunces 700 | 1.0 | H1 hero |
| `--fs-h2` | 34 → 56px | Fraunces 600 | 1.08 | Título de sección |
| `--fs-h3` | 22 → 28px | Fraunces 600 | 1.2 | Tarjetas, pasos |
| `--fs-lead` | 18 → 22px | Manrope 500 | 1.5 | Bajada / tagline |
| `--fs-body` | 16 → 17px | Manrope 400 | 1.65 | Párrafos |
| `--fs-small` | 14px | Manrope 500 | 1.5 | Notas, captions |
| `--fs-eyebrow` | 13px | Manrope 700, MAYÚSCULAS, tracking 0.14em | 1.2 | Pre-títulos |

**Reglas**
- Una palabra clave del H1/H2 puede ir en *Fraunces italic* en magenta (“la chispa” del titular). Máximo una por título.
- Longitud de línea de párrafo: 45–70 caracteres (`max-width: 62ch`).
- Nunca texto en mayúsculas largas salvo eyebrows y botones cortos.

---

## 4. Retícula y espaciado

### 4.1 Retícula

| Breakpoint | Ancho | Columnas | Gutter | Margen lateral |
|---|---|---|---|---|
| **sm** (móvil) | < 640px | 4 | 16px | 20px |
| **md** (tablet) | 640–1023px | 8 | 24px | 32px |
| **lg** (desktop) | ≥ 1024px | 12 | 32px | 48px |
| Contenedor máx. | 1240px | 12 | 32px | auto |

Clases: `.container` (contenedor), `.grid` (12 col), `.col-*` / `.md:col-*` según necesidad. Composiciones recomendadas en desktop:
- Hero: texto 6 col + imagen 6 col (imagen sangra al borde derecho opcionalmente).
- Encabezado de sección: título 7 col + texto 5 col (asimétrico, como el camino).
- Tarjetas: 4 × 3 col (desktop) → 2 × 4 col (tablet) → 1 × 4 col (móvil).
- Pasos: intro 5 col + lista 7 col.

### 4.2 Espaciado (base 8)

| Token | px |
|---|---|
| `--space-1` | 4 |
| `--space-2` | 8 |
| `--space-3` | 12 |
| `--space-4` | 16 |
| `--space-5` | 24 |
| `--space-6` | 32 |
| `--space-7` | 48 |
| `--space-8` | 64 |
| `--space-9` | 96 |
| `--space-10` | 128 |

Padding vertical de sección: `clamp(64px, 10vw, 128px)`.

### 4.3 Radios, sombras, movimiento

| Token | Valor | Uso |
|---|---|---|
| `--radius-sm` | 8px | Inputs, chips |
| `--radius-md` | 16px | Tarjetas |
| `--radius-lg` | 28px | Imágenes grandes |
| `--radius-pin` | 999px 999px 999px 24px | Forma “pin” para imágenes destacadas (inspirada en el logo) |
| `--radius-pill` | 999px | Botones |
| `--shadow-card` | `0 1px 2px rgba(5,48,103,.06), 0 12px 32px -12px rgba(5,48,103,.18)` | Tarjetas |
| `--ease` | `cubic-bezier(.2,.7,.2,1)` | Transiciones |
| `--dur` | 220ms | Hover / focus |

Respetar `prefers-reduced-motion`: sin animaciones de desplazamiento ni cinta en movimiento.

---

## 5. Logo

| Archivo | Uso |
|---|---|
| `assets/logo.jpg` | Original, fondo arena (2000×2000) |
| `assets/logo-mark.png` | Isotipo con fondo transparente — sobre fondos claros |
| `assets/logo-mark-light.png` | Isotipo con trazo navy convertido a arena — sobre navy |

- **Área de protección**: el ancho de la estrella alrededor del isotipo.
- **Tamaño mínimo**: 28px de alto en pantalla.
- Lockup horizontal: isotipo + wordmark “Enrúmbate” en Fraunces 700, navy, separados por `--space-3`.
- No: rotar, cambiar colores del camino, aplicar sombras, colocar sobre fotos sin velo.

---

## 6. Componentes

| Componente | Especificación |
|---|---|
| **Botón primario** | Fondo magenta-600 (`#CC0A6B`, 5.5:1 con blanco → AA), texto blanco Manrope 700 16px, padding 14×28, radius pill. Hover: magenta-700 + flecha se desplaza 3px. Focus: outline 3px yellow-400, offset 3px. |
| **Botón secundario** | Borde 2px navy, texto navy. Hover: fondo navy, texto arena. |
| **Enlace de texto** | Navy 700 con subrayado amarillo grueso (6px, offset abajo). Hover: subrayado magenta. |
| **Eyebrow** | Estrella ✦ amarilla/magenta + texto en mayúsculas magenta-700. Sobre navy: amarillo. |
| **Chip / cinta** | Texto Fraunces italic, separado por estrellas ✦ amarillas, sobre banda navy. |
| **Tarjeta de experiencia** | Imagen 4:5 con radius-md, título H3 y tagline. Hover: imagen escala 1.04. |
| **Paso numerado** | Número en Fraunces 700 amarillo (sobre navy), H3 arena, texto navy-300/arena 80 %. |
| **Separador “camino”** | SVG de onda en S con trazo magenta 3px, usado entre secciones. |
| **Iconos sociales** | 40×40, círculo con borde 1.5px, hover relleno magenta. |

---

## 7. Voz y contenido

- Tuteo, frases cortas, verbos de experiencia: *vivir, descubrir, armar, disfrutar, enrumbarse*.
- Evitar tecnicismos de agencia (“paquetes”, “cotización”) en titulares; usarlos solo en formularios.
- Español de México.
