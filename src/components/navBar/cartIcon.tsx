import React from 'react'
import { useCartContext } from '../../context'
import { Badge, IconButton } from '@mui/material'
import { ShoppingBagOutlined } from '@mui/icons-material'
import CartPopup from '../cartPopup/cartPopup'
import _ from 'lodash'

const CartIcon: React.FC = () => {
  const cartContext = useCartContext()
  const [anchorCartEl, setAnchorCartEl] = React.useState<null | HTMLElement>(null)

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorCartEl(event.currentTarget)
  }

  const handleCloseCartMenu = () => {
    setAnchorCartEl(null)
  }

  return (
    <>
      <IconButton size='large' onClick={handleOpenUserMenu} color='inherit'>
        <Badge
          badgeContent={_.reduce(cartContext.items, (sum, item) => sum + item.quantity, 0)}
          color='primary'
        >
          <ShoppingBagOutlined />
        </Badge>
      </IconButton>
      <CartPopup isOpen={anchorCartEl} handleClose={handleCloseCartMenu} />
    </>
  )
}

export default CartIcon
