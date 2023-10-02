interface ButtonsTextProps {
  text: string
}

const ButtonsText = ({ text }: ButtonsTextProps) => {
  return <p className="buttons-text">{text}</p>
}

export default ButtonsText
