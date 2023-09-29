import { useEffect, useState } from 'react'
import { useModal } from '../../../hooks/useModal'
import { useAxios } from '../../../hooks/useAxios'
import { useService } from '../../../hooks/useService'

import { CircularProgress } from '@mui/material'
import { Add } from '@mui/icons-material'
import { InputText } from '../../../components/Inputs/InputText'
import ModalCustom from '../../../components/Modal/Modal'
import SelectCustom from '../../../components/Select/Select'

import './../../../styles/add.css'

interface Spending {
  name: string
  institution: string
  value: number
  date: string
  paymentMethod: string
  category?: string
}

interface Categories {
  expensesCategories: AllCategories[]
  spendingCategories: AllCategories[]
}

interface AllCategories {
  id: string
  name: string
  createdAt: string
  updatedAt: string
}

const INITIAL_VALUE = {
  name: '',
  institution: '',
  value: 0,
  date: '',
  paymentMethod: '',
}

const AddCustom = () => {
  const { handleOpenModal, open } = useModal()
  const { loading, post, get } = useAxios()
  const { url, headers } = useService()
  const [spending, setSpending] = useState<Spending>(INITIAL_VALUE)
  const [categories, setCategories] = useState<Categories>()

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

  useEffect(() => {
    // get({ url: `${url}v1/pvt/categories`, headers, data: setCategories })
  }, [])

  const categoriesName = categories?.spendingCategories.map((category) => category.name)

  return (
    <>
      <button onClick={handleOpenModal} className="button button-add">
        <Add />
      </button>

      <ModalCustom open={open} handleOpenModal={handleOpenModal}>
        <section className="add-record">
          <aside className="input-groups">
            <InputText
              label="Nome"
              name="name"
              setState={setSpending}
              state={spending}
              value={spending?.name}
            />

            <InputText
              label="Instituição"
              name="institution"
              setState={setSpending}
              state={spending}
              value={spending.institution}
            />
          </aside>

          <aside className="input-groups">
            <InputText
              label="Data"
              name="date"
              setState={setSpending}
              state={spending}
              value={spending.date}
            />

            <InputText
              label="Valor"
              name="value"
              setState={setSpending}
              state={spending}
              value={spending.value}
            />
          </aside>

          <aside className="categories">
            <InputText
              label="Método de pagamento"
              name="paymentMethod"
              setState={setSpending}
              state={spending}
              value={spending.paymentMethod}
            />

            <InputText
              label="Categoria"
              name="category"
              setState={setSpending}
              state={spending}
              value={spending.category}
            />

            <SelectCustom
              name="category"
              setState={() => {}}
              state={spending}
              value={''}
              label="Categoria"
              values={categoriesName ?? ['']}
            />
          </aside>

          <aside className="container-buttons">
            <button onClick={handleOpenModal} className="button button-cancel">
              cancelar
            </button>

            <button onClick={handleClick} className="button button-submit">
              {loading ? (
                <CircularProgress
                  style={{ width: 24, height: 24 }}
                  className="loading"
                />
              ) : (
                'Adicionar'
              )}
            </button>
          </aside>
        </section>
      </ModalCustom>
    </>
  )
}

export default AddCustom
