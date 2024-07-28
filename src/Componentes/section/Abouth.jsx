import React, { useContext } from 'react'
import styles from './Abouth.module.css'
import linhadeprogressoDark from '../../../../images/linhadeprogresso-dark.svg'
import linhadeprogresso from '../../../../images/linhadeprogresso-light.svg'
import ThemeContext from '../../../src/ThemeContext'

function Abouth() {
  const { darkMode } = useContext(ThemeContext)

  return (
    <div className={styles.abouth} id='AbouthMe'>
      <h1>Sobre mim</h1>
      <div className={styles.date}>
        <h3 style={{ margin: '10px 0 0 18px' }}>2021.03</h3>
        <h3 style={{ margin: '10px 0 0px' }}>2021.08</h3>
        <h3 style={{ margin: '10px 0 0 10px ' }}>2021.10</h3>
        <h3 style={{ margin: '10px 0' }}>2022.2024</h3>
      </div>
      <img
        src={darkMode ? linhadeprogresso : linhadeprogressoDark}
        alt='Linha de Progresso'
      />
      <div className={styles.information}>
        <p className={styles.margin1}>
          <strong>Operador de caixa</strong><br /><br />
          Entrei como operador de caixa no Atacadão S.A, atribuindo atividades com o PDV, raciocínio lógico, agilidade, manipulação com dinheiro e controle de entrada e saída de sangria.
        </p>
        <p className={styles.margin2}>
          <strong>Eccomerce</strong><br /><br />
          Oportunidade cobertura de férias Eccomerce, atuando na separação de pedidos, organização deles e contato com clientes para a resolução de qualquer divergência com o pedido.
        </p>
        <p className={styles.margin3}>
          <strong>Cadastro</strong><br /><br />
          Atendimento ao cliente, resolução de problemas, cadastro de clientes, pacote office,
          organização de pastas e notas fiscais, movimentação de cheques e anúncios com microfone
          ao público.
        </p>
        <p className={styles.margin4}>
          <strong>Estoquista</strong><br /><br />
          Gerenciamento do estoque virtual e físico da loja, ajustes de sistemas com influência financeira
          na loja. Evitando perdas e atingindo metas da filial.
        </p>
      </div>
    </div>
  );
}

export default Abouth
