import { createContext, useContext } from 'react'

interface CategoriesContextProviderProps {
  children: React.ReactNode
}

export const CategoriesContext = createContext(null)

export const CategoriesContextProvider = ({
  children,
}: CategoriesContextProviderProps) => {
  return (
    <CategoriesContext.Provider value={null}>
      {children}
    </CategoriesContext.Provider>
  )
}

export const useCategories = () => {
  const context = useContext(CategoriesContext)

  return context
}
