import { ReactNode } from 'react'

import './../../styles/list.css'

interface ContainerListProps {
  children: ReactNode
}

const List = ({ children }: ContainerListProps) => {
  return <li className="list">{children}</li>
}

export default List
