import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  Skeleton,
} from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import { useAxios } from '../../hooks/useAxios'
import { useEffect, useState } from 'react'
import { useService } from '../../hooks/useService'
import { Link, useNavigate } from 'react-router-dom'
import { IProfile } from '../../typings/profile'

import './../../styles/fincances.css'

export const Finances = () => {
  const { get, loading, error } = useAxios()
  const { url, headers } = useService()
  const [profile, setProfile] = useState<IProfile>()

  const navigate = useNavigate()

  useEffect(() => {
    // get({ url: `${url}v1/pvt/profile`, headers, data: setProfile })
  }, [])

  useEffect(() => {
    if (error) {
      navigate('/')
    }
  }, [error, navigate])

  console.log(profile)

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
                <h1 className="card-finance-title">Olá Nome</h1>

                <h3 className="card-finance-subtitle">
                  Aqui está sua finança de hoje:
                </h3>
              </div>

              <div className="card-finances">
                <p className="finances money-saved">
                  <span>Dinheiro guardado: </span>
                  10
                </p>
                <p className="finances earnings">
                  <span>Ganhos: </span>
                  10
                </p>
                <p className="finances salary">
                  <span>Salario: </span>
                  10
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
              </div>

              <div className="card-finances">
                <p className="finances total-expenses">
                  Local | Instituição Bancária | Total: 10
                </p>

                <p className="finances spending">Casas Bahia Itaú 10</p>
                <p className="finances spending">Casas Bahia Itaú 10</p>
                <p className="finances spending">Casas Bahia Itaú 10</p>
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
              </div>

              <div className="card-finances">
                <p className="finances total-spent">
                  Local | Instituição Bancária | Total: 10
                </p>

                <p className="finances spending">Casas Bahia Itaú 10</p>
                <p className="finances spending">Casas Bahia Itaú 10</p>
                <p className="finances spending">Casas Bahia Itaú 10</p>
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

          {profile.spending.allSpent.length && (
            <div className="container-spending">
              <ul className="list-of-spending">
                <li className="line-spending">
                  <p className="text-spending">
                    <span className="name">Nome</span>
                    <span className="value">Valor</span>
                  </p>

                  <p className="text-spending">
                    <span className="institution">Instituição</span>
                    <span className="date">Data</span>
                  </p>
                </li>
              </ul>
            </div>
          )}
        </aside>
      )}
    </section>
  )
}
