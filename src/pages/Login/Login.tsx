import { CircularProgress } from '@mui/material'
import { Input } from '../../components/Inputs/Input'
import Register from '../../components/Register/Register'

import { useLogin } from '../../hooks/useLogin'

const Login = () => {
  const { handleLogin, login, loginState, setLogin } = useLogin()

  return (
    <div>
      <h1>Login</h1>

      <div>
        <Input
          label="E-mail"
          name="email"
          state={login}
          value={login.email}
          setState={setLogin}
        />

        <Input
          label="Senha"
          name="password"
          type="password"
          state={login}
          value={login.password}
          setState={setLogin}
        />
      </div>

      <div>
        {!loginState.loading ? (
          <button onClick={handleLogin}>login</button>
        ) : (
          <button>
            <CircularProgress />
          </button>
        )}

        <p>{!loginState.error ? '' : loginState.error}</p>
      </div>

      <Register />
    </div>
  )
}

export default Login
