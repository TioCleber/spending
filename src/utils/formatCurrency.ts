export const formatCurrency = (value: number) => {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value * 0.01 || 0)
}

export const formatStringCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export const formatCurrencyToFloat = (value: string) => {
  const floatValue = parseFloat(value.replace(/[$,]/g, ''))

  return floatValue
}
