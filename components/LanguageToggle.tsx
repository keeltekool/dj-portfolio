"use client";

import { useTranslation } from "@/lib/useTranslation";

export function LanguageToggle() {
  const { language, setLanguage } = useTranslation();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "ee" : "en")}
      className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[var(--card-hover)] transition-colors text-sm font-medium"
      aria-label={language === "en" ? "Switch to Estonian" : "Switch to English"}
    >
      {language === "en" ? "EN" : "EE"}
    </button>
  );
}
