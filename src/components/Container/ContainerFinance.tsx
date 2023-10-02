import { ReactNode } from 'react'

import './../../styles/container/container-finance.css'

interface ContainerFinanceProps {
  children: ReactNode
}

const ContainerFinance = ({ children }: ContainerFinanceProps) => {
  return <section className="container-finance">{children}</section>
}

export default ContainerFinance
