import { createContext, useContext, useEffect, useState } from 'react'
import { useService } from '../hooks/useService'
import { useAxios } from '../hooks/useAxios'

interface CategoriesContextProviderProps {
  children: React.ReactNode
}

interface Categories {
  expensesCategories: AllCategories[]
  spendingCategories: AllCategories[]
}

interface AllCategories {
  id: string
  name: string
  createdAt: string
  updatedAt: string
}

const INITIAL_VALUES = {
  expensesCategories: [],
  spendingCategories: [],
}

export const CategoriesContext = createContext<Categories>(INITIAL_VALUES)

export const CategoriesContextProvider = ({
  children,
}: CategoriesContextProviderProps) => {
  const [categories, setCategories] = useState<Categories>(INITIAL_VALUES)
  const { url, headers } = useService()
  const { get } = useAxios()

  useEffect(() => {
    get({ url: `${url}v1/pvt/categories`, headers, data: setCategories })
  }, [])

  return (
    <CategoriesContext.Provider
      value={{
        expensesCategories: categories.expensesCategories,
        spendingCategories: categories.spendingCategories,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  )
}

export const useCategories = () => {
  const context = useContext(CategoriesContext)

  return context
}
