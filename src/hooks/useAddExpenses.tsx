import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { useService } from './useService'
import { useCategories } from '../context/CategoriesContext'
import { SelectChangeEvent } from '@mui/material'
import { formatCurrencyToIntValue } from '../utils/formatCurrency'
import { useApi } from './useApi'
import { useMutation } from 'react-query'
import { AxiosError } from 'axios'
import { ErrorData } from '../typings/error'

interface Expenses {
  name: string
  installments?: number
  missingInstallments?: number
  payday?: string
  establishmentsOrServices: string
  value?: string
  date: string
  category?: string
}

const INITIAL_VALUE = {
  name: '',
  establishmentsOrServices: '',
  date: '',
}

export const useAddExpenses = () => {
  const [expenses, setExpenses] = useState<Expenses>(INITIAL_VALUE)

  const { headers } = useService()
  const { api } = useApi()
  const { expensesCategories } = useCategories()

  const categories = useMemo(() => {
    return expensesCategories.map((category) => ({
      value: category.name,
      id: category.id,
    }))
  }, [expensesCategories])

  const handleExpenses = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setExpenses((oldValue) => ({
        ...oldValue,
        [e.target.name]: e.target.value,
      }))
    },
    []
  )

  const handleExpensesValue = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setExpenses((oldValue) => ({
        ...oldValue,
        [e.target.name]: formatCurrencyToIntValue(e.target.value),
      }))
    },
    []
  )

  const handleCategoryRecurringExpenses = useCallback(
    (e: SelectChangeEvent<any>) => {
      setExpenses((oldValues) => ({ ...oldValues, category: e.target.value }))
    },
    []
  )

  const handleAddExpenses = useCallback(async () => {
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

    const response = await api.post('/v1/pvt/recurring-expenses', body, {
      headers,
    })

    setExpenses(INITIAL_VALUE)

    return response.data
  }, [api, categories, headers, expenses])

  const { mutate, isLoading, isSuccess, error } = useMutation<
    any,
    AxiosError<ErrorData>
  >({
    mutationKey: ['create-recurring-expenses'],
    mutationFn: handleAddExpenses,
  })

  const handleMutationAddExpenses = useCallback(() => {
    mutate()
  }, [mutate])

  return {
    expenses,
    handleExpenses,
    handleAddExpenses: handleMutationAddExpenses,
    handleCategoryRecurringExpenses,
    handleExpensesValue,
    categories,
    loading: isLoading,
    error,
    success: isSuccess,
  }
}
