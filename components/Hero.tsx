import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full py-4 md:py-6">
      <div className="relative w-full aspect-[3/4] md:aspect-[16/10] overflow-hidden rounded-lg">
        <Image
          src="/images/snapedit_1727537146983_Yoooo-Photoroom.jpg"
          alt="Egert_V"
          fill
          className="object-cover object-top grayscale contrast-110"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute inset-0 mix-blend-overlay opacity-30 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0,0,0,0.3) 2px,
              rgba(0,0,0,0.3) 4px
            )`
          }}
        />
        <h1 className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
          DJ Egert_<span className="text-[var(--accent)]">V</span>
        </h1>
      </div>
    </section>
  );
}
