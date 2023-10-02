import { Alert } from '@mui/material'

import './../../styles/alert/alert.css'

interface AlertProps {
  message: string
  type: 'error' | 'success' | 'warning' | 'info'
}

const AlertCustom = ({ message, type }: AlertProps) => {
  return (
    <Alert className="alert" variant="filled" severity={type}>
      {message}
    </Alert>
  )
}

export default AlertCustom
