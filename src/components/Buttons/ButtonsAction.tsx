import { MouseEventHandler, ReactNode } from 'react'

import './../../styles/buttons/buttons-action.css'

interface ButtonsActionProps {
  onClick: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
  type?: 'text' | 'underline' | 'border' | 'cancel' | 'close'
  disabled?: boolean
}

const ButtonsAction = ({
  onClick,
  children,
  type = 'border',
  disabled,
}: ButtonsActionProps) => {
  return (
    <button disabled={disabled} className={`button ${type}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonsAction
