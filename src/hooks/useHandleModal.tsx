import { useState } from 'react'

export const useHandleModal = () => {
  const [open, setOpen] = useState(false)

  const handleOpenModal = () => {
    setOpen(!open)
  }

  return { open, handleOpenModal }
}
