import React from 'react'
import { useState } from 'react'

const HookMegaSena = () => {
    const [numeroSorteado, setNumerosSorteados] = useState(null)
    const [listaDeSorteados, setlistaDeSorteados] = useState([])

    function sortearNumero() {

        if(listaDeSorteados.length >= 6) {
            alert("Já temos 6 números sorteados")
            return
        }

        let sorteado = Math.floor(Math.random() * 60) + 1
        setNumerosSorteados(sorteado)
        setlistaDeSorteados([...listaDeSorteados, sorteado])
    }

  return (
    <div>
        <h1>Sorteador da Mega em React</h1>
        <p>Último número sorteado: {numeroSorteado}</p>
        <p>Lista de Sorteados: {listaDeSorteados.join(" - ")}</p>
        <button onClick={sortearNumero}>Sortear Número</button>
    </div>
  )
}

export default HookMegaSena