import FinancesAddExpenses from './Action/FinancesAddExpenses'
import FinancesAddSpending from './Action/FinancesAddSpending'
import FinancesCard from './Cards/FinancesCard'
import FinancesCards from './Cards/FinancesCards'
import FinancesCardsWrapper from './Wrappers/FinancesCardsWrapper'
import FinancesExpensesAndSpending from './Content/FinancesExpensesAndSpending'
import FinancesLinkWrapper from './Wrappers/FinancesLinkWrapper'
import FinancesProfileTitle from './Texts/FinancesProfileTitle'
import FinancesTable from './Content/FinancesTable'
import FinancesText from './Texts/FinancesText'
import FinancesTitle from './Texts/FinancesTitle'
import FinancesActionWrapper from './Wrappers/FinancesActionWrapper'
import FinancesTitlesWrapper from './Wrappers/FinancesTitlesWrapper'
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
