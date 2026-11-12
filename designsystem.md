# Enrúmbate — Design System

> v0.12 · 2026-11-12 · Derivado del logo (`assets/logo.jpg`)
> Implementación: `css/styles.css` (tokens en `:root`) · Vista para cliente: `/designsystem.html`

## Cómo pedir cambios

Cada elemento tiene un **ID** (ej. `COL-02`, `TIP-10`, `COM-01`). Para pedir un cambio, cita el ID y lo que quieres:

> `COL-02` → un magenta menos saturado
> `TIP-01` → probar otra tipografía para titulares
> `COM-01` → botones con esquinas menos redondeadas

El cambio se aplica en este archivo, en `css/styles.css` y en `/designsystem.html`, y se anota en **Registro de cambios** (al final) con el ID afectado.

Prefijos: `MAR` concepto · `COL` color · `TIP` tipografía · `RET` retícula · `ESP` espaciado · `FOR` forma y movimiento · `LOG` logo · `COM` componentes · `VOZ` voz.

---

## 1. Concepto de marca

El logo es un **pin de ubicación** con un **camino sinuoso** (navy + magenta) que avanza hacia una **estrella de cuatro puntas**.

| ID | Idea | Del logo | En la interfaz |
|---|---|---|---|
| `MAR-01` | **Destino** | El pin | Esquinas redondeadas, forma “pin” en imágenes destacadas, navegación clara |
| `MAR-02` | **Trayecto** | El camino en “S” | Curvas, líneas punteadas en S, composición asimétrica |
| `MAR-03` | **Chispa** | La estrella | Acentos amarillos puntuales (✦), nunca como fondo grande |
| `MAR-04` | **Dos líneas** | Referencias de la clienta | **Originales de Enrúmbate** (sociales y accesibles, color Rumba) y **Enrúmbate Select** (exclusivas y privadas, color Select) |
| `MAR-05` | **Eslogan** | Referencias de la clienta | “Rumbo a tu siguiente experiencia” bajo el nombre en header y footer (dato de la clienta, v0.13) |

---

## 2. Color

### 2.1 Paleta base (muestreada del logo)

| ID | Nombre | Token | HEX | RGB | Uso |
|---|---|---|---|---|---|
| `COL-01` | **Noche** | `--navy-700` | `#053067` | 5, 48, 103 | Principal: titulares, secciones oscuras |
| `COL-02` | **Rumba** | `--magenta-500` | `#EA0C7B` | 234, 12, 123 | Acción y acentos: palabras destacadas, iconos |
| `COL-03` | **Chispa** | `--yellow-400` | `#F3D036` | 243, 208, 54 | Detalles: estrella, subrayados, números sobre navy |
| `COL-04` | **Arena** | `--cream-50` | `#F5F4F0` | 245, 244, 240 | Fondo general |
| `COL-05` | **Select** | `--cyan-500` | `#19C2D6` | 25, 194, 214 | Color de la línea Select (botones con texto navy, acentos sobre navy) |

### 2.2 Escalas extendidas

| ID | Token | HEX | Uso |
|---|---|---|---|
| `COL-11` | `--navy-900` | `#021B3D` | Footer |
| `COL-12` | `--navy-700` | `#053067` | = COL-01 |
| `COL-13` | `--navy-500` | `#2A5490` | Degradados |
| `COL-14` | `--navy-300` | `#8DA4C7` | Texto secundario sobre navy |
| `COL-15` | `--navy-100` | `#E3E9F3` | Fondos suaves |
| `COL-21` | `--magenta-700` | `#B00A5D` | Hover de botón, eyebrows, texto magenta pequeño |
| `COL-22` | `--magenta-600` | `#CC0A6B` | Fondo de botón primario |
| `COL-23` | `--magenta-500` | `#EA0C7B` | = COL-02 |
| `COL-24` | `--magenta-100` | `#FCE0EE` | Fondos suaves, tarjeta Originales |
| `COL-25` | `--cyan-800` | `#0B6E7A` | Texto Select sobre fondo claro (5.4 : 1) |
| `COL-26` | `--cyan-500` | `#19C2D6` | = COL-05 |
| `COL-27` | `--cyan-100` | `#DDF6F9` | Fondos suaves, tarjeta Select |
| `COL-28` | `--cyan-600` | `#14A9BB` | Hover del botón Select (texto navy) |
| `COL-31` | `--yellow-600` | `#C9A514` | Reserva |
| `COL-32` | `--yellow-400` | `#F3D036` | = COL-03 |
| `COL-33` | `--yellow-100` | `#FBF1C4` | Fondos suaves |
| `COL-41` | `--white` | `#FFFFFF` | Tarjetas |
| `COL-42` | `--cream-50` | `#F5F4F0` | = COL-04 |
| `COL-43` | `--cream-100` | `#ECE9E1` | Bandas alternas |
| `COL-44` | `--ink-500` | `#4A5670` | Texto secundario |
| `COL-45` | `--line` | `#D9D5CA` | Bordes y divisores |
| `COL-46` | `--line-soft` | línea al 70 % | Borde del header |
| `COL-47` | `--surface-glass` | arena al 90 % | Fondo translúcido del header |
| `COL-60` | `--on-dark-text` | arena al 84 % | Texto secundario sobre navy (bajadas, pasos, pie) |
| `COL-61` | `--on-dark-line` | arena al 14 % | Bordes y divisores sobre navy |
| `COL-62` | `--on-dark-fill` | arena al 6 % | Relleno de tarjetas sobre navy |
| `COL-63` | `--on-dark-fill-hover` | arena al 10 % | Hover sobre navy |
| `COL-64` | `--scrim-hero-side` | degradado navy → transparente | Velo lateral de héroes con foto (desktop) |
| `COL-65` | `--scrim-hero-top` | degradado navy de arriba abajo | Velo de héroes con foto (móvil) |
| `COL-66` | `--scrim-panel` | navy al 85 % | Tira de beneficios sobre foto |
| `COL-67` | `--scrim-panel-soft` | navy al 55 % | Pasos del proceso sobre el camino |

### 2.3 Reglas de color

| ID | Regla |
|---|---|
| `COL-50` | Proporción por pantalla: **60 % Arena · 25 % Noche · 10 % Rumba · 5 % Chispa** |
| `COL-51` | Botones con fondo `COL-22` (5.5 : 1 con blanco, AA). `COL-02` puro solo en formas, iconos y titulares grandes (4.3 : 1) |
| `COL-52` | El amarillo nunca como texto sobre fondo claro (1.4 : 1). Solo sobre navy (8.5 : 1) o como forma |
| `COL-53` | Navy sobre Arena y viceversa: 11.7 : 1 (AAA) |
| `COL-54` | Turquesa Select nunca con texto blanco (2.2 : 1). Botón Select = fondo `COL-05` + texto navy (6 : 1). Sobre fondo claro, texto en `COL-25` |
| `COL-56` | **Fondos:** navy (Noche) para héroes, “Cómo funciona” y pie, donde la marca y la foto tienen que lucir y evocan la salida de noche; crema (Arena) para tarjetas, calendario, formularios y textos largos, donde se lee y se compara. Sin modo oscuro completo: las fotos y los precios se leen mejor en claro |
| `COL-55` | Originales usa magenta; Select usa turquesa + corona amarilla. No mezclar acentos de ambas líneas en una misma tarjeta |

---

## 3. Tipografía

| ID | Rol | Familia | Pesos | Por qué |
|---|---|---|---|---|
| `TIP-01` | Titulares | **Montserrat** (Google Fonts, alojada en `assets/fonts/`) | 600, 700 + itálica | Indicada por la clienta para todo el sitio |
| `TIP-02` | Texto / UI | **Montserrat** | 400, 500, 700 | Misma familia en distintos grosores. Alternativa permitida por la clienta: Rustica (no se usa por ahora; Montserrat es la preferida) |
| `TIP-03` | Nombre en el logo | **ENRÚMBATE** en mayúsculas, Montserrat Bold 700, tracking 30 (`--track-brand: .03em`) | 700 | Manual de la clienta |
| `TIP-04` | Eslogan bajo el nombre | “Rumbo a tu siguiente experiencia”, Montserrat Medium 500, tracking 77 (`--track-slogan: .077em`) | 500 | Manual de la clienta. En celular baja a 10px (9px bajo 360px) para caber en una línea |

### Escala (fluida móvil → desktop)

| ID | Token | Tamaño | Familia / peso | Interlineado | Uso |
|---|---|---|---|---|---|
| `TIP-10` | `--fs-display` | 44 → 88px | Montserrat 700 | 1.0 | H1 |
| `TIP-11` | `--fs-h2` | 34 → 56px | Montserrat 600 | 1.08 | Títulos de sección |
| `TIP-12` | `--fs-h3` | 22 → 28px | Montserrat 600 | 1.2 | Tarjetas, pasos |
| `TIP-13` | `--fs-lead` | 18 → 22px | Montserrat 500 | 1.5 | Bajadas |
| `TIP-14` | `--fs-body` | 16 → 17px | Montserrat 400 | 1.65 | Párrafos |
| `TIP-17` | `--fs-ui` | 15px | Montserrat 500 | 1.3 | Menú, tiras, etiquetas de campo, texto de tarjeta |
| `TIP-15` | `--fs-small` | 14px | Montserrat 500 | 1.5 | Notas, captions |
| `TIP-16` | `--fs-caption` (`--fs-eyebrow`) | 13px | Montserrat 600–700 | 1.2 | Chips de foto, créditos, etiquetas en mayúsculas |
| `TIP-18` | `--fs-micro` | 12px | Montserrat 700, MAYÚSCULAS (500 para el eslogan, TIP-04) | 1 | Eslogan bajo la marca, “Próxima salida”, mes del calendario |

| ID | Regla |
|---|---|
| `TIP-20` | Una sola palabra clave por título en *Montserrat itálica* magenta (amarilla sobre navy) |
| `TIP-21` | Párrafos de 45–70 caracteres por línea |
| `TIP-22` | Mayúsculas solo en eyebrows |

---

## 4. Retícula

| ID | Breakpoint | Ancho | Columnas | Gutter | Margen |
|---|---|---|---|---|---|
| `RET-01` | Móvil | < 640px | 4 | 16px | 20px |
| `RET-02` | Tablet | 640–1023px | 8 | 24px | 32px |
| `RET-03` | Desktop | ≥ 1024px | 12 | 32px | 48px |
| `RET-04` | Contenedor máximo | 1240px | 12 | 32px | auto |

Composiciones en desktop:

| ID | Bloque | Distribución |
|---|---|---|
| `RET-10` | Hero | Texto 6 col · imagen 5 col (col 8–12) |
| `RET-11` | Encabezado de sección | Título 7 col · texto 5 col |
| `RET-12` | Tarjetas | 4 × 3 col (desktop) · 2 × 4 (tablet) · 1 × 4 (móvil); pares desfasadas 64px |
| `RET-13` | Proceso | Intro 5 col (fija al hacer scroll) · pasos 6 col |
| `RET-14` | Contacto | Texto 7 col · botones 5 col |

---

## 5. Espaciado (base 8)

| ID | Token | px |
|---|---|---|
| `ESP-01` | `--space-1` | 4 |
| `ESP-02` | `--space-2` | 8 |
| `ESP-03` | `--space-3` | 12 |
| `ESP-04` | `--space-4` | 16 |
| `ESP-05` | `--space-5` | 24 |
| `ESP-06` | `--space-6` | 32 |
| `ESP-07` | `--space-7` | 48 |
| `ESP-08` | `--space-8` | 64 |
| `ESP-09` | `--space-9` | 96 |
| `ESP-10` | `--space-10` | 128 |
| `ESP-11` | `--section-y` | 64 → 128 (padding vertical de sección) |

---

## 6. Forma y movimiento

| ID | Token | Valor | Uso |
|---|---|---|---|
| `FOR-01` | `--radius-sm` | 8px | Chips, inputs |
| `FOR-02` | `--radius-md` | 16px | Tarjetas, fotos de tarjeta |
| `FOR-03` | `--radius-lg` | 28px | Bloque de contacto |
| `FOR-04` | `--radius-pin` | 999 999 999 24px | Foto principal en forma de pin |
| `FOR-05` | `--radius-pill` | 999px | Botones |
| `FOR-06` | `--shadow-card` | sombra azulada suave | Tarjetas |
| `FOR-09` | `--shadow-float` | sombra azulada marcada | Botón flotante de WhatsApp |
| `FOR-10` | `--shadow-drop` | sombra hacia abajo | Menú móvil abierto |
| `FOR-11` | `--shadow-photo` / `--shadow-badge` | sombra oscura profunda | Foto en pin y etiqueta “Próxima salida” |
| `FOR-12` | `--glow-spark` | brillo amarillo | Estrella junto a la foto principal |
| `FOR-07` | `--ease` / `--dur` | curva suave · 220ms | Hover y foco |
| `FOR-08` | — | — | Con “reducir movimiento” activado se apagan animaciones y la cinta |

---

## 7. Logo

| ID | Archivo / regla | Uso |
|---|---|---|
| `LOG-01` | `assets/logo.jpg` | Original (2000×2000, fondo arena) |
| `LOG-02` | `assets/logo-mark.png` | Isotipo transparente sobre fondos claros |
| `LOG-03` | `assets/logo-mark-light.png` | Isotipo con trazo claro sobre navy |
| `LOG-04` | Lockup | Isotipo + “ENRÚMBATE” (TIP-03), separación 12px |
| `LOG-05` | Área de protección | Ancho de la estrella alrededor del isotipo |
| `LOG-06` | Tamaño mínimo | 28px de alto |
| `LOG-07` | No permitido | Rotar, recolorear el camino, sombras, sobre fotos sin velo |

> Pendiente: logo en vector (SVG/AI) para mejorar `LOG-02` y `LOG-03`.

---

## 8. Componentes

| ID | Componente | Especificación |
|---|---|---|
| `COM-01` | Botón primario | Fondo `COL-22`, texto blanco Montserrat 700 16px, 14×28px, `FOR-05`. Hover `COL-21` + flecha ↗ se mueve. Foco: contorno amarillo 3px |
| `COM-02` | Botón secundario | Borde 2px navy, texto navy. Hover: relleno navy, texto arena. Sobre navy se invierte |
| `COM-03` | Enlace de texto | Navy 700 bold con subrayado amarillo de 2px, separado 4px del texto; hover subrayado magenta |
| `COM-04` | Eyebrow | ✦ + texto `TIP-16` en `COL-21`; sobre navy en amarillo. Solo para el eslogan en el héroe del inicio; no encima de cada título |
| `COM-05` | Cinta de categorías | *En desuso desde v0.4 (era del primer inicio).* Fraunces (ya retirada) itálica sobre banda navy inclinada −1.2°, separadas por ✦ amarillas, en movimiento |
| `COM-06` | Tarjeta de experiencia v1 | *Reemplazada por `COM-13` en v0.4.* |
| `COM-07` | Paso numerado | Número Montserrat amarillo, H3 arena, caja translúcida sobre navy |
| `COM-08` | Camino decorativo | Línea punteada magenta en S detrás de secciones navy |
| `COM-09` | Iconos de contacto | Círculo 44px con borde; hover relleno magenta. WhatsApp, Facebook, Instagram |
| `COM-10` | Header | Fijo, fondo arena translúcido; lockup con eslogan; menú Inicio · Experiencias · Originales · Select · Calendario · Nosotros · Contacto; botón “Hablemos” a WhatsApp. Debajo de 1100px, menú desplegable |
| `COM-11` | Footer | Fondo `COL-11`, lockup claro con eslogan, menú, WhatsApp, correo, Facebook, Instagram, créditos de fotos |
| `COM-12` | Tarjeta de línea | Bloque grande rosa (Originales) o turquesa claro (Select) con lockup, frase y enlace “Ver …” |
| `COM-13` | Tarjeta de experiencia | Foto 4:3, chip de categoría (Select: corona amarilla sobre navy), título, descripción, fecha y lugar con iconos, botón “Reservar” (magenta) o “Cotizar” (turquesa) que abre WhatsApp con el nombre de la experiencia |
| `COM-14` | Tira de categorías | Iconos de línea + nombre, enlazan a Experiencias filtradas |
| `COM-15` | Héroe oscuro con foto | Foto a sangre con degradado navy desde la izquierda; palabra destacada en el color de la línea |
| `COM-16` | Filtros | Chips por línea y por tipo; el activo se rellena con el color de la línea |
| `COM-17` | Fila de calendario | Caja de fecha navy con día amarillo, miniatura, categoría, título y “Apartar lugar” |
| `COM-18` | Formulario a WhatsApp | Campos nombre, experiencia, fecha, personas y mensaje; arma el texto y abre WhatsApp |

---

## 9. Voz y contenido

| ID | Regla |
|---|---|
| `VOZ-01` | Tuteo, frases cortas, verbos de experiencia: vivir, descubrir, armar, disfrutar, enrumbarse |
| `VOZ-02` | Evitar tecnicismos (“paquetes”, “cotización”) en titulares |
| `VOZ-03` | Español de México |
| `VOZ-04` | Decir qué hacemos en concreto (boletos, traslados, reservas). Evitar relleno promocional (“únicas”, “exclusivas”, “cuidadosamente”, “ideal”), tríos de adjetivos y frases de dos puntos con remate (“una idea sencilla: …”) |

---

## Registro de cambios

| Versión | Fecha | IDs | Cambio |
|---|---|---|---|
| v0.14 | 2026-11-12 | COL-56, TXT-19, TXT-40, TXT-43 | Fondos: se mantiene la mezcla actual, navy para momentos de marca y crema para leer y elegir (COL-56; la clienta lo dejó a nuestro criterio). Pago: por ahora solo transferencia, coordinada por WhatsApp; pasos y preguntas del inicio lo dicen, con nueva pregunta “¿Cómo pago?” |
| v0.13 | 2026-11-12 | TIP-01…04, TIP-10…18, TIP-20, LOG-04, MAR-05 | Tipografía de la clienta: todo el sitio en Montserrat (sustituye a Fraunces y Manrope). Nombre ENRÚMBATE en mayúsculas, Bold, tracking 30; eslogan nuevo “Rumbo a tu siguiente experiencia” en Medium, tracking 77 (header, pie, inicio). Contenido: se quita Punta Pérula (no existe por ahora); Pub Crawl y Tour Gótico pasan a “Próximamente” porque por ahora solo hay transporte a Morat y la Fan Party en Rakata |
| v0.12 | 2026-11-12 | COL-46, COL-47, COL-60…67, FOR-09…12, TIP-16…18 | Pulido: los colores sueltos (transparencias sobre navy, velos de foto, header) y las sombras pasan a tokens con ID; tamaños de letra sueltos pasan a la escala (nuevos TIP-17 15px y TIP-18 12px); valores de “Lo que nos mueve” alineados arriba; botón de tarjeta en dos líneas centrado y con aire; flechas y estrellas dibujadas en lugar de caracteres (↗, ↑, ✦) en la página en construcción y el pie |
| v0.11 | 2026-11-12 | COM-13, COM-16, COM-17, COM-18 | Casos límite: formulario de contacto con error visible junto al campo Nombre (no solo la burbuja del navegador), fecha legible en el mensaje (“sábado, 5 de diciembre de 2026”), sin fechas pasadas, límites de largo, aviso tras enviar con enlace por si WhatsApp no se abrió y respaldo si el navegador bloquea la pestaña; sin botón flotante en Contacto. Listas vacías con mensaje y salida a WhatsApp (inicio, Originales, Select, calendario); aviso si no hay JavaScript; foto que no carga queda como fondo de color; filtros ignoran parámetros inválidos; conteo de resultados anunciado a lectores de pantalla en vez de releer todas las tarjetas; un solo bloque de “reducir movimiento”; ícono dibujado en lugar del glifo ✦ en el calendario |
| v0.10 | 2026-11-12 | COM-14, COM-16, RET-10, RET-12 | Adaptación a celular y tablet: áreas táctiles de 44px (pie, “ver más”, filtros, créditos); filtros en una sola línea deslizable con desvanecido; puntos de posición en el carrusel de “Próximas fechas”; tira de categorías con icono arriba en 5 columnas desde 700px y en 2 columnas limpias en celular (1 columna bajo 360px), sin cortar palabras; héroe del inicio lado a lado con el celular en horizontal. Arreglo: la foto del héroe del inicio salía de 1100px de alto en celular |
| v0.9 | 2026-11-12 | TIP-01, TIP-02, LOG-02, LOG-03 | Rendimiento: fotos en WebP a su tamaño (cards 640px, héroes con srcset), logos en WebP de 160px, fuentes alojadas en el sitio (assets/fonts, subconjunto latino) con precarga, espacio reservado para el header (sin saltos al cargar). Arreglo: la tira de beneficios ya no tapa el botón del héroe en móvil |
| v0.8 | 2026-11-12 | MAR-01, MAR-02, RET-10, RET-12, RET-13, COM-01, COM-04, COM-08, LOG-07, COL-28 | Crítica de diseño (impeccable): inicio con foto en pin (MAR-01, RET-10), camino punteado (COM-08), tarjetas desfasadas (RET-12), proceso con intro fija (RET-13) y preguntas frecuentes. Eyebrow (COM-04) solo en el héroe del inicio. Foco navy en fondos claros, amarillo sobre navy. Énfasis amarillo sobre navy. Se quita la marca de agua girada (LOG-07). Nuevo COL-28 turquesa 600 para hover de Select. Botón flotante de WhatsApp en móvil |
| v0.7 | 2026-11-12 | MAR-04, VOZ-04 | Textos v1: textos del sitio reescritos con VOZ-04; antes/después con IDs TXT-xx en textos.html |
| v0.6 | 2026-11-12 | VOZ-04 | Revisión de copy con criterios antislop: se agrega regla contra relleno promocional |
| v0.5 | 2026-11-12 | COM-03 | Subrayado de enlaces más delgado: de 6px a 2px |
| v0.4 | 2026-11-12 | MAR-04, MAR-05, COL-05, COL-25…27, COL-54, COL-55, COM-10…18 | Referencias de la clienta: líneas Originales y Select, turquesa Select, eslogan, componentes de páginas nuevas |
| v0.3 | 2026-11-12 | COM-09, COM-11 | Se agrega Instagram (@enrumbate.mx) |
| v0.2 | 2026-11-12 | todos | IDs de referencia y página `/designsystem.html` |
| v0.1 | 2026-11-11 | — | Primera versión derivada del logo |
