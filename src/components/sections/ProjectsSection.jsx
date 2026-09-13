import { projects } from "../../data";
import RevealOnScroll from "../ui/RevealOnScroll";
import SectionHeading from "../ui/SectionHeading";

export default function ProjectsSection() {
  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <RevealOnScroll>
          <SectionHeading kicker={projects.kicker} title={projects.title} id="projects-title" />
        </RevealOnScroll>

        <div className="project-grid">
          {projects.items.map((project) => (
            <RevealOnScroll as="article" className="project-card" key={project.id}>
              <img src={project.image} alt={project.alt} loading="lazy" />
              <div className="project-body">
                <div className="project-topline">
                  <h3>{project.title}</h3>
                  <span>{project.category}</span>
                </div>
                <p>{project.description}</p>
                <dl className="project-facts">
                  {project.facts.map((fact) => (
                    <div key={fact.label}>
                      <dt>{fact.label}</dt>
                      <dd>{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
