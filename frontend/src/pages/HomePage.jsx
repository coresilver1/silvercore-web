import { Link } from "react-router-dom";
import { ArrowRight, Compass, Globe2, ShieldCheck } from "lucide-react";
import { Button } from "../components/ui/button";
import { SeoHead } from "../components/site/SeoHead";
import { SectionHeader } from "../components/site/SectionHeader";
import { buildOrganizationSchema } from "../lib/seo";

const icons = [Globe2, Compass, ShieldCheck];

export default function HomePage({ content }) {
  return (
    <>
      <SeoHead
        title="Silver Core Partners | Cross-Border M&A Advisory"
        description="Silver Core Partners advises on cross-border M&A, strategic capital and growth decisions across India, the U.S., Europe and the U.K."
        structuredData={[buildOrganizationSchema(content)]}
      />

      <section className="page-section px-6 lg:px-10">
        <div className="mx-auto max-w-7xl hero-grid items-stretch">
          <div className="editorial-frame reveal-up p-8 lg:p-12" data-testid="home-hero-content">
            <p className="text-xs uppercase tracking-[0.35em] text-sky-300" data-testid="home-hero-eyebrow">
              {content.home.hero.eyebrow}
            </p>
            <h1 className="mt-6 max-w-4xl font-['Cormorant_Garamond'] text-5xl tracking-tight text-white sm:text-6xl" data-testid="home-hero-heading">
              {content.home.hero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300" data-testid="home-hero-subheadline">
              {content.home.hero.subheadline}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300" data-testid="home-brand-mission">
              {content.brand.mission}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild className="rounded-none border border-sky-300 bg-sky-300 px-6 text-slate-950 hover:bg-sky-200" data-testid="home-primary-cta">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  {content.brand.cta_primary}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-none border-white/15 bg-transparent px-6 text-slate-100 hover:bg-white/5" data-testid="home-secondary-cta">
                <Link to="/services">{content.brand.cta_secondary}</Link>
              </Button>
            </div>
          </div>

          <div className="editorial-frame reveal-up reveal-delay-1 overflow-hidden" data-testid="home-hero-image-frame">
            <div className="flex h-full flex-col justify-end">
              <img
                src={content.home.hero.image}
                alt="Silver Core Partners cross-border M&A advisory"
                className="h-full min-h-[460px] w-full object-cover object-center"
                data-testid="home-hero-image"
              />
              <div className="border-t border-white/10 bg-[#050814]/90 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Coverage</p>
                <p className="mt-2 font-['Cormorant_Garamond'] text-2xl text-white" data-testid="home-hero-coverage">
                  India • U.S. • Europe • U.K.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300" data-testid="home-regional-summary">
                  {content.home.regional_summary}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-7xl gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
          {content.brand.metrics.map((metric, index) => (
            <div key={metric.label} className="bg-[#0b1221] p-6" data-testid={`home-metric-${index}`}>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{metric.label}</p>
              <p className="mt-4 font-['Cormorant_Garamond'] text-4xl text-white" data-testid={`home-metric-value-${index}`}>
                {metric.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section border-y border-white/10 bg-black/20 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Advisory approach"
            title="Built for thoughtful mandates, not mass-market process."
            description="Silver Core’s mandate style is deliberate: concise strategy, carefully chosen counterparties and senior advisors present throughout the moments where structure, timing and tone influence outcomes."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {content.home.pillars.map((pillar, index) => {
              const Icon = icons[index];
              return (
                <div key={pillar.title} className="editorial-frame p-8 reveal-up" data-testid={`home-pillar-${index}`}>
                  <Icon className="h-6 w-6 text-sky-300" />
                  <h3 className="mt-6 font-['Cormorant_Garamond'] text-3xl text-white" data-testid={`home-pillar-title-${index}`}>
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300" data-testid={`home-pillar-description-${index}`}>
                    {pillar.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-section px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={content.global_coverage.eyebrow}
            title={content.global_coverage.title}
            description={content.global_coverage.description}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {content.global_coverage.markets.map((market, index) => (
              <article key={market.name} className="border border-white/10 bg-white/[0.03] p-6" data-testid={`home-market-card-${index}`}>
                <p className="text-xs uppercase tracking-[0.35em] text-sky-300">{market.name}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300" data-testid={`home-market-summary-${index}`}>
                  {market.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section border-y border-white/10 bg-black/20 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Who we work with"
            title="Advisory support for founders, investors and strategic decision-makers."
            description="Silver Core supports mandates where strategic context, capital strategy and cross-border execution need to work together rather than in isolation."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {content.home.who_we_work_with.map((profile, index) => (
              <article key={profile.title} className="editorial-frame p-6" data-testid={`home-client-profile-${index}`}>
                <h3 className="font-['Cormorant_Garamond'] text-3xl text-white" data-testid={`home-client-profile-title-${index}`}>
                  {profile.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300" data-testid={`home-client-profile-description-${index}`}>
                  {profile.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="editorial-frame p-8 lg:p-10" data-testid="home-typical-situations-card">
            <p className="text-xs uppercase tracking-[0.35em] text-sky-300">Typical situations we support</p>
            <h2 className="mt-4 font-['Cormorant_Garamond'] text-4xl tracking-tight text-white">Where disciplined M&A advice matters most.</h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              {content.home.typical_situations.map((item, index) => (
                <li key={item} className="flex gap-3" data-testid={`home-typical-situation-${index}`}>
                  <span className="mt-2 h-2 w-2 rounded-full bg-sky-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="editorial-frame p-8 lg:p-10" data-testid="home-why-silvercore-card">
            <p className="text-xs uppercase tracking-[0.35em] text-sky-300">Why Silver Core</p>
            <h2 className="mt-4 font-['Cormorant_Garamond'] text-4xl tracking-tight text-white">A boutique process built around trust and execution quality.</h2>
            <div className="mt-6 space-y-5">
              {content.home.why_silvercore.map((item, index) => (
                <div key={item.title} className="border-t border-white/10 pt-5 first:border-t-0 first:pt-0" data-testid={`home-why-silvercore-item-${index}`}>
                  <h3 className="text-lg text-slate-100">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="Selected services"
              title="Advice shaped around real transaction goals."
              description="Our service lines are designed to stay clear, practical and close to the actual decisions a founder, investor or board needs to make."
            />
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {content.services.items.slice(0, 3).map((service, index) => (
              <div key={service.title} className="border border-white/10 bg-white/[0.03] p-6" data-testid={`home-service-card-${index}`}>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">0{index + 1}</p>
                <h3 className="mt-4 font-['Cormorant_Garamond'] text-3xl text-white" data-testid={`home-service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300" data-testid={`home-service-description-${index}`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-6 lg:grid-cols-2">
          {content.home.featured_quotes.map((quote, index) => (
            <div key={quote} className="border border-white/10 bg-slate-100/[0.02] p-8" data-testid={`home-quote-${index}`}>
              <p className="font-['Cormorant_Garamond'] text-3xl leading-tight text-slate-100">“{quote}”</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}