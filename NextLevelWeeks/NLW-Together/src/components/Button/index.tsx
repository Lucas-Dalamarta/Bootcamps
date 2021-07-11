import { ButtonHTMLAttributes } from 'react'

import * as S from './styled'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
}

export const Button = (props: ButtonProps) => {
  return (
    <S.Button
      {...props}
    />
  )
}