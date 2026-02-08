import ProjectCard from "../ui/ProjectCard"
import { projects } from "../../data/projects"

const Projects = () => {
  return (
    <section className="projects container">
      <h2>Featured Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
