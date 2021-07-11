import { useHistory, useParams } from 'react-router-dom'

import { database } from '../services/firebase'

import { useRoom } from '../hooks/useRoom'

import { Logo } from '../components/Logo'
import { Button } from '../components/Button'
import { RoomCode } from '../components/RoomCode'
import { Question } from '../components/Question'

import deleteImg from '../assets/images/delete.svg'
import checkImg from '../assets/images/check.svg'
import answerImg from '../assets/images/answer.svg'

import * as S from './styled'

type RoomParams = {
  id: string
}

export const AdminRoom = () => {
  const history = useHistory()
  const { id } = useParams<RoomParams>()
  const { questions, title, isLoading } = useRoom(id)

  const handleEndRoom = async () => {
    if (window.confirm('Tem certeza que você deseja encerrar esta sala ?')) {
      await database.ref(`rooms/${id}`).update({
        closedAt: new Date()
      })
    }

    history.push('/')
  }

  const handleDeleteQuestion = async (questionId: string) => {
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta ?')) {
      await database.ref(`rooms/${id}/questions/${questionId}`).remove() 
    }
  }

  const handleCheckQuestionAsAnswered = async (questionId: string) => {
    await database.ref(`rooms/${id}/questions/${questionId}`).update({
      isAnswered: true
    }) 
  }

  const handleHighlightQuestion = async (questionId: string) => {
    await database.ref(`rooms/${id}/questions/${questionId}`).update({
      isHighlighted: true
    }) 
  }

  return (
    <S.PageRoom>
      <header>
        <div className='content'>
          <Logo />
          <div>
            <RoomCode roomId={id}/>
            <Button 
              isOutlined
              onClick={handleEndRoom}
            >
              Encerrar sala
            </Button>
          </div>
        </div>
      </header>

      <main>
        <div className='room-title'>
          <h1>Sala {title}</h1>
          { questions.length > 0 && <span>{questions.length} {questions.length > 1 ? 'perguntas': 'pergunta'}</span>}
          
        </div>

        { isLoading 
          ? <p className='loading-questions'>Carregando perguntas, aguarde...</p> 
          : <div className='question-list'>
              { questions.map(question => 
                  <Question
                  key={question.id}
                  content={question.content} 
                  author={question.author}
                  isAnswered={question.isAnswered}
                  isHighlighted={question.isHighlighted}
                  >   
                    {!question.isAnswered && (
                      <>
                        <button
                          type='button'
                          onClick={() => handleCheckQuestionAsAnswered(question.id)}
                        >
                          <img src={checkImg} alt="Marcar pergunta como respondida" />
                        </button>
                        <button
                          type='button'
                          onClick={() => handleHighlightQuestion(question.id)}
                        >
                          <img src={answerImg} alt="Destacar pergunta" />
                        </button>
                      </>
                      )
                    }
                    <button
                      type='button'
                      onClick={() => handleDeleteQuestion(question.id)}
                    >
                      <img src={deleteImg} alt="Remover pergunta" />
                    </button>
                  </Question>
                ) 
              }
            </div>
        }
      </main>
    </S.PageRoom>
  )
}