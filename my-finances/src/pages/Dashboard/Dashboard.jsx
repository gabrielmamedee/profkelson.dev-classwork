import { CardLink, Container } from 'react-bootstrap'
import CardInfo from '../../components/CardInfo/CardInfo'
import { useEffect, useState } from 'react'
import CardGrafic from '../../components/CardGrafic/CardGrafic'
import axios from 'axios'
import CardGraficBar from '../../components/CardGraficBar/CardGraficBar'

const Dashboard = () => {
    const url = 'http://localhost:3000'
    const [lancamentos, setLancamentos] = useState([])

    useEffect(() => {
        axios.get(`${url}/transacoes`)
        .then(response => setLancamentos(response.data))
        .catch(error => console.error('Erro na request: ', error))
    }, [])

    const receitas = lancamentos.filter(lancamento => lancamento.tipo === 'receita') 
    const despesas = lancamentos.filter(lancamento => lancamento.tipo === 'despesa')

    const somarValor = (valor) => {
        const totalValor = valor.reduce((soma, item) => {
            const valorNumerico = typeof item.valor === 'string' ? parseFloat(item.valor.replace(',', '.')) : item.valor
            return soma + valorNumerico
        }, 0)
        return totalValor
    }

    const totalReceitas = somarValor(receitas)
    const totalDespesas = somarValor(despesas)
    const saldo = totalReceitas - totalDespesas

    const totalMes = (mes, ano, lancamentos) => {
        const mesDesejado = mes // importante: 1 = Janeiro, 12 = Dezembro
        const anoDesejado = ano

        const filtrados = lancamentos.filter(lancamento => {
            const data = new Date(lancamento.data)
            return data.getMonth() + 1 === mesDesejado && data.getFullYear() === anoDesejado
        })

        return somarValor(filtrados).toFixed(2)
    }

   
    const dados = [
        { mes: 'Jan', receita: totalMes(1, 2025, receitas) , despesa: totalMes(1, 2025, despesas), saldo: (totalMes(1, 2025, receitas)-totalMes(1, 2025, despesas)).toFixed(2) },
        { mes: 'Fev', receita: totalMes(2, 2025, receitas), despesa: totalMes(2, 2025, despesas), saldo: (totalMes(2, 2025, receitas)-totalMes(2, 2025, despesas)).toFixed(2) },
        { mes: 'Mar', receita: totalMes(3, 2025, receitas), despesa: totalMes(3, 2025, despesas), saldo: (totalMes(3, 2025, receitas)-totalMes(3, 2025, despesas)).toFixed(2) },
        { mes: 'Abr', receita: totalMes(4, 2025, receitas), despesa: totalMes(4, 2025, despesas), saldo: (totalMes(4, 2025, receitas)-totalMes(4, 2025, despesas)).toFixed(2) },
        { mes: 'Mai', receita: totalMes(5, 2025, receitas), despesa: totalMes(5, 2025, despesas), saldo: (totalMes(5, 2025, receitas)-totalMes(5, 2025, despesas)).toFixed(2) },
        { mes: 'Jun', receita: totalMes(6, 2025, receitas), despesa: totalMes(6, 2025, despesas), saldo: (totalMes(6, 2025, receitas)-totalMes(6, 2025, despesas)).toFixed(2) },
        { mes: 'Jul', receita: totalMes(7, 2025, receitas), despesa: totalMes(7, 2025, despesas), saldo: (totalMes(7, 2025, receitas)-totalMes(7, 2025, despesas)).toFixed(2) },
        { mes: 'Ago', receita: totalMes(8, 2025, receitas), despesa: totalMes(8, 2025, despesas), saldo: (totalMes(8, 2025, receitas)-totalMes(8, 2025, despesas)).toFixed(2) },
        { mes: 'Set', receita: totalMes(9, 2025, receitas), despesa: totalMes(9, 2025, despesas), saldo: (totalMes(9, 2025, receitas)-totalMes(9, 2025, despesas)).toFixed(2) },
        { mes: 'Out', receita: totalMes(10, 2025, receitas), despesa: totalMes(10, 2025, despesas), saldo: (totalMes(10, 2025, receitas)-totalMes(10, 2025, despesas)).toFixed(2) },
        { mes: 'Nov', receita: totalMes(11, 2025, receitas), despesa: totalMes(11, 2025, despesas), saldo: (totalMes(11, 2025, receitas)-totalMes(11, 2025, despesas)).toFixed(2) },
        { mes: 'Dez', receita: totalMes(12, 2025, receitas), despesa: totalMes(12, 2025, despesas), saldo: (totalMes(12, 2025, receitas)-totalMes(12, 2025, despesas)).toFixed(2) },
    ];

    const despesasPorCategoria = Object.entries(
      despesas.reduce((acc, despesa) => {
        const categoria = despesa.categoria || 'Sem categoria'
        const valor = typeof despesa.valor === 'string' ? parseFloat(despesa.valor.replace(',', '.')) : despesa.valor
        acc[categoria] = (acc[categoria] || 0) + valor
        return acc
      }, {})
    )
    .map(([categoria, valor]) => ({ categoria, valor }))
    .sort((a, b) => b.valor - a.valor)

  return (
    <Container className='d-flex'>
        <div>
            <div className='d-flex justify-content-between mt-4'>
            <CardInfo legenda={'Receita'} valor={totalReceitas.toLocaleString('pt-BR')} color={'text-success'} icon={'bi bi-arrow-up text-success ms-2'}/>
            <CardInfo legenda={'Despesa'} valor={totalDespesas.toLocaleString('pt-BR') } color={'text-danger'} icon={'bi bi-arrow-down text-danger ms-2'}/>
            <CardInfo legenda={'Saldo'} valor={saldo.toLocaleString('pt-BR')} color={'text-primary'} icon={'bi bi-arrow-down-up text-primary ms-2'}/>
            </div>
            <div className='mt-4'>
                <CardGrafic dados={dados}/>
            </div>
        </div>
        <div>
            <div className='mt-4'>
                <CardGraficBar data={despesasPorCategoria}/>
            </div>
        </div>
    </Container>
  )
}

export default Dashboard