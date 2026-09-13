import { credentials } from "../../data";
import Icon from "../ui/Icon";
import RevealOnScroll from "../ui/RevealOnScroll";
import SectionHeading from "../ui/SectionHeading";

function CredentialPanel({ panel }) {
  return (
    <RevealOnScroll as="article" className="credential-panel">
      <Icon name={panel.icon} />
      <h3>{panel.title}</h3>

      {panel.type === "education" && (
        <>
          <p>{panel.description}</p>
          <strong>{panel.highlight}</strong>
          <span>{panel.subtext}</span>
        </>
      )}

      {(panel.type === "awards" || panel.type === "certifications") && (
        <ul>
          {panel.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </RevealOnScroll>
  );
}

export default function CredentialsSection() {
  return (
    <section
      className="section credentials-section"
      id="credentials"
      aria-labelledby="credentials-title"
    >
      <div className="container">
        <RevealOnScroll>
          <SectionHeading
            kicker={credentials.kicker}
            title={credentials.title}
            id="credentials-title"
          />
        </RevealOnScroll>

        <div className="credentials-grid">
          {credentials.panels.map((panel) => (
            <CredentialPanel key={panel.title} panel={panel} />
          ))}
        </div>
      </div>
    </section>
  );
}
