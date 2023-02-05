import { useState } from 'react'

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
    <div>
      <button onClick={handleClick}>
        {selected || 'Selecione o mês para gastos'}
      </button>

      {values.length && open && (
        <div className={(open && 'active') || ''}>
          {values.map((value) => (
            <button key={value} onClick={() => handleSelect(value)}>
              {value}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
