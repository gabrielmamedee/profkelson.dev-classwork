import style from './EstacaoAno.module.css'

const EstacaoAno = ({ estacao }) => {

    const defineMensagem = (estacaoDoAno) => {
        if (estacaoDoAno === "Verão") {
            return "Tempo de praia e sol!"
        } else if (estacaoDoAno === "Outono") {
            return "Folhas caindo, outono chegando!"
        } else if (estacaoDoAno === "Inverno") {
            return "Época de frio e aconchego!"
        } else if (estacaoDoAno === "Primavera") {
            return "Flores e cores, é primavera!"
        }
    }

    const defineCorDeFundo = (estacaoDoAno) => {
        if (estacaoDoAno === "Verão") {
            return style.verao
        } else if (estacaoDoAno === "Outono") {
            return style.outono
        } else if (estacaoDoAno === "Inverno") {
            return style.inverno
        } else if (estacaoDoAno === "Primavera") {
            return style.primavera
        }
    }

  return (
    <div className={defineCorDeFundo(estacao)}>
        {defineMensagem(estacao)}
    </div>
  )
}

export default EstacaoAno