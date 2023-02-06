import { useState } from 'react'
import { Inputs } from '../../../components/Inputs'
import { user } from '../../../constants/initialValues'

interface RegisterProps {
  onRegister: React.Dispatch<React.SetStateAction<boolean>>
  refetchProfile: React.Dispatch<React.SetStateAction<boolean>>
  refetchSpending: React.Dispatch<React.SetStateAction<boolean>>
}

interface StateProps {
  fullName: string
  spent: string
}

export const Register = ({
  onRegister,
  refetchProfile,
  refetchSpending,
}: RegisterProps) => {
  const [state, setState] = useState<StateProps>(user)

  const handleClick = () => {
    onRegister(false)

    localStorage.setItem('user', JSON.stringify(state))

    refetchProfile((oldValue) => !oldValue)

    refetchSpending((oldValue) => !oldValue)

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
