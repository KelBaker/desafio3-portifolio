import styles from './Navbar.module.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import Nav from 'react-bootstrap/Nav'

function Navbar() {
  return (
  <div className={styles.navbar}>
    <div className={styles.navLinks}>
      <ul>
        <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
        <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
        <li><Nav.Link href='#AbouthMe'>Sobre mim</Nav.Link></li>
      </ul>
    </div>
    <div className={styles.icons}>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/kelvin-henrique-507bb9228/" target='_blank' rel='noopener noreferrer'>
            <FaLinkedin size={30} />
          </a>
        </li>
        <li>
          <a href="https://github.com/KelBaker?tab=repositories" target='_blank' rel='noopener noreferrer'>
            <FaGithub size={30} />
          </a>
        </li>
      </ul>
    </div>
  </div>
  );
}

export default Navbar
