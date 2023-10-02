import { ReactNode } from 'react'

import './../../styles/finances/finances-cards-wrapper.css'

interface FinancesCardsWrapperProps {
  children: ReactNode
}

const FinancesCardsWrapper = ({ children }: FinancesCardsWrapperProps) => {
  return <div className="container-cards">{children}</div>
}

export default FinancesCardsWrapper
