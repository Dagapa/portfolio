import videoGamesImage from './assets/video-games.png'
import TodoListImage from './assets/todoMachine.png'
export const myProjects = [
  {
    id: 1,
    name: "ToDo Machine",
    technologies: ["Javascript", "React", "Css"],
    image: TodoListImage,
    description:
      "Este proyecto es una aplicación web de lista de tareas que permite a los usuarios crear, completar y eliminar tareas. Está desarrollado en React utilizando React Hooks y LocalStorage para mantener un registro de las tareas creadas por el usuario. La aplicación es fácil de usar y tiene una interfaz sencilla e intuitiva.",
    characteristics: [
      "Los usuarios pueden agregar nuevas tareas a la lista de tareas pendientes.",
      "Las tareas pueden ser marcadas como completadas cuando se hayan terminado.",
      "Las tareas también pueden ser eliminadas de la lista de tareas.",
    ],
    url: "https://todo-list-nine-virid.vercel.app/",
  },
  {
    id: 2,
    name: "Pokesearch",
    technologies: ["Javascript", "React", "Css", "Redux" , "Express", "PostgresSQL"],
    image: "",
    description:
      "Nuestra página web de la librería de Pokemones ha sido desarrollada utilizando tecnologías modernas en el frontend y el backend. En el frontend, hemos utilizado React, una de las bibliotecas más populares de JavaScript para construir interfaces de usuario dinámicas. Además, hemos utilizado Redux para gestionar el estado de la aplicación y mantener la coherencia entre los componentes. Para mejorar la apariencia de la página, hemos utilizado CSS personalizado y Bootstrap, un framework CSS popular y de fácil uso. Esto nos ha permitido crear una interfaz de usuario atractiva y coherente en toda la página. En el backend, hemos utilizado Express, un framework de servidor de Node.js, para construir una API RESTful que permite acceder a la base de datos de los Pokemones. La base de datos utilizada es Postgres, un sistema de gestión de bases de datos relacional, que proporciona una alta eficiencia y escalabilidad. Además, hemos utilizado herramientas de desarrollo modernas, como Babel y Webpack, para automatizar el proceso de construcción y optimizar la carga de la página. En nuestra página web de la librería de Pokemones, puedes encontrar información detallada sobre los Pokemones, como su tipo, habilidades, estadísticas y movimientos, así como explorar sus evoluciones y relaciones con otros Pokemones. También puedes ver imágenes detalladas de cada uno de ellos para una experiencia visual completa. En resumen, nuestra página web de la librería de Pokemones es una aplicación moderna desarrollada utilizando tecnologías de última generación en el frontend y el backend. Con una interfaz de usuario atractiva y una API RESTful eficiente, estamos seguros de que encontrarás toda la información que necesitas sobre tus Pokemones favoritos en nuestra página.",
    characteristics: [
      "Los usuarios pueden agregar nuevas tareas a la lista de tareas pendientes.",
      "Las tareas pueden ser marcadas como completadas cuando se hayan terminado.",
      "Las tareas también pueden ser eliminadas de la lista de tareas.",
    ],
    url: "",
  },
  {
    id: 2,
    name: "VideoGames E-commerce",
    technologies: ["TypeScript", "React", "Css", "Express", "PostgresSQL"],
    image: videoGamesImage,
    description:
      "Nuestra aplicación utiliza tecnologías de última generación para ofrecerte una experiencia de usuario excepcional y un rendimiento óptimo. En la parte del frontend, hemos utilizado el popular framework de desarrollo web React, junto con TypeScript para agregar tipos a nuestro código, lo que aumenta la eficiencia de nuestro desarrollo y la calidad del código en general. Además, hemos utilizado Redux Toolkit como nuestra herramienta de gestión de estado, lo que nos permite centralizar el estado de la aplicación en un solo lugar y proporcionar una comunicación fluida entre los diferentes componentes de la aplicación. Esto hace que el mantenimiento y la escalabilidad sean más manejables. En cuanto a la implementación del backend, hemos utilizado Node.js, una plataforma de servidor basada en JavaScript que nos permite crear una API RESTful rápida y escalable. Además, hemos utilizado una base de datos NoSQL para manejar nuestros datos de manera eficiente. Para la implementación de la pasarela de pagos, hemos utilizado MercadoPago, una de las pasarelas de pago más populares y seguras en Latinoamérica. Esto nos permite ofrecer a nuestros clientes una forma confiable y fácil de realizar sus pagos en línea. En resumen, nuestra aplicación utiliza una variedad de tecnologías de última generación para ofrecerte una experiencia de usuario excepcional y un rendimiento óptimo. Desde React y TypeScript en el frontend hasta Node.js y MercadoPago en el backend, hemos elegido las mejores tecnologías para brindarte la mejor experiencia de compra en línea.",
    characteristics: [
      "Los usuarios pueden agregar nuevas tareas a la lista de tareas pendientes.",
      "Las tareas pueden ser marcadas como completadas cuando se hayan terminado.",
      "Las tareas también pueden ser eliminadas de la lista de tareas.",
    ],
    url: "https://games-store-v.netlify.app/",
  },
];
