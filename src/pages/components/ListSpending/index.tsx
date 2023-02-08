import { Disclosure } from '../../../components/Disclosure'
import { Spending } from '../../../typings/FormSpending'
import { SpendingProps } from '../../../typings/spending'
import { formatCurrency } from '../../../utils/formatCurrency'

interface ListSpendingProps {
  spending: SpendingProps[]
}

export const ListSpending = ({ spending }: ListSpendingProps) => {
  return (
    <main>
      {!spending.length && (
        <div>
          <p>Você não tem gastos registrados ainda!</p>
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
              </ul>
              
              <p>Total Gasto: {values.totalValues}</p>
            </section>
          </Disclosure>
        ))}
    </main>
  )
}
