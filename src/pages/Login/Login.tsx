import {
  Alert,
  Button,
  CircularProgress,
  FormControl,
  Input,
  InputLabel,
} from '@mui/material'
import Register from '../../components/Register/Register'

import { useLogin } from '../../hooks/useLogin'
import { InputPassword } from '../../components/Inputs/InputPassword'
import { InputText } from '../../components/Inputs/InputText'

const Login = () => {
  const { handleLogin, login, loginState, setLogin } = useLogin()

  return (
    <div>
      <h1>Login</h1>

      {!loginState.error ? (
        ''
      ) : (
        <div>
          <Alert variant="filled" severity="error">
            {loginState.error}
          </Alert>
        </div>
      )}

      <div>
        <InputText
          label="E-mail"
          name="email"
          setState={setLogin}
          state={login}
          value={login.email}
        />

        <InputPassword
          label="Senha"
          name="password"
          state={login}
          setState={setLogin}
          value={login.password}
        />
      </div>

      <div>
        {!loginState.loading ? (
          <Button onClick={handleLogin} variant="outlined">
            Login
          </Button>
        ) : (
          <Button onClick={handleLogin} variant="outlined">
            <CircularProgress />
          </Button>
        )}
      </div>

      <Register />
    </div>
  )
}

export default Login
