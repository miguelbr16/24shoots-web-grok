import type { Dictionary } from "@/lib/types";

const es: Dictionary = {
  meta: {
    title: "24SHOOTS — Estudio creativo de contenido visual en Valencia",
    description:
      "24SHOOTS es un estudio creativo de Valencia. Contenido de marca, campañas y eventos corporativos: idea, rodaje y pieza final.",
  },
  skip: "Saltar al contenido",
  nav: {
    work: "Trabajo",
    studio: "Estudio",
    contact: "Contacto",
    cta: "Cuéntanos el proyecto",
    open: "Menú",
    close: "Cerrar",
  },
  hero: {
    line: "Estudio creativo de contenido y comunicación visual",
    emphasis: "para marcas.",
    territories: "Contenido de marca · Campañas · Eventos corporativos",
    place: "Valencia",
    primary: "Cuéntanos el proyecto",
    secondary: "Ver trabajo",
    imageAlt:
      "Cabina de realización durante un directo, con monitores de previo y operación de cámara.",
  },
  workSection: { label: "Trabajo" },
  labels: {
    situation: "Situación",
    approach: "Enfoque",
    delivery: "Entrega",
  },
  territoriesIntro: {
    kicker: "Encargos",
    title: "Tres territorios.",
    capability:
      "La dirección, la fotografía, el vídeo, la edición, el dron y los cortes para cada canal entran dentro del encargo. No son un catálogo aparte.",
  },
  territories: [
    {
      id: "brand",
      title: "Contenido de marca",
      situation:
        "La marca necesita una imagen que se reconozca de una pieza a la siguiente, no un archivo de vídeos sueltos.",
      approach:
        "Una dirección visual, y el mismo criterio en la idea, el rodaje y el corte.",
      delivery: "Películas, fotografías y versiones para web y redes.",
    },
    {
      id: "campaigns",
      title: "Campañas",
      situation:
        "Hay que producir piezas que vivan en medios, con duraciones y formatos distintos.",
      approach:
        "El rodaje se plantea desde el uso: varios arranques, varias duraciones, horizontal y vertical.",
      delivery: "Masters ordenados, listos para que quien compra medios los publique.",
    },
    {
      id: "events",
      title: "Eventos corporativos",
      situation:
        "Un congreso, una gala o una presentación necesita memoria visual, no solo un registro.",
      approach:
        "Cobertura con relato: qué ocurrió, quién estaba y qué merece quedarse.",
      delivery:
        "Aftermovie y cortes breves. Las cuatro piezas publicadas en esta web son de este territorio.",
    },
  ],
  studioBand: {
    kicker: "Estudio",
    lead: "Un estudio en Valencia.",
    body: "Dirigimos y producimos contenido y comunicación visual para marcas. La idea, el rodaje y la pieza final pasan por el mismo criterio.",
    sequence: "Primero el encargo. Después el rodaje. Después la entrega.",
  },
  close: {
    title: "Cuéntanos",
    emphasis: "el proyecto",
    body: "Si hay una marca, una campaña o un evento, escribe. Respondemos por correo.",
    cta: "Cuéntanos el proyecto",
  },
  workPage: {
    title: "Trabajo",
    description:
      "Cuatro películas de 24SHOOTS: Premios Isabel Ferrer, Huhtamaki, Imperia Más Events y PIVC.",
    intro: "Cuatro piezas con nombre y película.",
    view: "Ver la pieza",
  },
  works: {
    "premios-isabel-ferrer": {
      kind: "Aftermovie de gala",
      summary:
        "Cobertura de la gala Premios Isabel Ferrer: escenario, premiados y sala.",
      description:
        "Película de la gala Premios Isabel Ferrer. El metraje recoge el escenario, el nombre del premio y la sala.",
      alt: "Escenario de la gala Premios Isabel Ferrer, con el nombre del premio en pantalla y el público en primer término.",
    },
    huhtamaki: {
      kind: "Película de entrega",
      summary: "Pieza de entrega para Huhtamaki, en un entorno corporativo.",
      description:
        "Película de entrega para Huhtamaki. La marca aparece en la sala donde transcurre la pieza.",
      alt: "Sala corporativa en penumbra con el logotipo de Huhtamaki proyectado al fondo.",
    },
    "imperia-mas-events": {
      kind: "Aftermovie de evento",
      summary: "Cobertura de un evento de Imperia Más Events.",
      description:
        "Aftermovie de un evento de marca de Imperia Más Events: escenario, luz y público.",
      alt: "Escenario de un evento Imperia Más Events, con luz azul y el público de pie.",
    },
    pivc: {
      kind: "Aftermovie",
      summary: "Cobertura de un directo de PIVC, con escenario, pantalla y público.",
      description:
        "Aftermovie de un directo de PIVC. La pieza recoge la pantalla, la escena y la sala.",
      alt: "Directo en un recinto con pantalla LED, artistas en escena y el público de pie.",
    },
  },
  casePage: {
    back: "Trabajo",
    related: "Eventos corporativos",
  },
  servicesPage: {
    title: "Encargos",
    description:
      "24SHOOTS trabaja en contenido de marca, campañas y eventos corporativos desde Valencia.",
    intro:
      "El estudio se organiza en tres encargos. La fotografía, el vídeo, la edición, el dron y las piezas para redes entran dentro de ellos.",
    workLink: "Ver las cuatro piezas",
  },
  studioPage: {
    title: "Estudio",
    description:
      "24SHOOTS es un estudio creativo de Valencia. Dirige y produce la imagen de marcas y organizaciones.",
    paragraphs: [
      "24SHOOTS es un estudio creativo de contenido y comunicación visual para marcas. La base está en Valencia.",
      "El trabajo junta dirección y producción. La idea, el rodaje y la pieza final pasan por el mismo criterio.",
      "Un proyecto empieza por lo que hay que contar: una marca, una campaña o un evento. A partir de ahí se define el rodaje y se entrega la película, las fotografías y los cortes que hagan falta.",
      "Cuando el proyecto lo pide, el equipo se desplaza.",
    ],
    workLink: "Ver el trabajo",
    contactLink: "Cuéntanos el proyecto",
  },
  contactPage: {
    title: "Hablemos",
    description:
      "Escribe a 24SHOOTS sobre un proyecto de contenido, campaña o evento. El correo es info@24shoots.es.",
    intro: "Cuéntanos qué hay que producir. El mensaje se dirige a {{email}}.",
    whatsapp: "Si lo prefieres, escríbenos por WhatsApp.",
    whatsappText: "Hola, me gustaría hablar de un proyecto con 24SHOOTS.",
    instagram: "Instagram",
    form: {
      legend: "Cuéntanos el proyecto",
      name: "Nombre",
      email: "Email",
      organization: "Organización",
      phone: "Teléfono, opcional",
      need: "Encargo",
      needPlaceholder: "Elige un encargo",
      needs: {
        brand: "Contenido de marca",
        campaigns: "Campaña",
        events: "Evento corporativo",
        other: "Otro",
      },
      message: "El proyecto",
      privacyBefore: "He leído y acepto la",
      privacyLink: "política de privacidad",
      submit: "Enviar",
      sending: "Enviando",
      success: "Mensaje enviado a {{email}}.",
      fallback:
        "Desde el servidor no se ha podido entregar el correo. Se abre tu aplicación de correo con el mensaje escrito, dirigido a {{email}}.",
      invalid: "Revisa los campos obligatorios.",
      limited: "Hemos recibido varios envíos seguidos. Escríbenos directamente a {{email}}.",
      error: "No se ha podido enviar. Escríbenos a {{email}}.",
      mailSubject: "Proyecto 24SHOOTS",
    },
  },
  footer: {
    work: "Trabajo",
    services: "Encargos",
    contact: "Contacto",
    legal: "Aviso legal",
    privacy: "Privacidad",
    cookies: "Cookies",
    rights: "Todos los derechos reservados.",
  },
  cookies: {
    message:
      "Guardamos tu elección en este navegador. Si aceptas, y hay una medición configurada, cargamos analítica. Si no, el sitio funciona igual.",
    accept: "Aceptar",
    reject: "Solo necesarias",
    policy: "política de cookies",
  },
  legal: {
    notice: {
      title: "Aviso legal",
      description: "Identificación y condiciones de uso del sitio de 24SHOOTS.",
      paragraphs: [
        "Este sitio presenta el trabajo de 24SHOOTS, estudio creativo de contenido y comunicación visual para marcas, con base en Valencia, España.",
        "Contacto: {{email}}.",
        "Los datos de identificación fiscal del titular —razón social, NIF y domicilio— se publicarán en esta página cuando estén cerrados. Hasta entonces, cualquier comunicación formal puede dirigirse al correo anterior.",
        "El acceso al sitio implica un uso lícito. No está permitido dañar los sistemas, introducir software malicioso ni utilizar los contenidos de forma contraria a la ley.",
        "Los textos, el diseño, el código, las fotografías y los vídeos pertenecen a sus titulares. Las piezas de clientes se muestran como trabajo del estudio. Queda reservada su reproducción.",
        "Los enlaces a Instagram y WhatsApp llevan a servicios de terceros, con sus propias condiciones.",
        "Este aviso se rige por la legislación española. Para las controversias, y salvo norma imperativa, son competentes los juzgados y tribunales de Valencia.",
        "Septiembre de 2026.",
      ],
    },
    privacy: {
      title: "Privacidad",
      description: "Cómo trata 24SHOOTS los datos que nos escribes.",
      paragraphs: [
        "Responsable: 24SHOOTS. Contacto: {{email}}. Los datos fiscales completos se incorporarán a esta política cuando estén publicados en el aviso legal.",
        "Finalidades: atender los mensajes enviados por el formulario, por correo o por WhatsApp; y, solo si lo aceptas, medir el uso del sitio.",
        "Datos del formulario: nombre, email, organización, teléfono si lo indicas, tipo de encargo y mensaje. La base es tu solicitud y la casilla de aceptación de esta política.",
        "Conservamos el mensaje el tiempo necesario para responder y, después, durante los plazos que imponga la ley.",
        "Destinatarios: el alojamiento del sitio (Vercel) y, cuando el envío automático está activo, el proveedor de correo transaccional. Si aceptas la analítica, Google Analytics. Algunos encargados pueden estar fuera del Espacio Económico Europeo; en ese caso se usan las garantías previstas en el RGPD.",
        "WhatsApp: si abres una conversación, el tratamiento también se rige por las condiciones de WhatsApp (Meta).",
        "Puedes acceder, rectificar, suprimir, oponerte, limitar el tratamiento y pedir la portabilidad escribiendo a {{email}}. También puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).",
        "El sitio no está dirigido a menores de 14 años.",
        "Septiembre de 2026.",
      ],
    },
    cookies: {
      title: "Cookies",
      description: "Qué se guarda en tu navegador al visitar 24SHOOTS.",
      paragraphs: [
        "Guardamos en localStorage la clave cookie-consent para recordar si aceptas o rechazas la medición.",
        "El alojamiento puede usar cookies técnicas necesarias para servir el sitio.",
        "Si pulsas Aceptar y hay una medición configurada, se carga Google Analytics.",
        "El enlace a Instagram no instala cookies de Meta hasta que sales hacia ese servicio.",
        "Puedes cambiar de decisión borrando los datos del sitio en el navegador.",
        "Contacto: {{email}}. Septiembre de 2026.",
      ],
    },
  },
  notFound: {
    title: "Esta página no está.",
    body: "El enlace no corresponde a ninguna pieza publicada.",
    home: "Volver al inicio",
  },
};

export default es;
