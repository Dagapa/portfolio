import { myProjects } from "../../../myProjects";
import styles from "./DetailGames.module.css";

export const DetailGames = () => {
  const projectSlice = myProjects.slice(2, 3);

  return (
    <div className={styles["detail-container"]}>
      {projectSlice.map(({ name, description, image, technologies, url }, index) => (
        <div key={index} className={styles['detail-item']}>
          <h3>{name}</h3>
          <img src={image} alt={name} />
          <p>{description}</p>
          {technologies.map((item, i) => (
            <button key={i}>{item}</button>
          ))}
          <a href={url}>Visita la pagina</a>
        </div>
      ))}
    </div>
  );
};
