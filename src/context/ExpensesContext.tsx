import { createContext, useContext } from 'react'

interface ExpensesContextProviderProps {
  children: React.ReactNode
}

export const ExpensesContext = createContext(null)

export const ExpensesContextProvider = ({
  children,
}: ExpensesContextProviderProps) => {
  return (
    <ExpensesContext.Provider value={null}>
      {children}
    </ExpensesContext.Provider>
  )
}

export const useExpenses = () => {
  const context = useContext(ExpensesContext)

  return context
}
