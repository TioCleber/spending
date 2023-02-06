import { months } from '../constants/months'
import { SpendingProps } from '../typings/spending'
import { formatCurrency } from '../utils/formatCurrency'
import { useProfile } from './useProfile'

export const useSpending = () => {
  const user = useProfile()

  const handleSpending = () => {
    const spendingForMonth: SpendingProps[] = []

    months.forEach((validMonth) => {
      const spending = localStorage.getItem(validMonth)
      const parseSpending = JSON.parse(spending || '[]')

      if (parseSpending.length) {
        const totalValues = parseSpending.reduce((acc: any, curr: any) => {
          acc += Number(curr.value)

          return acc
        }, 0)

        const remainingSalary = Number(user.spent) - totalValues

        spendingForMonth.push({
          name: validMonth,
          stores: parseSpending,
          totalValues: formatCurrency(totalValues),
          remainingSalary: formatCurrency(remainingSalary),
        })
      }
    })

    return spendingForMonth
  }

  const spending = handleSpending()

  const totalSpending = spending.reduce((acc, curr) => {
    const parseValues = curr.stores.reduce((acc, curr) => {
      acc += Number(curr.value)

      return acc
    }, 0)

    acc += parseValues

    return acc
  }, 0)

  return { spending, totalSpending }
}
