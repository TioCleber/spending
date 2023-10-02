import { Card, CardContent, Skeleton } from '@mui/material'
import { useProfile } from '../../context/ProfileContext'
import { ModalContextProvider } from '../../context/ModalContext'
import { Finances } from './'
import { Link } from 'react-router-dom'
import { Profile } from '../../components/Profile'

const FinancesCards = () => {
  const { profile, isAuthenticated } = useProfile()

  return (
    <Profile.Wrapper
      Then={
        <aside className="cards-finance">
          <Skeleton
            className="skeleton"
            variant="rectangular"
            width="100%"
            height={200}
          />
          <Skeleton
            className="skeleton"
            variant="rectangular"
            width="100%"
            height={200}
          />
          <Skeleton
            className="skeleton"
            variant="rectangular"
            width="100%"
            height={200}
          />
        </aside>
      }
      Else={
        <aside className="cards-finance">
          <Card className="card-finance">
            <CardContent className="card-finance-content">
              <div className="titles">
                <h1 className="card-finance-title">
                  Olá {`${profile?.firstName} ${profile?.lastName}`}
                </h1>

                <h3 className="card-finance-subtitle">
                  Aqui está sua finança de hoje:
                </h3>
              </div>

              <div className="card-finances">
                <p className="finances money-saved">
                  <span>Dinheiro guardado: {profile?.moneySaved ?? 0}</span>
                </p>
                <p className="finances salary">
                  <span>Salario: {profile?.salary ?? 0}</span>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="card-finance">
            <CardContent className="card-finance-content">
              <div className="titles add-finance">
                <h3 className="card-finance-subtitle">
                  Aqui estão suas despesas:
                </h3>

                <ModalContextProvider>
                  <Finances.Add.Expenses />
                </ModalContextProvider>
              </div>

              <div className="card-finances">
                <p className="finances total-expenses">
                  {profile && profile.recurringExpenses.length
                    ? 'Local | Instituição Bancária | Total: 10'
                    : 'Você não possuí gastos ainda esse mês.'}
                </p>

                {profile && profile.recurringExpenses.length > 0 &&
                  profile.recurringExpenses.map((recurringExpenses) => (
                    <p className="finances spending">
                      {recurringExpenses.name} {recurringExpenses.institution}{' '}
                      {recurringExpenses.value}
                    </p>
                  ))}
              </div>

              <div className="link">
                <Link className="link-finance" to="/expenses">
                  ver mais
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="card-finance">
            <CardContent className="card-finance-content">
              <div className="titles add-finance">
                <h3 className="card-finance-subtitle">
                  Aqui estão seus gastos:
                </h3>

                <ModalContextProvider>
                  <Finances.Add.Spending />
                </ModalContextProvider>
              </div>

              <div className="card-finances">
                <p className="finances total-spent">
                  {profile?.spending.length
                    ? 'Local | Instituição Bancária | Total: 10'
                    : 'Você não possuí gastos ainda esse mês.'}
                </p>

                {profile && profile.spending.length > 0 &&
                  profile.spending.map((spending) => (
                    <p className="finances spending">
                      {spending.name} {spending.institution} {spending.value}
                    </p>
                  ))}
              </div>

              <div className="link">
                <Link className="link-finance" to="/spending">
                  ver mais
                </Link>
              </div>
            </CardContent>
          </Card>
        </aside>
      }
    />
  )
}

export default FinancesCards
