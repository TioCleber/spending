interface InputsProps {
  name: string
  type?: string
  label?: string
  state: Record<string, string>
  setState: React.Dispatch<React.SetStateAction<Record<string, string>>>
  value: any
}

export const Inputs = ({
  name,
  label,
  type,
  state,
  setState,
  value,
}: InputsProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [name]: e.target.value })
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
