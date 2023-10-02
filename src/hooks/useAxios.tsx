import { useEffect, useState } from 'react'
import axios from 'axios'

type State = {
  loading: boolean
  error: string
  success: boolean
}

type Post = {
  url: string
  data?: Function
  headers?: object
  body: object
}

type Get = {
  url: string
  data?: Function
  headers?: object
}

const INITIAL_LOGIN_STATE_VALUE = {
  loading: false,
  error: '',
  success: false,
}

export function useAxios() {
  const [state, setState] = useState<State>(INITIAL_LOGIN_STATE_VALUE)

  const get = async ({ data, headers, url }: Get) => {
    try {
      setState({ error: '', loading: true, success: false })

      await axios.get(url, { headers: { ...headers } }).then((res) => {
        data && data(res.data)
      })

      setState({ error: '', loading: false, success: true })
    } catch (err: any) {
      setState({
        error: err.response.data.error || err.response.data.message,
        loading: false,
        success: false,
      })
    }
  }

  const post = async ({ body, data, headers, url }: Post) => {
    try {
      setState({ error: '', loading: true, success: false })

      await axios.post(url, body, { headers: { ...headers } }).then((res) => {
        data && data(res.data)
      })

      setState({ error: '', loading: false, success: true })
    } catch (err: any) {
      setState({
        error: err.response.data.error,
        loading: false,
        success: false,
      })
    }
  }

  useEffect(() => {
    if (state.error || state.success) {
      setTimeout(() => {
        setState(INITIAL_LOGIN_STATE_VALUE)
      }, 1800)
    }
  }, [state.error, state.success])

  return {
    get,
    post,
    loading: state.loading,
    error: state.error,
    success: state.success,
  }
}
