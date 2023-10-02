import { InputLabel } from '@mui/material'

interface InputsLabelProps {
  label: string
}

const InputsLabel = ({ label }: InputsLabelProps) => {
  return <InputLabel className="input-label">{label}</InputLabel>
}

export default InputsLabel
