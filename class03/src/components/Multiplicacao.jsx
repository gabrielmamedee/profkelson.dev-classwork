import React from 'react'

const Multiplicacao = (props) => {
  return (
    <div>
        <h1>O resultado de {props.num1} multiplicado por {props.num2} é igual a: {props.num1 * props.num2}</h1>
    </div>
  )
}

export default Multiplicacao