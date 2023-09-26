import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'

const INITIAL_VALUE = {
  email: '',
  password: '',
}

const INITIAL_LOGIN_STATE_VALUE = {
  loading: false,
  error: '',
}

type Login = {
  email: string
  password: string
}

type LoginState = {
  loading: boolean
  error: string
}

export const useLogin = () => {
  const [login, setLogin] = useState<Login>(INITIAL_VALUE)
  const [loginState, setLoginState] = useState<LoginState>(
    INITIAL_LOGIN_STATE_VALUE
  )

  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      setLoginState((old) => ({ ...old, loading: true }))

      await axios
        .post('https://spending-service.onrender.com/v1/pub/sessions', login)
        .then((res) => {
          Cookies.set('SpendingIdAuth', res.data.token, {
            expires: new Date(Date.now() + 3600000),
          })
        })

      setLoginState((old) => ({ ...old, loading: false }))

      navigate('/spending')
    } catch (err: any) {
      setLoginState({ loading: false, error: err.response.data.message })
    }
  }

  return { login, setLogin, handleLogin, loginState }
}
