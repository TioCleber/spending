import Cookies from 'js-cookie'

export const useService = () => {
  const spendingIdAuth = Cookies.get('SpendingIdAuth') ?? ''

  const headers = {
    authorization: spendingIdAuth,
  }

  return { headers }
}
