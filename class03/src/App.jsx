import React from 'react'
import AlunoComFragment from './components/AlunoComFragment'

const App = () => {

  const alunos = [
    {nome: "Gabriel" , email: "mamede.dev@gmail.com", curso: "fullstack", media: 9.00},
    {nome: "Bento" , email: "bento@gmail.com", curso: "fullstack", media: 5.00},
    {nome: "Alicia" , email: "alicia@gmail.com", curso: "fullstack", media: 7.00}
  ]

  return (
    <>
      {
        alunos.map((aluno, index) => (
          <span key={index}><AlunoComFragment nome={aluno.nome} email={aluno.email} curso={aluno.curso} media={aluno.media}/></span>
        ))
      }
    </>
  )
}

export default App