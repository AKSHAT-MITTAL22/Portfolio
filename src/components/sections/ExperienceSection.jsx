import { experience } from "../../data";
import RevealOnScroll from "../ui/RevealOnScroll";
import SectionHeading from "../ui/SectionHeading";

export default function ExperienceSection() {
  return (
    <section className="section experience-section" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <RevealOnScroll>
          <SectionHeading
            kicker={experience.kicker}
            title={experience.title}
            id="experience-title"
          />
        </RevealOnScroll>

        <div className="timeline">
          {experience.roles.map((role) => (
            <RevealOnScroll as="article" className="timeline-item" key={role.title}>
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-content">
                <div className="role-topline">
                  <div>
                    <h3>{role.title}</h3>
                    <p>{role.company}</p>
                  </div>
                  <span>{role.dateRange}</span>
                </div>
                <ul className="impact-list">
                  {role.bullets.map((bullet) => (
                    <li key={bullet.slice(0, 50)}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
