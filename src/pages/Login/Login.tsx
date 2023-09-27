import { Alert, Button, CircularProgress } from '@mui/material'
import Register from '../../components/Register/Register'

import { useLogin } from '../../hooks/useLogin'
import { InputPassword } from '../../components/Inputs/InputPassword'
import { InputText } from '../../components/Inputs/InputText'

import './../../styles/login.css'

const Login = () => {
  const { handleLogin, login, loginState, setLogin } = useLogin()

  return (
    <section className="section-login">
      <div className="institutional-login"></div>

      <div className="login">
        <div className="container-login">
          <h1 className="title-login">Login</h1>

          {!loginState.error ? (
            ''
          ) : (
            <div className="container-alert">
              <Alert variant="filled" severity="error">
                {loginState.error}
              </Alert>
            </div>
          )}

          <div className="container-input input-groups">
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

          <div className="container-buttons buttons-groups">
            {!loginState.loading ? (
              <Button
                className="button button-login"
                onClick={handleLogin}
                variant="outlined"
              >
                Login
              </Button>
            ) : (
              <Button
                className="button button-login button-loading"
                onClick={handleLogin}
                variant="outlined"
              >
                <CircularProgress />
              </Button>
            )}
          </div>

          <Register />
        </div>
      </div>
    </section>
  )
}

export default Login
