import Cookies from 'js-cookie'

export const useCookies = () => {
  const spendingIdAuth = Cookies.get('SpendingIdAuth')

  return spendingIdAuth ?? ''
}
