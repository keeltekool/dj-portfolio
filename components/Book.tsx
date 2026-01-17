"use client";

import { useState } from "react";
import { useTranslation } from "@/lib/useTranslation";

export function Book() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const mailtoLink = `mailto:egertv@gmail.com?subject=Booking Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    setStatus("sent");

    setTimeout(() => {
      setStatus("idle");
    }, 3000);
  };

  return (
    <section className="py-10 md:py-12 border-t border-[var(--border)]">
      <h2 className="text-2xl uppercase tracking-widest text-[var(--accent)] font-bold mb-4">{t.booking.header}</h2>
      <h3 className="text-3xl md:text-4xl font-bold mb-8">{t.booking.headline}</h3>

      <div className="grid md:grid-cols-2 gap-12">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-base text-[var(--muted)] mb-2">{t.booking.name}</label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-[var(--card)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--foreground)] transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-base text-[var(--muted)] mb-2">{t.booking.email}</label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-[var(--card)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--foreground)] transition-colors"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-base text-[var(--muted)] mb-2">{t.booking.message}</label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-[var(--card)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--foreground)] transition-colors resize-none"
              placeholder="Tell me about your event..."
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3 bg-[var(--foreground)] text-[var(--background)] font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {status === "sending" ? t.booking.sending : status === "sent" ? t.booking.sent : t.booking.sendMessage}
          </button>
          <div className="flex items-center gap-4 my-4">
            <div className="flex-1 h-px bg-[var(--border)]" />
            <span className="text-[var(--muted)] text-sm font-medium">OR</span>
            <div className="flex-1 h-px bg-[var(--border)]" />
          </div>
          <button
            type="button"
            onClick={() => {
              // @ts-expect-error Calendly is loaded via external script
              window.Calendly?.initPopupWidget({
                url: "https://calendly.com/egertv/dj-booking-consultation",
              });
            }}
            className="w-full py-3 px-6 bg-[var(--accent)] text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
            {t.booking.scheduleCall}
          </button>
        </form>

        <div className="space-y-6">
          <p className="text-[var(--muted)] text-base">{t.booking.contactDirect}</p>
          <div className="space-y-4">
            <a
              href="mailto:egertv@gmail.com"
              className="flex items-center gap-3 text-lg text-[var(--accent)] hover:opacity-80 transition-opacity group"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:scale-110 transition-transform"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              egertv@gmail.com
            </a>
            <a
              href="tel:+37256633351"
              className="flex items-center gap-3 text-lg hover:text-[var(--muted)] transition-colors group"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:scale-110 transition-transform"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +372 5663 3351
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
