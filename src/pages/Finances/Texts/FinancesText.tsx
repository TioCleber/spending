interface FinancesTextProps {
  text: string | number
}

const FinancesText = ({ text }: FinancesTextProps) => {
  return (
    <p className="text">
      <span className="span">{text}</span>
    </p>
  )
}

export default FinancesText
