import { useState } from 'react'
import { FormSpending } from '../components/FormSpending'
import { Register } from '../components/Register'

export const Home = () => {
  const [register, setRegister] = useState(false)

  const handleClick = () => {
    setRegister(!register)
  }

  return (
    <>
      <main>
        <section>
          {!register && <button onClick={handleClick}>Registrar</button>}

          {register && <Register onRegister={setRegister} />}
        </section>

        <FormSpending />
      </main>
    </>
  )
}
