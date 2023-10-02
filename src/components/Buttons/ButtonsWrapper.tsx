import { ReactNode } from 'react'

import './../../styles/buttons/buttons-wrapper.css'

interface ButtonsWrapperProps {
  children: ReactNode
}

const ButtonsWrapper = ({ children }: ButtonsWrapperProps) => {
  return <div className="container-buttons">{children}</div>
}

export default ButtonsWrapper
