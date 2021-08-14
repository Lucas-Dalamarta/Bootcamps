import { useTransactions } from '../../hooks/useTransactions'

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { formatAmount } from '../../utils'

import * as S from './styles'

export const Summary = () => {
  const { transactions } = useTransactions()

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit') {
      acc.income += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.outcome += transaction.amount
      acc.total -= transaction.amount
    }
    return acc
  }, { 
    income: 0,
    outcome: 0,
    total: 0
  })

  return (
    <S.Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>

        <strong>{formatAmount(summary.income)}</strong>
      </div>
      
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Entradas" />
        </header>

        <strong>-{formatAmount(summary.outcome)}</strong>
      </div>
      
      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Entradas" />
        </header>

        <strong>{formatAmount(summary.total)}</strong>
      </div>
      
    </S.Container>
    )
}