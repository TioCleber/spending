import { ReactNode } from 'react'

interface FinancesTitlesWrapperProps {
  children: ReactNode
}

const FinancesTitlesWrapper = ({ children }: FinancesTitlesWrapperProps) => {
  return <div className="container-titles">{children}</div>
}

export default FinancesTitlesWrapper
