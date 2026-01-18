"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";

export function Events() {
  const { t } = useTranslation();

  const eventTypes = [
    {
      title: t.events.barLounge,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3h18v18H3z" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      ),
    },
    {
      title: t.events.corporate,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      ),
    },
    {
      title: t.events.private,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-10 md:py-12 border-t border-[var(--border)]">
      <h2 className="text-3xl uppercase tracking-widest text-[var(--accent)] font-bold mb-8 underline underline-offset-8 decoration-2">{t.events.header}</h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {eventTypes.map((event) => (
          <div
            key={event.title}
            className="p-6 border border-[var(--border)] rounded-lg hover:bg-[var(--card-hover)] hover:-translate-y-1 hover:shadow-lg transition-all duration-200 text-center"
          >
            <div className="mb-4 flex justify-center text-[var(--muted)]">{event.icon}</div>
            <h3 className="text-lg font-medium">{event.title}</h3>
          </div>
        ))}
      </div>
      <p className="text-[var(--muted)] text-base italic mt-6 text-center">
        {t.events.tagline}
      </p>

    </section>
  );
}

export function Venues() {
  return (
    <section className="py-10 md:py-12 border-t border-[var(--border)]">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl uppercase tracking-widest text-[var(--accent)] font-bold mb-8 underline underline-offset-8 decoration-2 self-start">References</h2>
        <div className="flex flex-wrap justify-center gap-12 md:gap-16">
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden bg-white hover:scale-105 transition-transform duration-200">
              <Image
                src="/images/277100343_4995508413820240_8699164706532330275_n.jpg"
                alt="NABA Bar"
                fill
                className="object-contain p-3"
              />
            </div>
            <p className="mt-4 text-base text-[var(--muted)] text-center">Naba Bar<br />(Kuressaare)</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden bg-white hover:scale-105 transition-transform duration-200">
              <Image
                src="/images/431140761_122124275510191187_8440817533010792574_n.jpg"
                alt="Sõstar Bar & Lounge"
                fill
                className="object-contain p-3"
              />
            </div>
            <p className="mt-4 text-base text-[var(--muted)] text-center">Sõstar Bar&Lounge<br />(Kuressaare)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
