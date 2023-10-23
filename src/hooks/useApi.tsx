import axios from 'axios'

export const useApi = () => {
  const api = axios.create({
    baseURL: 'https://spending-service.onrender.com',
  })

  return { api }
}
