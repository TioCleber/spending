import { useEffect, useState } from 'react'

import { useService } from './useService'
import { useAxios } from './useAxios'

import { IProfile } from '../typings/profile'

export const useGetProfile = () => {
  const [profile, setProfile] = useState<IProfile | undefined | null>()

  const { url, headers } = useService()
  const { get, error } = useAxios()

  useEffect(() => {
    get({ url: `${url}v1/pvt/profile`, headers, data: setProfile })
  }, [])

  useEffect(() => {
    if (error) {
      setProfile(null)
    }
  }, [error])

  return { profile, error }
}
