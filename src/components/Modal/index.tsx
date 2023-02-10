import './style.css'

interface ModalProps {
  children: React.ReactNode
  onClose?: () => void
}

export const Modal = ({ children, onClose }: ModalProps) => {
  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose && onClose()
    }
  }

  return (
    <div onClick={handleClose} className="container-modal">
      <div id="modal" className="modal-content">
        <div className="modal-header">
          <button className="modal-close-button" onClick={onClose}>
            x
          </button>
        </div>

        {children}
      </div>
    </div>
  )
}
