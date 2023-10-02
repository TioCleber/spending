import { MouseEventHandler, createContext, useContext } from 'react'
import { useHandleModal } from '../hooks/useHandleModal'

interface ModalContextProps {
  open: boolean
  handleOpenModal: MouseEventHandler<HTMLButtonElement>
}

interface ModalContextProviderProps {
  children: React.ReactNode
}

export const ModalContext = createContext<ModalContextProps>({
  open: false,
  handleOpenModal: () => {},
})

export const ModalContextProvider = ({
  children,
}: ModalContextProviderProps) => {
  const { open, handleOpenModal } = useHandleModal()

  return (
    <ModalContext.Provider value={{ open, handleOpenModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const context = useContext(ModalContext)

  return context
}
