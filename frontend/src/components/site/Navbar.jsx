import { NavLink, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Investments", to: "/investments" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

export const Navbar = ({ brand }) => {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050814]/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-5 lg:px-10">
        <Link to="/" className="min-w-[220px]" data-testid="site-logo-link">
          <p className="font-['Cormorant_Garamond'] text-3xl tracking-tight text-slate-50" data-testid="site-logo-text">
            {brand.name}
          </p>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400" data-testid="site-logo-tagline">
            Boutique cross-border advisory
          </p>
        </Link>

        <nav className="flex flex-1 flex-wrap justify-center gap-3 text-sm text-slate-300" data-testid="primary-navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              data-testid={`nav-link-${item.label.toLowerCase()}`}
              className={({ isActive }) =>
                `rounded-full border px-4 py-2 transition duration-300 ${
                  isActive
                    ? "border-sky-300/70 bg-sky-300/10 text-sky-200"
                    : "border-transparent bg-white/[0.02] text-slate-300 hover:border-white/10 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Button
          asChild
          className="rounded-none border border-sky-300 bg-sky-300 px-5 text-slate-950 hover:bg-sky-200"
          data-testid="navbar-cta-button"
        >
          <Link to="/contact" className="inline-flex items-center gap-2">
            Speak with an advisor
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </header>
  );
};