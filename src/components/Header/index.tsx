import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import './../../styles/header.css'

export const Header = () => {
  const locations = ['/']
  const location = useLocation()

  useEffect(() => {}, [location])

  if (locations.includes(window.location.pathname)) {
    return <></>
  }

  return (
    <Box className="container-header" sx={{ flexGrow: 1 }}>
      <AppBar className="header-app-bar" position="static">
        <Toolbar className="header-toolbar">
          <Typography
            className="header-typography"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <Link className="header-home" to="/finances">
              Spending Finances
            </Link>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
