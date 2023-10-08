import { useProfile } from './../../../context/ProfileContext'

import { Skeleton } from '@mui/material'
import { Spending } from './../../Spending'
import { RecurringExpenses } from './../../RecurringExpenses'

import './../../../styles/finances/finances-expenses-and-spending.css'
import Pagination from '../../../components/Pagination/Pagination'
import { Context } from '../../../context'

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

            <Context.Spending>
              <Spending.Content>
                <Pagination
                  page={(e) => {
                    console.log(e)
                    return e
                  }}
                />
              </Spending.Content>
            </Context.Spending>
          </div>

          <div className="content">
            <h3>Despesas recorrentes</h3>

            <Context.RecurringExpenses>
              <RecurringExpenses.Content>
                <Pagination
                  page={(e) => {
                    console.log(e)
                    return e
                  }}
                />
              </RecurringExpenses.Content>
            </Context.RecurringExpenses>
          </div>
        </aside>
      )}
    </>
  )
}

export default FinancesExpensesAndSpending
