import { CategoriesContextProvider } from './CategoriesContext'
import { RecurringExpensesContextProvider } from './RecurringExpensesContext'
import { ModalContextProvider } from './ModalContext'
import { ProfileContextProvider } from './ProfileContext'
import { SpendingContextProvider } from './SpendingContext'

export const Context = {
  Categories: CategoriesContextProvider,
  Profile: ProfileContextProvider,
  Modal: ModalContextProvider,
  Spending: SpendingContextProvider,
  RecurringExpenses: RecurringExpensesContextProvider,
}
