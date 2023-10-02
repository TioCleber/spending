import { RecurringExpenses } from './'
import Pagination from '../../components/Pagination/Pagination'

const RecurringExpensesPage = () => {
  return (
    <section className="section-recurring-expenses">
      <RecurringExpenses.Content />

      <Pagination
        page={(e) => {
          console.log(e)
          return 1
        }}
      />
    </section>
  )
}

export default RecurringExpensesPage
