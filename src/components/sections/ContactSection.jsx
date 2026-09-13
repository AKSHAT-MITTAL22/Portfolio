import { contact, profile } from "../../data";
import Button from "../ui/Button";
import RevealOnScroll from "../ui/RevealOnScroll";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <RevealOnScroll className="container contact-inner">
        <div className="contact-copy">
          <p className="section-kicker">{contact.kicker}</p>
          <h2 id="contact-title">{contact.title}</h2>
          <p>{contact.description}</p>
          <div className="contact-actions">
            {contact.links.map((link) => (
              <Button
                key={link.label}
                href={link.href}
                icon={link.icon}
                variant={link.variant}
                external={link.external}
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>

        <ContactForm recipientEmail={profile.email} config={contact.form} />
      </RevealOnScroll>
    </section>
  );
}
