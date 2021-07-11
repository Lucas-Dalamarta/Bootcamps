import { ReactNode } from 'react'

import * as S from './styled'

type QuestionProps = {
  children?: ReactNode
  content: string
  author: {
    name: string
    avatar: string
  }
  isAnswered: boolean
  isHighlighted: boolean
}

export const Question = ({ children, content, author, isAnswered, isHighlighted}: QuestionProps) => {
  return (
    <S.Question 
      isAnswered={isAnswered} 
      isHighlighted={isHighlighted}
    >
      <p>{content}</p>
      <footer>
        <div className='user-info'>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </S.Question>
  )
} 