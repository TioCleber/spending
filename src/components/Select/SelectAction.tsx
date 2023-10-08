import { ReactNode } from 'react'
import { useSelectItem } from '../../hooks/useSelectItem'

import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { Inputs } from '../Inputs'

interface SelectActionProps {
  value: any
  onChange: (event: SelectChangeEvent<any>, child: ReactNode) => void
  label: any
  items: Items[]
  newItem?: boolean
}

type Items = {
  id: string
  value: string
}

const SelectAction = ({
  value,
  onChange,
  label,
  items,
  newItem = false,
}: SelectActionProps) => {
  const { selectedItem, handleSelectItem } = useSelectItem()

  return (
    <Select
      className="select-action"
      value={value}
      onChange={onChange}
      label={label}
    >
      {items.length > 0 &&
        items.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.value}
          </MenuItem>
        ))}

      {newItem && selectedItem && (
        <MenuItem value={selectedItem}>{selectedItem}</MenuItem>
      )}

      {newItem && (
        <Inputs.Wrapper>
          <Inputs.Action
            placeholder="Preencha uma Categoria"
            onChange={handleSelectItem}
            value={selectedItem}
            name="category"
          />
        </Inputs.Wrapper>
      )}

      <MenuItem value="">nenhum</MenuItem>
    </Select>
  )
}

export default SelectAction
