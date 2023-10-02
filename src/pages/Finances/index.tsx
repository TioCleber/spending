import FinancesAddExpenses from './FinancesAddExpenses'
import FinancesAddSpending from './FinancesAddSpending'
import FinancesCards from './FinancesCards'
import FinancesExpensesAndSpending from './FinancesExpensesAndSpending'

export const Finances = {
  Add: {
    Expenses: FinancesAddExpenses,
    Spending: FinancesAddSpending,
  },
  Cards: FinancesCards,
  ExpensesAndSpending: FinancesExpensesAndSpending,
}
