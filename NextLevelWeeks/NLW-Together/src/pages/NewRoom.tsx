import { FormEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'
import { database } from '../services/firebase'

import { Button } from '../components/Button'
import { Aside } from '../components/Aside'
import { Logo } from '../components/Logo'

import * as S from './styled'

export const NewRoom = () => {
  const history = useHistory()
  
  const { user } = useAuth()
  const [newRoom, setNewRoom] = useState('');

  const handleCreateNewRoom = async (event: FormEvent) => {
    event.preventDefault()

    if (newRoom.trim() === '') return

    const roomRef = database.ref('rooms')
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    history.push(`/rooms/${firebaseRoom.key}`)
  }

  return (
    <S.Layout>
      <Aside />
      <main>
        <S.MainContent>
          <Logo />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateNewRoom}>
            <input 
              type='text' 
              placeholder='Digite o nome da sala'
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type='submit'>
              Criar sala
            </Button>
          </form>
          <p>Quer entrar em uma sala existente ? <Link to='/'>clique aqui</Link> </p>
        </S.MainContent>
      </main>
    </S.Layout>
  )
}