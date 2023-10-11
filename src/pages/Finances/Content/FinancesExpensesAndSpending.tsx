import { useProfile } from './../../../context/ProfileContext'
import { useSpending } from '../../../context/SpendingContext'
import { useRecurringExpenses } from '../../../context/RecurringExpensesContext'

import { Skeleton } from '@mui/material'
import { Spending } from './../../Spending'
import { RecurringExpenses } from './../../RecurringExpenses'
import Pagination from '../../../components/Pagination/Pagination'

import './../../../styles/finances/finances-expenses-and-spending.css'

const FinancesExpensesAndSpending = () => {
  const { isAuthenticated, profile } = useProfile()
  const spendingContext = useSpending()
  const recurringExpensesContext = useRecurringExpenses()

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
                  spendingContext?.handlePagination(e)
                }}
                count={spendingContext?.spending?.pages}
              />
            </Spending.Content>
          </div>

          <div className="content">
            <h3>Despesas recorrentes</h3>

            <RecurringExpenses.Content>
              <Pagination
                page={(e) => {
                  recurringExpensesContext?.handlePagination(e)
                }}
                count={recurringExpensesContext?.expenses?.pages}
              />
            </RecurringExpenses.Content>
          </div>
        </aside>
      )}
    </>
  )
}

export default FinancesExpensesAndSpending
