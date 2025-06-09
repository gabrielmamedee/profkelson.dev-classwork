import { Card, Table } from 'react-bootstrap'

const CardList = ({ titulo, lancamentos }) => {
  return (
    <Card className='p-4 me-4' style={{ width: '29rem'}}>
        <Card.Title ><h2>{titulo}</h2></Card.Title>
        <Card.Subtitle>
            <Table hover>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Tipo</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        
        {lancamentos.map(( lancamento => 
            <tr key={lancamento.id}>
                <td>{lancamento.descricao}</td>
                <td>R$ {lancamento.valor}</td>
                <td>{lancamento.tipo}</td>
                <td>{lancamento.data}</td>
            </tr>

        ))}
      </tbody>
    </Table>
        </Card.Subtitle>
    </Card>
  )
}

export default CardList