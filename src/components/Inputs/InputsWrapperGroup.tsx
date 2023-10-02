import { ReactNode } from 'react'

import './../../styles/inputs/inputs-group.css'

interface InputsWrapperGroupProps {
  children: ReactNode
}

const InputsWrapperGroup = ({ children }: InputsWrapperGroupProps) => {
  return <aside className="inputs-group">{children}</aside>
}

export default InputsWrapperGroup
