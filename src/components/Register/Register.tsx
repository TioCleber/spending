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
    <section>
      <div>
        <p>
          Ou{' '}
          <Button onClick={handleOpenModal} variant="text">
            registre-se aqui.
          </Button>
        </p>
      </div>

      <Modal
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
          <div>
            <Button onClick={handleOpenModal} variant="text">
              <Close />
            </Button>
          </div>

          <div>
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

          <div>
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

          <div>
            <Button variant="outlined">Cadastrar</Button>
          </div>
        </Box>
      </Modal>
    </section>
  )
}

export default Register
