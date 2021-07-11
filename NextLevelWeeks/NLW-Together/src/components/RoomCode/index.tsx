import copyImg from '../../assets/images/copy.svg'

import * as S from './styled'

type RoomCodeProps = {
  roomId: string
}

export const RoomCode = ({roomId}: RoomCodeProps) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(roomId)
  }
  
  return (
    <S.RoomCode onClick={copyToClipboard}>
      <div>
        <img src={copyImg} alt='Icone representado a ação de copiar' />
      </div>
      <span>Sala {roomId}</span>
    </S.RoomCode>
  )
}