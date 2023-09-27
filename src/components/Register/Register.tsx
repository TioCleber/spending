import { Box, Button, Modal } from '@mui/material'
import { Close } from '@mui/icons-material'
import { useRegister } from '../../hooks/useRegister'
import { InputPassword } from '../Inputs/InputPassword'
import { InputText } from '../Inputs/InputText'
import { useModal } from '../../hooks/useModal'

const Register = () => {
  const { register, setRegister } = useRegister()
  const { handleOpenModal, open } = useModal()

  return (
    <section className="section-register">
      <div className="container-text-register">
        <p className="text-register">
          Ou{' '}
          <Button
            className="button-register"
            onClick={handleOpenModal}
            variant="text"
          >
            registre-se aqui.
          </Button>
        </p>
      </div>

      <Modal
        className="modal modal-register"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        open={open}
      >
        <Box
          sx={{
            background: '#fff',
            width: 500,
          }}
        >
          <div className="container-modal-close">
            <Button
              className="button-modal-close"
              onClick={handleOpenModal}
              variant="text"
            >
              <Close className="icon-modal-close" />
            </Button>
          </div>

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
            <Button className="button-register" variant="outlined">
              Cadastrar
            </Button>
          </div>
        </Box>
      </Modal>
    </section>
  )
}

export default Register
