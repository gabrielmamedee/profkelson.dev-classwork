import React from 'react'
import { Card } from 'react-bootstrap'

const CardInfo = ({ legenda, valor, color, icon }) => {
  return (
    <Card className='p-4 me-4' style={{ width: '16rem' }}>
        <Card.Title className={color}><h3>R$ {valor}</h3></Card.Title>
        <Card.Subtitle>
            <h4>{legenda}<i className={icon}></i></h4>
        </Card.Subtitle>
    </Card>
  )
}

export default CardInfo