import { RecurringExpenses } from './'
import { Container } from '../../components/Container/'
import { ReactNode } from 'react'

interface RecurringExpensesPageContentProps {
  children?: ReactNode
}

const RecurringExpensesPageContent = ({
  children,
}: RecurringExpensesPageContentProps) => {
  return (
    <Container.ListFinances>
      <RecurringExpenses.List />

      {children}
    </Container.ListFinances>
  )
}

export default RecurringExpensesPageContent
