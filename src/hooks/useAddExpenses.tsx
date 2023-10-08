import { ChangeEvent, useEffect, useState } from 'react'
import { useService } from './useService'
import { useAxios } from './useAxios'

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

export const useAddExpenses = () => {
  const [expenses, setExpenses] = useState<Expenses>(INITIAL_VALUE)

  const { url, headers } = useService()
  const { post, success, loading, error } = useAxios()

  const handleExpenses = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setExpenses((oldValue) => ({
      ...oldValue,
      [e.target.name]: e.target.value,
    }))
  }

  const handleAddExpenses = async () => {
    const body = {
      name: expenses.name,
      date: new Date(expenses.date).toISOString(),
      establishmentsOrServices: expenses.establishmentsOrServices,
      value: Number(expenses.value),
      category: expenses.category,
      installments: expenses.installments && Number(expenses.installments),
      missingInstallments:
        expenses.missingInstallments && Number(expenses.missingInstallments),
      payday: expenses.payday,
    }

    post({ url: `${url}v1/pvt/recurring-expenses`, body, headers })
  }

  useEffect(() => {
    if (success) {
      setExpenses(INITIAL_VALUE)
    }
  }, [success])

  return {
    expenses,
    handleExpenses,
    handleAddExpenses,
    loading,
    error,
    success,
  }
}
