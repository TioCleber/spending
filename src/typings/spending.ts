import { Spending } from "./FormSpending"

export interface SpendingProps {
  name: string
  stores: Spending[]
  totalValues: string,
  remainingSalary: string,
  extra_money: number
}