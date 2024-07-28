import styles from '../elements/Card.module.css'
import ButtonB from './ButtonB'


function Card({ img, title, description, repo }) {
    return (
        <div className={styles.card}>
            <img src={img} alt={title}/>
            <section>
                <h3>{title}</h3>
                <p>{description}</p>
                <ButtonB text='Clique aqui' link={repo}/>
            </section>
        </div>
    );
}

export default Card
