import * as S from "./styles"

import logoImg from '../../assets/logo.svg'

type HeaderProps = {
  onOpenNewTransactionModal: () => void
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="dt money" />

        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>        
      </S.Content>
    </S.Container>
  )
}