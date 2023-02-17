import styles from './Main.module.css'

export const Main = () => {
  return (
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
        </div>
      </section>
    </main>
  );
};
