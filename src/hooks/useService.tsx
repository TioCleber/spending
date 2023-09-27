import Cookies from 'js-cookie'

export const useService = () => {
  const spendingIdAuth = Cookies.get('SpendingIdAuth') ?? ''
  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJVc2VybmFtZSI6InNwZW5kaW5nLXNlcnZpY2UiLCJpYXQiOjE2OTU3NDc0MDR9.2eVnPocV2mM1L6NACbP8WceY4WX2w-ugXsMtBQWaoBY'
  const key = '$2a$12$Yk/vOxYY1cmwfTIGzM7SCujV0G5UP67pSf7SvJTEEKObfYEEJbQiq'
  const url = 'https://spending-service.onrender.com/'

  const headers = {
    authorization: spendingIdAuth,
    'x-api-token': token,
    'x-api-key': key,
  }

  return { authCookie: spendingIdAuth, headers, token, key, url }
}
