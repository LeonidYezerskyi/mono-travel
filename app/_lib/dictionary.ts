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
  builder: {
    eyebrow: string;
    heading: string;
    destinationCol: string;
    parametersCol: string;
    summaryCol: string;
    daysLabel: string;
    guestsLabel: string;
    extrasLabel: string;
    totalLabel: string;
    bookCta: string;
  };
  modal: {
    heading: string;
    nameLabel: string;
    contactLabel: string;
    notesLabel: string;
    submitLabel: string;
    submittingLabel: string;
    closeLabel: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
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
    builder: {
      eyebrow: "CUSTOMIZER // 03",
      heading: "Expedition Builder",
      destinationCol: "01. Territory",
      parametersCol: "02. Scale & Add-ons",
      summaryCol: "03. Estimate",
      daysLabel: "Duration (days)",
      guestsLabel: "Travelers",
      extrasLabel: "Architectural Add-ons",
      totalLabel: "Estimated Total",
      bookCta: "Request Consultation",
    },
    modal: {
      heading: "Expedition Inquiry",
      nameLabel: "Full Name",
      contactLabel: "Email or Telegram",
      notesLabel: "Architectural Interests & Dates",
      submitLabel: "Send Inquiry",
      submittingLabel: "Sending...",
      closeLabel: "Close",
    },
    footer: {
      tagline: "Monochrome spatial travel dispatches.",
      rights: "MONO TRAVEL. All rights reserved.",
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
    builder: {
      eyebrow: "КОНСТРУКТОР // 03",
      heading: "Конструктор експедиції",
      destinationCol: "01. Територія",
      parametersCol: "02. Масштаб та опції",
      summaryCol: "03. Розрахунок",
      daysLabel: "Тривалість (днів)",
      guestsLabel: "Учасники",
      extrasLabel: "Додаткові опції",
      totalLabel: "Орієнтовна вартість",
      bookCta: "Замовити консультацію",
    },
    modal: {
      heading: "Заявка на експедицію",
      nameLabel: "Ім'я та прізвище",
      contactLabel: "Email або Telegram",
      notesLabel: "Побажання щодо архітектури та дат",
      submitLabel: "Надіслати заявку",
      submittingLabel: "Надсилання...",
      closeLabel: "Закрити",
    },
    footer: {
      tagline: "Монохромні експедиції у простір і форму.",
      rights: "MONO TRAVEL. Усі права захищено.",
    },
  },
};
