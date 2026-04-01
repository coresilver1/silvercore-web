import { SeoHead } from "../components/site/SeoHead";
import { SectionHeader } from "../components/site/SectionHeader";
import { buildOrganizationSchema } from "../lib/seo";

export default function TermsPage({ content }) {
  const terms = content.legal.terms;

  return (
    <>
      <SeoHead
        title="Terms of Service | Silvercore Partners"
        description="Review the Silvercore Partners terms governing website use, informational content and AI assistant output."
        structuredData={[buildOrganizationSchema(content)]}
      />

      <section className="page-section px-6 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="Legal"
            title={terms.title}
            description={`Last updated ${terms.updated}. These terms explain the purpose of the website, usage expectations and important advisory disclaimers.`}
          />

          <div className="mt-12 space-y-6">
            {terms.sections.map((section, index) => (
              <article key={section.heading} className="editorial-frame p-8" data-testid={`terms-section-${index}`}>
                <h2 className="font-['Cormorant_Garamond'] text-3xl text-white" data-testid={`terms-section-heading-${index}`}>
                  {section.heading}
                </h2>
                <p className="mt-4 text-sm leading-8 text-slate-300" data-testid={`terms-section-body-${index}`}>
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}