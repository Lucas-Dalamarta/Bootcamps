import { useTransactions } from '../../hooks/useTransactions';

import { formatAmount, formatDate } from '../../utils';

import * as S from './styles'

export const TransactionsTable = () => {
  const { transactions } = useTransactions()

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
              <td className={transaction.type}>
                {formatAmount(transaction.amount)}
                </td>
              <td>{transaction.category}</td>
              <td>{formatDate(new Date(transaction.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.Container>
  )
}