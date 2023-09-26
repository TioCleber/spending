export interface IProfile {
  id: string
  firstName: string
  lastName: number
  email: string
  earnings: number | null
  moneySaved: number | null
  salary: number | null
  expenses: Expenses
  spending: Spending
}

export type Spending = {
  total: number
  allSpent: AllSpent[]
}

export type AllSpent = {
  id: string
  name: string
  institution: string
  date: string
  value: number
  paymentMethod: string
}

export type Expenses = {
  total: number
  allExpenses: AllExpenses[]
}

export type AllExpenses = {
  id: string
  name: string
  institution: string
  date: string
  value: number
}
