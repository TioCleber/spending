import { ReactNode } from 'react'
import { FormControl } from '@mui/material'

import './../../styles/inputs/inputs-wrapper.css'

interface InputsWrapperProps {
  children: ReactNode
}

const InputsWrapper = ({ children }: InputsWrapperProps) => {
  return (
    <FormControl className="container-input" variant="standard">
      {children}
    </FormControl>
  )
}

export default InputsWrapper
