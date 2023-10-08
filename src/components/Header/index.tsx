import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/finances">Spending</Link>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
