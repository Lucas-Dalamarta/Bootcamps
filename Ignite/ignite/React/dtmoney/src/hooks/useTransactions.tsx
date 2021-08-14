import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { api } from "../services/api";

interface Transaction {
  id: number
  title: string
  amount: number
  type: 'deposit' | 'withdraw'
  category: string
  createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: Transaction[]
  createTransaction: (transaction : TransactionInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export const TransactionsProvider = ({ children } : TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  const createTransaction = async (newTransaction : TransactionInput) => {
    const { data: { transaction }} = await api.post('transactions', {
      ...newTransaction,
      createdAt: new Date()
    })
    
    setTransactions([
      ...transactions,
      transaction
    ])
  }
  
  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      { children }
    </TransactionsContext.Provider>
  )
}

export const useTransactions = () => useContext(TransactionsContext)