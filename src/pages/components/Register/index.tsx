import { useState } from 'react'
import { Inputs } from '../../../components/Inputs'
import { user } from '../../../constants/initialValues'

interface RegisterProps {
  onRegister: React.Dispatch<React.SetStateAction<boolean>>
}

interface StateProps {
  fullName: string
  spent: string
}

export const Register = ({ onRegister }: RegisterProps) => {
  const [state, setState] = useState<StateProps>(user)

  const handleClick = () => {
    onRegister(false)

    if (state.fullName && state.spent) {
      localStorage.setItem('user', JSON.stringify(state))

      return setState(user)
    }

    localStorage.setItem('user', JSON.stringify(user))

    return setState(user)
  }

  return (
    <div>
      <div>
        <Inputs
          name="fullName"
          state={state}
          setState={setState}
          value={state.fullName}
        />

        <Inputs
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
