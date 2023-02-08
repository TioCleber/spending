import { useState } from 'react'
import { Input } from '../../../components/Inputs/Input'
import { InputCurrencyValue } from '../../../components/Inputs/InputCurrencyValue'
import { user } from '../../../constants/initialValues'

interface StateProps {
  fullName: string
  spent: string
}

export const Register = () => {
  const [state, setState] = useState<StateProps>(user)

  const handleClick = () => {
    localStorage.setItem('user', JSON.stringify(state))

    return setState(user)
  }

  console.log(state)

  return (
    <div>
      <div>
        <Input
          name="fullName"
          state={state}
          setState={setState}
          value={state.fullName}
        />

        <InputCurrencyValue
          name="spent"
          state={state}
          setState={setState}
          value={state.spent}
        />

        <button onClick={handleClick}>Salvar</button>
      </div>
    </div>
  )
}
