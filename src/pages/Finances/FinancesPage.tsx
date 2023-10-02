import { Finances } from './'

import './../../styles/fincances.css'

const FinancesPage = () => {
  return (
    <section className="section-finances">
      <Finances.Cards />

      <Finances.ExpensesAndSpending />
    </section>
  )
}

export default FinancesPage
