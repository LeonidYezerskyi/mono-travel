"use server";

export interface ExpeditionActionState {
  status: "idle" | "success" | "error";
  nameError: boolean;
  contactError: boolean;
  message?: string;
  requestId?: string;
}

function isValidEmailOrTelegram(raw: string): boolean {
  const value = raw.trim();
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const isTelegram = /^@?[a-zA-Z0-9_]{5,32}$/.test(value);
  return isEmail || isTelegram;
}

function getStringField(formData: FormData, key: string): string {
  const val = formData.get(key);
  return typeof val === "string" ? val.trim() : "";
}

export async function submitExpeditionRequest(
  _prevState: ExpeditionActionState,
  formData: FormData,
): Promise<ExpeditionActionState> {
  const fullName = getStringField(formData, "fullName");
  const contact = getStringField(formData, "contact");
  const comment = getStringField(formData, "comment");
  const locale = getStringField(formData, "locale") || "uk";
  const summaryJson = getStringField(formData, "summaryJson");

  const isNameValid = fullName.length >= 2;
  const isContactValid = isValidEmailOrTelegram(contact);

  if (!isNameValid || !isContactValid) {
    return {
      status: "error",
      nameError: !isNameValid,
      contactError: !isContactValid,
    };
  }

  let parsedSummary: unknown = null;
  if (summaryJson) {
    try {
      parsedSummary = JSON.parse(summaryJson);
    } catch {
      parsedSummary = null;
    }
  }

  const requestId = `MONO-${Date.now().toString(36).toUpperCase()}`;

  const payload = {
    requestId,
    submittedAt: new Date().toISOString(),
    locale,
    client: {
      fullName,
      contact,
      comment,
    },
    summary: parsedSummary,
  };

  const webhookUrl = process.env.EXPEDITION_WEBHOOK_URL;

  try {
    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      });

      if (!response.ok) {
        return {
          status: "error",
          nameError: false,
          contactError: false,
          message:
            locale === "en"
              ? "WEBHOOK DISPATCH FAILED. PLEASE TRY AGAIN."
              : "ПОМИЛКА ВІДПРАВКИ НА ВЕБХУК. СПРОБУЙТЕ ЩЕ РАЗ.",
        };
      }
    } else {
      await new Promise((resolve) => setTimeout(resolve, 650));
    }

    return {
      status: "success",
      nameError: false,
      contactError: false,
      requestId,
    };
  } catch {
    return {
      status: "error",
      nameError: false,
      contactError: false,
      message:
        locale === "en"
          ? "NETWORK ERROR. PLEASE TRY AGAIN."
          : "ПОМИЛКА МЕРЕЖІ. СПРОБУЙТЕ ЩЕ РАЗ.",
    };
  }
}
