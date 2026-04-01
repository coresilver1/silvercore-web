const currentOrigin = () =>
  typeof window !== "undefined" ? window.location.origin : "https://silvercorepartners.com";

export const buildOrganizationSchema = (content) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: content.brand.name,
  description: content.brand.description,
  url: currentOrigin(),
  areaServed: content.brand.regions,
  contactPoint: content.contact.offices.map((office) => ({
    "@type": "ContactPoint",
    areaServed: office.region,
    telephone: office.phone,
    contactType: "M&A advisory",
  })),
});

export const buildServicesSchema = (content) => ({
  "@context": "https://schema.org",
  "@graph": content.services.items.map((service) => ({
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: content.brand.name,
    },
    areaServed: content.brand.regions,
  })),
});

export const buildArticlesSchema = (content) => ({
  "@context": "https://schema.org",
  "@graph": content.insights.posts.map((post) => ({
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    author: {
      "@type": "Organization",
      name: content.brand.name,
    },
    publisher: {
      "@type": "Organization",
      name: content.brand.name,
    },
    url: `${currentOrigin()}/insights#${post.slug}`,
  })),
});