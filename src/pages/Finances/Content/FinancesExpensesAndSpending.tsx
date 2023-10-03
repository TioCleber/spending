import { useProfile } from './../../../context/ProfileContext'

import { Skeleton } from '@mui/material'
import { Spending } from './../../Spending'
import { RecurringExpenses } from './../../RecurringExpenses'

import './../../../styles/finances/finances-expenses-and-spending.css'
import Pagination from '../../../components/Pagination/Pagination'

const FinancesExpensesAndSpending = () => {
  const { isAuthenticated, profile } = useProfile()

  return (
    <>
      {!profile || !isAuthenticated ? (
        <Skeleton
          className="finances"
          variant="rectangular"
          width={'100%'}
          height={500}
        />
      ) : (
        <aside className="finances">
          <div className="content">
            <h3>Gastos do mês</h3>
            <Spending.Content>
              <Pagination
                page={(e) => {
                  console.log(e)
                  return e
                }}
              />
            </Spending.Content>
          </div>

          <div className="content">
            <h3>Despesas recorrentes</h3>
            <RecurringExpenses.Content>
              <Pagination
                page={(e) => {
                  console.log(e)
                  return e
                }}
              />
            </RecurringExpenses.Content>
          </div>
        </aside>
      )}
    </>
  )
}

export default FinancesExpensesAndSpending
