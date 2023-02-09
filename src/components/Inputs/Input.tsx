import './style.css'

interface InputsProps {
  name: string
  type?: string
  label?: string
  state: object
  setState: React.Dispatch<React.SetStateAction<any>>
  value: any
}

export const Input = ({
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
      <label className="label-custom" htmlFor={name}>
        {label}

        <input
          className="input-custom"
          type={type || 'text'}
          value={value || ''}
          name={name}
          onChange={handleChange}
        />
      </label>
    </>
  )
}
