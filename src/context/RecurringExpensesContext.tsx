import { createContext, useContext, useEffect, useState } from 'react'
import { useService } from '../hooks/useService'
import { useAxios } from '../hooks/useAxios'

interface RecurringExpensesContextProviderProps {
  children: React.ReactNode
}

interface RecurringExpensesContextProps {
  loading: boolean
  error: string
  success: boolean
  expenses: Expenses | null
}

interface Expenses {
  currentPage: number
  pages: number
  totalItems: number
  recurringExpenses: ExpensesFinances[]
}

type ExpensesFinances = {
  id: string
  name: string
  installments?: number
  missingInstallments?: number
  payday?: string
  establishmentsOrServices: string
  value: number
  date: string
  user: {
    email: string
    firstName: string
    lastName: string
  }
}

export const RecurringExpensesContext =
  createContext<RecurringExpensesContextProps | null>(null)

export const RecurringExpensesContextProvider = ({
  children,
}: RecurringExpensesContextProviderProps) => {
  const [recurringExpenses, setRecurringExpenses] = useState<Expenses | null>(
    null
  )
  const { url, headers } = useService()
  const { get, loading, error, success } = useAxios()

  useEffect(() => {
    get({
      url: `${url}v1/pvt/recurring-expenses`,
      headers,
      data: setRecurringExpenses,
    })
  }, [])

  return (
    <RecurringExpensesContext.Provider
      value={{ expenses: recurringExpenses, error, loading, success }}
    >
      {children}
    </RecurringExpensesContext.Provider>
  )
}

export const useRecurringExpenses = () => {
  const context = useContext(RecurringExpensesContext)

  return context
}
