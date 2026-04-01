import { SeoHead } from "../components/site/SeoHead";
import { SectionHeader } from "../components/site/SectionHeader";
import { buildOrganizationSchema } from "../lib/seo";

export default function PrivacyPage({ content }) {
  const privacy = content.legal.privacy;

  return (
    <>
      <SeoHead
        title="Privacy Policy | Silver Core Partners"
        description="Read the Silver Core Partners privacy policy for advisory inquiries, website usage and communication records."
        structuredData={[buildOrganizationSchema(content)]}
      />

      <section className="page-section px-6 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="Legal"
            title={privacy.title}
            description={`Last updated ${privacy.updated}. This policy explains how Silver Core Partners collects, uses and protects information shared through this website.`}
          />

          <div className="mt-12 space-y-6">
            {privacy.sections.map((section, index) => (
              <article key={section.heading} className="editorial-frame p-8" data-testid={`privacy-section-${index}`}>
                <h2 className="font-['Cormorant_Garamond'] text-3xl text-white" data-testid={`privacy-section-heading-${index}`}>
                  {section.heading}
                </h2>
                <p className="mt-4 text-sm leading-8 text-slate-300" data-testid={`privacy-section-body-${index}`}>
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