import styles from './About.module.css'

export const About = () => {
  return (
    <section className={styles['About-Container']}>
      <div className={styles['About-Img']}>
        <img src="https://picsum.photos/200" alt="" />
      </div>
      <div className={styles['About-Info']}>
        <h3>
          Como desarrollador web, he enfocado mis habilidades en el frontend, pero
          también cuento con conocimientos sólidos en el área de backend. Me he
          especializado en la creación de interfaces de usuario atractivas y
          funcionales, utilizando las tecnologías más modernas y efectivas
          disponibles en la actualidad. Entre mis habilidades destacan el manejo de
          JavaScript, React, HTML, CSS y Redux, herramientas fundamentales en el
          desarrollo frontend para crear aplicaciones web dinámicas e interactivas.
          Además, tengo experiencia en el uso de Node y ExpressJS, tecnologías que
          me permiten trabajar en la creación de aplicaciones web en el backend,
          conectando con bases de datos, implementando lógica de negocio y diseñando
          APIs. Me apasiona trabajar en proyectos retadores y de alta calidad,
          colaborando en equipo para alcanzar los objetivos propuestos. Estoy
          siempre en constante aprendizaje y exploración de nuevas herramientas y
          tecnologías para estar a la vanguardia en el mundo del desarrollo web. Si
          buscas un desarrollador web comprometido, enfocado en la calidad y en el
          cumplimiento de los objetivos del proyecto, con habilidades en tecnologías
          como JavaScript, React, HTML, CSS, Redux, Node y ExpressJS, puedo ser tu
          mejor opción.
        </h3>
      </div>
    </section>
  );
};
