import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { useState } from 'react'

interface SelectProps {
  value: string | number
  setState: React.Dispatch<React.SetStateAction<any>>
  label: string
  values: Values[]
  name: string
  state: React.SetStateAction<any>
}

type Values = {
  id: string
  name: string
}

const SelectCustom = ({
  label,
  setState,
  value,
  values,
  name,
  state,
}: SelectProps) => {
  const [categories, setCategories] = useState({ name: undefined })

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
          return <MenuItem value={val.name}>{val.name}</MenuItem>
        })}

        <MenuItem value={categories.name}>{categories.name}</MenuItem>

        {/* <InputText
          label=""
          name="name"
          setState={setCategories}
          state={categories}
          value={categories.name}
        /> */}

        <MenuItem value="">
          <em>nenhum</em>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default SelectCustom
