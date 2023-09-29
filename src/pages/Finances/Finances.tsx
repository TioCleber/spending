import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAxios } from '../../hooks/useAxios'
import { useService } from '../../hooks/useService'

import { Button, Card, CardContent, Skeleton } from '@mui/material'
import SelectCustom from '../../components/Select/Select'
import AddExpenses from './AddExpenses/AddExpenses'
import AddSpending from './AddSpending/AddSpending'

import { months, period } from '../../constants/months'
import { INITIAL_VALUE_SEARCH, category } from '../../constants/search'
import { Search } from '../../typings/search'
import { IProfile } from '../../typings/profile'

import './../../styles/fincances.css'

export const Finances = () => {
  const { get, loading, error, post } = useAxios()
  const { url, headers } = useService()
  const [profile, setProfile] = useState<IProfile>()
  const [search, setSearch] = useState<Search>(INITIAL_VALUE_SEARCH)

  const navigate = useNavigate()

  useEffect(() => {
    get({ url: `${url}v1/pvt/profile`, headers, data: setProfile })
  }, [])

  useEffect(() => {
    if (error) {
      navigate('/')
    }
  }, [error, navigate])

  console.log(profile)

  console.log(search)

  return (
    <section className="section-finances">
      {loading || !profile || error ? (
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
      ) : (
        <aside className="cards-finance">
          <Card className="card-finance">
            <CardContent className="card-finance-content">
              <div className="titles">
                <h1 className="card-finance-title">
                  Olá {`${profile.firstName} ${profile.lastName}`}
                </h1>

                <h3 className="card-finance-subtitle">
                  Aqui está sua finança de hoje:
                </h3>
              </div>

              <div className="card-finances">
                <p className="finances money-saved">
                  <span>Dinheiro guardado: {profile.moneySaved ?? 0}</span>
                </p>
                <p className="finances earnings">
                  <span>Ganhos: {profile.earnings ?? 0}</span>
                </p>
                <p className="finances salary">
                  <span>Salario: {profile.salary ?? 0}</span>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="card-finance">
            <CardContent className="card-finance-content">
              <div className="titles">
                <h3 className="card-finance-subtitle">
                  Aqui estão suas despesas:
                </h3>

                <AddExpenses />
              </div>

              <div className="card-finances">
                <p className="finances total-expenses">
                  {profile.expenses.allExpenses.length
                    ? 'Local | Instituição Bancária | Total: 10'
                    : 'Você não possuí gastos ainda esse mês.'}
                </p>

                {profile.expenses.allExpenses.length > 0 &&
                  profile.expenses.allExpenses.map((expenses) => (
                    <p className="finances spending">
                      {expenses.name} {expenses.institution} {expenses.value}
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
              <div className="titles">
                <h3 className="card-finance-subtitle">
                  Aqui estão seus gastos:
                </h3>

                <AddSpending />
              </div>

              <div className="card-finances">
                <p className="finances total-spent">
                  {profile.spending.allSpent.length
                    ? 'Local | Instituição Bancária | Total: 10'
                    : 'Você não possuí gastos ainda esse mês.'}
                </p>

                {profile.spending.allSpent.length > 0 &&
                  profile.spending.allSpent.map((spending) => (
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
      )}

      {loading || !profile || error ? (
        <Skeleton sx={{ width: '100%', height: 65 }} />
      ) : (
        <aside className="container-search">
          <div className="search">
            <SelectCustom
              label="Mês"
              setState={setSearch}
              value={search.period}
              values={months}
              name="period"
              state={search}
            />

            <SelectCustom
              setState={setSearch}
              value={search.category}
              name="category"
              state={search}
              label="Categoria"
              values={category}
            />

            <Button className="button button-login" variant="outlined">
              Buscar
            </Button>
          </div>
        </aside>
      )}

      {loading || !profile || error ? (
        <Skeleton
          className="spending"
          variant="rectangular"
          width={'100%'}
          height={500}
        />
      ) : (
        <aside className="spending">
          <h3 className="title-spending">
            {profile.spending.allSpent.length
              ? 'Seus Gastos este mês'
              : 'Você não tem gastos este mês.'}
          </h3>

          {profile.spending.allSpent.length > 0 && (
            <div className="container-spending">
              <ul className="list-of-spending">
                {profile.spending.allSpent.map((spending) => (
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
            </div>
          )}
        </aside>
      )}
    </section>
  )
}
