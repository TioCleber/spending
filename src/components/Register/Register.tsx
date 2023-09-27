import { useRegister } from '../../hooks/useRegister'
import { useModal } from '../../hooks/useModal'

import { InputPassword } from '../Inputs/InputPassword'
import { InputText } from '../Inputs/InputText'
import ModalCustom from '../Modal/Modal'

import '../../styles/register.css'

const Register = () => {
  const { register, setRegister } = useRegister()
  const { handleOpenModal, open } = useModal()

  return (
    <section className="section-register">
      <div className="container-text-register">
        <p className="text-register">
          Ou{' '}
          <button className="button-register" onClick={handleOpenModal}>
            registre-se aqui
          </button>
          .
        </p>
      </div>

      <ModalCustom open={open} handleOpenModal={handleOpenModal}>
        <div className="register-title">Registre-se</div>

        <div className="input-groups">
          <InputText
            label="Nome"
            name="firstName"
            setState={setRegister}
            state={register}
            value={register.firstName}
          />

          <InputText
            label="Sobrenome"
            name="lastName"
            setState={setRegister}
            state={register}
            value={register.lastName}
          />
        </div>

        <InputText
          label="E-mail"
          name="email"
          setState={setRegister}
          state={register}
          value={register.email}
        />

        <div className="input-groups">
          <InputPassword
            label="Senha"
            name="password"
            setState={setRegister}
            state={register}
            value={register.password}
          />

          <InputPassword
            label="Confirmar senha"
            name="confirmPassword"
            setState={setRegister}
            state={register}
            value={register.confirmPassword}
          />
        </div>

        <div className="container-button-register">
          <button
            onClick={handleOpenModal}
            className="button-register button-cancel"
          >
            cancelar
          </button>

          <button className="button-register button-submit">Cadastrar</button>
        </div>
      </ModalCustom>
    </section>
  )
}

export default Register
