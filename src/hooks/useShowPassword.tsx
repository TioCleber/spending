import { useCallback, useState } from 'react'

export const useShowPassword = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [type, setType] = useState<'text' | 'password'>('password')

  const handleShowPassword = useCallback(() => {
    setShowPassword((oldValue) => !oldValue)

    setType((oldValue) => (oldValue === 'text' ? 'password' : 'text'))
  }, [])

  return { showPassword, handleShowPassword, type }
}
