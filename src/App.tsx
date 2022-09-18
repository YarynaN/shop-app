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
import { CssBaseline } from '@mui/material'

function App() {
  return (
    <>
      <CssBaseline />
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
    </>
  )
}

export default App
