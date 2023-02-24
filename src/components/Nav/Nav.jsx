import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo-sin-fondo.png'
import styles from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.Nav}>
        <Link to={'/about'} >
          <button> Sobre mi </button>
        </Link>
        <Link to={'/projects'} >
          <button> Proyectos </button>
        </Link>
        <Link to={'/'}>
          <img src={Logo} alt="Logo" />
        </Link>
        <Link to={'/contact'} >
          <button> Contacto </button>
        </Link>
        <Link to={'/contact'} >
          <button> Cv </button>
        </Link>
    </nav>
  )
}

export default Nav
