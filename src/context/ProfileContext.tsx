import { createContext, useContext, useEffect, useState } from 'react'
import { useService } from '../hooks/useService'
import { useAxios } from '../hooks/useAxios'
import { useNavigate } from 'react-router-dom'

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
  const [profile, setProfile] = useState<IProfile | undefined | null>()

  const { url, headers } = useService()
  const { get, error } = useAxios()

  const navigate = useNavigate()

  useEffect(() => {
    get({ url: `${url}v1/pvt/profile`, headers, data: setProfile })
  }, [])

  useEffect(() => {
    if (error) {
      setProfile(null)

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
