import { MouseEventHandler, createContext, useContext, useState } from 'react'

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
  const [open, setOpen] = useState(false)

  const handleOpenModal = () => {
    setOpen((oldValue) => !oldValue)
  }

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
