import { createContext, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetProfile } from '../hooks/useGetProfile'

import { IProfile } from '../typings/profile'

interface ProfileContextProviderProps {
  children: React.ReactNode
}

interface ProfileContextProps {
  profile: IProfile | undefined | null
  isAuthenticated: boolean
}

const INITIAL_VALUE = {
  profile: null,
  isAuthenticated: false,
}

export const ProfileContext = createContext<ProfileContextProps>(INITIAL_VALUE)

export const ProfileContextProvider = ({
  children,
}: ProfileContextProviderProps) => {
  const { profile, error } = useGetProfile()

  const navigate = useNavigate()

  useEffect(() => {
    if (error) {
      navigate('/')
    }
  }, [error])

  return (
    <ProfileContext.Provider
      value={{ profile, isAuthenticated: profile && !error ? true : false }}
    >
      {children}
    </ProfileContext.Provider>
  )
}

export const useProfile = () => {
  const context = useContext(ProfileContext)

  return context
}
