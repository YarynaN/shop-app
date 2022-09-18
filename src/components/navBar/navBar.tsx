import React from 'react'
import { AppBar, Container, Toolbar } from '@mui/material'
import DesktopNavBar from './desktopMenu'
import MobileNavBar from './mobileMenu'
import CartIcon from './cartIcon'

const NavBar: React.FC = () => (
  <AppBar position='static' color="secondary">
    <Container maxWidth='xl'>
      <Toolbar disableGutters>
        <DesktopNavBar />
        <MobileNavBar />
        <CartIcon />
      </Toolbar>
    </Container>
  </AppBar>
)

export default NavBar
