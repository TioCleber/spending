import { ReactNode } from 'react'

interface FinancesLinkWrapperProps {
  children: ReactNode
}

const FinancesLinkWrapper = ({ children }: FinancesLinkWrapperProps) => {
  return <div className="container-link">{children}</div>
}

export default FinancesLinkWrapper
