import { useRegister } from '../../hooks/useRegister'
import { useShowPassword } from '../../hooks/useShowPassword'

import { ModalContextProvider } from '../../context/ModalContext'
import { Modal } from '../Modal'
import { Inputs } from '../Inputs'
import { Buttons } from '../Buttons'
import { Icons } from '../Icons'
import { Divider } from '../Divider/Divider'
import InputsWrapper from '../Inputs/InputsWrapper'

import '../../styles/register.css'

const Register = () => {
  const { register, handleData, handleRegister, loading } = useRegister()
  const { handleShowPassword, type, showPassword } = useShowPassword()

  return (
    <section className="section-register">
      <ModalContextProvider>
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
            <InputsWrapper>
              <Inputs.Label label="Nome" />
              <Inputs.Action
                onChange={handleData}
                value={register.firstName}
                name="firstName"
              />
            </InputsWrapper>

            <InputsWrapper>
              <Inputs.Label label="Sobrenome" />
              <Inputs.Action
                onChange={handleData}
                value={register.lastName}
                name="lastName"
              />
            </InputsWrapper>
          </Inputs.Group>

          <InputsWrapper>
            <Inputs.Label label="E-mail" />
            <Inputs.Action
              onChange={handleData}
              value={register.email}
              name="email"
            />
          </InputsWrapper>

          <Inputs.Group>
            <InputsWrapper>
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
            </InputsWrapper>

            <InputsWrapper>
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
            </InputsWrapper>
          </Inputs.Group>

          <Buttons.Wrapper>
            <Modal.Trigger type="cancel">cancelar</Modal.Trigger>

            <Buttons.Action onClick={handleRegister}>
              {loading ? <Icons.Loading size={24} /> : 'Cadastrar'}
            </Buttons.Action>
          </Buttons.Wrapper>
        </Modal.TriggerModal>
      </ModalContextProvider>
    </section>
  )
}

export default Register
