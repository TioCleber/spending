import { Container } from '../../components/Container'
import { Infos } from '../../components/Infos'
import List from '../../components/List/List'

const RecurringExpensesList = () => {
  return (
    <Container.UlList>
      <List>
        <Container.Finance>
          <Infos.Finance>
            <Infos.Values value="teste" />

            <Infos.Values name="Estabelecimento / Serviço: " value="teste" />

            <Infos.Values value="teste" />
          </Infos.Finance>

          <Infos.Finance>
            <Infos.Values value="10 x 10.00" />

            <Infos.Values value="faltam 10 parcelas" />

            <Infos.Values value="Todo dia 10" />
          </Infos.Finance>
        </Container.Finance>
      </List>
    </Container.UlList>
  )
}

export default RecurringExpensesList
