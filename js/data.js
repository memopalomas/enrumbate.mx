/* =========================================================
   Enrúmbate — Datos del sitio
   Edita aquí experiencias, fechas y contacto: todas las páginas
   (inicio, originales, select, experiencias, calendario, contacto)
   se actualizan solas.

   Campos de cada experiencia:
   - id          identificador único (sin espacios)
   - linea       "originales" | "select"
   - categoria   clave de ENR.categorias
   - titulo, desc
   - fecha       "AAAA-MM-DD" (primera fecha) o null si aún no hay
   - fechaFin    (opcional) última fecha; la experiencia se oculta sola al día siguiente
   - fechaTexto  cómo se muestra la fecha
   - lugar
   - precio      (opcional) texto de precio, p. ej. "$450 por persona"
   - img, alt
   - etiqueta    texto del chip sobre la foto
   - inicio      true = aparece en "Próximas experiencias" del inicio
   ========================================================= */
window.ENR = {
  contacto: {
    whatsapp: "523321570254",
    whatsappTexto: "33 2157 0254",
    email: "hola@enrumbate.mx",
    instagram: "https://www.instagram.com/enrumbate.mx",
    facebook: "https://www.facebook.com/profile.php?id=61596060353610"
  },

  categorias: {
    "conciertos":   { nombre: "Conciertos y eventos",   corto: "Conciertos",            icono: "music" },
    "nocturna":     { nombre: "Vida nocturna y bares",  corto: "Vida nocturna",         icono: "cheers" },
    "recorridos":   { nombre: "Recorridos temáticos",   corto: "Rutas temáticas",       icono: "route" },
    "catas":        { nombre: "Catas y sabores",        corto: "Catas y sabores",       icono: "glass" },
    "escapadas":    { nombre: "Escapadas",              corto: "Escapadas",             icono: "plane" },
    "internacional":{ nombre: "Viajes internacionales", corto: "Viajes internacionales",icono: "palm" },
    "cenas":        { nombre: "Cenas especiales",       corto: "Cenas especiales",      icono: "dish" },
    "privadas":     { nombre: "Experiencias privadas",  corto: "Experiencias privadas", icono: "people" }
  },

  experiencias: [
    /* ---------- Originales de Enrúmbate ---------- */
    { id: "morat-vfg", linea: "originales", categoria: "conciertos", etiqueta: "Transporte",
      titulo: "¡Rumbo a Morat!",
      desc: "Te llevamos a la Arena VFG y te traemos de regreso. Incluye aire acondicionado, música de Morat en el camino, seguro de viajero, agua, snack y un regalo. Salidas desde Gran Terraza Oblatos, Parque Rojo y Centro Sur.",
      precio: "$450 por persona · 3 por $1,260 · Aparta con $250",
      fecha: "2026-11-20", fechaFin: "2026-11-21", fechaTexto: "20 y 21 de noviembre 2026", lugar: "Arena VFG, GDL",
      img: "assets/img/exp/arena.webp", alt: "Público de un estadio con las luces de sus celulares encendidas", inicio: true },

    { id: "morat-fan-party", linea: "originales", categoria: "conciertos", etiqueta: "Fan party",
      titulo: "Morat Fan Party: ¡La noche es nuestra!",
      desc: "Una noche para cantar y bailar Morat con otros fans, con cóctel de bienvenida y regalos. Evento de fans, no oficial. Solo mayores de edad.",
      fecha: "2026-11-28", fechaTexto: "Sábado 28 de noviembre 2026 · 9:00 p. m.", lugar: "Rakata Chapultepec, GDL",
      img: "assets/img/exp/fan-party.webp", alt: "Chica sonriendo en una fiesta con gente bailando detrás", inicio: true },

    { id: "pub-crawl-gdl", linea: "originales", categoria: "nocturna", etiqueta: "Vida nocturna",
      titulo: "Pub Crawl Guadalajara",
      desc: "Una noche recorriendo varios bares de Guadalajara en grupo.",
      fecha: null, fechaTexto: "Próximamente", lugar: "GDL",
      img: "assets/img/exp/bares.webp", alt: "Coctel iluminado con luces neón en un bar", inicio: true },

    { id: "cata-vino-mexicano", linea: "originales", categoria: "catas", etiqueta: "Cata",
      titulo: "Cata de vino mexicano",
      desc: "Una selección de vinos de distintas regiones de México.",
      fecha: null, fechaTexto: "Próximamente", lugar: "GDL",
      img: "assets/img/exp/vino.webp", alt: "Vino tinto cayendo en una copa junto a una garrafa", inicio: true },


    { id: "cata-cerveza", linea: "originales", categoria: "catas", etiqueta: "Cata",
      titulo: "Cata de cerveza de importación",
      desc: "Una selección de cervezas de importación para probar y comparar.",
      fecha: null, fechaTexto: "Próximamente", lugar: "GDL",
      img: "assets/img/exp/cerveza.webp", alt: "Degustación de cuatro cervezas" },

    { id: "cata-vinedos", linea: "originales", categoria: "catas", etiqueta: "Cata",
      titulo: "Cata en viñedos",
      desc: "Degustación y maridaje en un viñedo de Jalisco.",
      fecha: null, fechaTexto: "Próximamente", lugar: "Jalisco",
      img: "assets/img/exp/vinedos.webp", alt: "Viñedo al atardecer" },

    { id: "transporte-conciertos", linea: "originales", categoria: "conciertos", etiqueta: "Concierto",
      titulo: "Transporte a conciertos",
      desc: "Viaje redondo a la Arena VFG para los conciertos de la temporada.",
      fecha: null, fechaTexto: "Próximos eventos", lugar: "Arena VFG, GDL",
      img: "assets/img/exp/conciertos.webp", alt: "Banda en concierto bajo luces de escenario" },

    { id: "tour-gotico", linea: "originales", categoria: "recorridos", etiqueta: "Recorrido",
      titulo: "Tour Gótico ZMG",
      desc: "Recorrido por las leyendas y los templos neogóticos de Guadalajara.",
      fecha: null, fechaTexto: "Próximamente", lugar: "GDL",
      img: "assets/img/exp/tour-gotico.webp", alt: "Templo Expiatorio de Guadalajara, de estilo neogótico" },

    /* ---------- Enrúmbate Select ---------- */
    { id: "select-vinedos", linea: "select", categoria: "catas", etiqueta: "Select",
      titulo: "Cata en viñedos",
      desc: "Visita privada a un viñedo, con cata guiada para tu grupo.",
      fecha: null, fechaTexto: "Fecha a tu medida", lugar: "Tú eliges el destino",
      img: "assets/img/exp/vinedos.webp", alt: "Viñedo al atardecer" },

    { id: "select-cenas", linea: "select", categoria: "cenas", etiqueta: "Select",
      titulo: "Cenas especiales",
      desc: "Cenas temáticas y maridajes en un lugar elegido para la ocasión.",
      fecha: null, fechaTexto: "Fecha a tu medida", lugar: "Tú eliges el lugar",
      img: "assets/img/exp/cenas.webp", alt: "Mesa para cenar con copas de vino a la luz de las velas" },

    { id: "select-escapadas", linea: "select", categoria: "escapadas", etiqueta: "Select",
      titulo: "Escapadas de fin de semana",
      desc: "Hospedaje, traslados y actividades en el destino que elijas.",
      fecha: null, fechaTexto: "Fecha a tu medida", lugar: "Tú eliges el destino",
      img: "assets/img/exp/escapadas.webp", alt: "Persona en una alberca infinita frente al mar" },

    { id: "select-recorridos", linea: "select", categoria: "privadas", etiqueta: "Select",
      titulo: "Recorridos privados",
      desc: "Un guía solo para tu grupo, al ritmo que ustedes quieran.",
      fecha: null, fechaTexto: "Fecha a tu medida", lugar: "Tú eliges el destino",
      img: "assets/img/exp/recorridos.webp", alt: "Callejón de Guanajuato con bugambilias" }
  ],

  creditos: [
    ["The Streets of San Miguel de Allende", "Tking1225", "CC BY-SA 4.0"],
    ["Carretera Estatal 53 cerca de La Purísima, BCS", "Wonderlane", "CC BY 2.0"],
    ["Live band performance at an outdoor concert…", "Shixart1985", "CC BY 2.0"],
    ["Adobe Guadalupe winery 2", "Tomas Castelazo", "CC BY-SA 3.0"],
    ["Calles y ventanales", "Carlos González Nava", "CC0"],
    ["Beer Flight", "Wanderstheworld", "CC BY-SA 4.0"],
    ["DFC 4574 Late-night drinks in Pattaya", "PattayaPatrol", "CC BY-SA 4.0"],
    ["Templo Expiatorio del Santísimo Sacramento (Guadalajara) - exterior", "Nheyob", "CC BY-SA 4.0"],
    ["Catedral de Guadalajara en la noche", "Alejan98", "CC0"],
    ["DSC 7112 Dinner table with red wine and candlelight", "PattayaPatrol", "CC BY-SA 4.0"],
    ["Endless Water (Unsplash)", "Alex Bertha", "CC0"],
    ["Callejones de Guanajuato", "Daniel Arturo Fabián Sánchez", "CC BY-SA 4.0"],
    ["Schwappender Wein", "Stefan Krause", "CC BY 3.0 DE"],
    ["Audience raising mobile phones… in Luzhniki", "Alexander Grebenkov", "CC BY 3.0"],
    ["Blurred background close up club crowd dance", "autor desconocido", "CC0"]
  ]
};
