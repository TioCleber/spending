import { memo } from 'react'
import './../../../styles/finances/finances-title.css'

interface FinancesProfileTitleProps {
  firstName: string
  lastName: string
}

const FinancesProfileTitle = ({
  firstName,
  lastName,
}: FinancesProfileTitleProps) => {
  return (
    <h2 className="card-profile-title">
      Olá {firstName} {lastName}
    </h2>
  )
}

export default memo(FinancesProfileTitle)
