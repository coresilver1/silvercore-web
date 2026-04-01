import { Link } from "react-router-dom";

export const Footer = ({ brand, offices }) => {
  return (
    <footer className="border-t border-white/10 bg-black/20 px-6 py-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-sky-300" data-testid="footer-eyebrow">
            Silvercore Partners
          </p>
          <h2 className="mt-4 max-w-2xl font-['Cormorant_Garamond'] text-4xl tracking-tight" data-testid="footer-heading">
            Professional guidance for cross-border decisions that demand clarity.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300" data-testid="footer-description">
            {brand.description}. Our advisory coverage is intentionally selective so each mandate receives senior attention from positioning through execution.
          </p>

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

        <div className="grid gap-4 sm:grid-cols-2">
          {offices.map((office) => (
            <div key={office.region} className="border border-white/10 bg-white/[0.03] p-5" data-testid={`footer-office-${office.region.toLowerCase().replace(/\s+/g, "-")}`}>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{office.region}</p>
              <h3 className="mt-3 text-lg font-medium text-slate-100" data-testid={`footer-office-city-${office.region.toLowerCase().replace(/\s+/g, "-")}`}>
                {office.city}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300" data-testid={`footer-office-address-${office.region.toLowerCase().replace(/\s+/g, "-")}`}>
                {office.address}
              </p>
              <p className="mt-3 text-sm text-sky-200" data-testid={`footer-office-phone-${office.region.toLowerCase().replace(/\s+/g, "-")}`}>
                {office.phone}
              </p>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};