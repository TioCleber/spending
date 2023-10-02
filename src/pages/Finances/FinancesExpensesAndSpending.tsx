import { useProfile } from '../../context/ProfileContext'

import { Skeleton } from '@mui/material'

const FinancesExpensesAndSpending = () => {
  const { isAuthenticated, profile } = useProfile()

  return (
    <>
      {!profile || !isAuthenticated ? (
        <Skeleton
          className="spending"
          variant="rectangular"
          width={'100%'}
          height={500}
        />
      ) : (
        <aside className="spending">
          <h3 className="title-spending">
            {profile.spending.length
              ? 'Seus Gastos este mês'
              : 'Você não tem gastos este mês.'}
          </h3>

          {profile.spending.length > 0 && (
            <div className="container-spending">
              <ul className="list-of-spending">
                <h3>Gastos</h3>

                {profile.spending.map((spending) => (
                  <li className="line-spending">
                    <p className="text-spending">
                      <span className="name">{spending.name}</span>
                      <span className="value">{spending.value}</span>
                    </p>

                    <p className="text-spending">
                      <span className="institution">
                        {spending.institution}
                      </span>
                      <span className="date">{spending.date}</span>
                    </p>
                  </li>
                ))}
              </ul>

              <ul className="list-of-spending">
                <h3>Despesas</h3>

                {profile.recurringExpenses.map((recurringExpenses) => (
                  <li className="line-spending">
                    <p className="text-spending">
                      <span className="name">{recurringExpenses.name}</span>
                      <span className="value">{recurringExpenses.value}</span>
                    </p>

                    <p className="text-spending">
                      <span className="institution">
                        {recurringExpenses.institution}
                      </span>
                      <span className="date">{recurringExpenses.date}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      )}
    </>
  )
}

export default FinancesExpensesAndSpending
