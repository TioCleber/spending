import { ReactNode } from 'react'

interface ContainerListProps {
  children: ReactNode
}

const ContainerList = ({ children }: ContainerListProps) => {
  return <ul className="container-list">{children}</ul>
}

export default ContainerList
