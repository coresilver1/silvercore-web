import { SeoHead } from "../components/site/SeoHead";
import { SectionHeader } from "../components/site/SectionHeader";
import { AdvisorAvatar } from "../components/site/AdvisorAvatar";
import { buildOrganizationSchema } from "../lib/seo";

export default function AboutPage({ content }) {
  return (
    <>
      <SeoHead
        title="About Silver Core Partners"
        description="Learn about Silver Core Partners, our philosophy and the senior advisors behind our cross-border M&A practice."
        structuredData={[buildOrganizationSchema(content)]}
      />

      <section className="page-section px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="About the firm"
            title="Transparent advice, senior attention and realistic pacing."
            description="Silver Core Partners was built for clients who want clear judgment, credible preparation and an advisory relationship grounded in authenticity rather than spectacle."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="editorial-frame p-8 lg:p-10" data-testid="about-history-card">
              <p className="text-base leading-8 text-slate-300" data-testid="about-history-text">
                {content.about.history}
              </p>
            </div>

            <div className="grid gap-6">
              {content.about.philosophy_blocks.map((block, index) => (
                <div key={block} className="border border-white/10 bg-white/[0.03] p-6" data-testid={`about-philosophy-card-${index}`}>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Philosophy</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300" data-testid={`about-philosophy-text-${index}`}>
                    {block}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section border-y border-white/10 bg-black/20 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Founders & team"
            title="The advisors behind Silver Core’s cross-border mandate work."
            description="The team section now uses premium illustrated placeholders to keep the visual language clean, consistent and credible while the firm finalizes portrait photography."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {content.about.partners.map((partner, index) => (
              <article key={partner.name} className="editorial-frame overflow-hidden" data-testid={`partner-card-${index}`}>
                <AdvisorAvatar name={partner.name} index={index} />
                <div className="p-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{partner.role}</p>
                  <h3 className="mt-4 font-['Cormorant_Garamond'] text-3xl text-white" data-testid={`partner-name-${index}`}>
                    {partner.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300" data-testid={`partner-bio-${index}`}>
                    {partner.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}