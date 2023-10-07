import { createContext, useContext, useEffect, useState } from 'react'
import { useService } from '../hooks/useService'
import { useAxios } from '../hooks/useAxios'

interface SpendingContextProviderProps {
  children: React.ReactNode
}

interface Spending {
  currentPage: number
  pages: number
  totalItems: number
  spending: SpendingFinances[]
}

type SpendingFinances = {
  id: string
  name: string
  categoriesId: string
  establishmentsOrServices: string
  date: string
  value: number
  user: {
    email: string
    firstName: string
    lastName: string
  }
}

export const SpendingContext = createContext<Spending | null | undefined>(null)

export const SpendingContextProvider = ({
  children,
}: SpendingContextProviderProps) => {
  const [spending, setSpending] = useState<Spending | null>(null)
  const { url, headers } = useService()
  const { get, loading, error, success } = useAxios()

  useEffect(() => {
    get({ url: `${url}v1/pvt/spending`, headers, data: setSpending })
  }, [])

  console.log(spending)

  return (
    <SpendingContext.Provider value={spending}>
      {children}
    </SpendingContext.Provider>
  )
}

export const useSpending = () => {
  const context = useContext(SpendingContext)

  return context
}
