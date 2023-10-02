import { createContext, useContext } from 'react'
import { useGetCategories } from '../hooks/useGetCategories'

import { INITIAL_CATEGORIES_VALUES } from '../constants/categories'
import { Categories } from '../typings/categories'

interface CategoriesContextProviderProps {
  children: React.ReactNode
}

export const CategoriesContext = createContext<Categories>(
  INITIAL_CATEGORIES_VALUES
)

export const CategoriesContextProvider = ({
  children,
}: CategoriesContextProviderProps) => {
  const { categories } = useGetCategories()

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
