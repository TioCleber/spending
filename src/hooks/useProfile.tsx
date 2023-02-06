import { user } from '../constants/initialValues'

interface User {
  fullName: string
  spent: string
}

export const useProfile = () => {
  const getUSer = localStorage.getItem('user')

  if (getUSer) {
    const parseUser: User = JSON.parse(getUSer)

    return parseUser
  }

  return user
}
