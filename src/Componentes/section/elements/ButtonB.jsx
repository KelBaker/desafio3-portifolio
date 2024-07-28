import styles from '../elements/ButtonB.module.css'

function ButtonB ({text,link}) {
    return (
        <div>
            <a href={link} target='_blank' rel='noopener noreferrer'>
                <button className={styles.btnb}>{text}</button>   
            </a>
        </div>    
        )
}

export default ButtonB 