import { ReactNode } from 'react'

import './../../styles/alert/alert-wrapper.css'

interface AlertWrapperProps {
  children: ReactNode
}

const AlertWrapper = ({ children }: AlertWrapperProps) => {
  return <div className='container-alert'>{children}</div>
}

export default AlertWrapper
