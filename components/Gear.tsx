"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";

export function Gear() {
  const { t } = useTranslation();

  const equipment = [
    { label: t.gear.console, item: "Denon SC Live 4" },
    { label: t.gear.speakers, item: "Electro Voice ZLX-15P G2" },
    { label: t.gear.subs, item: "JBL EON618S" },
  ];

  return (
    <section className="py-10 md:py-12 border-t border-[var(--border)]">
      <h2 className="text-2xl uppercase tracking-widest text-[var(--accent)] font-bold mb-8">{t.gear.header}</h2>
      <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-[var(--card)] mb-8">
        <Image
          src="/images/snapedit_1727537146983_Yoooo-Photoroom.jpg"
          alt="DJ Equipment Setup"
          fill
          className="object-cover object-bottom grayscale contrast-110"
          sizes="100vw"
        />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {equipment.map((item) => (
          <div key={item.label} className="text-center md:text-left">
            <span className="text-base text-[var(--muted)] block mb-1">{item.label}</span>
            <span className="text-lg font-medium text-[var(--accent)]">{item.item}</span>
          </div>
        ))}
      </div>
      <p className="text-[var(--muted)] text-base italic mt-6">
        {t.gear.tagline}
      </p>
    </section>
  );
}
