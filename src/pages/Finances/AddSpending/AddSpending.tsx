import { useState } from 'react'
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

const INITIAL_VALUE = {
  name: '',
  institution: '',
  value: 0,
  date: '',
  paymentMethod: '',
}

const AddCustom = () => {
  const { handleOpenModal, open } = useModal()
  const { loading, post } = useAxios()
  const { url, headers } = useService()
  const [spending, setSpending] = useState<Spending>(INITIAL_VALUE)

  const handleClick = () => {
    const body = {
      name: spending.name,
      date: new Date(spending.date).toISOString(),
      institution: spending.institution,
      value: Number(spending.value),
      paymentMethod: spending.paymentMethod,
      category: spending.category,
    }

    post({ url: `${url}v1/pvt/expenses`, headers, data: setSpending, body })
  }

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

            <SelectCustom
              name="category"
              setState={() => {}}
              state={spending}
              value={''}
              label="Categoria"
              values={['teste']}
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
