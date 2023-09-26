import { FormControl, Input, InputLabel } from '@mui/material'
import { useChangeValues } from '../../hooks/useChangeValues'

interface InputsProps {
  name: string
  state: object
  setState: React.Dispatch<React.SetStateAction<any>>
  value: any
  label: string
}

export const InputText = ({
  name,
  state,
  setState,
  value,
  label,
}: InputsProps) => {
  const { handleChange } = useChangeValues()

  return (
    <>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
        <InputLabel>{label}</InputLabel>
        <Input
          onChange={(e) =>
            handleChange({
              e,
              name,
              state,
              setState,
            })
          }
          value={value}
        />
      </FormControl>
    </>
  )
}
