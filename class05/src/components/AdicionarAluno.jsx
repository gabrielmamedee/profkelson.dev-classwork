import { useState } from 'react'
import {Button, Container, Form} from 'react-bootstrap'
import axios from 'axios'

const AdicionarAluno = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const urlDoBackend = 'http://localhost:3000'

    const handleSubmit = async (e) => {
        e.preventDefault()

        const dadosDoForm = {
            nome: nome,
            email: email
        }

        await axios.post(`${urlDoBackend}/alunos`, dadosDoForm)

        alert('Aluno cadastrado com sucesso!')

        setNome('')
        setEmail('')
    }

  return (
    <Container className='mt-4'>
        <h1 className='mb-4'>Cadastro de Alunos</h1>

        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='nome'>
                <Form.Label>Nome:</Form.Label>
                <Form.Control
                    type='text'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId='email'>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>

            <Button variant='primary' type='submit'>Enviar</Button>
        </Form>
    </Container>
  )
}

export default AdicionarAluno