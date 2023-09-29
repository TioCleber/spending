import { createContext, useContext } from 'react'

interface ProfileContextProviderProps {
  children: React.ReactNode
}

export const ProfileContext = createContext(null)

export const ProfileContextProvider = ({
  children,
}: ProfileContextProviderProps) => {
  return (
    <ProfileContext.Provider value={null}>{children}</ProfileContext.Provider>
  )
}

export const useProfile = () => {
  const context = useContext(ProfileContext)

  return context
}
