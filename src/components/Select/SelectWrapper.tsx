import { ReactNode } from 'react'
import { FormControl } from '@mui/material'

interface SelectWrapperProps {
  children: ReactNode
}

const SelectWrapper = ({ children }: SelectWrapperProps) => {
  return (
    <FormControl
      className="container-select"
      variant="standard"
      sx={{ m: 1, minWidth: 120 }}
    >
      {children}
    </FormControl>
  )
}

export default SelectWrapper
