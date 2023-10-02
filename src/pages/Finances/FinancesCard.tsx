import { Card, CardContent } from '@mui/material'
import { ReactNode } from 'react'

import './../../styles/finances/finances-card.css'

interface FinancesCardProps {
  children: ReactNode
}

const FinancesCard = ({ children }: FinancesCardProps) => {
  return (
    <Card className="container-card">
      <CardContent className="card-content">{children}</CardContent>
    </Card>
  )
}

export default FinancesCard
