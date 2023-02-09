import { Disclosure } from '../../../components/Disclosure'
import { Spending } from '../../../typings/FormSpending'
import { SpendingProps } from '../../../typings/spending'
import { formatCurrency } from '../../../utils/formatCurrency'
import './style.css'

interface ListSpendingProps {
  spending: SpendingProps[]
}

export const ListSpending = ({ spending }: ListSpendingProps) => {
  return (
    <main className="container-list-spending">
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
              <>
                <p>Mês: {values.name}</p>
                <p>Total Gasto: {values.totalValues}</p>
              </>
            }
          >
            <>
              <ul>
                {values.stores.map((spending: Spending) => (
                  <li key={spending.name}>
                    <p>Loja: {spending.name}</p>
                    <p>Valor: {formatCurrency(Number(spending.value))}</p>
                  </li>
                ))}
              </ul>

              <p>Total Gasto: {values.totalValues}</p>
            </>
          </Disclosure>
        ))}
    </main>
  )
}
