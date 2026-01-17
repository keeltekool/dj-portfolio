"use client";

import { useTranslation } from "@/lib/useTranslation";

export function SoundInfluences() {
  const { t } = useTranslation();
  const genres = ["House", "Deep House", "Disco", "Funk", "Soul", "Neo-Soul", "Hip-Hop", "Beats", "Electronic", "Africano", "Amapiano", "Techno", "Drum&Bass", "Retro"];

  return (
    <section className="py-10 md:py-12 border-t border-[var(--border)]">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl uppercase tracking-widest text-[var(--accent)] font-bold mb-6">{t.sound.header}</h2>
          <div className="flex flex-wrap gap-3">
            {genres.map((genre) => (
              <span
                key={genre}
                className="px-4 py-2 text-base border border-[var(--border)] rounded-full hover:bg-[var(--card-hover)] transition-colors"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl uppercase tracking-widest text-[var(--accent)] font-bold mb-6">{t.sound.digDeeper}</h2>
          <a
            href="https://spotify-artist-browser-gamma.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 border border-[var(--border)] rounded-lg hover:border-[var(--foreground)] transition-all duration-300 bg-gradient-to-br from-transparent to-[var(--card)]"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--foreground)] text-[var(--background)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                  <path d="M11 8v6" />
                  <path d="M8 11h6" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-lg font-semibold mb-1 group-hover:underline underline-offset-2">
                  {t.sound.artistBrowser}
                </p>
                {t.sound.customBuilt && (
                  <p className="text-xs text-[var(--muted)] uppercase tracking-wide mb-3">{t.sound.customBuilt}</p>
                )}
                <p className="text-[var(--muted)] text-base leading-relaxed">
                  {t.sound.browserDescription}
                </p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[var(--border)] flex items-center justify-between">
              <span className="text-base font-medium text-[var(--accent)]">{t.sound.exploreCollection}</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
