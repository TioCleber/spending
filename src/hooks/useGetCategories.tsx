import { useCallback } from 'react'

import { useService } from './useService'

import { Categories } from '../typings/categories'
import { INITIAL_CATEGORIES_VALUES } from '../constants/categories'
import { useQuery } from 'react-query'
import { useApi } from './useApi'

export const useGetCategories = () => {
  const { headers } = useService()
  const { api } = useApi()

  const handleGetCategories = useCallback(async () => {
    const response = await api.get<Categories>('/v1/pvt/categories', {
      headers,
    })

    return response.data
  }, [])

  const { data } = useQuery({
    queryKey: ['categories'],
    queryFn: handleGetCategories,
  })

  return { categories: data ?? INITIAL_CATEGORIES_VALUES }
}
