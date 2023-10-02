interface ValuesFinanceProps {
  name?: string
  value?: string
}

const ValuesFinance = ({ name, value }: ValuesFinanceProps) => {
  return (
    <p className="values-finance">
      {name && <span className="name">{name}</span>}
      {value && <span className="value">{value}</span>}
    </p>
  )
}

export default ValuesFinance
