"use client";

import { useTranslation } from "@/lib/useTranslation";

export function DJIntro() {
  const { t } = useTranslation();

  return (
    <section className="py-6 md:py-8">
      <blockquote className="text-xl md:text-2xl text-[var(--muted)] leading-relaxed italic text-center">
        "
        {t.djIntro.quoteParts.map((part, index) => (
          <span
            key={index}
            className={part.highlight ? "text-[var(--accent)]" : ""}
          >
            {part.text}
          </span>
        ))}
        "
      </blockquote>
    </section>
  );
}
