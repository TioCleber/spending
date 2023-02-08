import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Cards } from '../../components/Cards'
import { useProfile } from '../../hooks/useProfile'
import { useSpending } from '../../hooks/useSpending'
import { formatCurrency } from '../../utils/formatCurrency'
import { FormSpending } from '../components/FormSpending'
import { ListSpending } from '../components/ListSpending'

export const Home = () => {
  const { user } = useProfile()
  const { totalSpending, spending, refetch: refetchSpending } = useSpending()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user.fullName) {
      navigate('/user')
    }
  }, [navigate, user.fullName])

  return (
    <>
      <main>
        <section>
          <Cards>
            <div>
              <div>
                <h3>Olá, {user.fullName}</h3>

                <p>Você tem: {formatCurrency(Number(user.spent))}</p>
                <p>Total de gastos: {formatCurrency(totalSpending)}</p>
              </div>

              <Link to="/user">Alterar</Link>
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

        <FormSpending refetch={refetchSpending} />

        <section>
          <ListSpending spending={spending} />
        </section>
      </main>
    </>
  )
}
