import { profile } from "../../data";

export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: `mailto:${profile.email}`,
    telephone: profile.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
      addressCountry: "IN",
    },
    sameAs: [profile.linkedin, profile.github],
    knowsAbout: profile.knowsAbout,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
