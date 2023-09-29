import { createContext, useContext } from 'react'

interface SearchByContextProviderProps {
  children: React.ReactNode
}

export const SearchByContext = createContext(null)

export const SearchByContextProvider = ({
  children,
}: SearchByContextProviderProps) => {
  return (
    <SearchByContext.Provider value={null}>
      {children}
    </SearchByContext.Provider>
  )
}

export const useSearchBy = () => {
  const context = useContext(SearchByContext)

  return context
}
