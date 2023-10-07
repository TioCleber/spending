import { ChangeEvent, useEffect, useState } from 'react'
import { useService } from './useService'
import { useAxios } from './useAxios'

interface Spending {
  name: string
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
  paymentMethod: '',
}

export const useAddSpending = () => {
  const [spending, setSpending] = useState<Spending>(INITIAL_VALUE)
  const { url, headers } = useService()
  const { post, loading, error, success } = useAxios()

  const handleSpending = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSpending((oldValue) => ({
      ...oldValue,
      [e.target.name]: e.target.value,
    }))
  }

  const handleAddSpending = () => {
    const body = {
      name: spending.name,
      date: new Date(spending.date).toISOString(),
      establishmentsOrServices: spending.establishmentsOrServices,
      value: Number(spending.value),
      category: spending.category,
    }

    post({ url: `${url}v1/pvt/spending`, headers, data: setSpending, body })
  }

  useEffect(() => {
    if (success) {
      setSpending(INITIAL_VALUE)
    }
  }, [success])

  return {
    spending,
    handleSpending,
    handleAddSpending,
    loading,
    error,
    success,
  }
}
