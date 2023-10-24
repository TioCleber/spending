import { createContext, useCallback, useContext, useState } from 'react'
import { useService } from '../hooks/useService'
import { useApi } from '../hooks/useApi'
import { useQuery } from 'react-query'

interface SpendingContextProviderProps {
  children: React.ReactNode
}

interface SpendingContextProps {
  loading: boolean
  error: string
  success: boolean
  spending: Spending | null
  handlePagination: (toPage: number) => void
}

interface Spending {
  currentPage: number
  pages: number
  totalItems: number
  spending: SpendingFinances[] | null
}

type SpendingFinances = {
  id: string
  name: string
  establishmentsOrServices: string
  date: string
  value: number
  category: {
    id: string
    name: string
  }
}

export const SpendingContext = createContext<SpendingContextProps | null>(null)

export const SpendingContextProvider = ({
  children,
}: SpendingContextProviderProps) => {
  const [page, setPage] = useState(1)
  const { headers } = useService()

  const { api } = useApi()

  const handleGetSpending = useCallback(async () => {
    const response = await api.get<Spending>(
      `/v1/pvt/spending?fields=id,name,establishmentsOrServices,value,date,category.id,category.name&perPage=4&page=${page}`,
      { headers }
    )

    return response.data
  }, [api, headers, page])

  const { data, isLoading } = useQuery({
    queryKey: ['spending', page],
    queryFn: handleGetSpending,
  })

  const handlePagination = (toPage: number) => {
    setPage(toPage)
  }

  return (
    <SpendingContext.Provider
      value={{
        loading: isLoading,
        error: '',
        success: false,
        spending: data ?? null,
        handlePagination,
      }}
    >
      {children}
    </SpendingContext.Provider>
  )
}

export const useSpending = () => {
  const context = useContext(SpendingContext)

  return context
}
