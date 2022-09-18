import React from 'react'
import { Shop, Checkout, Contacts, SignIn } from './pages'
import { Route, Switch } from 'react-router-dom'
import {
  CartContextProvider,
  CartContextObject,
  ProductsContextObject,
  ProductsContextProvider,
} from './context'
import NavBar from './components/navBar/navBar'
import {createTheme, CssBaseline, ThemeProvider} from '@mui/material'


const theme = createTheme({
  palette: {
    primary: {
      main: '#121112',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <CartContextProvider context={CartContextObject}>
          <ProductsContextProvider context={ProductsContextObject}>
            <NavBar />

            <Switch>
              <Route path='/' component={Shop} exact />
              <Route path='/checkout' component={Checkout} exact />
              <Route path='/contacts' component={Contacts} exact />
              <Route path='/signin' component={SignIn} exact />
              {/* <Route path="*" component={NotExists}/>*/}
            </Switch>
          </ProductsContextProvider>
        </CartContextProvider>
      </ThemeProvider>
    </>
  )
}

export default App
