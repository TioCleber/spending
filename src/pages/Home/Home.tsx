import { Cards } from '../../components/Cards'
import { useSpending } from '../../hooks/useSpending'
import { formatCurrency } from '../../utils/formatCurrency'
import { FormSpending } from '../components/FormSpending'
import { ListSpending } from '../components/ListSpending'

export const Home = () => {
  const { totalSpending, spending, refetch } = useSpending()

  return (
    <>
      <main>
        <section>
          <FormSpending refetch={refetch} />

          <Cards>
            <div>
              <h3>Gastos:</h3>

              <p>Total de gastos: {formatCurrency(totalSpending)}</p>

              <div>
                <ul>
                  {spending.map((item) => (
                    <li key={item.name}>
                      <p>
                        {item.name}: {item.totalValues}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button>Adicionar gastos</button>
          </Cards>
        </section>

        <section>
          <ListSpending spending={spending} />
        </section>
      </main>
    </>
  )
}
