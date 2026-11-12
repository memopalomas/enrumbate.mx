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
   - fechaTexto  cómo se muestra la fecha
   - lugar
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
    "escapadas":    { nombre: "Escapadas",              corto: "Viajes nacionales",     icono: "plane" },
    "internacional":{ nombre: "Viajes internacionales", corto: "Viajes internacionales",icono: "palm" },
    "cenas":        { nombre: "Cenas especiales",       corto: "Cenas especiales",      icono: "dish" },
    "privadas":     { nombre: "Experiencias privadas",  corto: "Experiencias privadas", icono: "people" }
  },

  experiencias: [
    /* ---------- Originales de Enrúmbate ---------- */
    { id: "morat-vfg", linea: "originales", categoria: "conciertos", etiqueta: "Concierto",
      titulo: "Transporte al concierto de Morat",
      desc: "Vive tu concierto sin preocuparte por el traslado: vamos y regresamos juntos.",
      fecha: "2026-11-20", fechaTexto: "20 y 21 de noviembre 2026", lugar: "Arena VFG, GDL",
      img: "assets/img/exp/conciertos.jpg", alt: "Banda en concierto bajo luces de escenario", inicio: true },

    { id: "pub-crawl-gdl", linea: "originales", categoria: "nocturna", etiqueta: "Vida nocturna",
      titulo: "Pub Crawl Guadalajara",
      desc: "Recorrido por los mejores bares de la ciudad con gran ambiente.",
      fecha: "2027-01-15", fechaTexto: "Enero 2027", lugar: "GDL",
      img: "assets/img/exp/bares.jpg", alt: "Coctel iluminado con luces neón en un bar", inicio: true },

    { id: "cata-vino-mexicano", linea: "originales", categoria: "catas", etiqueta: "Cata",
      titulo: "Cata de vino mexicano",
      desc: "Conoce lo mejor del vino hecho en México, copa por copa.",
      fecha: null, fechaTexto: "Próximamente", lugar: "GDL",
      img: "assets/img/exp/vino.jpg", alt: "Copa de vino tinto con quesos", inicio: true },

    { id: "punta-perula", linea: "originales", categoria: "escapadas", etiqueta: "Escapada",
      titulo: "Punta Pérula y Cancuncito",
      desc: "Escápate a la costa de Jalisco: playa, mar tranquilo y atardeceres.",
      fecha: "2026-11-22", fechaTexto: "22 de noviembre 2026", lugar: "Costa de Jalisco",
      img: "assets/img/exp/punta-perula.jpg", alt: "Atardecer en la playa de Punta Pérula", inicio: true },

    { id: "cata-cerveza", linea: "originales", categoria: "catas", etiqueta: "Cata",
      titulo: "Cata de cerveza de importación",
      desc: "Descubre y disfruta una selección de cervezas del mundo.",
      fecha: null, fechaTexto: "Próximamente", lugar: "GDL",
      img: "assets/img/exp/cerveza.jpg", alt: "Degustación de cuatro cervezas" },

    { id: "cata-vinedos", linea: "originales", categoria: "catas", etiqueta: "Cata",
      titulo: "Cata en viñedos",
      desc: "Una experiencia entre viñedos con degustación y maridaje.",
      fecha: null, fechaTexto: "Próximamente", lugar: "Jalisco",
      img: "assets/img/exp/vinedos.jpg", alt: "Viñedo al atardecer" },

    { id: "transporte-conciertos", linea: "originales", categoria: "conciertos", etiqueta: "Concierto",
      titulo: "Transporte a conciertos",
      desc: "Vive tus conciertos favoritos sin preocuparte por el traslado.",
      fecha: null, fechaTexto: "Próximos eventos", lugar: "Arena VFG, GDL",
      img: "assets/img/exp/conciertos.jpg", alt: "Banda en concierto bajo luces de escenario" },

    { id: "tour-gotico", linea: "originales", categoria: "recorridos", etiqueta: "Recorrido",
      titulo: "Tour Gótico ZMG",
      desc: "Historias, leyendas y misterios de Guadalajara.",
      fecha: "2027-01-22", fechaTexto: "Enero 2027", lugar: "GDL",
      img: "assets/img/exp/tour-gotico.jpg", alt: "Templo Expiatorio de Guadalajara, de estilo neogótico" },

    /* ---------- Enrúmbate Select ---------- */
    { id: "select-vinedos", linea: "select", categoria: "catas", etiqueta: "Select",
      titulo: "Cata en viñedos",
      desc: "Vive una experiencia enológica entre viñedos, vino y naturaleza.",
      fecha: null, fechaTexto: "Fecha a tu medida", lugar: "Tú eliges el destino",
      img: "assets/img/exp/vinedos.jpg", alt: "Viñedo al atardecer" },

    { id: "select-cenas", linea: "select", categoria: "cenas", etiqueta: "Select",
      titulo: "Cenas especiales",
      desc: "Cenas temáticas y maridajes en lugares únicos y exclusivos.",
      fecha: null, fechaTexto: "Fecha a tu medida", lugar: "Tú eliges el lugar",
      img: "assets/img/exp/cenas.jpg", alt: "Mesa para cenar con copas de vino a la luz de las velas" },

    { id: "select-escapadas", linea: "select", categoria: "escapadas", etiqueta: "Select",
      titulo: "Escapadas exclusivas",
      desc: "Fines de semana en destinos increíbles con experiencias únicas.",
      fecha: null, fechaTexto: "Fecha a tu medida", lugar: "Tú eliges el destino",
      img: "assets/img/exp/escapadas.jpg", alt: "Persona en una alberca infinita frente al mar" },

    { id: "select-recorridos", linea: "select", categoria: "privadas", etiqueta: "Select",
      titulo: "Recorridos privados",
      desc: "Descubre destinos con un guía exclusivo y a tu ritmo.",
      fecha: null, fechaTexto: "Fecha a tu medida", lugar: "Tú eliges el destino",
      img: "assets/img/exp/recorridos.jpg", alt: "Callejón de Guanajuato con bugambilias" }
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
    ["Playa punta perula", "Mariocrespolara", "CC BY 4.0"],
    ["DSC 7112 Dinner table with red wine and candlelight", "PattayaPatrol", "CC BY-SA 4.0"],
    ["Endless Water (Unsplash)", "Alex Bertha", "CC0"],
    ["Callejones de Guanajuato", "Daniel Arturo Fabián Sánchez", "CC BY-SA 4.0"],
    ["Schwappender Wein", "Stefan Krause", "CC BY 3.0 DE"]
  ]
};
