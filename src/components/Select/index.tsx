import { useState } from 'react'
import './style.css'

interface SelectProps {
  selected: string
  values: string[]
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export const Select = ({ selected, values, setValue }: SelectProps) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  const handleSelect = (value: string) => {
    setValue(value)

    setOpen(!open)
  }

  return (
    <div className="container-select">
      <button className="select-custom" onClick={handleClick}>
        {selected || 'Selecione o mês para gastos'}
      </button>

      {values.length && (
        <div className={'container-options-custom' + (open ? ' active' : '')}>
          {values.map((value) => (
            <button
              className="option-custom"
              key={value}
              onClick={() => handleSelect(value)}
            >
              {value}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
