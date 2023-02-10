import { useState } from 'react'
import './style.css'

interface DisclosureProps {
  children?: React.ReactNode
  head?: React.ReactNode
}

export const Disclosure = ({ children, head }: DisclosureProps) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <div className="container-disclosure">
      <div className="head-disclosure" onClick={handleClick}>
        {head}
      </div>

      {open && (
        <section className={'content-disclosure' + (open ? ' active' : '')}>
          {children}
        </section>
      )}
    </div>
  )
}
