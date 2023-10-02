import { ReactNode } from 'react'
import { Box, Modal as ModalMaterial } from '@mui/material'

import './../../styles/modal/modal-wrapper.css'

interface ModalWrapperProps {
  children: ReactNode
  open: boolean
}

const ModalWrapper = ({ children, open }: ModalWrapperProps) => {
  return (
    <ModalMaterial className="modal" open={open}>
      <Box className="modal-content">{children}</Box>
    </ModalMaterial>
  )
}

export default ModalWrapper
