import { createContext, ReactNode, useState, useEffect } from 'react'
import { firebase, auth } from '../services/firebase'

type User = {
  id: string
  name: string
  avatar: string
}

type AuthContextProps = {
  user: User | undefined
  signInWithGoogle: () => Promise<void>
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthContextProvider = ({children}: AuthContextProviderProps) => {
  const [user, setUser] = useState<User>()

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const result = await auth.signInWithPopup(provider)
    
    if (result.user) {
      const { displayName, photoURL , uid } = result.user

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account')
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL , uid } = user
  
        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account')
        }
  
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    })
    
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  )
}