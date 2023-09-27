import { Link } from 'react-router-dom'

export const Header = () => {
  const locations = ['', '/']

  if (locations.includes(window.location.pathname)) {
    return <></>
  }

  return (
    <div>
      <div>
        <Link to="/">Spending</Link>
      </div>

      <ul></ul>
    </div>
  )
}
