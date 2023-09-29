import { createContext, useContext } from 'react'

interface SpendingContextProviderProps {
  children: React.ReactNode
}

export const SpendingContext = createContext(null)

export const SpendingContextProvider = ({
  children,
}: SpendingContextProviderProps) => {
  return (
    <SpendingContext.Provider value={null}>
      {children}
    </SpendingContext.Provider>
  )
}

export const useSpending = () => {
  const context = useContext(SpendingContext)

  return context
}
