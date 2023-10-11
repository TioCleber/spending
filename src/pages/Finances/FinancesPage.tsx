import { Finances } from './'

const FinancesPage = () => {
  return (
    <section className="section-finances container-page">
      <Finances.Cards />

      <Finances.ExpensesAndSpending />
    </section>
  )
}

export default FinancesPage
