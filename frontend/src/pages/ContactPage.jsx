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
        title="Contact Silvercore Partners"
        description="Contact Silvercore Partners across India, the U.S., Europe and the U.K. to discuss M&A or strategic capital mandates."
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
            </form>

            <div className="grid gap-6 sm:grid-cols-2">
              {content.contact.offices.map((office, index) => (
                <article key={office.region} className="border border-white/10 bg-white/[0.03]" data-testid={`contact-office-card-${index}`}>
                  <img
                    src={office.image}
                    alt={`${office.region} office`}
                    className="h-48 w-full object-cover object-center"
                    data-testid={`contact-office-image-${index}`}
                  />
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.35em] text-sky-300">{office.region}</p>
                    <h3 className="mt-3 font-['Cormorant_Garamond'] text-3xl text-white" data-testid={`contact-office-city-${index}`}>
                      {office.city}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300" data-testid={`contact-office-address-${index}`}>
                      {office.address}
                    </p>
                    <p className="mt-3 text-sm text-slate-100" data-testid={`contact-office-phone-${index}`}>
                      {office.phone}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}