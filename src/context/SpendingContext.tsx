import { createContext, useContext, useEffect, useState } from 'react'
import { useService } from '../hooks/useService'
import { useAxios } from '../hooks/useAxios'

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
  const [spending, setSpending] = useState<Spending | null>(null)
  const [page, setPage] = useState(1)
  const { url, headers } = useService()
  const { get, loading, error, success } = useAxios()

  useEffect(() => {
    get({
      url: `${url}v1/pvt/spending?fields=id,name,establishmentsOrServices,value,date,category.id,category.name&perPage=4&page=${page}`,
      headers,
      data: setSpending,
    })
  }, [page])

  const handlePagination = (toPage: number) => {
    setPage(toPage)
  }

  return (
    <SpendingContext.Provider
      value={{ loading, error, success, spending, handlePagination }}
    >
      {children}
    </SpendingContext.Provider>
  )
}

export const useSpending = () => {
  const context = useContext(SpendingContext)

  return context
}
