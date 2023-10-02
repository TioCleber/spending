import { Container } from './../Container'
import { Pagination as PaginationMaterial } from '@mui/material'

interface PaginationProps {
  page: (e: number) => number
}

const Pagination = ({ page }: PaginationProps) => {
  return (
    <Container.Pagination>
      <PaginationMaterial
        onChange={(_e, value) => page(value)}
        className="pagination"
        count={10}
        size="small"
      />
    </Container.Pagination>
  )
}

export default Pagination
