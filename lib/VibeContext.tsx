"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

// Ambient vibe colors - clearly visible atmospheric tints
const VIBE_COLORS = [
  { name: "orange", dark: "#1f120a", light: "#fae8d8" },
  { name: "pink", dark: "#1f0a15", light: "#fad8e8" },
  { name: "blue", dark: "#0a1420", light: "#d8ecfa" },
  { name: "green", dark: "#0a1a0a", light: "#d8fad8" },
  { name: "purple", dark: "#140a1f", light: "#e8d8fa" },
  { name: "default", dark: "#0a0a0a", light: "#fafafa" },
] as const;

type VibeContextType = {
  vibeIndex: number;
  vibeName: string;
  cycleVibe: () => void;
};

const VibeContext = createContext<VibeContextType | undefined>(undefined);

export function VibeProvider({ children }: { children: ReactNode }) {
  const [vibeIndex, setVibeIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("vibe-index");
    if (saved) {
      setVibeIndex(parseInt(saved, 10));
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("vibe-index", vibeIndex.toString());
      const isDark = document.documentElement.classList.contains("dark");
      const color = isDark ? VIBE_COLORS[vibeIndex].dark : VIBE_COLORS[vibeIndex].light;
      document.body.style.backgroundColor = color;
    }
  }, [vibeIndex, mounted]);

  // Also listen for theme changes
  useEffect(() => {
    if (!mounted) return;

    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      const color = isDark ? VIBE_COLORS[vibeIndex].dark : VIBE_COLORS[vibeIndex].light;
      document.body.style.backgroundColor = color;
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, [vibeIndex, mounted]);

  const cycleVibe = () => {
    setVibeIndex((prev) => (prev + 1) % VIBE_COLORS.length);
  };

  return (
    <VibeContext.Provider value={{ vibeIndex, vibeName: VIBE_COLORS[vibeIndex].name, cycleVibe }}>
      {children}
    </VibeContext.Provider>
  );
}

export function useVibe() {
  const context = useContext(VibeContext);
  if (!context) {
    throw new Error("useVibe must be used within a VibeProvider");
  }
  return context;
}
