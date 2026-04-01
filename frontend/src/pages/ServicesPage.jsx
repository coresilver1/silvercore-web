import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { SeoHead } from "../components/site/SeoHead";
import { SectionHeader } from "../components/site/SectionHeader";
import { buildOrganizationSchema, buildServicesSchema } from "../lib/seo";

export default function ServicesPage({ content }) {
  return (
    <>
      <SeoHead
        title="Services | Silvercore Partners"
        description="Explore Silvercore Partners’ M&A advisory, strategic capital, cross-border execution and investor relations capabilities."
        structuredData={[buildOrganizationSchema(content), buildServicesSchema(content)]}
      />

      <section className="page-section px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Services"
            title="Six focused services for cross-border decision-making."
            description="Each service is intentionally framed in plain language so clients can understand what matters, how we work and where our process adds discipline."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {content.services.items.map((service, index) => (
              <article key={service.title} className="editorial-frame p-8" data-testid={`service-card-${index}`}>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">0{index + 1}</p>
                <h3 className="mt-5 font-['Cormorant_Garamond'] text-3xl text-white" data-testid={`service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300" data-testid={`service-description-${index}`}>
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section border-y border-white/10 bg-black/20 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Execution process"
            title="A three-phase process that favors control over noise."
            description="Silvercore’s execution model is straightforward by design: establish clarity, map the right market and maintain discipline all the way through diligence and negotiation."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {content.services.process.map((step, index) => (
              <div key={step.phase} className="border border-white/10 bg-white/[0.03] p-8" data-testid={`service-process-step-${index}`}>
                <p className="text-sm uppercase tracking-[0.35em] text-sky-300" data-testid={`service-process-phase-${index}`}>
                  {step.phase}
                </p>
                <h3 className="mt-4 font-['Cormorant_Garamond'] text-3xl text-white" data-testid={`service-process-title-${index}`}>
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300" data-testid={`service-process-description-${index}`}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button asChild className="rounded-none border border-sky-300 bg-sky-300 text-slate-950 hover:bg-sky-200" data-testid="services-contact-cta">
              <Link to="/contact" className="inline-flex items-center gap-2">
                Discuss a mandate
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}