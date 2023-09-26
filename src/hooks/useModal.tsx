import { useState } from 'react'

export const useModal = () => {
  const [open, setOpen] = useState(false)

  const handleOpenModal = () => {
    setOpen(!open)
  }

  return { open, handleOpenModal }
}
