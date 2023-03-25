import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import javaScriptIcon from '../../assets/icons8-javascript-96.svg'
import reactIcon from '../../assets/react.svg'
import reduxIcon from '../../assets/icons8-redux.svg'
import cssIcon from '../../assets/icons8-css3.svg'
import nodeIcon from '../../assets/icons8-nodejs.svg'
import postgresIcon from '../../assets/icons8-postgresql.svg'
import typeScriptIcon from "../../assets/icons8-typescript.svg"
import { Carousel } from '../Carousel/Carousel'

export const Home = () => {
  return (
    <>
      <main >
        <section className={styles['Main-Container']}>
          <div className={styles['Main-Img']}>
            <img src="https://picsum.photos/200" alt="" />
          </div>
          <div className={styles['Main-Description']}>
            <h1>WEB DEVELOPER JR</h1>
            <h2>
              ¡Hola! Soy David Gallego, un desarrollador web enfocado en el
              frontend pero también tengo conocimientos sólidos en el área de
              backend. Mi objetivo es crear interfaces de usuario atractivas y
              funcionales, siempre al tanto de las últimas tendencias y
              tecnologías. Me gusta trabajar en equipo para crear proyectos de
              alta calidad y estoy emocionado por el futuro del desarrollo web.
            </h2>
            <div className={styles['Main-Icons']}>
              <img src={javaScriptIcon} alt="JavaScript" />
              <img src={typeScriptIcon} alt="Type" />
              <img src={reactIcon} alt="React" />
              <img src={reduxIcon} alt="Redux" />
              <img src={cssIcon} alt="Css" />
              <img src={nodeIcon} alt="Node" />
              <img src={postgresIcon} alt="Postgres" />
            </div>
          </div>
        </section>
        <section className={styles['projects-container']}>
          <h3>Proyectos</h3>
          <div className={styles['projects-container--carousel']}>
            <Carousel />
          </div>
        </section>
        <section className={styles['contact-container']}>
          <Link to={'/contact'}>
          <button className={styles['contact-button']}> 
            Contactame
          </button>
          </Link>
        </section>
      </main>
    </>
  );
};
