import { Spending } from './'
import Pagination from '../../components/Pagination/Pagination'

const SpendingPage = () => {
  return (
    <section className="section-spending-expenses container-page">
      <Spending.Content />

      <Pagination
        page={(e) => {
          console.log(e)
          return 1
        }}
      />
    </section>
  )
}

export default SpendingPage
