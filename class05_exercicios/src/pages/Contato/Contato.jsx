import { useState } from 'react'
import axios from 'axios'
import { Form } from 'react-bootstrap'
import Banner from '../../components/Banner/Banner'
import ButtonDefault from '../../components/ButtonDefault/ButtonDefault'
import AlertSuccess from '../../components/AlertSuccess/AlertSuccess'
import styles from './Contato.module.css'

const Contato = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  const [showAlert, setShowAlert] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:3000/contatos', {
        nome: nome,
        email: email,
        mensagem: mensagem,
      })
      console.log(response.data)
      setShowAlert(true)

      // Opcional: esconder o alerta depois de alguns segundos
      setTimeout(() => {
        setShowAlert(false);
      }, 4000); // 4 segundos

    } catch (error) {
      setShowAlert(false)
      console.error('Ocorreu um erro!', error)
    }

    setNome('')
    setEmail('')
    setMensagem('')
  }

  return (
    <>
      {showAlert && <AlertSuccess mensagem={'Cadastro realizado com Sucesso!!'}/>}
      <Banner texto={`Precisa de uma solução? Estamos aqui para ajudar!`}/>
      <br />
      <div className='row mt-4 mb-4'>
        <div className={`col ${styles.text} d-flex justify-content-center align-items-center`}>
          <span className='h2'>Estamos aqui para responder suas perguntas e conectá-lo com o que você precisa!</span>
        </div>
        <div className={`col ${styles.formulario}`}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-4' controlId='nome'>
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type='text' 
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder='Digite seu nome'
                required
              />
            </Form.Group>

            <Form.Group className='mb-4' controlId='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='exemplo@gmail.com' 
                required
              />
            </Form.Group>

            <Form.Group className='mb-4' controlId='texto'>
              <Form.Label>Deixe sua mensagem</Form.Label>
              <Form.Control
                as="textarea"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                rows={3}
              /> 
            </Form.Group>

            <ButtonDefault type={'submit'} texto={'Enviar'} />
          </Form>
        </div>
      </div>
    </>
  )
}

export default Contato