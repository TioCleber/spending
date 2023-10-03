import { ReactNode } from 'react'

import './../../../styles/finances/finances-link-wrapper.css'

interface FinancesLinkWrapperProps {
  children: ReactNode
}

const FinancesLinkWrapper = ({ children }: FinancesLinkWrapperProps) => {
  return <div className="container-link">{children}</div>
}

export default FinancesLinkWrapper
