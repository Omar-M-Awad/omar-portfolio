import { Project } from "../../types/project"

interface Props {
  project: Project
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3>{project.title}</h3>
        <p className="tagline">{project.tagline}</p>
        <p className="description">{project.description}</p>

        <div className="stack">
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>

      <div className="project-actions">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
