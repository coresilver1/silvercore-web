import { MessageCircleMore } from "lucide-react";

export const WhatsAppButton = ({ contact }) => {
  if (!contact?.whatsapp?.url) {
    return null;
  }

  return (
    <a
      href={contact.whatsapp.url}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 left-4 z-[75] inline-flex items-center gap-3 rounded-full border border-emerald-400/40 bg-[#072015]/95 px-4 py-3 text-sm text-emerald-100 shadow-[0_16px_40px_rgba(6,78,59,0.35)] backdrop-blur-xl transition hover:border-emerald-300/70 hover:bg-[#0b2b1d]/95 sm:left-6"
      data-testid="floating-whatsapp-button"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-200">
        <MessageCircleMore className="h-5 w-5" />
      </span>
      <span>
        <span className="block text-[11px] uppercase tracking-[0.25em] text-emerald-300/80">WhatsApp</span>
        <span className="block font-medium">{contact.whatsapp.display}</span>
      </span>
    </a>
  );
};