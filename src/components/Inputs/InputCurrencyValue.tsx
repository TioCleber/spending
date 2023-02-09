import { formatCurrency } from '../../utils/formatCurrency'
import './style.css'

interface InputsProps {
  name: string
  type?: string
  label?: string
  state: object
  setState: React.Dispatch<React.SetStateAction<any>>
  value: string
}

export const InputCurrencyValue = ({
  name,
  label,
  type,
  state,
  setState,
  value,
}: InputsProps) => {
  const getMoney = (str: string) => {
    return parseInt(str.replace(/[\D]+/g, ''))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [name]: getMoney(e.target.value) })
  }

  return (
    <>
      <label className="label-custom" htmlFor={name}>
        {label}

        <input
          className="input-custom"
          type={type || 'text'}
          value={formatCurrency(Number(value)) || ''}
          name={name}
          onChange={handleChange}
        />
      </label>
    </>
  )
}
