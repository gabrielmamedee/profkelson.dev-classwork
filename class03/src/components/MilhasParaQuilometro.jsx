import React from 'react'

const MilhasParaQuilometro = (props) => {
  const quilometros = props.milhas * 1.60934   
  return (
    <div>
        <h1>{props.milhas} milhas é o mesmo que {quilometros} km</h1>
    </div>
  )
}

export default MilhasParaQuilometro