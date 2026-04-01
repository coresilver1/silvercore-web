import { Mail, MessageCircleMore } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = ({ brand, contact, globalCoverage }) => {
  return (
    <footer className="border-t border-white/10 bg-black/20 px-6 py-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-sky-300" data-testid="footer-eyebrow">
            Silver Core Partners
          </p>
          <h2 className="mt-4 max-w-2xl font-['Cormorant_Garamond'] text-4xl tracking-tight" data-testid="footer-heading">
            Professional guidance for cross-border decisions that demand clarity.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300" data-testid="footer-description">
            {brand.description}. Our advisory coverage is intentionally selective so each mandate receives senior attention from positioning through execution.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {contact.emails.map((email, index) => (
              <a
                key={email.address}
                href={`mailto:${email.address}`}
                className="border border-white/10 bg-white/[0.03] p-4 transition hover:border-sky-300/40 hover:bg-white/[0.05]"
                data-testid={`footer-email-link-${index}`}
              >
                <div className="flex items-center gap-3 text-slate-100">
                  <Mail className="h-4 w-4 text-sky-300" />
                  <span className="text-sm uppercase tracking-[0.25em] text-slate-400">{email.label}</span>
                </div>
                <p className="mt-3 text-sm text-slate-100" data-testid={`footer-email-address-${index}`}>
                  {email.address}
                </p>
              </a>
            ))}
          </div>

          <a
            href={contact.whatsapp.url}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-3 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-5 py-3 text-sm text-emerald-100 transition hover:border-emerald-300/60 hover:bg-emerald-400/15"
            data-testid="footer-whatsapp-link"
          >
            <MessageCircleMore className="h-4 w-4" />
            Connect via WhatsApp
          </a>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Link to="/privacy-policy" className="rounded-full border border-white/10 px-4 py-2 text-slate-300 transition hover:border-sky-300/40 hover:text-white" data-testid="footer-privacy-link">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="rounded-full border border-white/10 px-4 py-2 text-slate-300 transition hover:border-sky-300/40 hover:text-white" data-testid="footer-terms-link">
              Terms of Service
            </Link>
            <Link to="/contact" className="rounded-full border border-white/10 px-4 py-2 text-slate-300 transition hover:border-sky-300/40 hover:text-white" data-testid="footer-contact-link">
              Contact our team
            </Link>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-sky-300" data-testid="footer-coverage-eyebrow">
            Operating markets
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {globalCoverage.markets.map((market, index) => (
              <div key={market.name} className="border border-white/10 bg-white/[0.03] p-5" data-testid={`footer-market-card-${index}`}>
                <h3 className="text-lg font-medium text-slate-100" data-testid={`footer-market-title-${index}`}>
                  {market.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300" data-testid={`footer-market-summary-${index}`}>
                  {market.summary}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-400" data-testid="footer-whatsapp-caption">
            Prefer a quick introduction? Reach us on WhatsApp or email and share a short summary of your transaction, capital or cross-border advisory goals.
          </p>
        </div>
      </div>
    </footer>
  );
};