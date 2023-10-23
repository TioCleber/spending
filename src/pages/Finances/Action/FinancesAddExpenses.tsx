import { useAddExpenses } from '../../../hooks/useAddExpenses'

import { Modal } from './../../../components/Modal'
import { Icons } from './../../../components/Icons'
import { Inputs } from './../../../components/Inputs'
import { Buttons } from './../../../components/Buttons'
import { Select } from '../../../components/Select'
import { formatCurrency } from '../../../utils/formatCurrency'

import './../../../styles/add.css'

const FinancesAddExpenses = () => {
  const {
    expenses,
    categories,
    handleExpenses,
    handleAddExpenses,
    handleCategoryRecurringExpenses,
    handleExpensesValue,
    loading,
    error,
    success,
  } = useAddExpenses()

  return (
    <>
      <Modal.Trigger type="close">
        <Icons.Add />
      </Modal.Trigger>

      <Modal.TriggerModal>
        <Modal.Trigger disabled={loading} type="close">
          <Icons.Close />
        </Modal.Trigger>

        <section className="add-record">
          <h2 className="">Adicionar</h2>

          <Inputs.Group>
            <Inputs.Wrapper>
              <Inputs.Label label="Nome" />
              <Inputs.Action
                onChange={handleExpenses}
                value={expenses.name}
                name="name"
              />
            </Inputs.Wrapper>

            <Inputs.Wrapper>
              <Inputs.Label label="Estabelecimento ou Serviço" />
              <Inputs.Action
                onChange={handleExpenses}
                value={expenses.establishmentsOrServices}
                name="establishmentsOrServices"
              />
            </Inputs.Wrapper>

            <Select.Wrapper>
              <Select.Label label="Categorias" />

              <Select.Action
                label="Categorias"
                onChange={handleCategoryRecurringExpenses}
                value={expenses.category ?? ''}
                items={categories}
                newItem
              />
            </Select.Wrapper>
          </Inputs.Group>

          <Inputs.Group>
            <Inputs.Wrapper>
              <Inputs.Label label="" />
              <Inputs.Action
                onChange={handleExpenses}
                value={expenses.date}
                type="date"
                name="date"
              />
            </Inputs.Wrapper>

            <Inputs.Wrapper>
              <Inputs.Label label="Dia de pagamento" />
              <Inputs.Action
                onChange={handleExpenses}
                value={expenses.payday ?? ''}
                name="payday"
              />
            </Inputs.Wrapper>

            <Inputs.Wrapper>
              <Inputs.Label label="Valor" />
              <Inputs.Action
                onChange={handleExpensesValue}
                value={formatCurrency(Number(expenses.value))}
                name="value"
              />
            </Inputs.Wrapper>
          </Inputs.Group>

          <Inputs.Group>
            <Inputs.Wrapper>
              <Inputs.Label label="Parcelas" />
              <Inputs.Action
                onChange={handleExpenses}
                value={expenses.installments ?? ''}
                name="installments"
              />
            </Inputs.Wrapper>

            <Inputs.Wrapper>
              <Inputs.Label label="Parcelas faltantes" />
              <Inputs.Action
                onChange={handleExpenses}
                value={expenses.missingInstallments ?? ''}
                name="missingInstallments"
              />
            </Inputs.Wrapper>
          </Inputs.Group>

          <Buttons.Wrapper>
            <Modal.Trigger disabled={loading} type="cancel">
              cancelar
            </Modal.Trigger>

            <Buttons.Action disabled={loading} onClick={handleAddExpenses}>
              {loading ? <Icons.Loading size={24} /> : 'Adicionar'}
            </Buttons.Action>
          </Buttons.Wrapper>
        </section>
      </Modal.TriggerModal>
    </>
  )
}

export default FinancesAddExpenses
