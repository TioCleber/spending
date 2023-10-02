import { useRegister } from '../../hooks/useRegister'
import { useShowPassword } from '../../hooks/useShowPassword'

import { Context } from '../../context/'
import { Modal } from './../../components/Modal'
import { Inputs } from './../../components/Inputs'
import { Buttons } from './../../components/Buttons'
import { Icons } from './../../components/Icons'
import { Divider } from './../../components/Divider/Divider'

import '../../styles/register.css'

const Register = () => {
  const { register, handleData, handleRegister, loading } = useRegister()
  const { handleShowPassword, type, showPassword } = useShowPassword()

  return (
    <section className="section-register">
      <Context.Modal>
        <aside className="container-text-register">
          <Divider />
          <span className="or">ou</span>
          <Divider />
        </aside>

        <Modal.Trigger type="border">Registre-se</Modal.Trigger>

        <Modal.TriggerModal>
          <Modal.Trigger type="close">
            <Icons.Close />
          </Modal.Trigger>

          <div className="register-title">Registre-se</div>

          <Inputs.Group>
            <Inputs.Wrapper>
              <Inputs.Label label="Nome" />
              <Inputs.Action
                onChange={handleData}
                value={register.firstName}
                name="firstName"
              />
            </Inputs.Wrapper>

            <Inputs.Wrapper>
              <Inputs.Label label="Sobrenome" />
              <Inputs.Action
                onChange={handleData}
                value={register.lastName}
                name="lastName"
              />
            </Inputs.Wrapper>
          </Inputs.Group>

          <Inputs.Wrapper>
            <Inputs.Label label="E-mail" />
            <Inputs.Action
              onChange={handleData}
              value={register.email}
              name="email"
            />
          </Inputs.Wrapper>

          <Inputs.Group>
            <Inputs.Wrapper>
              <Inputs.Label label="Senha" />
              <Inputs.Action
                onChange={handleData}
                value={register.password}
                type={type}
                name="password"
                endAdornment={
                  <Inputs.EndAdornment
                    Then={<Icons.Visibility />}
                    Else={<Icons.VisibilityOff />}
                    onClick={handleShowPassword}
                    showThen={showPassword}
                  />
                }
              />
            </Inputs.Wrapper>

            <Inputs.Wrapper>
              <Inputs.Label label="Confirmar Senha" />
              <Inputs.Action
                onChange={handleData}
                value={register.confirmPassword}
                name="confirmPassword"
                type={type}
                endAdornment={
                  <Inputs.EndAdornment
                    Then={<Icons.Visibility />}
                    Else={<Icons.VisibilityOff />}
                    onClick={handleShowPassword}
                    showThen={showPassword}
                  />
                }
              />
            </Inputs.Wrapper>
          </Inputs.Group>

          <Buttons.Wrapper>
            <Modal.Trigger type="cancel">cancelar</Modal.Trigger>

            <Buttons.Action onClick={handleRegister}>
              {loading ? <Icons.Loading size={24} /> : 'Cadastrar'}
            </Buttons.Action>
          </Buttons.Wrapper>
        </Modal.TriggerModal>
      </Context.Modal>
    </section>
  )
}

export default Register
