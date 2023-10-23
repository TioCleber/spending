import { useCallback } from 'react'

import { useService } from './useService'

import { IProfile } from '../typings/profile'
import { useQuery } from 'react-query'
import { useApi } from './useApi'

export const useGetProfile = () => {
  const { api } = useApi()
  const { headers } = useService()

  const handleProfile = useCallback(async () => {
    const response = await api.get<IProfile>('/v1/pvt/profile', { headers })

    return response.data
  }, [api, headers])

  const { data, isError } = useQuery({
    queryKey: ['profile'],
    queryFn: handleProfile,
  })

  return { profile: data, error: isError }
}
