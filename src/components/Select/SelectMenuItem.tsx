import { MenuItem } from '@mui/material'

interface SelectMenuItemProps {
  label: string
  value: string | number
}

const SelectMenuItem = ({ label, value }: SelectMenuItemProps) => {
  console.log('value ', value, label)
  return (
    <MenuItem className="select-menu-item" value={label}>
      {label}
    </MenuItem>
  )
}

export default SelectMenuItem
