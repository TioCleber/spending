import { MenuItem } from '@mui/material'

interface SelectMenuItemProps {
  label: string
  value?: string | number | readonly string[]
}

const SelectMenuItem = ({ label, value }: SelectMenuItemProps) => {
  return (
    <MenuItem className="select-menu-item" value={value}>
      {label}
    </MenuItem>
  )
}

export default SelectMenuItem
