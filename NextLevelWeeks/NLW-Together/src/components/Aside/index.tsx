import illustrationImg from '../../assets/images/illustration.svg'

import * as S from './styled'

export const Aside = () => {
  return (
    <S.Aside>
      <img src={illustrationImg} alt='Ilustração simbolizando perguntas e respostas' />
      <strong>Crie salas de Q&amp;A ao-vivo</strong>
      <p>Tire duvidas da sua audiência em tempo-real</p>
    </S.Aside>
  )
}