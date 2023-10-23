import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { useService } from './useService'
import { useCategories } from '../context/CategoriesContext'
import { SelectChangeEvent } from '@mui/material'
import { formatCurrencyToIntValue } from '../utils/formatCurrency'
import { useApi } from './useApi'
import { useMutation } from 'react-query'
import { AxiosError } from 'axios'
import { ErrorData } from '../typings/error'

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
  const { headers } = useService()
  const { api } = useApi()
  const { spendingCategories } = useCategories()

  const categories = useMemo(() => {
    return spendingCategories.map((category) => ({
      value: category.name,
      id: category.id,
    }))
  }, [spendingCategories])

  const handleSpending = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setSpending((oldValue) => ({
        ...oldValue,
        [e.target.name]: e.target.value,
      }))
    },
    []
  )

  const handleSpendingValue = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setSpending((oldValue) => ({
        ...oldValue,
        [e.target.name]: formatCurrencyToIntValue(e.target.value),
      }))
    },
    []
  )

  const handleCategoryRecurringSpending = useCallback(
    (e: SelectChangeEvent<any>) => {
      setSpending((oldValues) => ({ ...oldValues, category: e.target.value }))
    },
    []
  )

  const handleAddSpending = useCallback(async () => {
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

    const response = await api.post('/v1/pvt/spending', body, { headers })

    setSpending(INITIAL_VALUE)

    return response.data
  }, [api, categories, headers, spending])

  const { mutate, isLoading, isSuccess, error } = useMutation<
    any,
    AxiosError<ErrorData>
  >({
    mutationKey: ['create-spending'],
    mutationFn: handleAddSpending,
  })

  const handleMutationAddSpending = useCallback(() => {
    mutate()
  }, [mutate])

  return {
    spending,
    handleSpending,
    handleAddSpending: handleMutationAddSpending,
    handleCategoryRecurringSpending,
    handleSpendingValue,
    categories,
    loading: isLoading,
    error,
    success: isSuccess,
  }
}
