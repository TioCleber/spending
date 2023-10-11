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
  handlePagination: (toPage: number) => void
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
  category: {
    id: string
    name: string
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
  const [page, setPage] = useState(1)
  const { url, headers } = useService()
  const { get, loading, error, success } = useAxios()

  useEffect(() => {
    get({
      url: `${url}v1/pvt/recurring-expenses?fields=id,name,installments,missingInstallments,establishmentsOrServices,value,payday,date,category.id,category.name&perPage=4&page=${page}`,
      headers,
      data: setRecurringExpenses,
    })
  }, [])

  const handlePagination = (toPage: number) => {
    setPage(toPage)
  }

  return (
    <RecurringExpensesContext.Provider
      value={{
        expenses: recurringExpenses,
        error,
        loading,
        success,
        handlePagination,
      }}
    >
      {children}
    </RecurringExpensesContext.Provider>
  )
}

export const useRecurringExpenses = () => {
  const context = useContext(RecurringExpensesContext)

  return context
}
