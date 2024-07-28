import styles from './Footer.module.css'
import {FaLinkedin, FaGithub, FaFigma} from 'react-icons/fa'


function Footer() {
    return (
        <div className={styles.contato}>
         <h3>Meu contato: <br/> 11 91345-0341</h3>
         <div className={styles.email}>
         <h3>Email: <br/><p>Kelbaker56@gmail.com</p></h3>
         <div>
         <ul className={styles.fa}> 
          <li>
            <a href="https://www.linkedin.com/in/kelvin-henrique-507bb9228/" target='_blank' rel='noopener noreferrer'>
              <FaLinkedin size={35} />
            </a>
          </li>
          <li>
            <a href="https://github.com/KelBaker?tab=repositories" target='_blank' rel='noopener noreferrer'>
              <FaGithub size={35} />
            </a>
          </li>
          <li>
            <a href='https://www.figma.com/files/team/1335914513655080104/all-projects?fuid=1335914511530492492' target='_blank' rel='noopener noreferrer'>
            <FaFigma size={35}/>
            </a>
          </li>
        </ul>
         </div>
        </div>
        
    </div>
    )
}

export default Footer 