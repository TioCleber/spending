import { Link } from 'react-router-dom'
import { Disclosure } from '../../../components/Disclosure'
import { useSpending } from '../../../hooks/useSpending'
import { Spending } from '../../../typings/FormSpending'
import { formatCurrency } from '../../../utils/formatCurrency'

export const ListSpending = () => {
  const { spending } = useSpending()

  return (
    <main>
      {!spending.length && (
        <div>
          <p>
            Você não tem gastos registrados ainda, deseja registar?{' '}
            <Link to="/">clique aqui</Link>
          </p>
        </div>
      )}

      {spending.length > 0 &&
        spending.map((values) => (
          <Disclosure
            key={values.name}
            head={
              <div>
                <p>Mês: {values.name}</p>
                <p>Total Gasto: {values.totalValues}</p>
              </div>
            }
          >
            <section>
              <ul>
                {values.stores.map((spending: Spending) => (
                  <li key={spending.name}>
                    <p>Loja: {spending.name}</p>
                    <p>Valor: {formatCurrency(Number(spending.value))}</p>
                  </li>
                ))}

                <li>
                  <p>
                    De acordo com o seu dinheiro vai sobrar:{' '}
                    {values.remainingSalary}
                  </p>
                </li>
              </ul>
            </section>
          </Disclosure>
        ))}
    </main>
  )
}
