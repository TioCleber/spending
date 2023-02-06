import { useMemo, useState } from 'react'
import { user } from '../constants/initialValues'

interface User {
  fullName: string
  spent: string
}

export const useProfile = () => {
  const [refetch, setRefetch] = useState(false)

  const profile = useMemo(() => {
    const getUSer = localStorage.getItem('user')

    if (getUSer) {
      const parseUser: User = JSON.parse(getUSer)

      return parseUser
    }

    return user
  }, [refetch])

  return { user: profile, refetch: setRefetch }
}
