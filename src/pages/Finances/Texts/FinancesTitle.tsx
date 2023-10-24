import { memo } from 'react'
import './../../../styles/finances/finances-title.css'

interface FinancesTitleProps {
  text: string
}

const FinancesTitle = ({ text }: FinancesTitleProps) => {
  return <h3 className="card-finance-title">{text}</h3>
}

export default memo(FinancesTitle)
