import { ReactNode } from 'react'
import { Spending } from './'
import { Container } from '../../components/Container/'

interface SpendingPageContentProps {
  children?: ReactNode
}

const SpendingPageContent = ({ children }: SpendingPageContentProps) => {
  return (
    <Container.ListFinances>
      <Spending.List />

      {children}
    </Container.ListFinances>
  )
}

export default SpendingPageContent
