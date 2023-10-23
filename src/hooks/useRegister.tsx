import { ChangeEvent, useCallback, useState } from 'react'
import { useMutation } from 'react-query'
import { useApi } from './useApi'

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
  const { api } = useApi()

  const handleData = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setRegister((oldValue) => ({
        ...oldValue,
        [e.target.name]: e.target.value,
      }))
    },
    []
  )

  const handleRegister = useCallback(async () => {
    const body = {
      email: register.email,
      firstName: register.firstName,
      lastName: register.lastName,
      password: register.password,
    }

    const response = await api.post('/v1/pub/users', body)

    const data = response.data

    setRegister(INITIAL_VALUE)

    return data
  }, [api, register])

  const { mutate, isLoading, isSuccess, error } = useMutation<any, any>({
    mutationKey: ['create-users'],
    mutationFn: handleRegister,
  })

  const handleMutationRegister = useCallback(() => {
    mutate()
  }, [mutate])

  return {
    register,
    handleData,
    handleRegister: handleMutationRegister,
    loading: isLoading,
    error,
    success: isSuccess,
  }
}
