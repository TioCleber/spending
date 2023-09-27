import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  Skeleton,
} from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

export const Spending = () => {
  return (
    <section>
      <div>
        {false ? (
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
        {false ? (
          <Skeleton variant="rectangular" width={'100%'} height={500} />
        ) : (
          <div>
            <h1>Gastos</h1>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p>Setembro - total: 138.90</p>
              </AccordionSummary>
              <AccordionDetails>
                <div>teste</div>
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
                <div>teste</div>
              </AccordionDetails>
            </Accordion>
          </div>
        )}
      </div>
    </section>
  )
}
