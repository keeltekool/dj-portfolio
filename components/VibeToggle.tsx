"use client";

import { useVibe } from "@/lib/VibeContext";
import { useTranslation } from "@/lib/useTranslation";

export function VibeToggle() {
  const { cycleVibe, vibeName } = useVibe();
  const { t } = useTranslation();

  // Color indicator dots
  const colorDots: Record<string, string> = {
    default: "bg-gray-500",
    pink: "bg-pink-500",
    blue: "bg-cyan-400",
    green: "bg-green-400",
    purple: "bg-purple-500",
    orange: "bg-orange-500",
  };

  return (
    <button
      onClick={cycleVibe}
      className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-full hover:bg-[var(--card-hover)] transition-colors"
      aria-label="Change background vibe"
    >
      <span className={`w-2 h-2 rounded-full ${colorDots[vibeName]} transition-colors`} />
      <span className="hidden sm:inline">{t.header?.dontTouchThis || "Don't Touch This"}</span>
    </button>
  );
}
