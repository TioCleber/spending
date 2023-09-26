import {
  IconButton,
  InputAdornment,
  Modal,
  OutlinedInput,
  TextField,
} from '@mui/material'
import { Close, Visibility, VisibilityOff } from '@mui/icons-material'
import { useRegister } from '../../hooks/useRegister'
import { useState } from 'react'
import { useChangeValues } from '../../hooks/useChangeValues'

const Register = () => {
  const { register, setRegister } = useRegister()
  const { handleChange } = useChangeValues()
  const [open, setOpen] = useState(false)

  const handleModal = () => {
    setOpen(!open)
  }

  console.log(register)

  return (
    <section>
      <div>
        <p>
          Ou <button onClick={handleModal}>registre-se aqui.</button>
        </p>
      </div>

      <Modal open={open}>
        <div
          style={{
            background: '#fff',
          }}
        >
          <div>
            <button onClick={handleModal}>
              <Close />
            </button>
          </div>

          <div>
            <TextField
              id="standard-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              maxRows={1}
              variant="standard"
              name="firstName"
              value={register.firstName}
              onChange={(e) =>
                handleChange({
                  e,
                  name: 'firstName',
                  state: register,
                  setState: setRegister,
                })
              }
            />

            <TextField
              id="standard-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              maxRows={1}
              variant="standard"
              value={register.lastName}
              onChange={(e) =>
                handleChange({
                  e,
                  name: 'lastName',
                  state: register,
                  setState: setRegister,
                })
              }
            />
          </div>

          <TextField
            id="standard-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            maxRows={1}
            variant="standard"
            value={register.email}
            onChange={(e) =>
              handleChange({
                e,
                name: 'email',
                state: register,
                setState: setRegister,
              })
            }
          />

          <div>
            <OutlinedInput
              id="outlined-adornment-password"
              type={false ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {true ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />

            <OutlinedInput
              id="outlined-adornment-password"
              type={false ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {true ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </div>

          <div>
            <TextField
              id="standard-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              maxRows={1}
              variant="standard"
              value={register.earnings}
              onChange={(e) =>
                handleChange({
                  e,
                  name: 'earnings',
                  state: register,
                  setState: setRegister,
                })
              }
            />

            <TextField
              id="standard-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              maxRows={1}
              variant="standard"
              value={register.salary}
              onChange={(e) =>
                handleChange({
                  e,
                  name: 'salary',
                  state: register,
                  setState: setRegister,
                })
              }
            />

            <TextField
              id="standard-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              maxRows={1}
              variant="standard"
              value={register.moneySaved}
              onChange={(e) =>
                handleChange({
                  e,
                  name: 'moneySaved',
                  state: register,
                  setState: setRegister,
                })
              }
            />
          </div>

          <button>Cadastrar</button>
        </div>
      </Modal>
    </section>
  )
}

export default Register
