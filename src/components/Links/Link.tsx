import { Link } from 'react-router-dom'

interface LinkCustomProps {
  text: string
  to: string
}

const LinkCustom = ({ text, to }: LinkCustomProps) => {
  return <Link className='link' to={to}>{text}</Link>
}

export default LinkCustom
