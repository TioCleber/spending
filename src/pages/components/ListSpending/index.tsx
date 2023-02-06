import { Link } from 'react-router-dom'
import { Disclosure } from '../../../components/Disclosure'
import { useProfile } from '../../../hooks/useProfile'
import { Spending } from '../../../typings/FormSpending'
import { SpendingProps } from '../../../typings/spending'
import { formatCurrency } from '../../../utils/formatCurrency'

interface ListSpendingProps {
  spending: SpendingProps[]
}

export const ListSpending = ({ spending }: ListSpendingProps) => {
  const { user } = useProfile()

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

                {user.spent && (
                  <li>
                    <p>
                      De acordo com o seu dinheiro vai sobrar:{' '}
                      {values.remainingSalary}
                    </p>

                    <div>
                      <ul>
                        <li>
                          <span>
                            Esse valor é composto por encargos de seu
                            (dinheiro/salário + dinheiro extra - total de gasto)
                          </span>
                        </li>
                        <li>
                          <span>
                            Dinheiro/Salário:{' '}
                            {formatCurrency(Number(user.spent))}
                          </span>
                        </li>
                        <li>
                          <span>
                            Dinheiro extra: {formatCurrency(values.extra_money)}
                          </span>
                        </li>
                        <li>
                          <span>Total de gastos: {values.totalValues}</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                )}
              </ul>
            </section>
          </Disclosure>
        ))}
    </main>
  )
}
