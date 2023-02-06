import { useState } from 'react'
import { Cards } from '../../components/Cards'
import { useProfile } from '../../hooks/useProfile'
import { useSpending } from '../../hooks/useSpending'
import { formatCurrency } from '../../utils/formatCurrency'
import { FormSpending } from '../components/FormSpending'
import { Register } from '../components/Register'

export const Home = () => {
  const [register, setRegister] = useState(false)
  const user = useProfile()
  const { totalSpending, spending } = useSpending()

  const handleClick = () => {
    setRegister(!register)
  }

  const validateUser = !user.fullName || !user.spent ? false : true

  return (
    <>
      <main>
        <section>
          <Cards>
            <div>
              {!register && validateUser && (
                <>
                  <div>
                    <h3>Olá, {user.fullName}</h3>

                    <p>
                      Você tem: {formatCurrency(Number(user.spent))}
                    </p>
                    <p>Total de gastos: {formatCurrency(totalSpending)}</p>
                  </div>

                  <button onClick={handleClick}>Alterar</button>
                </>
              )}

              {!validateUser && <Register onRegister={setRegister} />}

              {register && <Register onRegister={setRegister} />}
            </div>
          </Cards>

          <Cards>
            <div>
              <h3>Gastos:</h3>

              <div>
                <ul>
                  {spending.map((values) => (
                    <li key={values.name}>
                      <p>
                        {values.name}: {values.totalValues}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Cards>
        </section>

        <FormSpending />
      </main>
    </>
  )
}
