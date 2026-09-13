import { about } from "../../data";
import RevealOnScroll from "../ui/RevealOnScroll";

export default function AboutSection() {
  return (
    <section className="section about-section" aria-labelledby="about-title">
      <div className="container two-column">
        <RevealOnScroll>
          <p className="section-kicker">{about.kicker}</p>
          <h2 id="about-title">{about.title}</h2>
        </RevealOnScroll>
        <RevealOnScroll className="about-copy">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
