import { useState } from 'react'
import { useAxios } from './../../../hooks/useAxios'
import { useService } from './../../../hooks/useService'
import { useCategories } from './../../../context/CategoriesContext'

import { Modal } from './../../../components/Modal'
import { Icons } from './../../../components/Icons'
import { Inputs } from './../../../components/Inputs'
import { Buttons } from './../../../components/Buttons'
import { Select } from '../../../components/Select'

import './../../../styles/add.css'

interface Expenses {
  name: string
  institution: string
  value: number
  date: string
  category?: string
}

const INITIAL_VALUE = {
  name: '',
  institution: '',
  value: 0,
  date: '',
}

const FinancesAddExpenses = () => {
  const { post, loading, error, success } = useAxios()
  const { url, headers } = useService()
  const [expenses, setExpenses] = useState<Expenses>(INITIAL_VALUE)
  const { expensesCategories } = useCategories()

  const handleClick = () => {
    const body = {
      name: expenses.name,
      date: new Date(expenses.date).toISOString(),
      institution: expenses.institution,
      value: Number(expenses.value),
      category: expenses.category,
    }

    post({ url: `${url}v1/pvt/recurring-expenses`, headers, body })
  }

  const categories = expensesCategories.map((category) => ({
    name: category.name,
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
              <Inputs.Action onChange={() => {}} value={''} name="" />
            </Inputs.Wrapper>

            <Inputs.Wrapper>
              <Inputs.Label label="Estabelecimento ou Serviço" />
              <Inputs.Action onChange={() => {}} value={''} name="" />
            </Inputs.Wrapper>

            <Select.Wrapper>
              <Select.Label label="Categorias" />

              <Select.Action
                label="Categorias"
                onChange={(e) => console.log(e)}
                value={''}
              >
                {categories &&
                  categories.map((category) => (
                    <Select.MenuItem
                      label={category.name}
                      value={category.name}
                    />
                  ))}

                <Inputs.Wrapper>
                  <Inputs.Action
                    placeholder="Preencha uma Categoria"
                    onChange={() => {}}
                    value={''}
                    name=""
                  />
                </Inputs.Wrapper>
              </Select.Action>
            </Select.Wrapper>
          </Inputs.Group>

          <Inputs.Group>
            <Inputs.Wrapper>
              <Inputs.Label label="Data" />
              <Inputs.Action onChange={() => {}} value={''} name="" />
            </Inputs.Wrapper>

            <Inputs.Wrapper>
              <Inputs.Label label="Dia de pagamento" />
              <Inputs.Action onChange={() => {}} value={''} name="" />
            </Inputs.Wrapper>

            <Inputs.Wrapper>
              <Inputs.Label label="Valor" />
              <Inputs.Action onChange={() => {}} value={''} name="" />
            </Inputs.Wrapper>
          </Inputs.Group>

          <Inputs.Group>
            <Inputs.Wrapper>
              <Inputs.Label label="Parcelas" />
              <Inputs.Action onChange={() => {}} value={''} name="" />
            </Inputs.Wrapper>

            <Inputs.Wrapper>
              <Inputs.Label label="Parcelas faltantes" />
              <Inputs.Action onChange={() => {}} value={''} name="" />
            </Inputs.Wrapper>
          </Inputs.Group>

          <Buttons.Wrapper>
            <Modal.Trigger disabled={loading} type="cancel">
              cancelar
            </Modal.Trigger>

            <Buttons.Action disabled={loading} onClick={handleClick}>
              {loading ? <Icons.Loading size={24} /> : 'Adicionar'}
            </Buttons.Action>
          </Buttons.Wrapper>
        </section>
      </Modal.TriggerModal>
    </>
  )
}

export default FinancesAddExpenses
