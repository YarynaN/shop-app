import React, {useEffect} from 'react'
import { useCartContext, useProductContext } from '../../context'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'
import {currencyFormatter} from '../../utils/currencyFormatter';

const Shop: React.FC = () => {
  const cartContext = useCartContext();
  const productsContext = useProductContext();

  useEffect(() => {
      productsContext.fetchProducts();
  }, []);

  return (
    <Box margin={4}>
      <Box width={'100%'} sx={{ textAlign: 'center' }} marginBottom={2}>
        <Typography variant='h5'>Products</Typography>
      </Box>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {productsContext.items.map((product) => {
          return (
            <Grid item xs={2} sm={4} md={4} key={product.id}>
              <Card sx={{ maxWidth: 345 }} key={product.id}>
                <CardMedia component='img' alt={product.name} height='200' image={product.image} />
                <CardContent>
                  <Box display='flex' flexDirection='row' justifyContent='space-between'>
                    <Typography gutterBottom variant='body1' component='div'>
                      {product.name}
                    </Typography>
                    <Typography gutterBottom variant='body1' component='div'>
                        { currencyFormatter(product.price) }
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                  <Button
                    fullWidth
                    variant={'contained'}
                    onClick={() => cartContext.addProduct(product)}
                  >
                    Add To Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default Shop
