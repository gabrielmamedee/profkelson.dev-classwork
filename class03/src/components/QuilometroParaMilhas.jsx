import React from 'react'

const QuilometroParaMilhas = (props) => {
  const milha = props.km * 0.621371; 
  return (
    <div>
        <h1>{props.km} Km é o mesmo que {milha} milhas</h1>
    </div>
  )
}

export default QuilometroParaMilhas