import { useEffect, useState } from 'react'

import { useService } from './useService'
import { useAxios } from './useAxios'

import { Categories } from '../typings/categories'
import { INITIAL_CATEGORIES_VALUES } from '../constants/categories'

export const useGetCategories = () => {
  const [categories, setCategories] = useState<Categories>(
    INITIAL_CATEGORIES_VALUES
  )
  
  const { url, headers } = useService()
  const { get } = useAxios()

  useEffect(() => {
    get({ url: `${url}v1/pvt/categories`, headers, data: setCategories })
  }, [])

  return { categories }
}
