import React from 'react'

const Mensagem = (props) => {
  
    const procesarMensagem = (tipo) => {
        if (tipo === "sucesso") {
            return <h1>Operação realizada com sucesso!</h1>
        } else if (tipo === "erro") {
            return <h2>"Ocorreu um erro na operação.</h2>
        } else if (tipo === "aviso") {
            return <h3>Atenção! Verifique os dados.</h3>
        }
    }

  return (
    <div>
        {procesarMensagem(props.tipo)}
    </div>
  )
}

export default Mensagem