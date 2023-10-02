import { ReactNode } from 'react'

interface FinancesActionWrapperProps {
  children: ReactNode
}

const FinancesActionWrapper = ({ children }: FinancesActionWrapperProps) => {
  return <div className="card-finances">{children}</div>
}

export default FinancesActionWrapper
