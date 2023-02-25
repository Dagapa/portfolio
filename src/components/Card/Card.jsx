import styles from './Card.module.css'
export const Card = ({ name, technologies, image, description, url }) => {
  return (
    <>
      {description ?
        //projects page
        <div className={styles['projects-page']}>
          <h3>{name}</h3>
          <img src={image} alt={name} />
          <p>{description}</p>
        </div> :
        //slider main page
        <div className={styles['projects-slider']}>
          <h3>{name}</h3>
          <img src={image} alt={name} />
          <ul>
            {technologies.map((tech, index) =>
              <li key={index}>{tech}</li>)
            }
          </ul>
        </div>}
    </>
  )
}