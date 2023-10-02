import { ReactNode } from 'react'
import { Box, Modal as ModalMaterial } from '@mui/material'
import { useModal } from '../../context/ModalContext'

import './../../styles/modal/modal-wrapper.css'

interface ModalWrapperTriggerProps {
  children: ReactNode
}

const ModalWrapperTrigger = ({ children }: ModalWrapperTriggerProps) => {
  const { open } = useModal()

  return (
    <ModalMaterial className="modal" open={open}>
      <Box className="modal-content">{children}</Box>
    </ModalMaterial>
  )
}

export default ModalWrapperTrigger
