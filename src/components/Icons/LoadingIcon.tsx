import { CircularProgress } from '@mui/material'

interface LoadingIconProps {
  size: string | number
}

export const LoadingIcon = ({ size }: LoadingIconProps) => {
  return (
    <CircularProgress
      style={{ width: size, height: size }}
      className="loading-icon"
    />
  )
}
