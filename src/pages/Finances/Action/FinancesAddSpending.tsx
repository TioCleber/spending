import { useState } from 'react'
import { useAxios } from './../../../hooks/useAxios'
import { useService } from './../../../hooks/useService'
import { useCategories } from './../../../context/CategoriesContext'

import { Modal } from './../../../components/Modal'
import { Buttons } from './../../../components/Buttons'
import { Icons } from './../../../components/Icons'
import { Inputs } from './../../../components/Inputs'
import { Select } from '../../../components/Select'

import './../../../styles/add.css'

interface Spending {
  name: string
  institution: string
  value: number
  date: string
  paymentMethod: string
  category?: string
}

const INITIAL_VALUE = {
  name: '',
  institution: '',
  value: 0,
  date: '',
  paymentMethod: '',
}

const FinancesAddSpending = () => {
  const { loading, post } = useAxios()
  const { url, headers } = useService()
  const [spending, setSpending] = useState<Spending>(INITIAL_VALUE)
  const { spendingCategories } = useCategories()

  const handleClick = () => {
    const body = {
      name: spending.name,
      date: new Date(spending.date).toISOString(),
      institution: spending.institution,
      value: Number(spending.value),
      paymentMethod: spending.paymentMethod,
      category: spending.category,
    }

    post({ url: `${url}v1/pvt/spending`, headers, data: setSpending, body })
  }

  const categories = spendingCategories.map((category) => ({
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
              <Inputs.Label label="Valor" />
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

export default FinancesAddSpending
