import { Close } from '@mui/icons-material'
import { Box, Modal } from '@mui/material'
import '../../styles/modal.css'

interface ModalProps {
  children: React.ReactNode
  open: boolean
  handleOpenModal: () => void
}

const ModalCustom = ({ children, open, handleOpenModal }: ModalProps) => {
  return (
    <Modal className="modal modal-register" open={open}>
      <Box className="box-modal">
        <div className="container-modal-close">
          <button className="button-modal-close" onClick={handleOpenModal}>
            <Close className="icon-modal-close" />
          </button>
        </div>

        {children}
      </Box>
    </Modal>
  )
}

export default ModalCustom
