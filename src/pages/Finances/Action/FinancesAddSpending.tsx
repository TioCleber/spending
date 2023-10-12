import { useAddSpending } from '../../../hooks/useAddSpending'

import { Modal } from './../../../components/Modal'
import { Buttons } from './../../../components/Buttons'
import { Icons } from './../../../components/Icons'
import { Inputs } from './../../../components/Inputs'
import { Select } from '../../../components/Select'

import './../../../styles/add.css'
import { formatCurrency } from '../../../utils/formatCurrency'

const FinancesAddSpending = () => {
  const {
    spending,
    categories,
    handleSpending,
    handleAddSpending,
    handleCategoryRecurringSpending,
    handleSpendingValue,
    loading,
    error,
    success,
  } = useAddSpending()

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
                onChange={handleSpending}
                value={spending.name}
                name="name"
              />
            </Inputs.Wrapper>

            <Inputs.Wrapper>
              <Inputs.Label label="Estabelecimento ou Serviço" />
              <Inputs.Action
                onChange={handleSpending}
                value={spending.establishmentsOrServices}
                name="establishmentsOrServices"
              />
            </Inputs.Wrapper>

            <Select.Wrapper>
              <Select.Label label="Categorias" />

              <Select.Action
                label="Categorias"
                onChange={handleCategoryRecurringSpending}
                value={spending.category ?? ''}
                items={categories}
                newItem
              />
            </Select.Wrapper>
          </Inputs.Group>

          <Inputs.Group>
            <Inputs.Wrapper>
              <Inputs.Label label="" />
              <Inputs.Action
                onChange={handleSpending}
                value={spending.date}
                type="date"
                name="date"
              />
            </Inputs.Wrapper>

            <Inputs.Wrapper>
              <Inputs.Label label="Valor" />
              <Inputs.Action
                onChange={handleSpendingValue}
                value={formatCurrency(Number(spending.value))}
                name="value"
              />
            </Inputs.Wrapper>
          </Inputs.Group>

          <Buttons.Wrapper>
            <Modal.Trigger disabled={loading} type="cancel">
              cancelar
            </Modal.Trigger>

            <Buttons.Action disabled={loading} onClick={handleAddSpending}>
              {loading ? <Icons.Loading size={24} /> : 'Adicionar'}
            </Buttons.Action>
          </Buttons.Wrapper>
        </section>
      </Modal.TriggerModal>
    </>
  )
}

export default FinancesAddSpending
