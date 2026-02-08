import { Project } from "../../types/project"

interface Props {
  project: Project
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p className="tagline">{project.tagline}</p>
      <p>{project.description}</p>

      <div className="stack">
        {project.stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
