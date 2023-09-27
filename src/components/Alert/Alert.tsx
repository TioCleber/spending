import { Alert } from '@mui/material'

interface AlertProps {
  message: string
  type: 'error' | 'success' | 'warning' | 'info'
}

const AlertCustom = ({ message, type }: AlertProps) => {
  return (
    <Alert className="alert-error" variant="filled" severity={type}>
      {message}
    </Alert>
  )
}

export default AlertCustom
