import FinancesAddExpenses from './FinancesAddExpenses'
import FinancesAddSpending from './FinancesAddSpending'
import FinancesCard from './FinancesCard'
import FinancesCards from './FinancesCards'
import FinancesCardsWrapper from './FinancesCardsWrapper'
import FinancesExpensesAndSpending from './FinancesExpensesAndSpending'
import FinancesLinkWrapper from './FinancesLinkWrapper'
import FinancesProfileTitle from './FinancesProfileTitle'
import FinancesTable from './FinancesTable'
import FinancesText from './FinancesText'
import FinancesTitle from './FinancesTitle'
import FinancesActionWrapper from './FinancesActionWrapper'
import FinancesTitlesWrapper from './FinancesTitlesWrapper'
import FinancesPage from './FinancesPage'

export const Finances = {
  Add: {
    Expenses: FinancesAddExpenses,
    Spending: FinancesAddSpending,
  },
  Cards: FinancesCards,
  Card: FinancesCard,
  ExpensesAndSpending: FinancesExpensesAndSpending,
  Title: {
    Profile: FinancesProfileTitle,
    Subtitle: FinancesTitle,
  },
  Text: FinancesText,
  Table: FinancesTable,
  Wrapper: {
    Links: FinancesLinkWrapper,
    Action: FinancesActionWrapper,
    Cards: FinancesCardsWrapper,
    Titles: FinancesTitlesWrapper,
  },
  Page: FinancesPage,
}
