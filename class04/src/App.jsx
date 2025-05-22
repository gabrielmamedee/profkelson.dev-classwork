import Campanha from './components/Campanha'
import EstacaoAno from './components/EstacaoAno'
import Exercicio1 from './components/Exercicio1'
import Exercicio2 from './components/Exercicio2'
import Exercicio3 from './components/Exercicio3'


const App = () => {
  return (
    <div>
      <Exercicio1 />
      <Exercicio2 />
      <Exercicio3 />
      <Campanha mes={"Setembro"}/>
      <EstacaoAno estacao={"Verão"} />
    </div>
  )
}

export default App