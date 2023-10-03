import { ChangeEvent, useState } from 'react'
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
  installments?: number
  missingInstallments?: number
  payday?: string
  establishmentsOrServices: string
  value: number
  date: string
  category?: string
}

const INITIAL_VALUE = {
  name: '',
  establishmentsOrServices: '',
  value: 0,
  date: '',
}

const FinancesAddExpenses = () => {
  const { post, loading } = useAxios()
  const { url, headers } = useService()
  const [expenses, setExpenses] = useState<Expenses>(INITIAL_VALUE)
  const { expensesCategories } = useCategories()

  const handleClick = () => {
    const body = {
      name: expenses.name,
      date: new Date(expenses.date).toISOString(),
      establishmentsOrServices: expenses.establishmentsOrServices,
      value: Number(expenses.value),
      category: expenses.category,
      installments: expenses.installments,
      missingInstallments: expenses.missingInstallments,
      payday: expenses.payday,
    }

    post({ url: `${url}v1/pvt/recurring-expenses`, headers, body })
  }

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setExpenses((oldValue) => ({
      ...oldValue,
      [e.target.name]: e.target.value,
    }))
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
              <Inputs.Action
                onChange={handleChange}
                value={expenses.name}
                name="name"
              />
            </Inputs.Wrapper>

            <Inputs.Wrapper>
              <Inputs.Label label="Estabelecimento ou Serviço" />
              <Inputs.Action
                onChange={handleChange}
                value={expenses.establishmentsOrServices}
                name="establishmentsOrServices"
              />
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
                    onChange={handleChange}
                    value={expenses.category ?? ''}
                    name="category"
                  />
                </Inputs.Wrapper>
              </Select.Action>
            </Select.Wrapper>
          </Inputs.Group>

          <Inputs.Group>
            <Inputs.Wrapper>
              <Inputs.Label label="Data" />
              <Inputs.Action
                onChange={handleChange}
                value={expenses.date}
                name="date"
              />
            </Inputs.Wrapper>

            <Inputs.Wrapper>
              <Inputs.Label label="Dia de pagamento" />
              <Inputs.Action
                onChange={handleChange}
                value={expenses.payday ?? ''}
                name="payday"
              />
            </Inputs.Wrapper>

            <Inputs.Wrapper>
              <Inputs.Label label="Valor" />
              <Inputs.Action
                onChange={handleChange}
                value={expenses.value}
                name="value"
              />
            </Inputs.Wrapper>
          </Inputs.Group>

          <Inputs.Group>
            <Inputs.Wrapper>
              <Inputs.Label label="Parcelas" />
              <Inputs.Action
                onChange={handleChange}
                value={expenses.installments ?? ''}
                name="installments"
              />
            </Inputs.Wrapper>

            <Inputs.Wrapper>
              <Inputs.Label label="Parcelas faltantes" />
              <Inputs.Action
                onChange={handleChange}
                value={expenses.missingInstallments ?? ''}
                name="missingInstallments"
              />
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
