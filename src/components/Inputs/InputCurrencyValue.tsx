interface InputsProps {
  name: string
  type?: string
  label?: string
  state: object
  setState: React.Dispatch<React.SetStateAction<any>>
  value: any
}

export const InputCurrencyValue = ({
  name,
  label,
  type,
  state,
  setState,
  value,
}: InputsProps) => {
  function getMoney(str: string) {
    return parseInt(str.replace(/[\D]+/g, ''))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [name]: getMoney(e.target.value) })
  }

  return (
    <>
      <label htmlFor={name}>{label}</label>

      <input
        type={type || 'text'}
        value={value || ''}
        name={name}
        onChange={handleChange}
      />
    </>
  )
}
