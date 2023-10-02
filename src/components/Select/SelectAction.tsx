import { ReactNode } from 'react'
import { Select, SelectChangeEvent } from '@mui/material'
import SelectMenuItem from './SelectMenuItem'

interface SelectActionProps {
  children: ReactNode
  value: any
  onChange: (event: SelectChangeEvent<any>, child: ReactNode) => void
  label: any
}

const SelectAction = ({
  children,
  value,
  onChange,
  label,
}: SelectActionProps) => {
  return (
    <Select className='select-action' value={value} onChange={onChange} label={label}>
      {children}

      <SelectMenuItem label="nenhum" value="" />
    </Select>
  )
}

export default SelectAction
