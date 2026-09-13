import { profile } from "./profile";

export const contact = {
  kicker: "Contact",
  title: "Need a Python developer who can turn AI ideas into production systems?",
  description:
    "I build backend APIs, AI automation pipelines, and LLM-powered workflows that reduce manual effort and improve operational speed.",
  links: [
    // { icon: "Mail", label: "Email", href: `mailto:${profile.email}`, variant: "primary" },
    // { icon: "Phone", label: "Call", href: `tel:${profile.phone}`, variant: "secondary" },
    { icon: "Linkedin", label: "LinkedIn", href: profile.linkedin, variant: "secondary", external: true },
    { icon: "Github", label: "GitHub", href: profile.github, variant: "secondary", external: true },
  ],
  form: {
    subject: "Portfolio Contact",
    successMessage: "Message sent. I will get back to you at the email you provided.",
    errorMessage: "The message could not be sent. Please try again in a moment.",
  },
};
