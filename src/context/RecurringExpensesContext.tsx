import { createContext, useCallback, useContext, useState } from 'react'
import { useService } from '../hooks/useService'
import { useQuery } from 'react-query'
import { useApi } from '../hooks/useApi'

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
  const [page, setPage] = useState(1)

  const { headers } = useService()
  const { api } = useApi()

  const handleGetRecurringExpenses = useCallback(async () => {
    const response = await api.get<Expenses>(
      `v1/pvt/recurring-expenses?fields=id,name,installments,missingInstallments,establishmentsOrServices,value,payday,date,category.id,category.name&perPage=4&page=${page}`,
      { headers }
    )

    return response.data
  }, [page])

  const { data, isLoading } = useQuery({
    queryKey: ['recurring-expenses'],
    queryFn: handleGetRecurringExpenses,
  })

  const handlePagination = (toPage: number) => {
    setPage(toPage)
  }

  return (
    <RecurringExpensesContext.Provider
      value={{
        expenses: data ?? null,
        error: '',
        loading: isLoading,
        success: false,
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
