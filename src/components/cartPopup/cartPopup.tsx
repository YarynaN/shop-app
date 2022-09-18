import React from 'react'
import { useCartContext } from '../../context'
import {
  Avatar,
  Button,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material'
import { NavLink } from 'react-router-dom'

type CartProps = {
  handleClose: () => void
  isOpen: HTMLElement | null
}

const CartPopup: React.FC<CartProps> = ({ handleClose, isOpen }) => {
  const cartContext = useCartContext()
  const items = cartContext.items

  return (
    <>
      {items.length > 0 && (
        <Menu
          sx={{
            mt: '45px',
          }}
          id='cart'
          anchorEl={isOpen}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(isOpen)}
          onClose={handleClose}
        >
          {cartContext.items.map((item) => (
            <MenuItem
              key={item.product.id}
              sx={{
                width: 320,
                height: 100,
                alignItems: 'center',
                justifyContent: 'center',
                margin: '20px 0',
              }}
            >
              <ListItemAvatar>
                <Avatar
                  sx={{ height: 98, width: 90 }}
                  variant='square'
                  alt={item.product.name}
                  src={item.product.image}
                />
              </ListItemAvatar>
              <ListItemText>
                <Typography textAlign='center'>{item.product.name}</Typography>
                <Typography textAlign='center'>
                  {item.quantity} x {item.product.price}
                </Typography>
              </ListItemText>
            </MenuItem>
          ))}
          <MenuItem>
            <Button
              variant='contained'
              sx={{
                width: '100%',
                alignSelf: 'center',
              }}
              component={NavLink}
              onClick={handleClose}
              to='/checkout'
            >
              Go To Checkout
            </Button>
          </MenuItem>
        </Menu>
      )}
    </>
  )
}

export default CartPopup
