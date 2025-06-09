import { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import TransactionModal from './TransactionModal'
import axios from 'axios'

const Transaction = () => {
    const url = 'http://localhost:3000'
    const [lancamentos, setLancamentos] = useState([])

    useEffect(() => {
        axios.get(`${url}/transacoes`)
        .then(response => setLancamentos(response.data))
        .catch(error => console.error('Houve um erro para obter a listagem: ', error))
    }, [])

  return (
    <Container>
        <h1 className='mt-4'>Lançamentos</h1>
        <div className='d-flex flex-row-reverse mb-4'>
            <TransactionModal />
        </div>
        <Table hover>
      <thead>
        <tr>
          <th>Código</th>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Tipo</th>
          <th>Data</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {lancamentos.map(lancamento => (
            <tr key={lancamento.id}>
                <td>{lancamento.id}</td>
                <td>{lancamento.descricao}</td>
                <td>R$ {lancamento.valor}</td>
                <td>{lancamento.categoria}</td>
                <td>{lancamento.tipo}</td>
                <td>{lancamento.data}</td>
                <td><i class="bi bi-pencil-square text-primary"></i></td>
                <td><i class="bi bi-trash3 text-danger"></i></td>
            </tr>
        ))}
      </tbody>
    </Table>
    </Container>
  )
}

export default Transaction