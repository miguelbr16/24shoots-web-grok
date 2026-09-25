import type { Dictionary } from "@/lib/types";

const en: Dictionary = {
  meta: {
    title: "24SHOOTS — Creative studio for visual content in Valencia",
    description:
      "24SHOOTS is a Valencia studio for brand content, campaigns and corporate events: the idea, the shoot and the finished piece.",
  },
  skip: "Skip to content",
  nav: {
    work: "Work",
    studio: "Studio",
    contact: "Contact",
    cta: "Tell us about the project",
    open: "Menu",
    close: "Close",
  },
  hero: {
    line: "A creative studio for visual content and communication",
    emphasis: "for brands.",
    territories: "Brand content · Campaigns · Corporate events",
    place: "Valencia",
    primary: "Tell us about the project",
    secondary: "See the work",
    imageAlt:
      "Production gallery during a live show, with preview monitors and camera operation.",
  },
  workSection: { label: "Work" },
  labels: {
    situation: "Situation",
    approach: "Approach",
    delivery: "Delivery",
  },
  territoriesIntro: {
    kicker: "Commissions",
    title: "Three territories.",
    capability:
      "Direction, photography, video, edit, drone and the cuts for each channel sit inside the commission. They are not a separate catalogue.",
  },
  territories: [
    {
      id: "brand",
      title: "Brand content",
      situation:
        "The brand needs an image that holds from one piece to the next, not a folder of unrelated films.",
      approach: "One visual direction, and the same judgement in the idea, the shoot and the cut.",
      delivery: "Films, photographs and versions for web and social.",
    },
    {
      id: "campaigns",
      title: "Campaigns",
      situation: "The work has to live in media, in more than one length and ratio.",
      approach:
        "The shoot is planned around use: several openings, several durations, horizontal and vertical.",
      delivery: "Ordered masters, ready for a media team to publish.",
    },
    {
      id: "events",
      title: "Corporate events",
      situation:
        "A congress, a gala or a presentation needs a visual record with a point of view, not only coverage.",
      approach: "Coverage with a narrative: what happened, who was there, and what should remain.",
      delivery:
        "An aftermovie and short cuts. The four films published on this site belong here.",
    },
  ],
  studioBand: {
    kicker: "Studio",
    lead: "A studio in Valencia.",
    body: "We direct and produce visual content and communication for brands. The idea, the shoot and the finished piece pass through the same judgement.",
    sequence: "First the brief. Then the shoot. Then the delivery.",
  },
  close: {
    title: "Tell us",
    emphasis: "about the project",
    body: "If there is a brand, a campaign or an event, write. We reply by email.",
    cta: "Tell us about the project",
  },
  workPage: {
    title: "Work",
    description:
      "Four films by 24SHOOTS: Premios Isabel Ferrer, Huhtamaki, Imperia Más Events and PIVC.",
    intro: "Four named films.",
    view: "View the film",
  },
  works: {
    "premios-isabel-ferrer": {
      kind: "Gala aftermovie",
      summary: "Coverage of the Premios Isabel Ferrer gala: stage, awards and room.",
      description:
        "Film of the Premios Isabel Ferrer gala. The footage holds the stage, the name of the award and the room.",
      alt: "Stage at the Premios Isabel Ferrer gala, with the award name on screen and the audience in the foreground.",
    },
    huhtamaki: {
      kind: "Brand film",
      summary: "Delivery film for Huhtamaki, shot in a corporate setting.",
      description:
        "Delivery film for Huhtamaki. The brand appears in the room where the piece takes place.",
      alt: "A dim corporate room with the Huhtamaki logo projected at the far end.",
    },
    "imperia-mas-events": {
      kind: "Event aftermovie",
      summary: "Coverage of an Imperia Más Events event.",
      description:
        "Aftermovie of a brand event by Imperia Más Events: stage, light and audience.",
      alt: "Stage at an Imperia Más Events event, with blue light and a standing audience.",
    },
    pivc: {
      kind: "Aftermovie",
      summary: "Coverage of a PIVC live show, with stage, screen and audience.",
      description:
        "Aftermovie of a PIVC live show. The film holds the screen, the stage and the room.",
      alt: "A live show in a venue with an LED screen, performers on stage and a standing audience.",
    },
  },
  casePage: {
    back: "Work",
    related: "Corporate events",
  },
  servicesPage: {
    title: "Commissions",
    description:
      "24SHOOTS works on brand content, campaigns and corporate events from Valencia.",
    intro:
      "The studio is organised around three commissions. Photography, video, edit, drone and social cuts sit inside them.",
    workLink: "See the four films",
  },
  studioPage: {
    title: "Studio",
    description:
      "24SHOOTS is a creative studio in Valencia. It directs and produces the image of brands and organisations.",
    paragraphs: [
      "24SHOOTS is a creative studio for visual content and communication, for brands. The base is in Valencia.",
      "The work joins direction and production. The idea, the shoot and the finished piece pass through the same judgement.",
      "A project starts with what needs to be said: a brand, a campaign or an event. From there the shoot is defined, and the film, the photographs and the cuts are delivered.",
      "When the project asks for it, the team travels.",
    ],
    workLink: "See the work",
    contactLink: "Tell us about the project",
  },
  contactPage: {
    title: "Let's talk",
    description:
      "Write to 24SHOOTS about a content, campaign or event project. The address is info@24shoots.es.",
    intro: "Tell us what needs to be produced. The message is addressed to {{email}}.",
    whatsapp: "If you prefer, write to us on WhatsApp.",
    whatsappText: "Hello, I would like to talk about a project with 24SHOOTS.",
    instagram: "Instagram",
    form: {
      legend: "Tell us about the project",
      name: "Name",
      email: "Email",
      organization: "Organisation",
      phone: "Phone, optional",
      need: "Commission",
      needPlaceholder: "Choose a commission",
      needs: {
        brand: "Brand content",
        campaigns: "Campaign",
        events: "Corporate event",
        other: "Other",
      },
      message: "The project",
      privacyBefore: "I have read and accept the",
      privacyLink: "privacy policy",
      submit: "Send",
      sending: "Sending",
      success: "Message sent to {{email}}.",
      fallback:
        "The server could not deliver the email. Your mail app opens with the message written, addressed to {{email}}.",
      invalid: "Check the required fields.",
      limited: "Several messages arrived in a row. Write to us directly at {{email}}.",
      error: "The message could not be sent. Write to us at {{email}}.",
      mailSubject: "24SHOOTS project",
    },
  },
  footer: {
    work: "Work",
    services: "Commissions",
    contact: "Contact",
    legal: "Legal notice",
    privacy: "Privacy",
    cookies: "Cookies",
    rights: "All rights reserved.",
  },
  cookies: {
    message:
      "We store your choice in this browser. If you accept, and measurement is configured, we load analytics. Otherwise the site works the same.",
    accept: "Accept",
    reject: "Necessary only",
    policy: "cookie policy",
  },
  legal: {
    notice: {
      title: "Legal notice",
      description: "Identification and terms of use for the 24SHOOTS site.",
      paragraphs: [
        "This site presents the work of 24SHOOTS, a creative studio for visual content and communication for brands, based in Valencia, Spain.",
        "Contact: {{email}}.",
        "The owner’s fiscal identification — legal name, tax ID and address — will be published on this page once it is final. Until then, formal communication can be sent to the address above.",
        "Use of the site must be lawful. You may not damage the systems, introduce malicious software, or use the contents in breach of the law.",
        "The text, design, code, photographs and films belong to their owners. Client pieces are shown as studio work. Reproduction is reserved.",
        "Links to Instagram and WhatsApp lead to third-party services, under their own terms.",
        "This notice is governed by Spanish law. Unless a mandatory rule says otherwise, the courts of Valencia have jurisdiction.",
        "September 2026.",
      ],
    },
    privacy: {
      title: "Privacy",
      description: "How 24SHOOTS handles the information you send us.",
      paragraphs: [
        "Controller: 24SHOOTS. Contact: {{email}}. Full fiscal details will be added to this policy once they are published in the legal notice.",
        "Purposes: to answer messages sent through the form, by email or by WhatsApp; and, only if you accept, to measure use of the site.",
        "Form data: name, email, organisation, phone if you give it, type of commission and message. The basis is your request and the box accepting this policy.",
        "We keep the message for as long as we need to reply, and afterwards for the periods required by law.",
        "Recipients: the site host (Vercel) and, when automatic delivery is active, the transactional email provider. If you accept analytics, Google Analytics. Some processors may be outside the European Economic Area; in that case the safeguards set out in the GDPR apply.",
        "WhatsApp: if you open a conversation, that processing is also governed by WhatsApp’s (Meta’s) terms.",
        "You can access, rectify, erase, object, restrict processing and request portability by writing to {{email}}. You can also complain to the Spanish Data Protection Agency (aepd.es).",
        "The site is not directed at children under 14.",
        "September 2026.",
      ],
    },
    cookies: {
      title: "Cookies",
      description: "What is stored in your browser when you visit 24SHOOTS.",
      paragraphs: [
        "We store the cookie-consent key in localStorage to remember whether you accept or reject measurement.",
        "The host may use technical cookies required to serve the site.",
        "If you press Accept and measurement is configured (NEXT_PUBLIC_GA_MEASUREMENT_ID), Google Analytics is loaded.",
        "The link to Instagram does not set Meta cookies until you leave for that service.",
        "You can change your mind by clearing this site’s data in the browser.",
        "Contact: {{email}}. September 2026.",
      ],
    },
  },
  notFound: {
    title: "This page is not here.",
    body: "The link does not match any published piece.",
    home: "Back to the start",
  },
};

export default en;
