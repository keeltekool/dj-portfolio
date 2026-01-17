"use client";

import { useLanguage } from "./LanguageContext";
import { translations, Language } from "./translations";

export function useTranslation() {
  const { language, setLanguage } = useLanguage();

  const t = translations[language];

  return {
    t,
    language,
    setLanguage,
    isEstonian: language === "ee",
  };
}
