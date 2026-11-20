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
    primaryCta: string;
    secondaryCta: string;
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
      eyebrow: "ARCHITECTURAL EXPEDITIONS // 01",
      titleLine1: "SILENCE,",
      titleAccent: "FORM",
      titleLine2: "& SPACE",
      subtitle:
        "Bespoke architectural journeys across austere landscapes and quiet sanctuaries.",
      primaryCta: "Configure Expedition",
      secondaryCta: "Explore Routes",
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
      eyebrow: "АРХІТЕКТУРНІ ЕКСПЕДИЦІЇ // 01",
      titleLine1: "ТИША,",
      titleAccent: "ФОРМА",
      titleLine2: "Й ПРОСТІР",
      subtitle:
        "Індивідуальні архітектурні маршрути крізь суворі ландшафти та тихі простори.",
      primaryCta: "Скласти маршрут",
      secondaryCta: "Напрямки",
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
