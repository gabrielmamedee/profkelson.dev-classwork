import React from 'react'
import { useState } from 'react'

const TodoList = () => {

    const [tarefas, setTarefas] = useState([])
    const [novaTarefa, setNovaTarefa] = useState("")

    function adicionarTarefa() {
        setTarefas([...tarefas, novaTarefa])
        setNovaTarefa("")
    }

  return (
    <div>
        <h1>Lista de Tarefas</h1>
        <input
            type='text'
            placeholder='Digite uma nova tarefa...'
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
        <div>
            {
                tarefas.map((tarefa, index) => (
                    <p key={index}>{tarefa}</p>
                ))
            }
        </div>
    </div>
  )
}

export default TodoList