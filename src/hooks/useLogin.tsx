import { ChangeEvent, KeyboardEvent, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { useApi } from './useApi'

import Cookies from 'js-cookie'

import { AxiosError } from 'axios'
import { ErrorData } from '../typings/error'

type Login = {
  email: string
  password: string
}

const INITIAL_VALUE = {
  email: '',
  password: '',
}

export const useLogin = () => {
  const [login, setLogin] = useState<Login>(INITIAL_VALUE)

  const { api } = useApi()
  const navigate = useNavigate()

  const handleCookie = useCallback((data: { token: string }) => {
    if (data.token) {
      const token = data.token

      Cookies.set('SpendingIdAuth', token, {
        expires: new Date(Date.now() + 3600000),
      })

      return
    }

    return
  }, [])

  const handleLogin = useCallback(async () => {
    const response = await api.post('/v1/pub/sessions', login)

    const data = response.data

    handleCookie(data)

    navigate('/finances')

    return data
  }, [api, login, handleCookie, navigate])

  const { mutate, isLoading, error } = useMutation<any, AxiosError<ErrorData>>({
    mutationKey: ['sessions'],
    mutationFn: handleLogin,
  })

  const handleData = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setLogin((oldValue) => ({ ...oldValue, [e.target.name]: e.target.value }))
    },
    []
  )

  const handleMutationLogin = useCallback(() => {
    mutate()
  }, [mutate])

  const handleLoginOnKeyUp = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      if (e.key === 'Enter') {
        mutate()

        return
      }

      return
    },
    [mutate]
  )

  const handleSessionsErrorMessage = useCallback(() => {
    if (error && error?.response?.data.message === 'Password invalid.') {
      return 'Senha ou E-mail invalido.'
    }

    if (error && error?.response?.data.message === 'User not found.') {
      return 'Usuário inválido.'
    }

    if (error) {
      return 'Ocorreu algum erro, tente novamente.'
    }

    return ''
  }, [error])

  const errorMessage = handleSessionsErrorMessage()

  return {
    login,
    setLogin,
    handleLogin: handleMutationLogin,
    handleData,
    loading: isLoading,
    error: errorMessage,
    handleLoginOnKeyUp,
  }
}
