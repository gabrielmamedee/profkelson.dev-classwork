import React from 'react'

const Aluno = ({ nome, email, curso }) => {
  return (
    <div>
        <h5>{nome}</h5>
        <p>{email}</p>
        <p>{curso}</p>
    </div>
  )
}

export default Aluno