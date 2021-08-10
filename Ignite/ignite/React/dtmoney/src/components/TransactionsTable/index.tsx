import { useEffect, useState } from 'react'
import { api } from '../../services/api';

import * as S from './styles'

type Transactions = {
  id: number
  title: string
  amount: number
  type: 'deposit' | 'withdraw'
  category: string
  createdAt: Date
}

export const TransactionsTable = () => {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data))
  }, [])

  return (
    <S.Container>
      <table>
      <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>R${transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.Container>
  )
}