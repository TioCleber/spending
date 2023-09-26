import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { useCookies } from '../../hooks/useCookies'
import { IProfile } from '../../typings/profile'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  Paper,
  Skeleton,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from '@mui/material'
import {
  DateRange,
  ExpandMore,
  Info,
  MonetizationOn,
  Payment,
  Sell,
} from '@mui/icons-material'

export const Spending = () => {
  const [data, setData] = useState<IProfile>()
  const [loading, setLoading] = useState(false)
  const token = useCookies()

  useEffect(() => {
    setLoading(true)

    // axios
    //   .get('https://spending-service.onrender.com/v1/pvt/profile', {
    //     headers: {
    //       authorization: token,
    //       'x-api-token':
    //         'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJVc2VybmFtZSI6InNwZW5kaW5nLXNlcnZpY2UiLCJpYXQiOjE2OTU3NDc0MDR9.2eVnPocV2mM1L6NACbP8WceY4WX2w-ugXsMtBQWaoBY',
    //       'x-api-key':
    //         '$2a$12$Yk/vOxYY1cmwfTIGzM7SCujV0G5UP67pSf7SvJTEEKObfYEEJbQiq',
    //     },
    //   })
    //   .then((res: AxiosResponse<any, IProfile>) => {
    //     setData(res.data)
    //   })
    //   .catch((_err) => setLoading(true))

    setLoading(false)
  }, [token])

  console.log(data)

  return (
    <section>
      <div>
        {loading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <Skeleton variant="rectangular" width={500} height={250} />
            <Skeleton variant="rectangular" width={500} height={250} />
            <Skeleton variant="rectangular" width={500} height={250} />
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <Card sx={{ minWidth: 500, minHeight: 250 }}>
              <CardContent>
                <h1>Olá Merita</h1>
                <p>Aqui está sua finança de hoje:</p>

                <div>
                  <p>
                    <span>Dinheiro guardado: </span>
                    10
                  </p>
                  <p>
                    <span>Ganhos: </span>
                    10
                  </p>
                  <p>
                    <span>Salario: </span>
                    10
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card sx={{ minWidth: 500, minHeight: 250 }}>
              <CardContent>
                <p>Aqui estão suas despesas:</p>

                <div>
                  <p>Total: 10</p>

                  <p>Teste teste 10</p>
                  <p>Teste teste 10</p>
                  <p>Teste teste 10</p>
                </div>
              </CardContent>
            </Card>

            <Card sx={{ minWidth: 500, minHeight: 250 }}>
              <CardContent>
                <p>Aqui estão seus gastos:</p>

                <div>
                  <p>Total: 10</p>

                  <p>Teste teste 10</p>
                  <p>Teste teste 10</p>
                  <p>Teste teste 10</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <div>
        {loading ? (
          <Skeleton variant="rectangular" width={'100%'} height={500} />
        ) : (
          <div>
            <h1>Gastos:</h1>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p>Setembro - total: 138.90</p>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer component={Paper}>
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">
                        Nome <Sell />
                      </TableCell>
                      <TableCell align="left">
                        valor <MonetizationOn />
                      </TableCell>
                      <TableCell align="left">
                        Instituição bancaria{' '}
                        <Tooltip
                          title="Instituição bancária onde foi feito o método de pagamento"
                          placement="top"
                        >
                          <Info />
                        </Tooltip>
                      </TableCell>
                      <TableCell align="left">
                        Método de pagamento <Payment />
                      </TableCell>
                      <TableCell align="left">
                        data <DateRange />
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    <TableCell align="center">Casas Bahia</TableCell>
                    <TableCell align="center">138.90</TableCell>
                    <TableCell align="center">Itau</TableCell>
                    <TableCell align="center">Pix</TableCell>
                    <TableCell align="center">25/09/2023</TableCell>
                  </TableBody>
                </TableContainer>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p>Agosto - total: 138.90</p>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer component={Paper}>
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">
                        Nome <Sell />
                      </TableCell>
                      <TableCell align="left">
                        valor <MonetizationOn />
                      </TableCell>
                      <TableCell align="left">
                        Instituição bancaria{' '}
                        <Tooltip
                          title="Instituição bancária onde foi feito o método de pagamento"
                          placement="top"
                        >
                          <Info />
                        </Tooltip>
                      </TableCell>
                      <TableCell align="left">
                        Método de pagamento <Payment />
                      </TableCell>
                      <TableCell align="left">
                        data <DateRange />
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    <TableCell align="center">Casas Bahia</TableCell>
                    <TableCell align="center">138.90</TableCell>
                    <TableCell align="center">Itau</TableCell>
                    <TableCell align="center">Pix</TableCell>
                    <TableCell align="center">25/09/2023</TableCell>
                  </TableBody>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
          </div>
        )}
      </div>
    </section>
  )
}
