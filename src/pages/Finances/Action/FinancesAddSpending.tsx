import { useCategories } from './../../../context/CategoriesContext'
import { useAddSpending } from '../../../hooks/useAddSpending'
import { useSelectItem } from '../../../hooks/useSelectItem'

import { Modal } from './../../../components/Modal'
import { Buttons } from './../../../components/Buttons'
import { Icons } from './../../../components/Icons'
import { Inputs } from './../../../components/Inputs'
import { Select } from '../../../components/Select'

import './../../../styles/add.css'

const FinancesAddSpending = () => {
  const { spendingCategories } = useCategories()
  const {
    spending,
    handleSpending,
    handleAddSpending,
    loading,
    error,
    success,
  } = useAddSpending()

  const categories = spendingCategories.map((category) => ({
    value: category.name,
    id: category.id,
  }))

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
                onChange={(e) => console.log(e.target.value)}
                value={''}
                items={categories}
                newItem
              />
            </Select.Wrapper>
          </Inputs.Group>

          <Inputs.Group>
            <Inputs.Wrapper>
              <Inputs.Label label="Data" />
              <Inputs.Action
                onChange={handleSpending}
                value={spending.date}
                name="date"
              />
            </Inputs.Wrapper>

            <Inputs.Wrapper>
              <Inputs.Label label="Valor" />
              <Inputs.Action
                onChange={handleSpending}
                value={spending.value}
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
