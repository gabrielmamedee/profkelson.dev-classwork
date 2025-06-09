import { useEffect, useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import AlertSuccess from '../../components/AlertSuccess/AlertSuccess'

const TransactionForm = () => {
    const url = 'http://localhost:3000'
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        axios.get(`${url}/categorias`)
        .then(response => setCategorias(response.data))
        .catch(error => console.error('Erro na request de categorias: ', error))
    }, [])

    const [descricao, setDescricao] = useState('')
    const [valor, setValor] = useState('')
    const [categoria, setCategoria] = useState('')
    const [tipo, setTipo] = useState('despesa')
    const [data, setData] = useState(new Date().toISOString().split('T')[0])

    const [mostarAviso, setMostarAviso] = useState(false)



    const handleSubmit = async (e) => {
        e.preventDefault()

        if (valor < 0) {
            return alert(`O numero não pode ser negativo!`)
        }

        const dadosForm = {
            descricao: descricao,
            valor: valor,
            tipo: tipo,
            data: data,
        }


        try {
            const response = await axios.post('http://localhost:3000/transacoes', dadosForm)
            console.log(response.data)
            setMostarAviso(true)

            // Opcional: esconder o alerta depois de alguns segundos
            setTimeout(() => {
                setMostarAviso(false);
            }, 4000); // 4 segundos

        } catch (error) {
            setMostarAviso(false)
            console.error('Ocorreu um erro!', error)
        }

        setDescricao('')
        setValor('')

    }

  return (
    <Container className='mt-4'>
        {mostarAviso && <AlertSuccess mensagem={'Lancamento salvo com sucesso!'} />}
        <Form className='mt-4' onSubmit={handleSubmit}>
            <Form.Group controlId='formDescricao' className='mb-4'>
                <Form.Label>Descrição</Form.Label>
                <Form.Control
                    type='text'
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId='formValor' className='mb-4'>
                <Form.Label>Valor</Form.Label>
                <Form.Control 
                    type='number'
                    step='0.01'
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId='formCategoria' className='mb-4'>
                <Form.Label>Categoria</Form.Label>
                <Form.Select aria-label="Selecione o tipo de lançamento" value={categoria} onChange={(e) => setCategoria(e.target.value)} required>
                    {categorias.map(cat => (
                        <option key={cat.id} value={cat.categoria}>{cat.categoria}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Form.Group controlId='formTipo' className='mb-4'>
                <Form.Label>Tipo</Form.Label>
                <Form.Select aria-label="Selecione o tipo de lançamento" value={tipo} onChange={(e) => setTipo(e.target.value)} required>
                    <option value="receita">Receita</option>
                    <option value="despesa">Despesa</option>
                </Form.Select>
            </Form.Group>
            <Form.Group controlId='formData' className='mb-4'>
                <Form.Label>Data</Form.Label>
                <Form.Control 
                    type='date'
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                />
            </Form.Group>
            <div className='d-flex justify-content-center'>
                <Button variant='primary' type='submit' className='mt-4'>Salvar</Button>
            </div>
        </Form>
    </Container>
  )
}

export default TransactionForm