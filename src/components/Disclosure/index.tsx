import { useState } from 'react'

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
    <div>
      <div onClick={handleClick}>{head}</div>

      {open && <>{children}</>}
    </div>
  )
}
