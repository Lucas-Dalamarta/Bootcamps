const currencyStyle = {
  style: 'currency',
  currency: 'BRL'
}

export const formatAmount = (amount: number) => new Intl.NumberFormat('pt-BR', currencyStyle).format(amount)
  
export const formatDate = (date: Date) => new Intl.DateTimeFormat('pt-BR').format(date)