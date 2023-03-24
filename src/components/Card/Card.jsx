import { Link } from "react-router-dom";
import styles from "./Card.module.css";
export const Card = ({ id, name, technologies, image, description, url }) => {
  return (
    <div className={styles["card-container"]}>
      {description ? (
        //projects page
        <div className={styles["projects-page"]}>
          <h3>{name}</h3>
          <img src={image} alt={name} />
          <p>{description}</p>
        </div>
      ) : (
        //slider main page
        <div className={styles["projects-slider"]}>
          <h3>{name}</h3>
          <img src={image} alt={name} />
          <div className={styles["button-tech"]}>
            {technologies.map((tech, index) => (
              <button key={index}>{tech}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
