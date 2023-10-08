import { ChangeEvent, useState } from 'react'

export const useSelectItem = () => {
  const [selectedItem, setSelectedItem] = useState('')

  const handleSelectItem = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSelectedItem(e.target.value)
  }

  return { selectedItem, handleSelectItem }
}
