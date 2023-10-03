import { Container } from '../../components/Container'
import { Infos } from '../../components/Infos'
import List from '../../components/List/List'

const SpendingList = () => {
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

            <Infos.Values value="25/08/2023" />
          </Infos.Finance>
        </Container.Finance>
      </List>
    </Container.UlList>
  )
}

export default SpendingList
