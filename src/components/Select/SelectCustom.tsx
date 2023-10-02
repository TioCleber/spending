import { useState } from 'react'
import { Checkbox } from '@mui/material'

interface SelectCustomProps {
  testando: any
}

const SelectCustom = ({ testando }: SelectCustomProps) => {
  const [selected, setSelected] = useState({ value: '' })
  const [newItem, setNewItem] = useState({ value: '' })
  const [values, setValues] = useState<string[]>([])

  const teste = [
    { id: '1', value: 'teste' },
    { id: '2', value: 'teste2' },
  ]

  const handleSelected = (value: string) => {
    setSelected({ value })
  }

  testando = () => {
    return 'teste'
  }

  const handleChecked = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    if (e.target.checked) {
      setValues((old) => [...old, value])
    } else {
      const removeValue = values.filter((val) => val !== value)

      setValues(removeValue)
    }
  }

  return (
    <div>
      <ul>
        <li>
          <p>{values.length > 0 ? values.join(', ') : 'nenhum'}</p>
        </li>

        {teste.map((test) => (
          <li key={test.value}>
            <Checkbox onChange={(e) => handleChecked(e, test.value)} />
            <p>{test.value}</p>
          </li>
        ))}

        <li>
          <Checkbox onChange={(e) => handleChecked(e, newItem.value)} />
          {/* <InputText
            label=""
            name="value"
            setState={setNewItem}
            state={newItem}
            value={newItem.value}
          /> */}
        </li>

        {selected.value && (
          <li>
            <button onClick={testando}>nenhum</button>
          </li>
        )}

        <li>
          <button>cancelar</button>
          <button>Aplicar</button>
        </li>
      </ul>
    </div>
  )
}

export default SelectCustom
