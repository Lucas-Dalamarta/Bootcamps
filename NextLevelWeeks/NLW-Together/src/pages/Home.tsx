import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

import { Button } from '../components/Button'
import { Aside } from '../components/Aside'

import { database } from '../services/firebase'
import { Logo } from '../components/Logo'

import googleIconImg from '../assets/images/google-icon.svg'

import * as S from './styled'

export const Home = () => {
  const history = useHistory()
  const { user, signInWithGoogle } = useAuth()
  const [roomCode, setRoomCode] = useState('');

  const handleCreateNewRoom = async () => {
    if (!user) await signInWithGoogle()
    history.push('/rooms/new')
  }

  const handleEnterRoom = async (event: FormEvent) => {
    event.preventDefault()

    if (roomCode.trim() === '') return

    const roomRef = await database.ref(`rooms/${roomCode}`).get()
    if (!roomRef.exists()){
      alert('Room does not exist')
      return
    }

    if (roomRef.val().closedAt) {
      alert('Room has already been closed')
      return
    }

    history.push(`/rooms/${roomCode}`)
  }

  return (
    <S.Layout>
      <Aside />
      <main>
        <S.MainContent>
          <Logo />
          <S.CreateRoom onClick={handleCreateNewRoom}>
            <img src={googleIconImg} alt='Logo do Google' />
            Crie sua sala com o Google
          </S.CreateRoom>
          <S.Separator>ou entre em uma sala</S.Separator>
          <form onSubmit={handleEnterRoom}>
            <input 
              type='text' 
              placeholder='Digite o código da sala'
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type='submit'>
              Entrar na sala
            </Button>
          </form>
        </S.MainContent>
      </main>
    </S.Layout>
  )
}