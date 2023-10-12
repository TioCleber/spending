import { ChangeEvent, useEffect, useState } from 'react'
import { useService } from './useService'
import { useAxios } from './useAxios'
import { useCategories } from '../context/CategoriesContext'
import { SelectChangeEvent } from '@mui/material'
import { formatCurrencyToIntValue } from '../utils/formatCurrency'

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
  const { spendingCategories } = useCategories()

  const categories = spendingCategories.map((category) => ({
    value: category.name,
    id: category.id,
  }))

  const handleSpending = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSpending((oldValue) => ({
      ...oldValue,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSpendingValue = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSpending((oldValue) => ({
      ...oldValue,
      [e.target.name]: formatCurrencyToIntValue(e.target.value),
    }))
  }

  const handleCategoryRecurringSpending = (e: SelectChangeEvent<any>) => {
    setSpending((oldValues) => ({ ...oldValues, category: e.target.value }))
  }

  const handleAddSpending = () => {
    const category = categories.find((cat) => cat.id === spending.category)

    const validateCategory = !category
      ? { category: spending.category }
      : { categoriesId: spending.category }

    const body = {
      name: spending.name,
      date: new Date(spending.date).toISOString(),
      establishmentsOrServices: spending.establishmentsOrServices,
      value: Number(spending.value),
      ...validateCategory,
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
    handleCategoryRecurringSpending,
    handleSpendingValue,
    categories,
    loading,
    error,
    success,
  }
}
