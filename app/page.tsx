import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DJIntro } from "@/components/DJIntro";
import { SoundInfluences } from "@/components/SoundInfluences";
import { Events, Venues } from "@/components/Events";
import { Gear } from "@/components/Gear";
import { Listen } from "@/components/Listen";
import { Book } from "@/components/Book";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <Header />
      <FadeIn>
        <Hero />
      </FadeIn>
      <FadeIn delay={100}>
        <DJIntro />
      </FadeIn>
      <FadeIn delay={50}>
        <SoundInfluences />
      </FadeIn>
      <FadeIn delay={50}>
        <Gear />
      </FadeIn>
      <FadeIn delay={50}>
        <Listen />
      </FadeIn>
      <FadeIn delay={50}>
        <Events />
      </FadeIn>
      <FadeIn delay={50}>
        <Book />
      </FadeIn>
      <FadeIn delay={50}>
        <Venues />
      </FadeIn>
      <Footer />
    </>
  );
}
