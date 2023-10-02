import { ReactNode } from 'react'

import './../../styles/finances/finances-action-wrapper.css'

interface FinancesActionWrapperProps {
  children: ReactNode
}

const FinancesActionWrapper = ({ children }: FinancesActionWrapperProps) => {
  return <div className="container-finances-action">{children}</div>
}

export default FinancesActionWrapper
