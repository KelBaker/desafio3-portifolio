import React, { useEffect, useState } from 'react'
import ButtonA from './elements/ButtonA'
import styles from './Presentation.module.css'

function Presentation() {
    const [text, setText] = useState('')
    const fullText = 'Olá! Sou Kelvin Henrique, um desenvolvedor Front-End apaixonado por tecnologia e inovação. Estudo na Instituição DNC e estou sempre em busca de novos desafios. Tenho um interesse especial em Inteligência Artificial e adoro combinar programação com design criativo, usando ferramentas como Photoshop e Figma. Estou pronto para colaborar em projetos inovadores que unam tecnologia e criatividade. Se você procura alguém comprometido e entusiasta para fazer parte da sua equipe, estou disponível para conversarmos! Vamos transformar ideias em realidade juntos? Você pode me encontrar no LinkedIn ou GitHub. Para contatos mais rápidos pode enviar um e-mail para kelbaker56@gmail.com'
    const period = 15 

    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        }, period)

        return () => { clearInterval(ticker) }
    }, [text])

    const toType = () => {
        if (text.length < fullText.length) {
            setText(fullText.substring(0, text.length + 1))
        } else {
            clearInterval(ticker)
        }
    }

    return (
        <div className={styles.presentation} id='Presentation'>
            <div className={styles.text}>
                <h1>Olá, eu sou Kelvin Henrique!</h1>
                <div className={styles.textContainer}>
                    <p>{text}</p>
                </div>
                <ButtonA className={styles.btn} link='https://github.com/KelBaker?tab=repositories' text='Saber mais' />
            </div>
        </div>
    )
}

export default Presentation
