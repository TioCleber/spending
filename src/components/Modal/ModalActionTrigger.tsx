import { ReactNode } from 'react'
import { useModal } from '../../context/ModalContext'

import { Buttons } from '../Buttons'

interface ModalActionTriggerProps {
  children: ReactNode
  type?: 'text' | 'underline' | 'cancel' | 'border' | 'close'
  disabled?: boolean
}

const ModalActionTrigger = ({
  children,
  type = 'border',
  disabled,
}: ModalActionTriggerProps) => {
  const { handleOpenModal } = useModal()

  return (
    <Buttons.Action disabled={disabled} type={type} onClick={handleOpenModal}>
      {children}
    </Buttons.Action>
  )
}

export default ModalActionTrigger
