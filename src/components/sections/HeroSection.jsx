import { profile } from "../../data";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import RevealOnScroll from "../ui/RevealOnScroll";

export default function HeroSection() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-overlay" />
      <RevealOnScroll className="container hero-content">
        <p className="eyebrow">{profile.title}</p>
        <h1 id="hero-title">{profile.name}</h1>
        <p className="hero-lede">{profile.heroLede}</p>
        <div className="hero-actions" aria-label="Primary actions">
          <Button href="#contact" icon="Send" variant="primary">
            Contact Me
          </Button>
          <Button href="#projects" icon="FolderGit2" variant="secondary">
            View Projects
          </Button>
        </div>
        <div className="hero-meta" aria-label="Professional snapshot">
          {profile.heroMeta.map((item) => (
            <span key={item.label}>
              <Icon name={item.icon} />
              {item.label}
            </span>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
