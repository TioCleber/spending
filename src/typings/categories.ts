export interface Categories {
  expensesCategories: AllCategories[]
  spendingCategories: AllCategories[]
}

interface AllCategories {
  id: string
  name: string
  createdAt: string
  updatedAt: string
}
