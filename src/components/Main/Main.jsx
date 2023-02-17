import styles from './Main.module.css'
import javaScriptIcon from '../../assets/icons8-javascript-96.svg'
import reactIcon from '../../assets/react.svg'
import reduxIcon from '../../assets/icons8-redux.svg'

export const Main = () => {
  return (
    <>
      <main >
        <section className={styles['Main-Container']}>
          <div className={styles['Main-Img']}>
            <img src="https://picsum.photos/200" alt="" />
          </div>
          <div className={styles['Main-Description']}>
            <h2>
              ¡Hola! Soy David Gallego, un desarrollador web enfocado en el
              frontend pero también tengo conocimientos sólidos en el área de
              backend. Mi objetivo es crear interfaces de usuario atractivas y
              funcionales, siempre al tanto de las últimas tendencias y
              tecnologías. Me gusta trabajar en equipo para crear proyectos de
              alta calidad y estoy emocionado por el futuro del desarrollo web.
            </h2>
            <div className={styles['Main-Buttons']}>
              <button>Proyectos</button>
              <button>Contactame</button>
            </div>
            <div className={styles['Main-Icons']}>
                <img src={javaScriptIcon} alt="JavaScript" />
                <img src={reactIcon} alt="React" />
                <img src={reduxIcon} alt="Redux" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
