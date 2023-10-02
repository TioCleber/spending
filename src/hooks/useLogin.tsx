import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAxios } from './useAxios'
import { useService } from './useService'

import Cookies from 'js-cookie'

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

  const navigate = useNavigate()

  const { post, loading, error, success } = useAxios()
  const { url } = useService()

  const handleData = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setLogin((oldValue) => ({ ...oldValue, [e.target.name]: e.target.value }))
  }

  const handleLoginOnKeyUp = (
    e: KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (e.key === 'Enter') {
      handleLogin()

      return
    }

    return
  }

  const handleCookie = (data: any) => {
    const token = data.token

    Cookies.set('SpendingIdAuth', token, {
      expires: new Date(Date.now() + 3600000),
    })
  }

  const handleLogin = async () => {
    await post({
      url: `${url}v1/pub/sessions`,
      body: login,
      data: handleCookie,
    })
  }

  useEffect(() => {
    if (success) {
      navigate('/finances')
    }
  }, [success, navigate])

  const handleSessionsErrorMessage = () => {
    if (
      (error && error === 'Password invalid.') ||
      (error && error === 'User not found.')
    ) {
      return 'Senha ou E-mail invalido.'
    }

    if (error) {
      return 'Ocorreu algum erro, tente novamente.'
    }

    return ''
  }

  const errorMessage = handleSessionsErrorMessage()

  return {
    login,
    setLogin,
    handleLogin,
    handleData,
    loading,
    error: errorMessage,
    success,
    handleLoginOnKeyUp,
  }
}
