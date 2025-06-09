import { useState } from 'react'
import { Card } from 'react-bootstrap'
import {
  BarChart, Bar, XAxis, YAxis,
  Tooltip, ResponsiveContainer, Cell,
} from 'recharts'

const CardGraficBar = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(null)

    const handleClick = (data, index) => {
    setActiveIndex(index)
  }

  return (
    <Card className='p-4' style={{width: '29rem', height: '42.5rem'}}>
        <h4>Despesas por Categoria</h4>
        <ResponsiveContainer width="100%" height={600}>
            <BarChart
                data={data}
                layout="vertical"       // <== Aqui é o que torna as barras verticais
                margin={{ top: 20, right: 20, left: 40, bottom: 20 }}
            >
                <XAxis type="number" />  {/* No layout vertical, X é número */}
                <YAxis dataKey="categoria" type="category" /> {/* Y é categoria */}
                <Tooltip />
                
                <Bar dataKey="valor" fill="#0C6DFD" onClick={handleClick} barSize={25}>
                  {data.map((entry, index) => (
                    <Cell
                      cursor="pointer"
                      fill={index === activeIndex ? '#DC3444' : '#0C6DFD'}
                      key={`cell-${index}`}
                    />
                  ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    </Card>
  )
}

export default CardGraficBar