import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Header = () => {
  const locations = ['/']
  const location = useLocation()

  useEffect(() => {}, [location])

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
