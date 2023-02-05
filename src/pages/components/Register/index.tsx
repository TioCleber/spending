import { useState } from 'react'
import { Inputs } from '../../../components/Inputs'

export const Register = () => {
  const [state, setState] = useState<Record<string, string>>({
    fullName: '',
    spent: '',
  })

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
      </div>
    </div>
  )
}
