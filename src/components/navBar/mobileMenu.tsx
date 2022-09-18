import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { Menu as MenuIcon, VolunteerActivismOutlined } from '@mui/icons-material'
import { pages } from './config'

const MobileNavBar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='menu-appbar'
          aria-haspopup='true'
          onClick={handleOpenNavMenu}
          color='inherit'
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id='menu-appbar'
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page.to} onClick={handleCloseNavMenu} component={NavLink} to={page.to}>
              {page.name}
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <VolunteerActivismOutlined sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
      <Typography
        variant='h5'
        noWrap
        sx={{
          display: { xs: 'flex', md: 'none' },
        }}
      >
        Test Shop
      </Typography>
    </>
  )
}

export default MobileNavBar
