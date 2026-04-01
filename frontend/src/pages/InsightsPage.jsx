import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { SeoHead } from "../components/site/SeoHead";
import { SectionHeader } from "../components/site/SectionHeader";
import { buildArticlesSchema, buildOrganizationSchema } from "../lib/seo";

export default function InsightsPage({ content }) {
  return (
    <>
      <SeoHead
        title="Insights | Silver Core Partners"
        description="Explore 2026 cross-border M&A insights, topic clusters and search-friendly FAQs from Silver Core Partners."
        structuredData={[buildOrganizationSchema(content), buildArticlesSchema(content)]}
      />

      <section className="page-section px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Insights"
            title="Ten 2026 topics shaping cross-border M&A conversations."
            description="These sample editorial summaries are structured in concise, answer-friendly blocks so they work for human readers while supporting stronger discoverability."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {content.insights.clusters.map((cluster, index) => (
              <div key={cluster.title} className="border border-white/10 bg-white/[0.03] p-6" data-testid={`insight-cluster-${index}`}>
                <p className="text-xs uppercase tracking-[0.35em] text-sky-300">Topic cluster</p>
                <h3 className="mt-4 font-['Cormorant_Garamond'] text-3xl text-white" data-testid={`insight-cluster-title-${index}`}>
                  {cluster.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300" data-testid={`insight-cluster-description-${index}`}>
                  {cluster.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {content.insights.posts.map((post, index) => (
              <article key={post.slug} id={post.slug} className="editorial-frame p-8" data-testid={`insight-post-${index}`}>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">2026 commentary</p>
                <h3 className="mt-4 font-['Cormorant_Garamond'] text-3xl text-white" data-testid={`insight-post-title-${index}`}>
                  {post.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300" data-testid={`insight-post-summary-${index}`}>
                  {post.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section border-y border-white/10 bg-black/20 px-6 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="SEO-friendly FAQs"
            title="Straight answers for early-stage deal research."
            description="These FAQ entries are written in compact, direct blocks so they are readable, search-friendly and easy to adapt into future blog posts or answer engine snippets."
            align="center"
          />

          <Accordion type="single" collapsible className="mt-12 space-y-4" data-testid="insights-faq-accordion">
            {content.insights.faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`} className="border border-white/10 bg-white/[0.03] px-6" data-testid={`insights-faq-item-${index}`}>
                <AccordionTrigger className="text-left text-base text-slate-100 hover:no-underline" data-testid={`insights-faq-trigger-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-7 text-slate-300" data-testid={`insights-faq-content-${index}`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}