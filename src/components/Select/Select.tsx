import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'

interface SelectProps {
  value: string | number
  setState: React.Dispatch<React.SetStateAction<any>>
  label: string
  values: string[]
  name: string
  state: React.SetStateAction<any>
}

const SelectCustom = ({
  label,
  setState,
  value,
  values,
  name,
  state,
}: SelectProps) => {
  const handleChange = (e: SelectChangeEvent<string | number>) => {
    setState({ ...state, [name]: e.target.value })
  }

  return (
    <FormControl
      className="select"
      variant="standard"
      sx={{ m: 1, minWidth: 120 }}
    >
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={(e) => handleChange(e)} label={label}>
        {values.map((val) => {
          return <MenuItem value={val}>{val}</MenuItem>
        })}

        <MenuItem value="">
          <em>nenhum</em>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default SelectCustom
