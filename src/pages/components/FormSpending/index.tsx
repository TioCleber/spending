import { useState } from 'react'
import './style.css'
import { Input } from '../../../components/Inputs/Input'
import { InputCurrencyValue } from '../../../components/Inputs/InputCurrencyValue'
import { Select } from '../../../components/Select'
import { months } from '../../../constants/months'
import type { Spending } from '../../../typings/FormSpending'

interface FormSpendingProps {
  refetch?: React.Dispatch<React.SetStateAction<boolean>>
  onClose?: () => void
}

export const FormSpending = ({ refetch, onClose }: FormSpendingProps) => {
  const [state, setState] = useState<Record<string, string>>({})
  const [month, setMonth] = useState('')
  const [spendingIndex, setSpendingIndex] = useState([0])

  const handleClick = () => {
    setSpendingIndex((oldSpending) => [...oldSpending, oldSpending.length])
  }

  const handleRemove = (index: number) => {
    setSpendingIndex(() => spendingIndex.filter((item) => item !== index))
  }

  const handleSpending = (spendingIndex: number[]) => {
    const spending: Spending[] = []

    spendingIndex.forEach((item) => {
      if (state[`spending_${item}`] && state[`value_${item}`]) {
        spending.push({
          name: state[`spending_${item}`],
          value: state[`value_${item}`],
        })
      }
    })

    return localStorage.setItem(month, JSON.stringify(spending))
  }

  const handleSaveSpending = () => {
    handleSpending(spendingIndex)

    refetch && refetch((oldRefetch) => !oldRefetch)

    onClose && onClose()
  }

  const validateOverflow = spendingIndex.length > 1 ? 'auto' : 'initial'

  return (
    <main
      style={{ overflow: validateOverflow }}
      className="container-form-spending"
    >
      <Select selected={month} setValue={setMonth} values={months} />

      {month &&
        spendingIndex.map((item, index) => (
          <section className="container-inputs" key={index}>
            <Input
              name={`spending_${item}`}
              label={'Nome do Gasto: '}
              state={state}
              setState={setState}
              value={state[`spending_${item}`]}
            />

            <InputCurrencyValue
              name={`value_${item}`}
              label={'Valor gasto: '}
              state={state}
              setState={setState}
              value={state[`value_${item}`]}
            />

            <div className="container-buttons">
              {spendingIndex.length > 1 && (
                <button
                  className="action-button remove-item"
                  onClick={() => handleRemove(item)}
                >
                  Remover
                </button>
              )}

              {month && index === spendingIndex.length - 1 && (
                <button
                  className="action-button add-item"
                  onClick={handleClick}
                >
                  +
                </button>
              )}
            </div>
          </section>
        ))}

      <button
        className="save-spending"
        disabled={!(state.spending_0 && state.value_0)}
        onClick={handleSaveSpending}
      >
        Salvar
      </button>
    </main>
  )
}
