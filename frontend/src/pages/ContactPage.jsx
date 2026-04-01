import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { SeoHead } from "../components/site/SeoHead";
import { SectionHeader } from "../components/site/SectionHeader";
import { submitContact } from "../lib/api";
import { buildOrganizationSchema } from "../lib/seo";

const initialForm = {
  name: "",
  email: "",
  company: "",
  region: "India",
  message: "",
};

export default function ContactPage({ content }) {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await submitContact(form);
      toast.success(response.message);
      setForm(initialForm);
    } catch (error) {
      console.error("Contact form failed", error);
      toast.error("We couldn’t send your note just now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SeoHead
        title="Contact Silver Core Partners"
        description="Contact Silver Core Partners to discuss sell-side advisory, buy-side support, growth capital strategy and cross-border M&A opportunities."
        structuredData={[buildOrganizationSchema(content)]}
      />

      <section className="page-section px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Contact"
            title="Start with a concise note. We’ll respond with clear next steps."
            description={content.contact.intro}
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <form onSubmit={handleSubmit} className="editorial-frame p-8 lg:p-10" data-testid="contact-form">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm text-slate-300">Name</span>
                  <Input
                    value={form.name}
                    onChange={(event) => handleChange("name", event.target.value)}
                    className="rounded-none border-white/10 bg-white/[0.03]"
                    required
                    data-testid="contact-name-input"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm text-slate-300">Email</span>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(event) => handleChange("email", event.target.value)}
                    className="rounded-none border-white/10 bg-white/[0.03]"
                    required
                    data-testid="contact-email-input"
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm text-slate-300">Company / Fund</span>
                  <Input
                    value={form.company}
                    onChange={(event) => handleChange("company", event.target.value)}
                    className="rounded-none border-white/10 bg-white/[0.03]"
                    required
                    data-testid="contact-company-input"
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm text-slate-300">Region</span>
                  <select
                    value={form.region}
                    onChange={(event) => handleChange("region", event.target.value)}
                    className="w-full border border-white/10 bg-[#0b1221] px-4 py-3 text-sm text-slate-100 outline-none"
                    data-testid="contact-region-select"
                  >
                    {content.brand.regions.map((region) => (
                      <option key={region} value={region}>
                        {region}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm text-slate-300">Message</span>
                  <Textarea
                    value={form.message}
                    onChange={(event) => handleChange("message", event.target.value)}
                    className="min-h-[160px] rounded-none border-white/10 bg-white/[0.03]"
                    required
                    data-testid="contact-message-input"
                  />
                </label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="mt-8 rounded-none border border-sky-300 bg-sky-300 px-6 text-slate-950 hover:bg-sky-200"
                data-testid="contact-submit-button"
              >
                {isSubmitting ? "Sending..." : "Send inquiry"}
              </Button>

              <p className="mt-4 text-sm leading-7 text-slate-400" data-testid="contact-notification-note">
                Every submission is saved for direct advisor review and future notification workflows.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300" data-testid="contact-founder-review-note">
                {content.contact.review_note}
              </p>
            </form>

            <div className="grid gap-6">
              <div className="editorial-frame p-8" data-testid="contact-channels-card">
                <p className="text-xs uppercase tracking-[0.35em] text-sky-300">Direct channels</p>
                <h3 className="mt-4 font-['Cormorant_Garamond'] text-4xl text-white" data-testid="contact-channels-heading">
                  Email or WhatsApp works alongside the enquiry form.
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300" data-testid="contact-channels-description">
                  Share a concise summary of your transaction, capital strategy or cross-border advisory goals. Enquiries are reviewed directly by the founders and routed based on mandate fit.
                </p>

                <div className="mt-6 grid gap-4">
                  {content.contact.emails.map((email, index) => (
                    <a
                      key={email.address}
                      href={`mailto:${email.address}`}
                      className="border border-white/10 bg-white/[0.03] p-4 transition hover:border-sky-300/40 hover:bg-white/[0.05]"
                      data-testid={`contact-email-link-${index}`}
                    >
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{email.label}</p>
                      <p className="mt-2 text-sm text-slate-100" data-testid={`contact-email-address-${index}`}>
                        {email.address}
                      </p>
                    </a>
                  ))}
                </div>

                <a
                  href={content.contact.whatsapp.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 px-5 py-4 text-center text-sm text-emerald-100 transition hover:border-emerald-300/70 hover:bg-emerald-400/15"
                  data-testid="contact-whatsapp-link"
                >
                  Connect on WhatsApp — {content.contact.whatsapp.display}
                </a>
              </div>

              <div className="border border-white/10 bg-white/[0.03] p-8" data-testid="contact-coverage-card">
                <p className="text-xs uppercase tracking-[0.35em] text-sky-300">Operating markets</p>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {content.global_coverage.markets.map((market, index) => (
                    <div key={market.name} className="border border-white/10 bg-black/20 p-5" data-testid={`contact-market-card-${index}`}>
                      <h4 className="font-['Cormorant_Garamond'] text-2xl text-white" data-testid={`contact-market-title-${index}`}>
                        {market.name}
                      </h4>
                      <p className="mt-3 text-sm leading-7 text-slate-300" data-testid={`contact-market-summary-${index}`}>
                        {market.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}