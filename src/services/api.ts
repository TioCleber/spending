import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://spending-service.onrender.com',
})
