"use client";

declare global {
  interface Window {
    ml?: (action: "show", formId: string, flag: boolean) => void;
  }
}

export function GetRoadmapBtn() {
  const handleOpenRoadmapForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (typeof window !== "undefined" && window.ml) {
      window.ml("show", "den2Bk", true); // den2Bk همون ID فرم
    } else {
      console.warn("MailerLite not loaded yet");
    }
  };

  return (
    <button
      type="button"
      className="ml-onclick-form inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium bg-foreground text-background hover:opacity-90 transition"
      onClick={handleOpenRoadmapForm}
    >
      Get the Developer Roadmap →
    </button>
  );
}
