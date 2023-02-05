import { useState } from 'react'
import { Inputs } from '../../../components/Inputs'

interface RegisterProps {
  onRegister: React.Dispatch<React.SetStateAction<boolean>>
}

interface StateProps {
  fullName: string
  spent: string
}

const INITIAL_STATE = {
  fullName: '',
  spent: '',
}

export const Register = ({ onRegister }: RegisterProps) => {
  const [state, setState] = useState<StateProps>(INITIAL_STATE)

  const handleClick = () => {
    onRegister(false)
    
    if (state.fullName && state.spent) {
      localStorage.setItem('user', JSON.stringify(state))

      return setState(INITIAL_STATE)
    }

    localStorage.setItem('user', JSON.stringify(INITIAL_STATE))

    return setState(INITIAL_STATE)
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
