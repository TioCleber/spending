import { ReactNode } from 'react'

interface InfosFinanceProps {
  children: ReactNode
}

const InfosFinance = ({ children }: InfosFinanceProps) => {
  return <aside className='info-finance'>{children}</aside>
}

export default InfosFinance
