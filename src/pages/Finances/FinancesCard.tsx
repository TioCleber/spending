import { Card, CardContent } from '@mui/material'
import { ReactNode } from 'react'

interface FinancesCardProps {
  children: ReactNode
}

const FinancesCard = ({ children }: FinancesCardProps) => {
  return (
    <Card className="card">
      <CardContent className="card-content">{children}</CardContent>
    </Card>
  )
}

export default FinancesCard
