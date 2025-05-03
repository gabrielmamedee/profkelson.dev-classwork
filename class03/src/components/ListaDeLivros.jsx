import React from 'react'
import Livro from './Livro'

const ListaDeLivros = () => {
  
  const livros = [
    {
      titulo: "O Hobbit", 
      autor: "J.R.R Tolkien"
    },
    {
      titulo: "Dom Casmurro",
      autor: "Machado de Assis"
    },
    {
      titulo: "1984", 
      autor: "George Orwell"
    }
  ]

  return (
    <div>
      <h3>Lista de Livros</h3>
      {
        livros.map((livro, index) => (
            <Livro key={index} titulo={livro.titulo} autor={livro.autor}/>
        ))
      }
    </div>
  )
}

export default ListaDeLivros