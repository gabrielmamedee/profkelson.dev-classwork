import React from 'react'

const AlunoComFragment = ({ nome, email, curso, media }) => {
  
    const status = media >= 7 ? "APROVADO" : "REPROVADO"
  
    return (
    <>
        <h5>Nome: {nome}</h5>
        <p>Email: {email}</p>
        <p>curso: {curso}</p>
        <p>Media: {media}</p>
        <p>Status: {status}</p>
    </>
  )
}

export default AlunoComFragment