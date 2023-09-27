import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from '@mui/material'
import { useChangeValues } from '../../hooks/useChangeValues'
import { useShowPassword } from '../../hooks/useShowPassword'
import { Visibility, VisibilityOff } from '@mui/icons-material'

interface InputsProps {
  name: string
  label?: string
  state: object
  setState: React.Dispatch<React.SetStateAction<any>>
  value: any
}

export const InputPassword = ({
  name,
  state,
  setState,
  value,
  label,
}: InputsProps) => {
  const { handleChange } = useChangeValues()
  const { showPassword, handleShowPassword } = useShowPassword()

  return (
    <>
      <FormControl className='input-password' variant="standard">
        <InputLabel>{label}</InputLabel>
        <Input
          type={showPassword ? 'text' : 'password'}
          onChange={(e) =>
            handleChange({
              e,
              name,
              state,
              setState,
            })
          }
          value={value}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </>
  )
}
