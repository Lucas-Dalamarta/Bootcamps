import { FormEvent, useState } from 'react'
import Modal from 'react-modal'

import { useTransactions } from '../../hooks/useTransactions'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import * as S from './styles'

type NewTransactionModalProps = {
  isOpen: boolean
  onRequestClose: () => void
}

Modal.setAppElement('#root')

export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {
  const { createTransaction } = useTransactions()
  
  const [type, setType] = useState<'deposit' | 'withdraw'>('deposit')
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmitNewTransaction = async (event: FormEvent) => {
    event.preventDefault()

    await createTransaction({
      title,
      category,
      amount,
      type
    })

    resetFieldsAndCloseModel()
  }

  const resetFieldsAndCloseModel = () => {
    setType('deposit')
    setTitle('')
    setCategory('')
    setAmount(0)

    onRequestClose()
  }

  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={resetFieldsAndCloseModel}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button 
        type='button'
        onClick={resetFieldsAndCloseModel}
        className='react-modal-close'
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <S.Container onSubmit={handleSubmitNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input 
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input 
          type="number" 
          placeholder="Valor"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}  
        />

        <S.TransactionTypeContainer>
          <S.TransactionTypeButton 
            type='button'
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </S.TransactionTypeButton>

          <S.TransactionTypeButton 
            type='button'
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </S.TransactionTypeButton>
        </S.TransactionTypeContainer>
        <input 
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>

      </S.Container>
    </Modal>
  )
} 