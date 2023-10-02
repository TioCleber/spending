import { ReactNode } from 'react'

import './../../styles/container/container-list-finances.css'

interface ContainerListFinancesProps {
  children: ReactNode
}

const ContainerListFinances = ({ children }: ContainerListFinancesProps) => {
  return <aside className="container-list-finances">{children}</aside>
}

export default ContainerListFinances
