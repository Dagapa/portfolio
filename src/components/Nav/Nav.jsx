import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo-sin-fondo.png'
import styles from './Nav.module.css'
import CvPdf from '../../assets/Cv-David-Gallego.pdf'

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
        <a href={CvPdf} download>
          <button> Cv </button>
        </a>
    </nav>
  )
}

export default Nav