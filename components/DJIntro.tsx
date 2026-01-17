"use client";

import { useTranslation } from "@/lib/useTranslation";

export function DJIntro() {
  const { t } = useTranslation();

  return (
    <section className="py-6 md:py-8">
      <blockquote className="text-2xl md:text-3xl leading-relaxed italic text-center">
        <span className="bg-[var(--foreground)] text-[var(--background)] px-3 py-1 box-decoration-clone">
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
        </span>
      </blockquote>
    </section>
  );
}
