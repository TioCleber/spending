import { ChangeEventHandler, KeyboardEventHandler, ReactNode } from 'react'
import { Input } from '@mui/material'

import './../../styles/inputs/inputs-action.css'

interface InputsActionProps {
  onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  value: string | number
  type?: 'text' | 'password'
  endAdornment?: ReactNode
  placeholder?: string
  name?: string
  onKeyUp?: KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>
}

const InputsAction = ({
  onChange,
  value,
  type = 'text',
  placeholder,
  endAdornment,
  name,
  onKeyUp,
}: InputsActionProps) => {
  return (
    <Input
      className="input-action"
      name={name}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      endAdornment={endAdornment}
      onKeyUp={onKeyUp}
    />
  )
}

export default InputsAction
