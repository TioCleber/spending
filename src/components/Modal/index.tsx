import './index.css'

interface ModalProps {
  children: React.ReactNode
}

export const Modal = ({ children }: ModalProps) => {
  return (
    <div className="container-modal">
      <div className="modal-content">{children}</div>
    </div>
  )
}
