import { useLogin } from '../../hooks/useLogin'
import { useShowPassword } from '../../hooks/useShowPassword'

import { Alert } from './../../components/Alert/'
import { Buttons } from '../../components/Buttons'
import { Icons } from '../../components/Icons'
import { Inputs } from '../../components/Inputs'
import Register from './Register'

import './../../styles/login.css'

const LoginAction = () => {
  const { handleLogin, login, error, loading, handleData, handleLoginOnKeyUp } =
    useLogin()
  const { handleShowPassword, showPassword, type } = useShowPassword()

  return (
    <aside className="login">
      <div className="container-login">
        {error && (
          <Alert.Wrapper>
            <Alert.Status type="error" message={error} />
          </Alert.Wrapper>
        )}

        <h2 className="title-login">Faça Login</h2>

        <Inputs.Group>
          <Inputs.Wrapper>
            <Inputs.Label label="E-mail" />
            <Inputs.Action
              name="email"
              onChange={handleData}
              value={login.email}
            />
          </Inputs.Wrapper>

          <Inputs.Wrapper>
            <Inputs.Label label="Senha" />
            <Inputs.Action
              name="password"
              onChange={handleData}
              value={login.password}
              type={type}
              endAdornment={
                <Inputs.EndAdornment
                  Then={<Icons.Visibility />}
                  Else={<Icons.VisibilityOff />}
                  onClick={handleShowPassword}
                  showThen={showPassword}
                />
              }
              onKeyUp={handleLoginOnKeyUp}
            />
          </Inputs.Wrapper>
        </Inputs.Group>

        <Buttons.Wrapper>
          <Buttons.Action onClick={handleLogin}>
            {loading ? (
              <Icons.Loading size={24} />
            ) : (
              <Buttons.Text text="Login" />
            )}
          </Buttons.Action>
        </Buttons.Wrapper>

        <Register />
      </div>
    </aside>
  )
}

export default LoginAction
