import { useSpending } from '../../context/SpendingContext'

import { Container } from '../../components/Container'
import { Infos } from '../../components/Infos'
import List from '../../components/List/List'

const SpendingList = () => {
  const spending = useSpending()

  return (
    <Container.UlList>
      {spending?.spending?.spending &&
        spending?.spending?.spending.map((spend) => (
          <List key={spend.id}>
            <Container.Finance>
              <Infos.Finance>
                <Infos.Values value={spend.name} />

                <Infos.Values
                  name="Estabelecimento / Serviço: "
                  value={spend.establishmentsOrServices}
                />

                <Infos.Values value={spend?.category?.name ?? '-'} />
              </Infos.Finance>

              <Infos.Finance>
                <Infos.Values value={`${spend.value}`} />

                <Infos.Values
                  value={`${new Date(spend.date).toLocaleDateString()}`}
                />
              </Infos.Finance>
            </Container.Finance>
          </List>
        ))}
    </Container.UlList>
  )
}

export default SpendingList
