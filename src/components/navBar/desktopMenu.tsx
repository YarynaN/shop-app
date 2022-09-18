import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'
import { VolunteerActivismOutlined } from '@mui/icons-material'
import { pages } from './config'

const DesktopNavBar: React.FC = () => {
  return (
    <>
      <VolunteerActivismOutlined sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
      <Typography
        variant='h6'
        noWrap
        sx={{
          display: { xs: 'none', md: 'flex' },
        }}
      >
        Test Shop
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: 'none', md: 'flex' },
          justifyContent: { md: 'flex-end' },
        }}
      >
        {pages.map((page) => (
          <Button
            key={page.to}
            sx={{ my: 2, color: 'white', display: 'block' }}
            component={NavLink}
            to={page.to}
          >
            {page.name}
          </Button>
        ))}
      </Box>
    </>
  )
}

export default DesktopNavBar
