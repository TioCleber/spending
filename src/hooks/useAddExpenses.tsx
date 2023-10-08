import { ChangeEvent, useEffect, useState } from 'react'
import { useService } from './useService'
import { useAxios } from './useAxios'
import { useCategories } from '../context/CategoriesContext'
import { SelectChangeEvent } from '@mui/material'

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
  const { expensesCategories } = useCategories()

  const categories = expensesCategories.map((category) => ({
    value: category.name,
    id: category.id,
  }))

  const handleExpenses = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setExpenses((oldValue) => ({
      ...oldValue,
      [e.target.name]: e.target.value,
    }))
  }

  const handleCategoryRecurringExpenses = (e: SelectChangeEvent<any>) => {
    setExpenses((oldValues) => ({ ...oldValues, category: e.target.value }))
  }

  const handleAddExpenses = async () => {
    const category = categories.find((cat) => cat.id === expenses.category)

    const validateCategory = !category
      ? { category: expenses.category }
      : { categoriesId: expenses.category }

    const body = {
      name: expenses.name,
      date: new Date(expenses.date).toISOString(),
      establishmentsOrServices: expenses.establishmentsOrServices,
      value: Number(expenses.value),
      installments: expenses.installments && Number(expenses.installments),
      missingInstallments:
        expenses.missingInstallments && Number(expenses.missingInstallments),
      payday: expenses.payday,
      ...validateCategory,
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
    handleCategoryRecurringExpenses,
    categories,
    loading,
    error,
    success,
  }
}
