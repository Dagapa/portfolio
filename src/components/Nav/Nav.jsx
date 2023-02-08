import Logo from '../../assets/Logo-sin-fondo.png'
import styles from './Nav.module.css'

export const Nav = (props) => {
  return (
    <nav className={styles.Nav}>
      <div className={styles.Nav_left}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={styles.Nav_right}>
        <a href="">
          <button> Proyects </button>
        </a>
        <a href={props.file} download>
          <button>Cv</button>
        </a>
        <a href="">
          <button> Contact </button>
        </a>
      </div>
    </nav>
  )
}

