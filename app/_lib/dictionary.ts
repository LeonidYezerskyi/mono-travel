export type Language = "en" | "uk";

export interface ManifestoCard {
  index: string;
  title: string;
  description: string;
  tag: string;
}
export interface LocalizedText {
  uk: string;
  en: string;
}

export interface ItineraryDay {
  day: string;
  title: string;
  description: string;
  meta: string;
}

export interface ItineraryRoute {
  id: DestinationId;
  code: string;
  tabLabel: string;
  subtitle: string;
  days: ItineraryDay[];
}

export type DestinationId = "iceland" | "japan" | "patagonia" | "morocco";

export interface DestinationItem {
  id: DestinationId;
  code: string;
  country: string;
  tabTitle: string;
  badge: string;
  title: string;
  description: string;
  coords: string;
  season: string;
  duration: string;
  pricePerDay: number;
  image: string;
}
export type ExpeditionExtraId = "architect" | "helicopter" | "film";

export interface ExpeditionExtraOption {
  id: ExpeditionExtraId;
  label: string;
  price: number;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  trip: string;
}

export interface BookingSummaryData {
  mode?: "builder" | "destination" | "consultation";
  destination?: string | DestinationItem;
  days?: number;
  guests?: number;
  addons?: string[];
  estimatedPrice?: number | string;
}

export interface ErrorPageDictionary {
  topLeft: string;
  topRight: string;
  status: string;
  title: string;
  description: string;
  retry: string;
  home: string;
  brand: string;
  footerStatus: string;
}

export interface Dictionary {
  nav: {
    destinations: string;
    builder: string;
    manifesto: string;
    book: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleAccent: string;
    titleLine2: string;
    subtitle: string;
    badge1: string;
    badge2: string;
    discussCta: string;
    primaryCta: string;
    secondaryCta: string;
    cardFlagship: string;
    cardTitle: string;
    cardSub: string;
    cardCta: string;
    cardAlt: string;
    marquee: string[];
  };
  manifesto: {
    eyebrow: string;
    motto: string;
    cards: ManifestoCard[];
  };
  destinations: {
    eyebrow: string;
    hint: string;
    heading: string;
    coordinatesLabel: string;
    seasonLabel: string;
    durationLabel: string;
    rateLabel: string;
    perDay: string;
    requestCta: string;
    selectCta: string;
    items: DestinationItem[];
  };
  itinerary: {
    eyebrow: string;
    routes: ItineraryRoute[];
  };
  builder: {
    eyebrow: string;
    hint: string;
    colDestination: string;
    colParameters: string;
    colExtras: string;
    daysLabel: string;
    dayUnit: string;
    guestsLabel: string;
    guestUnit: string;
    extras: ExpeditionExtraOption[];
    specEyebrow: string;
    specGroupLabel: string;
    specDurationLabel: string;
    specExtrasLabel: string;
    specLogisticsLabel: string;
    specLogisticsValue: string;
    specDisclaimer: string;
    summaryLabel: string;
    openModalCta: string;
  };
  testimonials: {
    eyebrow: string;
    source: string;
    items: TestimonialItem[];
  };
  booking: {
    eyebrow: string;
    title: string;
    subtitle: string;
    closeLabel: string;
    summaryTitle: string;
    modeConsultation: string;
    destinationLabel: string;
    durationLabel: string;
    daysUnit: string;
    guestsLabel: string;
    guestsUnit: string;
    addonsLabel: string;
    noAddonsLabel: string;
    estimatedPriceLabel: string;
    nameLabel: string;
    namePlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    commentLabel: string;
    commentPlaceholder: string;
    submitCta: string;
    nameError: string;
    contactError: string;
    successTitle: string;
    successDescription: string;
    newRequestCta: string;
    doneCta: string;
  };
  footer: {
    brandName: string;
    description: string;
    address: string;
    email: string;
    copiedLabel: string;
    navTitle: string;
    navLinks: {
      label: string;
      href: string;
    }[];
    clubTitle: string;
    clubSubtitle: string;
    emailPlaceholder: string;
    subscribeCta: string;
    subscribedMessage: string;
    invalidEmailMessage: string;
    copyright: string;
    legalLinks: {
      label: string;
      href: string;
    }[];
  };
  errorPage: ErrorPageDictionary;
}

export const dictionary: Record<Language, Dictionary> = {
  en: {
    nav: {
      destinations: "Destinations",
      builder: "Expedition Builder",
      manifesto: "Manifesto",
      book: "Book Inquiry",
      menuOpen: "Menu",
      menuClose: "Close",
    },
    hero: {
      eyebrow: "[ BOUTIQUE TRAVEL BUREAU / PRIVATE EXPEDITIONS ]",
      titleLine1: "JOURNEYS",
      titleAccent: "without",
      titleLine2: "HALF-TONES",
      subtitle:
        "We design unique private expeditions for individuals seeking absolute authenticity, architectural aesthetics, and profound solitude in the world's most remote landscapes.",
      badge1: "100% PRIVATE",
      badge2: "ONLY HIGH END",
      discussCta: "DISCUSS A JOURNEY →",
      primaryCta: "Explore Location",
      secondaryCta: "Configure Expedition",
      cardFlagship: "FLAGSHIP 2026",
      cardTitle: "POLAR SYMPHONY OF ICELAND",
      cardSub:
        "64.1466° N, 21.9426° W — Private Helicopters & Black Sand Beaches",
      cardCta: "Explore Location →",
      cardAlt: "Monochrome landscape of Iceland",
      marquee: [
        "• ICELAND · LAVA FIELDS & GEOTHERMAL RESIDENCES",
        "• JAPAN · KYOTO, NAOSHIMA & PRIVATE RYOKANS",
        "• NORWAY · FJORDS & ARCTIC ARCHITECTURE",
        "• PATAGONIA · EDGE OF THE WORLD & PRIVATE EXPEDITIONS",
      ],
    },
    manifesto: {
      eyebrow: "[ 01 ] PHILOSOPHY",
      motto: "Contrast. Monumentality. Purity.",
      cards: [
        {
          index: "01.01 — AESTHETICS",
          title: "ARCHITECTURAL APPROACH",
          description:
            "We curate hotels and villas defined by conceptual architecture — from brutalist cliffside retreats to glass domes at the edge of a glacier.",
          tag: "[ NO NOISE • PURE STYLE ]",
        },
        {
          index: "01.02 — PRIVACY",
          title: "ABSOLUTE ISOLATION",
          description:
            "Private charters, dedicated chefs, and closed locations away from tourist crowds. Only you, raw nature, and monumental silence.",
          tag: "[ VIP LOGISTICS • 24/7 ]",
        },
        {
          index: "01.03 — DETAILS",
          title: "CURATED GUIDANCE",
          description:
            "Every day of your itinerary is timed to the second: from morning coffee overlooking volcanoes to dinner beneath southern constellations.",
          tag: "[ PERFECTION ]",
        },
      ],
    },
    destinations: {
      eyebrow: "[ 02 ] CURATED DESTINATIONS",
      hint: "SELECT A POINT ON THE MAP",
      heading: "Selected Territories",
      coordinatesLabel: "COORDINATES:",
      seasonLabel: "RECOMMENDED SEASON:",
      durationLabel: "OPTIMAL DURATION:",
      rateLabel: "Base Rate",
      perDay: "/ day",
      requestCta: "REQUEST PLANS →",
      selectCta: "Use in Builder",
      items: [
        {
          id: "iceland",
          code: "01",
          country: "ICELAND",
          tabTitle: "BLACK BEACHES & GLACIERS",
          badge: "[ POLAR FLAGSHIP ]",
          title: "ICELAND: VOLCANOES & AURORA",
          description:
            "Helicopter expeditions over Vík's black sand beaches, nights in a glass lodge beneath the Northern Lights, and private geothermal springs.",
          coords: "64.1466° N, 21.9426° W",
          season: "OCTOBER — MARCH",
          duration: "10 DAYS / 9 NIGHTS",
          pricePerDay: 4200,
          image: "/images/iceland.jpg",
        },
        {
          id: "japan",
          code: "02",
          country: "JAPAN",
          tabTitle: "KYOTO & ZEN MINIMALISM",
          badge: "[ CULTURAL AVANT-GARDE ]",
          title: "JAPAN: KYOTO & ZEN ARCHITECTURE",
          description:
            "Private tea ceremonies with masters of century-old schools, secluded stays in historic ryokans, and exclusive access to zen rock gardens.",
          coords: "35.0116° N, 135.7681° E",
          season: "APRIL — NOVEMBER",
          duration: "12 DAYS / 11 NIGHTS",
          pricePerDay: 4800,
          image: "/images/japan.jpg",
        },
        {
          id: "patagonia",
          code: "03",
          country: "PATAGONIA",
          tabTitle: "EDGE OF THE WORLD & WINDS",
          badge: "[ EDGE OF THE WORLD ]",
          title: "PATAGONIA: GLACIERS & WINDS",
          description:
            "Private trekking to Torres del Paine, puma tracking with wildlife naturalists, and a private yacht along the blue ice walls of Moreno.",
          coords: "51.2532° S, 72.8863° W",
          season: "NOVEMBER — MARCH",
          duration: "14 DAYS / 13 NIGHTS",
          pricePerDay: 4500,
          image: "/images/patagonia.jpg",
        },
        {
          id: "morocco",
          code: "04",
          country: "MOROCCO",
          tabTitle: "SAHARA & MONUMENTAL KASBAHS",
          badge: "[ DESERT MINIMALISM ]",
          title: "MOROCCO: SAHARA & MONUMENTAL KASBAHS",
          description:
            "Bespoke desert camp deep inside the Erg Chebbi dunes, helicopter transfers across the Atlas Mountains, and private architectural riads.",
          coords: "31.6295° N, 7.9811° W",
          season: "OCTOBER — APRIL",
          duration: "8 DAYS / 7 NIGHTS",
          pricePerDay: 3900,
          image: "/images/morocco.jpg",
        },
      ],
    },
    itinerary: {
      eyebrow: "[ 03 ] EXPEDITION ITINERARY SAMPLE",
      routes: [
        {
          id: "iceland",
          code: "01",
          tabLabel: "ICELAND",
          subtitle: "ICELAND: VOLCANIC MONOLITHS & AURORA",
          days: [
            {
              day: "DAY 01",
              title: "KEFLAVÍK VIP ARRIVAL & HELI-TRANSFER TO HIGHLANDS",
              description:
                "Private tarmac reception and direct helicopter flight over active lava fields to a secluded basalt residence. Evening geothermal soak in a private mineral lagoon.",
              meta: "TRANSPORT: Airbus H130 Helicopter  •  STAY: Deplar Farm",
            },
            {
              day: "DAY 02–04",
              title: "BLACK SAND BEACHES OF VÍK & ICE CAVES",
              description:
                "Private super-jeep expedition across Mýrdalsjökull glacier to untouched blue ice caverns. Sunset session on Reynisfjara black cliffs with zero crowds.",
              meta: "EXPERIENCE: Private Ice Cave Access  •  STAY: Panorama Glass Lodge",
            },
            {
              day: "DAY 05–07",
              title: "JÖKULSÁRLÓN LAGOON & NORTHERN LIGHTS",
              description:
                "Private amphibious boat among drifting icebergs at dawn. Custom arctic tasting dinner prepared by a private chef beneath the Aurora Borealis.",
              meta: "EXCLUSIVE: Private Lagoon Charter  •  STAY: Retreat at Blue Lagoon",
            },
          ],
        },
        {
          id: "japan",
          code: "02",
          tabLabel: "JAPAN",
          subtitle: "JAPAN: KYOTO SILENCE & NAOSHIMA ART",
          days: [
            {
              day: "DAY 01",
              title: "PRIVATE SUITE TO KYOTO & TWILIGHT TEA CEREMONY",
              description:
                "First-class arrival in Kyoto and private transfer to a restored 19th-century wooden machiya. Twilight tea ceremony in a closed Zen temple garden.",
              meta: "TRANSPORT: Private Chauffeur & Gran Class  •  STAY: Aman Kyoto",
            },
            {
              day: "DAY 02–04",
              title: "ARASHIYAMA BAMBOO GROVES & MASTER ARTISANS",
              description:
                "Dawn access to Arashiyama before public opening. Private studio visits with a third-generation swordsmith and a Kyoto ceramic master.",
              meta: "EXPERIENCE: After-Hours Temple Access  •  STAY: Hoshinoya Kyoto",
            },
            {
              day: "DAY 05–07",
              title: "SETO INLAND SEA & NAOSHIMA ARCHITECTURE",
              description:
                "Private cruiser across the Seto Inland Sea to Naoshima and Teshima islands. Curated architectural tour of Tadao Ando concrete museums.",
              meta: "EXCLUSIVE: Private Art Island Yacht  •  STAY: Benesse House Oval",
            },
          ],
        },
        {
          id: "patagonia",
          code: "03",
          tabLabel: "PATAGONIA",
          subtitle: "PATAGONIA: AT THE EDGE OF THE UNIVERSE",
          days: [
            {
              day: "DAY 01",
              title: "BUENOS AIRES VIP & PRIVATE JET TO PUNTA ARENAS",
              description:
                "VIP terminal meet-and-greet and private jet charter to the gateway of Patagonia. Check-in at a conceptual eco-lodge on the Strait of Magellan with a private chef dinner.",
              meta: "TRANSPORT: Bombardier Global 6000  •  STAY: The Singular Patagonia",
            },
            {
              day: "DAY 02–04",
              title: "TORRES DEL PAINE NATIONAL PARK",
              description:
                "Private trekking to the granite towers of Torres led by a high-altitude guide. Puma tracking with a wildlife biologist and evening hot furo soak under the stars.",
              meta: "EXPERIENCE: Puma Photo-Safari  •  STAY: Tierra Patagonia Hotel & Spa",
            },
            {
              day: "DAY 05–07",
              title: "PERITO MORENO GLACIER & PRIVATE YACHT CRUISE",
              description:
                "Helicopter landing on the glacier in custom crampons and whisky served over 10,000-year-old ice. Private yacht cruise along the blue ice walls.",
              meta: "EXCLUSIVE: Glacier Heli-Trekking  •  STAY: Eolo Lodge",
            },
          ],
        },
        {
          id: "morocco",
          code: "04",
          tabLabel: "MOROCCO",
          subtitle: "MOROCCO: ATLAS PEAKS & ERG CHEBBI DUNES",
          days: [
            {
              day: "DAY 01",
              title: "MARRAKECH PRIVATE RIAD & ROOFTOP DINING",
              description:
                "VIP fast-track arrival and transfer to an architectural private riad. Evening rooftop dinner overlooking the Koutoubia silhouette.",
              meta: "TRANSPORT: Mercedes V-Class VIP  •  STAY: Royal Mansour Marrakech",
            },
            {
              day: "DAY 02–04",
              title: "HELICOPTER CROSSING OVER HIGH ATLAS TO KASBAHS",
              description:
                "Scenic helicopter flight over snow-dusted Atlas ridges to ancient earthen kasbahs. Private lunch in a Berber stone fortress.",
              meta: "EXPERIENCE: Atlas Heli-Expedition  •  STAY: Kasbah Tamadot",
            },
            {
              day: "DAY 05–07",
              title: "DEEP SAHARA MONOLITHIC DESERT CAMP",
              description:
                "Private expedition into the silent dunes of Erg Chebbi. Astronomical stargazing session with a private astrophysicist beside a desert fire.",
              meta: "EXCLUSIVE: Bespoke Dune Sanctuary  •  STAY: Private Sahara Camp",
            },
          ],
        },
      ],
    },
    builder: {
      eyebrow: "[ 04 ] EXPEDITION BUILDER",
      hint: "CONFIGURE ROUTE & PARAMETERS",
      colDestination: "01 / DESTINATION",
      colParameters: "02 / DURATION & GUESTS",
      colExtras: "03 / BESPOKE ADD-ONS",
      daysLabel: "DURATION",
      dayUnit: "DAYS",
      guestsLabel: "GUESTS",
      guestUnit: "PAX",
      extras: [
        { id: "architect", label: "PRIVATE ARCHITECT", price: 4500 },
        { id: "helicopter", label: "HELICOPTER CHARTER", price: 8500 },
        { id: "film", label: "ANALOG FILM SHOOT", price: 3200 },
      ],
      specEyebrow: "[ REQUEST SPECIFICATION ]",
      specGroupLabel: "PARTY SIZE",
      specDurationLabel: "DURATION",
      specExtrasLabel: "SELECTED ADD-ONS",
      specLogisticsLabel: "LOGISTICS CLASS",
      specLogisticsValue: "ULTRA-LUXURY / PRIVATE",
      specDisclaimer:
        "Every route is tailored individually. Final calculation is confirmed by a dedicated curator after date verification.",
      summaryLabel: "ESTIMATED EXPEDITION TOTAL",
      openModalCta: "SEND FORMED BRIEF →",
    },
    testimonials: {
      eyebrow: "[ 05 ] EDITORS & GUESTS REVIEWS",
      source: "PRIVATE MEMBERS",
      items: [
        {
          id: "iceland-review",
          quote:
            "“This is not just a travel agency. MONO TRAVEL creates the sensation of stepping into a cinematic frame of a brutalist film about the future. Impeccable style and zero compromises.”",
          author: "ALEXANDER V.",
          trip: "ICELAND EXPEDITION",
        },
        {
          id: "patagonia-review",
          quote:
            "“The organization of our private helicopter tour over the glaciers of Patagonia was executed with Swiss-watch precision. The finest private travel experience.”",
          author: "ELENA K.",
          trip: "PATAGONIA PRIVATE TOUR",
        },
      ],
    },
    booking: {
      eyebrow: "[ DISPATCH REQUEST ]",
      title: "EXPEDITION BRIEFING",
      subtitle:
        "Submit your coordinates and our concierge team will prepare a tailored route dossier.",
      closeLabel: "CLOSE MODAL",
      summaryTitle: "CONFIGURATION SUMMARY",
      modeConsultation: "PRIVATE CONCIERGE CONSULTATION",
      destinationLabel: "DESTINATION",
      durationLabel: "DURATION",
      daysUnit: "DAYS",
      guestsLabel: "TRAVELERS",
      guestsUnit: "GUESTS",
      addonsLabel: "BESPOKE ADD-ONS",
      noAddonsLabel: "BASE ROUTE ONLY",
      estimatedPriceLabel: "ESTIMATED ESTIMATE",
      nameLabel: "FULL NAME",
      namePlaceholder: "ENTER YOUR NAME...",
      contactLabel: "EMAIL OR TELEGRAM",
      contactPlaceholder: "NAME@DOMAIN.COM OR @USERNAME...",
      commentLabel: "DATES / NOTES / COMMENT",
      commentPlaceholder: "PREFERRED WINDOW, FLIGHT DETAILS OR REQUESTS...",
      submitCta: "SEND REQUEST →",
      nameError: "PLEASE ENTER YOUR NAME.",
      contactError: "ENTER A VALID EMAIL OR @TELEGRAM HANDLE.",
      successTitle: "BRIEFING REGISTERED",
      successDescription:
        "Your expedition specification has been logged. A senior route architect will reach out shortly.",
      newRequestCta: "EDIT DETAILS",
      doneCta: "CLOSE",
    },
    footer: {
      brandName: "MONO TRAVEL",
      description:
        "Boutique private expedition agency. Crafting bespoke routes of the highest complexity and aesthetic discipline.",
      address: "KYIV, 12 ROITBURDA ST.",
      email: "CONCIERGE@MONOTRAVEL.UA",
      copiedLabel: "COPIED",
      navTitle: "[ NAVIGATION ]",
      navLinks: [
        { label: "PHILOSOPHY", href: "#philosophy" },
        { label: "DESTINATIONS 2026", href: "#destinations" },
        { label: "ITINERARIES", href: "#itinerary" },
        { label: "CUSTOMIZER", href: "#builder" },
      ],
      clubTitle: "[ PRIVATE CLUB ]",
      clubSubtitle: "Receive private expedition dispatches 4 times a year.",
      emailPlaceholder: "YOUR EMAIL...",
      subscribeCta: "SUBSCRIBE →",
      subscribedMessage: "REQUEST REGISTERED IN PRIVATE DISPATCH LIST.",
      invalidEmailMessage: "ENTER A VALID EMAIL ADDRESS.",
      copyright:
        "© 2026 MONO TRAVEL. ALL RIGHTS RESERVED. STRICT MONOCHROME EDITION.",
      legalLinks: [
        { label: "INSTAGRAM", href: "#reviews" },
        { label: "TELEGRAM PRIVÉ", href: "#builder" },
        { label: "LEGAL TERMS", href: "#philosophy" },
      ],
    },
    errorPage: {
      topLeft: "MONO TRAVEL // SYSTEM",
      topRight: "[ RUNTIME FAULT ]",
      status: "STATUS: INTERRUPTION DETECTED",
      title: "EXPEDITION INTERRUPTED",
      description:
        "An unexpected error interrupted this route. Retry the current segment or return to the main page.",
      retry: "RETRY",
      home: "RETURN TO BASE",
      brand: "MONO TRAVEL",
      footerStatus: "ERROR BOUNDARY ACTIVE",
    },
  },
  uk: {
    nav: {
      destinations: "Напрямки",
      builder: "Конструктор",
      manifesto: "Маніфест",
      book: "Заявка",
      menuOpen: "Меню",
      menuClose: "Закрити",
    },
    hero: {
      eyebrow: "[ БУТИКОВЕ ТУРИСТИЧНЕ БЮРО / ПРИВАТНІ ЕКСПЕДИЦІЇ ]",
      titleLine1: "ПОДОРОЖІ",
      titleAccent: "без",
      titleLine2: "НАПІВТОНІВ",
      subtitle:
        "Ми проєктуємо унікальні закриті експедиції для тих, хто шукає абсолютну автентичність, архітектурну естетику та глибоку самотність у найвіддаленіших куточках нашої планети.",
      badge1: "100% ПРИВАТНО",
      badge2: "ЛИШЕ ВИСОКИЙ РІВЕНЬ",
      discussCta: "ОБГОВОРИТИ ПОДОРОЖ →",
      primaryCta: "Дослідити локацію",
      secondaryCta: "Скласти маршрут",
      cardFlagship: "ФЛАГМАН 2026",
      cardTitle: "ПОЛЯРНА СИМФОНІЯ ІСЛАНДІЇ",
      cardSub: "64.1466° N, 21.9426° W — Приватні гелікоптери & Чорні пляжі",
      cardCta: "Дослідити локацію →",
      cardAlt: "Монохромний ландшафт Ісландії",
      marquee: [
        "• ІСЛАНДІЯ · ЛАВОВІ ПОЛЯ ТА ГЕОТЕРМАЛЬНІ РЕЗИДЕНЦІЇ",
        "• ЯПОНІЯ · КІОТО, НАОШІМА ТА ПРИВАТНІ РЬОКАНИ",
        "• НОРВЕГІЯ · ФІОРДИ ТА АРКТИЧНА АРХІТЕКТУРА",
        "• ПАТАГОНІЯ · КРАЙ СВІТУ ТА ПРИВАТНІ ЕКСПЕДИЦІЇ",
      ],
    },
    manifesto: {
      eyebrow: "[ 01 ] ФІЛОСОФІЯ",
      motto: "Контраст. Монументальність. Чистота.",
      cards: [
        {
          index: "01.01 — ЕСТЕТИКА",
          title: "АРХІТЕКТУРНИЙ ПІДХІД",
          description:
            "Ми обираємо готелі та вілли з концептуальною архітектурою — від бруталістських готелів у скелях до скляних куполів на краю льодовика.",
          tag: "[ БЕЗ ШУМУ • ЛИШЕ СТИЛЬ ]",
        },
        {
          index: "01.02 — ПРИВАТНІСТЬ",
          title: "АБСОЛЮТНА ІЗОЛЯЦІЯ",
          description:
            "Приватні чартери, персональні шеф-кухарі та закриті локації без юрб туристів. Тільки ви, велична природа та монументальна тиша.",
          tag: "[ VIP ЛОГІСТИКА • 24/7 ]",
        },
        {
          index: "01.03 — ДЕТАЛІ",
          title: "КУРАТОРСЬКИЙ СУПРОВІД",
          description:
            "Кожен день маршруту розрахований до секунд: від ранкової кави з видом на вулкани до вечері під південними сузір'ями.",
          tag: "[ БЕЗДОГАННІСТЬ ]",
        },
      ],
    },
    destinations: {
      eyebrow: "[ 02 ] КУРАТОРСЬКІ НАПРЯМКИ",
      hint: "ОБЕРІТЬ ТОЧКУ НА КАРТІ",
      heading: "Обрані території",
      coordinatesLabel: "КООРДИНАТИ:",
      seasonLabel: "РЕКОМЕНДОВАНИЙ СЕЗОН:",
      durationLabel: "ОПТИМАЛЬНА ТРИВАЛІСТЬ:",
      rateLabel: "Базова ставка",
      perDay: "/ день",
      requestCta: "ЗАПИТАТИ ПЛАНИ →",
      selectCta: "Обрати в конструкторі",
      items: [
        {
          id: "iceland",
          code: "01",
          country: "ІСЛАНДІЯ",
          tabTitle: "ЧОРНІ ПЛЯЖІ ТА ЛЬОДОВИКИ",
          badge: "[ ПОЛЯРНИЙ ФЛАГМАН ]",
          title: "ІСЛАНДІЯ: ВУЛКАНИ ТА СЯЙВО",
          description:
            "Подорожі на гелікоптерах над чорними пляжами Вік, ночі у скляному лоджі під Північним Сяйвом та приватні геотермальні джерела.",
          coords: "64.1466° N, 21.9426° W",
          season: "ЖОВТЕНЬ — БЕРЕЗЕНЬ",
          duration: "10 ДНІВ / 9 НОЧЕЙ",
          pricePerDay: 4200,
          image: "/images/iceland.jpg",
        },
        {
          id: "japan",
          code: "02",
          country: "ЯПОНІЯ",
          tabTitle: "КІОТО & ДЗЕН-МІНІМАЛІЗМ",
          badge: "[ КУЛЬТУРНИЙ АВАНГАРД ]",
          title: "ЯПОНІЯ: КІОТО & ДЗЕН-АРХІТЕКТУРА",
          description:
            "Закриті чайні церемонії з майстрами столітніх шкіл, приватне проживання у старовинних рьоканах та власні сади каміння.",
          coords: "35.0116° N, 135.7681° E",
          season: "КВІТЕНЬ — ЛИСТОПАД",
          duration: "12 ДНІВ / 11 НОЧЕЙ",
          pricePerDay: 4800,
          image: "/images/japan.jpg",
        },
        {
          id: "patagonia",
          code: "03",
          country: "ПАТАГОНІЯ",
          tabTitle: "КРАЙ ЗЕМЛІ ТА ВІТРІВ",
          badge: "[ ЕКСПЕДИЦІЯ КРАЙ ЗЕМЛІ ]",
          title: "ПАТАГОНІЯ: ЛЬОДОВИКИ ТА ВІТРИ",
          description:
            "Трекінг до веж Торрес-дель-Пайне, спостереження за пумами, приватна яхта вздовж блакитних крижаних стін Періто-Морено.",
          coords: "51.2532° S, 72.8863° W",
          season: "ЛИСТОПАД — БЕРЕЗЕНЬ",
          duration: "14 ДНІВ / 13 НОЧЕЙ",
          pricePerDay: 4500,
          image: "/images/patagonia.jpg",
        },
        {
          id: "morocco",
          code: "04",
          country: "МАРОККО",
          tabTitle: "САХАРА & МОНУМЕНТАЛЬНІ КАСБИ",
          badge: "[ ПУСТЕЛЬНИЙ МІНІМАЛІЗМ ]",
          title: "МАРОККО: САХАРА & МОНУМЕНТАЛЬНІ КАСБИ",
          description:
            "Глемпінг преміум-класу в глибоких дюнах Ерг-Шеббі, трансфери на гелікоптерах через Атлаські гори та приватні ріади.",
          coords: "31.6295° N, 7.9811° W",
          season: "ЖОВТЕНЬ — КВІТЕНЬ",
          duration: "8 ДНІВ / 7 НОЧЕЙ",
          pricePerDay: 3900,
          image: "/images/morocco.jpg",
        },
      ],
    },
    itinerary: {
      eyebrow: "[ 03 ] ПРИКЛАД ЕКСПЕДИЦІЙНОГО МАРШРУТУ",
      routes: [
        {
          id: "iceland",
          code: "01",
          tabLabel: "ІСЛАНДІЯ",
          subtitle: "ІСЛАНДІЯ: ВУЛКАНІЧНІ МОНОЛІТИ ТА СЯЙВО",
          days: [
            {
              day: "ДЕНЬ 01",
              title: "VIP-ПРИБУТТЯ У КЕФЛАВІК ТА ГЕЛІКОПТЕР ДО НАГІР'Я",
              description:
                "Зустріч біля трапу літака та прямий переліт гелікоптером над лавовими полями до відокремленої базальтової резиденції. Вечірнє купання у приватній геотермальній лагуні.",
              meta: "ТРАНСПОРТ: Гелікоптер Airbus H130  •  ПРОЖИВАННЯ: Deplar Farm",
            },
            {
              day: "ДЕНЬ 02-04",
              title: "ЧОРНІ ПЛЯЖІ ВІК ТА ЛЬОДОВІ ПЕЧЕРИ",
              description:
                "Приватна експедиція на суперджипах льодовиком Мірдальсйокудль до закритих блакитних печер. Зйомка заходу сонця на чорних скелях Рейнісф'яра без туристів.",
              meta: "ДОСВІД: Закритий доступ у льодові гроти  •  ПРОЖИВАННЯ: Panorama Glass Lodge",
            },
            {
              day: "ДЕНЬ 05-07",
              title: "ЛАГУНА ЙОКУЛЬСАРЛОН & ПІВНІЧНЕ СЯЙВО",
              description:
                "Приватний катер між дрейфуючими айсбергами на світанку. Авторська вечеря від приватного шеф-кухаря під Північним Сяйвом.",
              meta: "ЕКСКЛЮЗИВ: Приватний чартер лагуною  •  ПРОЖИВАННЯ: Retreat at Blue Lagoon",
            },
          ],
        },
        {
          id: "japan",
          code: "02",
          tabLabel: "ЯПОНІЯ",
          subtitle: "ЯПОНІЯ: ТИША КІОТО & АРХІТЕКТУРА НАОШІМИ",
          days: [
            {
              day: "ДЕНЬ 01",
              title: "ПРИВАТНИЙ ПЕРЕЇЗД ДО КІОТО ТА ЧАЙНА ЦЕРЕМОНІЯ",
              description:
                "Індивідуальний трансфер до відреставрованої дерев'яної резиденції мачія XIX століття. Закрита чайна церемонія у саду дзен-храму після заходу сонця.",
              meta: "ТРАНСПОРТ: Приватний шофер & Gran Class  •  ПРОЖИВАННЯ: Aman Kyoto",
            },
            {
              day: "ДЕНЬ 02-04",
              title: "БАМБУКОВИЙ ЛІС АРАШІЯМА ТА МАЙСТЕРНІ РЕМІСНИКІВ",
              description:
                "Ранковий доступ до Арашіями до відкриття для відвідувачів. Приватні візити до майстерень коваля клинків та майстра кераміки.",
              meta: "ДОСВІД: Закритий доступ до храмів  •  ПРОЖИВАННЯ: Hoshinoya Kyoto",
            },
            {
              day: "ДЕНЬ 05-07",
              title: "ВНУТРІШНЄ ЯПОНСЬКЕ МОРЕ & ОСТРІВ НАОШІМА",
              description:
                "Приватна яхта до островів Наошіма та Тешіма. Кураторська архітектурна екскурсія бетонними музеями Тадао Андо.",
              meta: "ЕКСКЛЮЗИВ: Приватна яхта островом  •  ПРОЖИВАННЯ: Benesse House Oval",
            },
          ],
        },
        {
          id: "patagonia",
          code: "03",
          tabLabel: "ПАТАГОНІЯ",
          subtitle: "ПАТАГОНІЯ: НА КРАЮ ВСЕСВІТУ",
          days: [
            {
              day: "ДЕНЬ 01",
              title: "БУЕНОС-АЙРЕС VIP ТА ПРИВАТНИЙ ДЖЕТ ДО ПУНТА-АРЕНАС",
              description:
                "Зустріч у VIP-терміналі та переліт джетом до воріт Патагонії. Розміщення у концептуальному еколоджі на березі Магелланової протоки з вечерею від шефа.",
              meta: "ТРАНСПОРТ: Bombardier Global 6000  •  ПРОЖИВАННЯ: Singular Patagonia",
            },
            {
              day: "ДЕНЬ 02-04",
              title: "НАЦІОНАЛЬНИЙ ПАРК ТОРРЕС-ДЕЛЬ-ПАЙНЕ",
              description:
                "Трекінг до гранітних веж Торрес під керівництвом гіда. Спостереження за пумами з фото-біологом та вечірнє купання у гарячих фуро під відкритим небом.",
              meta: "ДОСВІД: Фотосафарі з пумами  •  ПРОЖИВАННЯ: Tierra Patagonia Hotel & Spa",
            },
            {
              day: "ДЕНЬ 05-07",
              title: "ЛЬОДОВИК ПЕРІТО-МОРЕНО & КРУЇЗ НА ПРИВАТНІЙ ЯХТІ",
              description:
                "Висадка на льодовик у спеціальних кішках і віскі зі стародавнім льодом віком понад 10 000 років. Приватна яхта вздовж блакитних крижаних стін.",
              meta: "ЕКСКЛЮЗИВ: Гелі-трекінг по льоду  •  ПРОЖИВАННЯ: Eolo Lodge",
            },
          ],
        },
        {
          id: "morocco",
          code: "04",
          tabLabel: "МАРОККО",
          subtitle: "МАРОККО: ВЕРШИНИ АТЛАСУ & ДЮНИ ЕРГ-ШЕББІ",
          days: [
            {
              day: "ДЕНЬ 01",
              title: "ПРИВАТНИЙ РІАД У МАРРАКЕШІ ТА ВЕЧЕРЯ НА ДАХУ",
              description:
                "VIP-зустріч в аеропорту та трансфер до закритого архітектурного ріаду. Вечеря на терасі з видом на силует мечеті Кутубія.",
              meta: "ТРАНСПОРТ: Mercedes V-Class VIP  •  ПРОЖИВАННЯ: Royal Mansour Marrakech",
            },
            {
              day: "ДЕНЬ 02-04",
              title: "ПЕРЕЛІТ ГЕЛІКОПТЕРОМ ЧЕРЕЗ ВИСОКИЙ АТЛАС ДО КАСБ",
              description:
                "Панорамний переліт над засніженими хребтами Атлаських гір до стародавніх глиняних касб. Приватний обід у гірській фортеці.",
              meta: "ДОСВІД: Гелі-експедиція Атласом  •  ПРОЖИВАННЯ: Kasbah Tamadot",
            },
            {
              day: "ДЕНЬ 05-07",
              title: "МОНОЛІТНИЙ ТАБІР У ГЛИБИНІ САХАРИ",
              description:
                "Експедиція у безлюдні дюни Ерг-Шеббі. Нічне спостереження за зоряним небом з астрофізиком біля пустельного багаття.",
              meta: "ЕКСКЛЮЗИВ: Приватний табір у дюнах  •  ПРОЖИВАННЯ: Private Sahara Camp",
            },
          ],
        },
      ],
    },
    builder: {
      eyebrow: "[ 04 ] КОНСТРУКТОР ЕКСПЕДИЦІЇ",
      hint: "НАЛАШТУЙТЕ МАРШРУТ ТА ПАРАМЕТРИ",
      colDestination: "01 / НАПРЯМОК",
      colParameters: "02 / ТРИВАЛІСТЬ ТА ГОСТІ",
      colExtras: "03 / ПРИВАТНІ ОПЦІЇ",
      daysLabel: "ТРИВАЛІСТЬ",
      dayUnit: "ДНІВ",
      guestsLabel: "КІЛЬКІСТЬ ГОСТЕЙ",
      guestUnit: "ГОСТЕЙ",
      extras: [
        { id: "architect", label: "ПРИВАТНИЙ АРХІТЕКТОР", price: 4500 },
        { id: "helicopter", label: "ГЕЛІКОПТЕР", price: 8500 },
        { id: "film", label: "ПЛІВКОВА ЗЙОМКА", price: 3200 },
      ],
      specEyebrow: "[ СПЕЦИФІКАЦІЯ ВАШОГО ЗАПИТУ ]",
      specGroupLabel: "СКЛАД ГРУПИ",
      specDurationLabel: "ТРИВАЛІСТЬ",
      specExtrasLabel: "ДОДАТКОВІ ОПЦІЇ",
      specLogisticsLabel: "КЛАС ЛОГІСТИКИ",
      specLogisticsValue: "ПРИВАТНИЙ УЛЬТРА-ЛЮКС",
      specDisclaimer:
        "Кожен маршрут проєктується індивідуально. Остаточний розрахунок надається персональним куратором після верифікації дати.",
      summaryLabel: "ОРІЄНТОВНА ВАРТІСТЬ ЕКСПЕДИЦІЇ",
      openModalCta: "ВІДПРАВИТИ СФОРМОВАНИЙ БРИФ →",
    },
    testimonials: {
      eyebrow: "[ 05 ] ВІДГУКИ РЕДАКТОРІВ ТА ГОСТЕЙ",
      source: "ПРИВАТНІ УЧАСНИКИ",
      items: [
        {
          id: "iceland-review",
          quote:
            "«Це не просто турагенція. MONO TRAVEL створюють відчуття, що ви потрапили у кінематографічний кадр бруталістського фільму про майбутнє. Бездоганний стиль і нуль компромісів.»",
          author: "ОЛЕКСАНДР В.",
          trip: "ЕКСПЕДИЦІЯ В ІСЛАНДІЮ",
        },
        {
          id: "patagonia-review",
          quote:
            "«Організація приватного гелікоптерного туру над льодовиками Патагонії була виконана з точністю швейцарського годинника. Найкращий досвід приватного відпочинку.»",
          author: "ОЛЕНА К.",
          trip: "ПРИВАТНИЙ ТУР ПАТАГОНІЯ",
        },
      ],
    },
    booking: {
      eyebrow: "[ ЗАПИТ НА ЕКСПЕДИЦІЮ ]",
      title: "БРИФІНГ ТА БРОНЮВАННЯ",
      subtitle:
        "Залиште контакти — наш консьєрж підготує індивідуальний маршрут і розрахунок.",
      closeLabel: "ЗАКРИТИ ВІКНО",
      summaryTitle: "ПАРАМЕТРИ КОНФІГУРАЦІЇ",
      modeConsultation: "ІНДИВІДУАЛЬНА КОНСУЛЬТАЦІЯ",
      destinationLabel: "НАПРЯМОК",
      durationLabel: "ТРИВАЛІСТЬ",
      daysUnit: "ДНІВ",
      guestsLabel: "СКЛАД ГРУПИ",
      guestsUnit: "ГОСТЕЙ",
      addonsLabel: "ДОДАТКОВІ ОПЦІЇ",
      noAddonsLabel: "БАЗОВИЙ МАРШРУТ",
      estimatedPriceLabel: "ОРІЄНТОВНИЙ БЮДЖЕТ",
      nameLabel: "ІМ'Я",
      namePlaceholder: "ВВЕДІТЬ ВАШЕ ІМ'Я...",
      contactLabel: "EMAIL АБО TELEGRAM",
      contactPlaceholder: "NAME@DOMAIN.COM АБО @NICKNAME...",
      commentLabel: "КОМЕНТАР / ДАТИ",
      commentPlaceholder: "БАЖАНІ ДАТИ, ПОБАЖАННЯ ЩОДО ЛОГІСТИКИ...",
      submitCta: "НАДІСЛАТИ ЗАПИТ →",
      nameError: "ВКАЖІТЬ ВАШЕ ІМ'Я.",
      contactError: "ВВЕДІТЬ КОРЕКТНИЙ EMAIL АБО @TELEGRAM.",
      successTitle: "ЗАПИТ ЗАРЕЄСТРОВАНО",
      successDescription:
        "Конфігурацію передано архітектору подорожей. Ми зв'яжемося з вами найближчим часом.",
      newRequestCta: "ЗМІНИТИ ДАНІ",
      doneCta: "ЗАКРИТИ",
    },
    footer: {
      brandName: "MONO TRAVEL",
      description:
        "Бутикова агенція приватних експедицій. Створення персональних маршрутів найвищої категорії складності та естетики.",
      address: "КИЇВ, ВУЛ. РОЙТБУРДА, 12",
      email: "CONCIERGE@MONOTRAVEL.UA",
      copiedLabel: "СКОПІЙОВАНО",
      navTitle: "[ НАВІГАЦІЯ ]",
      navLinks: [
        { label: "ФІЛОСОФІЯ", href: "#philosophy" },
        { label: "НАПРЯМКИ 2026", href: "#destinations" },
        { label: "МАРШРУТИ", href: "#itinerary" },
        { label: "КОНСТРУКТОР", href: "#builder" },
      ],
      clubTitle: "[ ЗАКРИТИЙ КЛУБ ]",
      clubSubtitle: "Отримуйте закриті анонси експедицій 4 рази на рік.",
      emailPlaceholder: "ВАШ EMAIL...",
      subscribeCta: "ПІДПИСАТИСЯ →",
      subscribedMessage: "EMAIL ДОДАНО ДО ЗАКРИТОГО СПИСКУ АНОНСІВ.",
      invalidEmailMessage: "ВВЕДІТЬ КОРЕКТНУ EMAIL-АДРЕСУ.",
      copyright: "© 2026 MONO TRAVEL. ВСІ ПРАВА ЗАХИЩЕНІ. МОНОХРОМНЕ ВИДАННЯ.",
      legalLinks: [
        { label: "INSTAGRAM", href: "#reviews" },
        { label: "TELEGRAM PRIVÉ", href: "#builder" },
        { label: "ПРАВОВІ УМОВИ", href: "#philosophy" },
      ],
    },
    errorPage: {
      topLeft: "MONO TRAVEL // СИСТЕМА",
      topRight: "[ ЗБІЙ ВИКОНАННЯ ]",
      status: "СТАТУС: ПЕРЕРИВАННЯ МАРШРУТУ",
      title: "ЕКСПЕДИЦІЮ ПЕРЕРВАНО",
      description:
        "Під час завантаження сегмента виникла неочікувана помилка. Спробуйте повторити спробу або поверніться на головну.",
      retry: "ПОВТОРИТИ",
      home: "НА ГОЛОВНУ",
      brand: "MONO TRAVEL",
      footerStatus: "ЗАХИСТ АКТИВНИЙ",
    },
  },
};
