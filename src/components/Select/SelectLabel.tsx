import { InputLabel } from '@mui/material'

interface SelectLabelProps {
  label: string
}

const SelectLabel = ({ label }: SelectLabelProps) => {
  return <InputLabel className="select-label">{label}</InputLabel>
}

export default SelectLabel
