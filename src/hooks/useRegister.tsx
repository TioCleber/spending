import { useState } from 'react'

interface Register {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  earnings: string
  moneySaved: string
  salary: string
}

const INITIAL_VALUE = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  earnings: '',
  moneySaved: '',
  salary: '',
}

export const useRegister = () => {
  const [register, setRegister] = useState<Register>(INITIAL_VALUE)

  return { register, setRegister }
}
