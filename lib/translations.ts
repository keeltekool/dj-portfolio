export const translations = {
  en: {
    djIntro: {
      quoteParts: [
        { text: "Playing ", highlight: false },
        { text: "tracks you", highlight: true },
        { text: " didn't know you wanted to hear and dance to! ", highlight: false },
        { text: "Always digging", highlight: true },
        { text: " for fresh sounds, ", highlight: false },
        { text: "mixing genres", highlight: true },
        { text: ", keeping it unpredictable.", highlight: false },
      ],
    },
    events: {
      header: "Available for",
      barLounge: "Bar & Lounge sets",
      corporate: "Corporate events",
      private: "Private parties",
      tagline: "With 10,000+ tracks in the collection and years of reading crowds, every set is built in real-time. No pre-planned playlists — just pure energy, reading the room, and finding the perfect next track to keep the vibe moving.",
    },
    sound: {
      header: "My Sound",
      digDeeper: "Dig Deeper",
      artistBrowser: "My Spotify Browser",
      customBuilt: "",
      browserDescription: "Browse my collection by genre tags — discover the artists behind my sets and find new music through my curated tagging system.",
      exploreCollection: "Explore the collection",
    },
    gear: {
      header: "My Gear",
      console: "Console",
      speakers: "Speakers",
      subs: "Subs",
      tagline: "Full mobile setup — ready for any venue.",
    },
    listen: {
      header: "Tune In What I'm Feeling Currently",
      followSpotify: "Follow on Spotify",
    },
    booking: {
      header: "Booking",
      headline: "Let's make it happen.",
      name: "Name",
      email: "Email",
      message: "Message",
      sendMessage: "Send Message",
      sending: "Sending...",
      sent: "Message sent!",
      scheduleCall: "Schedule a Call",
      contactDirect: "Or reach out directly:",
    },
    footer: {
      builtWith: "Built with Claude Code",
    },
    header: {
      dontTouchThis: "Don't Touch This",
    },
  },
  ee: {
    djIntro: {
      quoteParts: [
        { text: "Mängin ", highlight: false },
        { text: "lugusid, mida sa", highlight: true },
        { text: " ei teadnudki, et tahad kuulda ja tantsida! ", highlight: false },
        { text: "Alati uut muusikat otsimas", highlight: true },
        { text: ", ", highlight: false },
        { text: "žanre segamas", highlight: true },
        { text: ", üllatusi pakkumas.", highlight: false },
      ],
    },
    events: {
      header: "Kus mängin",
      barLounge: "Baari- ja lounge-setid",
      corporate: "Firmaüritused",
      private: "Eraüritused",
      tagline: "Üle 10 000 loo kollektsioonis ja aastatepikkune kogemus rahva lugemisel — iga sett sünnib reaalajas. Mitte mingeid eelnevalt kokku pandud playliste — ainult puhas energia, publiku tunnetamine ja õige järgmise loo leidmine, et vibe liiguks edasi.",
    },
    sound: {
      header: "Minu Saund",
      digDeeper: "Avasta",
      artistBrowser: "Artist Browser Tool",
      customBuilt: "", // Remove for EE
      browserDescription: "Uuri minu muusikakollektsiooni žanrite kaupa. Leia uusi artiste ja avasta, mis minu settide taga tegelikult peitub.",
      exploreCollection: "Tutvu kollektsiooniga",
    },
    gear: {
      header: "Minu Gear",
      console: "DJ Pult",
      speakers: "Topid",
      subs: "Subid",
      tagline: "Full Mobile Setup — toob kastanid välja igast tulest :)",
    },
    listen: {
      header: "Mis praegu kerib",
      followSpotify: "Jälgi Spotifys",
    },
    booking: {
      header: "Bronn",
      headline: "Anna endast märku",
      name: "Nimi",
      email: "E-post",
      message: "Sõnum",
      sendMessage: "Saada sõnum",
      sending: "Saadan...",
      sent: "Sõnum saadetud!",
      scheduleCall: "Broneeri kõne",
      contactDirect: "Või kontakteeru",
    },
    footer: {
      builtWith: "", // Remove for EE
    },
    header: {
      dontTouchThis: "Ära Puutu",
    },
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;
