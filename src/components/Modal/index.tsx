import './style.css'

interface ModalProps {
  children: React.ReactNode
  onClose?: () => void
}

export const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div className="container-modal">
      <div id="modal" className="modal-content">
        <div className="modal-header">
          <button className="modal-close-button" onClick={onClose}>x</button>
        </div>

        {children}
      </div>
    </div>
  )
}
