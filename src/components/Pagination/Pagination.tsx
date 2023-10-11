import { Container } from './../Container'
import { Pagination as PaginationMaterial } from '@mui/material'

interface PaginationProps {
  page: (e: number) => void
  count?: number
}

const Pagination = ({ page, count = 2 }: PaginationProps) => {
  if (!count || count === 1) {
    return <></>
  }

  return (
    <Container.Pagination>
      <PaginationMaterial
        onChange={(_e, value) => page(value)}
        className="pagination"
        count={count}
        size="small"
      />
    </Container.Pagination>
  )
}

export default Pagination
