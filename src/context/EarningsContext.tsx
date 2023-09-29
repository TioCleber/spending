import { createContext, useContext } from 'react'

interface EarningsContextProviderProps {
  children: React.ReactNode
}

export const EarningsContext = createContext(null)

export const EarningsContextProvider = ({
  children,
}: EarningsContextProviderProps) => {
  return (
    <EarningsContext.Provider value={null}>
      {children}
    </EarningsContext.Provider>
  )
}

export const useEarnings = () => {
  const context = useContext(EarningsContext)

  return context
}
