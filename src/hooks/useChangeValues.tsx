interface InputsProps {
  name: string
  state: object
  setState: React.Dispatch<React.SetStateAction<any>>
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
}

export const useChangeValues = () => {
  const handleChange = ({ e, state, setState, name }: InputsProps) => {
    setState({ ...state, [name]: e.target.value })
  }

  const getMoney = (str: string) => {
    return parseInt(str.replace(/[\D]+/g, ''))
  }

  const handleChangeValueMoney = ({
    e,
    state,
    setState,
    name,
  }: InputsProps) => {
    setState({ ...state, [name]: getMoney(e.target.value) })
  }

  return { handleChange, handleChangeValueMoney }
}
