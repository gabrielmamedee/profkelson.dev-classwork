import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'

const VisualizarArtigo = () => {

    const { id } = useParams()
    const [artigo, setArtigo] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:3000/artigos/${id}`)
        .then(response => setArtigo(response.data))
        .catch(error => console.error("Erro ao carregar o artigo: ", error))
    }, [id])

  return (
    <Card className='p-4'>
        <h2>{artigo.titulo}</h2>
        <h4>{artigo.resumo}</h4>
        <p>{artigo.conteudo}</p>
    </Card>
  )
}

export default VisualizarArtigo