export interface IProfile {
  firstName: string
  lastName: string
  email: string
  moneySaved: number | null
  salary: number | null
  recurringExpenses: RecurringExpenses[]
  spending: Spending[]
}

export type Spending = {
  id: string
  name: string
  institution: string
  date: string
  value: number
  paymentMethod: string
}

export type RecurringExpenses = {
  id: string
  name: string
  institution: string
  date: string
  value: number
}
