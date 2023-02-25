import { myProjects } from "../../myProjects"
import { Card } from "../Card/Card"
import styles from './Projects.module.css'

const Projects = () => {
  return (
    <div className={styles['projects-container']}>
      {myProjects.map((project, index) =>
        <div className={styles['projects-item']} key={index}>
          <Card
            id={project.id}
            name={project.name}
            technologies={project.technologies}
            image={project.image}
            description={project.description}
            url={project.url}
          />
        </div>)}
    </div>
  )
}

export default Projects;