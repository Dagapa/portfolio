import { Link } from "react-router-dom";
import { myProjects } from "../../myProjects"
import { Card } from "../Card/Card";
import styles from "./Carousel.module.css"

export const Carousel = () => {
  const cardProjects = myProjects.slice(0, 3);

  return (
    <>
      {cardProjects.map((project, index) =>
        <div className={styles['cards-projects']} key={index}>
          <Card
            id={project.id}
            name={project.name}
            technologies={project.technologies}
            image={project.image}
            url={project.url}
          />
        </div>)}
      <Link to={'/projects'}>
        <button className={styles.btn}>
          Go
        </button>
      </Link>
    </>
  );
};