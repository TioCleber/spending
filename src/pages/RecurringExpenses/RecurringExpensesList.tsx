import { Container } from '../../components/Container'
import { Infos } from '../../components/Infos'
import List from '../../components/List/List'
import { useRecurringExpenses } from '../../context/RecurringExpensesContext'

const RecurringExpensesList = () => {
  const recurringExpenses = useRecurringExpenses()

  if (recurringExpenses && !recurringExpenses.loading) {
    const installmentsAndValue = (index: number) => {
      const installments =
        recurringExpenses?.expenses?.recurringExpenses[index].installments

      const value = recurringExpenses.expenses?.recurringExpenses[index].value

      if (installments) {
        return `${installments} x ${value}`
      }

      return `${value}`
    }

    const missingInstallments = (index: number) => {
      const missingInstallments =
        recurringExpenses.expenses?.recurringExpenses[index].missingInstallments

      if (missingInstallments) {
        return `faltam ${missingInstallments} parcelas`
      }

      return ''
    }

    return (
      <Container.UlList>
        {recurringExpenses.expenses?.recurringExpenses.map((exp, index) => (
          <List key={exp.id}>
            <Container.Finance>
              <Infos.Finance>
                <Infos.Values value={exp.name} />

                <Infos.Values
                  name="Estabelecimento / Serviço: "
                  value={exp.establishmentsOrServices}
                />

                <Infos.Values value="faltou a categoria na request ç.ç" />
              </Infos.Finance>

              <Infos.Finance>
                <Infos.Values value={installmentsAndValue(index)} />

                <Infos.Values value={missingInstallments(index)} />

                <Infos.Values value={exp.payday} />
              </Infos.Finance>
            </Container.Finance>
          </List>
        ))}
      </Container.UlList>
    )
  }

  return (
    <Container.UlList>
      Você Não possuí nenhuma despesa registrada!
    </Container.UlList>
  )
}

export default RecurringExpensesList
