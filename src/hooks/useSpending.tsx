import { useMemo, useState } from 'react'
import { months } from '../constants/months'
import { Spending } from '../typings/FormSpending'
import { SpendingProps } from '../typings/spending'
import { formatCurrency } from '../utils/formatCurrency'
import { useProfile } from './useProfile'

export const useSpending = () => {
  const { user } = useProfile()
  const [refetch, setRefetch] = useState(false)

  const spending = useMemo(() => {
    const spendingForMonth: SpendingProps[] = []

    months.forEach((validMonth) => {
      const spending = localStorage.getItem(validMonth)
      const parseSpending: Spending[] = JSON.parse(spending || '[]')

      if (parseSpending.length) {
        const totalValues = parseSpending.reduce((acc, curr) => {
          acc += Number(curr.value)

          return acc
        }, 0)

        const extra_money = parseSpending.reduce((acc, curr) => {
          acc += Number(curr.extra_money) / parseSpending?.length

          return acc
        }, 0)

        const remainingSalary = Number(user.spent) + extra_money - totalValues

        spendingForMonth.push({
          name: validMonth,
          stores: parseSpending,
          totalValues: formatCurrency(totalValues),
          remainingSalary: formatCurrency(remainingSalary),
          extra_money,
        })
      }
    })

    return spendingForMonth
  }, [refetch, user.spent])

  const totalSpending = spending.reduce((acc, curr) => {
    const parseValues = curr.stores.reduce((acc, curr) => {
      acc += Number(curr.value)

      return acc
    }, 0)

    acc += parseValues

    return acc
  }, 0)

  return { spending, totalSpending, refetch: setRefetch }
}
