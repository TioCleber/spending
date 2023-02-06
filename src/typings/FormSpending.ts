export interface StateProps {
  month: string
  spending?: Spending[]
}

export type Spending = {
  name?: string
  value?: string
  extra_money?: string
}
