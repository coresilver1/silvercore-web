import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { AiAdvisorChat } from "./AiAdvisorChat";
import { WhatsAppButton } from "./WhatsAppButton";
import { InteractionLayer } from "./InteractionLayer";

export const SiteLayout = ({ brand, contact, globalCoverage, chat, children }) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050814] text-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(148,163,184,0.12),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="relative z-10">
        <Navbar brand={brand} />
        <main>{children}</main>
        <Footer brand={brand} contact={contact} globalCoverage={globalCoverage} />
      </div>
      <InteractionLayer />
      <AiAdvisorChat chat={chat} brand={brand} />
      <WhatsAppButton contact={contact} />
    </div>
  );
};