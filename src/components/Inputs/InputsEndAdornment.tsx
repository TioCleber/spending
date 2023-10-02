import { MouseEventHandler, ReactNode } from 'react'
import { IconButton, InputAdornment } from '@mui/material'

interface InputsEndAdornmentProps {
  Then: ReactNode
  Else: ReactNode
  showThen: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
}

const InputsEndAdornment = ({
  showThen,
  Then,
  Else,
  onClick,
}: InputsEndAdornmentProps) => {
  return (
    <InputAdornment className="input-adornment" position="end">
      <IconButton onClick={onClick}>
        {showThen ? <>{Then}</> : <>{Else}</>}
      </IconButton>
    </InputAdornment>
  )
}

export default InputsEndAdornment
