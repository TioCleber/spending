import { CategoriesContextProvider } from './CategoriesContext'
import { ExpensesContextProvider } from './ExpensesContext'
import { ModalContextProvider } from './ModalContext'
import { ProfileContextProvider } from './ProfileContext'
import { SpendingContextProvider } from './SpendingContext'

export const Context = {
  Categories: CategoriesContextProvider,
  Profile: ProfileContextProvider,
  Modal: ModalContextProvider,
  Spending: SpendingContextProvider,
  RecurringExpenses: ExpensesContextProvider,
}
