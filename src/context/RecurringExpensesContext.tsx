import { createContext, useContext } from 'react'

interface RecurringExpensesContextProviderProps {
  children: React.ReactNode
}

export const RecurringExpensesContext = createContext(null)

export const RecurringExpensesContextProvider = ({
  children,
}: RecurringExpensesContextProviderProps) => {
  return (
    <RecurringExpensesContext.Provider value={null}>
      {children}
    </RecurringExpensesContext.Provider>
  )
}

export const useRecurringExpenses = () => {
  const context = useContext(RecurringExpensesContext)

  return context
}
