export type Language = "en" | "uk";

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
  destinations: {
    eyebrow: string;
    heading: string;
    coordinatesLabel: string;
    rateLabel: string;
    perDay: string;
    selectCta: string;
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
    destinations: {
      eyebrow: "CURATED ROUTES // 02",
      heading: "Selected Territories",
      coordinatesLabel: "Coordinates",
      rateLabel: "Base Rate",
      perDay: "/ day",
      selectCta: "Use in Builder",
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
    destinations: {
      eyebrow: "КУРАТОРСЬКІ МАРШРУТИ // 02",
      heading: "Обрані території",
      coordinatesLabel: "Координати",
      rateLabel: "Базова ставка",
      perDay: "/ день",
      selectCta: "Обрати в конструкторі",
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
