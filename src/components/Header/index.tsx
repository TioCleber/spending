import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
      <div>
        <Link to="/">Spending</Link>
      </div>

      <ul>
        <li>
          <Link to="/spending">Lista de Gastos</Link>
        </li>
      </ul>
    </div>
  )
}
