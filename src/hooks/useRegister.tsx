import { useEffect, useState } from 'react'
import { useAxios } from './useAxios'
import { useService } from './useService'

interface Register {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

const INITIAL_VALUE = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export const useRegister = () => {
  const [register, setRegister] = useState<Register>(INITIAL_VALUE)
  const [data, setData] = useState()
  const { loading, error, post, success } = useAxios()
  const { url } = useService()

  const body = {
    email: register.email,
    firstName: register.firstName,
    lastName: register.lastName,
    password: register.password,
  }

  const handleRegister = async () => {
    await post({ body: body, url: `${url}v1/pub/users`, data: setData })
  }

  useEffect(() => {
    if (success) {
      setRegister(INITIAL_VALUE)
    }
  }, [success])

  return {
    register,
    setRegister,
    handleRegister,
    loading,
    error,
    data,
    success,
  }
}
