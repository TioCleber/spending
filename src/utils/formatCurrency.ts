export const formatCurrency = (value?: number) => {
  if (!value) {
    return ''
  }

  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value * 0.01)
}

export const formatStringCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

const getMoney = (str: string) => {
  return parseInt(str.replace(/[\D]+/g, ''))
}

export const formatCurrencyToIntValue = (value: string) => {
  return parseInt(value.replace(/[\D]+/g, ''))
}
