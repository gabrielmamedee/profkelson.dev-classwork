import { Card } from 'react-bootstrap'
import {
  LineChart, Line, XAxis, YAxis,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const CardGrafic = ({ dados }) => {
    
  return (
    <Card className='p-4' style={{width: '51rem'}}>
        <div style={{ width: '100%', height: 474 }}>
      <ResponsiveContainer>
        <LineChart data={dados} key={JSON.stringify(dados)}>
          <XAxis dataKey="mes" />
          <YAxis domain={['auto', 'dataMax + 1000']}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="receita" stroke="#198753" strokeWidth={2} isAnimationActive={true} />
          <Line type="monotone" dataKey="despesa" stroke="#DC3444" strokeWidth={2} isAnimationActive={true} />
          <Line type="monotone" dataKey="saldo" stroke="#0C6DFD" strokeWidth={2} isAnimationActive={true}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
    </Card>
  )
}

export default CardGrafic