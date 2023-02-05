import { Link } from 'react-router-dom'
import { Disclosure } from '../../../components/Disclosure'
import { months } from '../../../constants/months'
import { Spending } from '../../../typings/FormSpending'
import { formatCurrency } from '../../../utils/formatCurrency'

export const ListSpending = () => {
  const handleSpending = () => {
    const spendingForMonth: any[] = []

    months.forEach((validMonth) => {
      const spending = localStorage.getItem(validMonth)
      const parseSpending = JSON.parse(spending || '[]')

      if (parseSpending.length) {
        const totalValues = parseSpending.reduce((acc: any, curr: any) => {
          acc += Number(curr.value)

          return acc
        }, 0)

        const remainingSalary = 4100 - totalValues

        spendingForMonth.push({
          name: validMonth,
          stores: parseSpending,
          totalValues: formatCurrency(totalValues),
          remainingSalary: formatCurrency(remainingSalary),
        })
      }
    })

    return spendingForMonth
  }

  const spending = handleSpending()

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
                    De acordo com o seu salário vai sobrar:{' '}
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
