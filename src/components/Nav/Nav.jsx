import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo-sin-fondo.png'
import styles from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.Nav}>
      <div className={styles.Nav_left}>
        <Link to={'/'}>
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className={styles.Nav_right}>
        <Link to={'/about'} >
          <button> Sobre mi </button>
        </Link>
        <Link to={'/projects'} >
          <button> Proyectos </button>
        </Link>
        <Link to={'/contact'} >
          <button> Contacto </button>
        </Link>
      </div>
    </nav>
  )
}

export default Nav
