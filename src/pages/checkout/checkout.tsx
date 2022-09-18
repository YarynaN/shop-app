import React from 'react'
import { useCartContext } from '../../context'
import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { ArrowBackIos, ArrowForwardIos, Close } from '@mui/icons-material'
import {currencyFormatter} from '../../utils/currencyFormatter';

const Checkout: React.FC = () => {
  const cartContext = useCartContext()

  return (
    <Box margin={4} sx={{ textAlign: 'center' }}>
      {cartContext.items.length === 0 ? (
        <Typography variant='h4'>Please, add something to your cart</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align='right'>Description</TableCell>
                <TableCell align='right'>Quantity</TableCell>
                <TableCell align='right'>Price</TableCell>
                <TableCell align='right'>Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartContext.items.map((item) => (
                <TableRow
                  key={item.product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    <Box
                      component='img'
                      sx={{
                        height: 350,
                        width: 300,
                        maxHeight: { xs: 233, md: 250 },
                        maxWidth: { xs: 350, md: 200 },
                        objectFit: 'cover',
                      }}
                      alt={item.product.name}
                      src={item.product.image}
                    />
                  </TableCell>
                  <TableCell align='right'>
                    <Typography variant='body1' component='span'>
                      {item.product.name}
                    </Typography>
                  </TableCell>
                  <TableCell align='right'>
                    <Box
                      display='flex'
                      flexDirection='row'
                      alignItems='center'
                      justifyContent='end'
                    >
                      <IconButton onClick={() => cartContext.removeProduct(item.product, false)}>
                        <ArrowBackIos />
                      </IconButton>
                      <Typography variant='body1' component='span'>
                        {item.quantity}
                      </Typography>
                      <IconButton onClick={() => cartContext.addProduct(item.product)}>
                        <ArrowForwardIos />
                      </IconButton>
                    </Box>
                  </TableCell>
                  <TableCell align='right'>{ currencyFormatter(item.product.price) }</TableCell>
                  <TableCell align='right'>
                    <IconButton onClick={() => cartContext.removeProduct(item.product, true)}>
                      <Close />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  )
}

export default Checkout
