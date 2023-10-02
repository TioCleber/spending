import { ReactNode } from 'react'

import './../../styles/container/container-pagination.css'

interface ContainerPaginationProps {
  children: ReactNode
}

const ContainerPagination = ({ children }: ContainerPaginationProps) => {
  return <aside className="container-pagination">{children}</aside>
}

export default ContainerPagination
