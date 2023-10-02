import { MouseEventHandler } from 'react'
import { Buttons } from '../Buttons'

interface ModalActionProps {
  text: string
  handleOpenModal: MouseEventHandler<HTMLButtonElement>
  type: 'text' | 'underline' | 'border'
}

const ModalAction = ({ text, handleOpenModal, type }: ModalActionProps) => {
  return (
    <Buttons.Action type={type} onClick={handleOpenModal}>
      {text}
    </Buttons.Action>
  )
}

export default ModalAction
