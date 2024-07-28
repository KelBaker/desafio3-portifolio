import styles from './Projects.module.css'
import Card from './elements/Card'
import conapi from '../../../../images/conapi.png'
import landingpage from '../../../../images/landingpage.png'
import meuportifolio from '../../../../images/meuportifolio.png'
import portifolio from '../../../../images/portifolio.png'
import countdown from '../../../../images/countdown.png'

function Projects() {
    return (
        <div className={styles.projects} id='Projects'>
            <h1>Projetos</h1>
            <Card
                img={conapi}
                title='Consumo API - Previsão do Tempo'
                description='Desenvolvimento de uma página de previsão de tempo consumindo API - OpenMeteo e Viacep.'
                repo='https://github.com/KelBaker/Desafio-2-resolucao'
            />
             <Card
                img={landingpage}
                title='Landing Page - DNC'
                description='Desenvolvimento de uma Landing page para a escola de tecnologia DNC.'
                repo='https://github.com/KelBaker/Projeto-Landing-Page?tab=readme-ov-file'
            />
            <Card
                img={meuportifolio}
                title='Portifolio Respansivo'
                description='Desenvolvimento do meu portifolio como programador Front-End, incluindo respansividade para dispositivos móveis.'
                repo='https://github.com/KelBaker/portifolio'
            />
            <Card
                img={countdown}
                title='Countdown - CCXP'
                description='Desenvolvimento de uma divulgação do grande evento CCXP com um countdown elaborado com JavaScript.'
                repo='https://github.com/KelBaker/Countdown'
            />
        </div>
    );
}

export default Projects
