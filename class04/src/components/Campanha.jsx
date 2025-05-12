import React from 'react'
import styles from './Campanha.module.css'

const Campanha = ({ mes }) => {

    function defineMensagem(mesDaCampanha) {
        if (mesDaCampanha === "Setembro") {
            return "Prevenção ao suicídio"
        } else if (mesDaCampanha === "Outubro") {
            return "Conscientização sobre o câncer de mama"
        } else if (mesDaCampanha === "Novembro") {
            return "Prevença2o e combate ao câncer de prostata"
        }
    }

    function defineCorDeFundo(mesDaCampanha) {
        if (mesDaCampanha === "Setembro") {
            return styles.setembro
        } else if (mesDaCampanha === "Outubro") {
            return styles.outubro
        } else if (mesDaCampanha === "Novembro") {
            return styles.novembro
        }
    }

  return (
    <div className={defineCorDeFundo(mes)}>
        {defineMensagem(mes)}
    </div>
  )
}

export default Campanha