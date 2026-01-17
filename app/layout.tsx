import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/lib/LanguageContext";
import { VibeProvider } from "@/lib/VibeContext";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Egert_V | DJ",
  description: "Playing tracks you didn't know you needed. House, Disco, Funk, Soul, Hip-Hop. Available for events.",
  openGraph: {
    title: "Egert_V | DJ",
    description: "Playing tracks you didn't know you needed. House, Disco, Funk, Soul, Hip-Hop. Available for events.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={bebasNeue.variable}>
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body className={bebasNeue.className}>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
        <ThemeProvider>
          <VibeProvider>
            <LanguageProvider>
              <main className="min-h-screen px-6 max-w-5xl mx-auto">
                {children}
              </main>
            </LanguageProvider>
          </VibeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
