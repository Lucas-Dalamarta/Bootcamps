import { useEffect, useState } from 'react'
import Modal from 'react-modal'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import * as S from './styles'

type NewTransactionModalProps = {
  isOpen: boolean
  onRequestClose: () => void
}

Modal.setAppElement('#root')

export const NewTransactionModal = ({ isOpen, onRequestClose}: NewTransactionModalProps) => {
  const [transactionType, setTransactionType] = useState<String>('deposit')

  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button 
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <S.Container>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título"/>
        <input type="number" placeholder="Valor"/>

        <S.TransactionTypeContainer>
          <S.TransactionTypeButton 
            type='button'
            onClick={() => setTransactionType('deposit')}
            isActive={transactionType === 'deposit'}
            activeColor='green'
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </S.TransactionTypeButton>

          <S.TransactionTypeButton 
            type='button'
            onClick={() => setTransactionType('withdraw')}
            isActive={transactionType === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </S.TransactionTypeButton>
        </S.TransactionTypeContainer>
        <input placeholder="Categoria"/>

        <button type="submit">
          Cadastrar
        </button>

      </S.Container>
    </Modal>
  )
} 