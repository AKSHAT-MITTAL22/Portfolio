import { skills } from "../../data";
import Icon from "../ui/Icon";
import RevealOnScroll from "../ui/RevealOnScroll";
import SectionHeading from "../ui/SectionHeading";

export default function SkillsSection() {
  return (
    <section className="section skills-section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <RevealOnScroll>
          <SectionHeading kicker={skills.kicker} title={skills.title} id="skills-title" />
        </RevealOnScroll>

        <div className="skills-grid">
          {skills.groups.map((group) => (
            <RevealOnScroll as="article" className="skill-group" key={group.title}>
              <div className="skill-icon">
                <Icon name={group.icon} />
              </div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul className="chip-list" aria-label={`${group.title} skills`}>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
