import _ from 'lodash'
import React, { createContext, HTMLAttributes, useContext, useState } from 'react'
import {addToCartRequest, deleteFromCartRequest, updateCartRequest} from './requests';

type Product = {
  id: number
  name: string
  price: number
  image: string
}

type CartItem = {
  product: Product
  quantity: number
}

type CartContextType = {
  items: CartItem[]
  addProduct: (item: Product) => void
  removeProduct: (item: Product, removeAll: boolean) => void
}

type CartContextProps = {
  context: React.Context<CartContextType>
} & HTMLAttributes<HTMLDivElement>

const defaultContext: CartContextType = {
  items: [],
  addProduct: () => undefined,
  removeProduct: () => undefined,
}

function CreateCartContext() {
  return createContext<CartContextType>(defaultContext)
}

const CartContextProvider: React.FC<CartContextProps> = ({ children, context }) => {
  const [items, setItems] = useState<CartItem[]>([])

  const getCartItemIndex = (product: Product): number =>
    _.findIndex(items, (i) => i.product.id === product.id)

  const addProductToCart = async (product: Product): Promise<void> => {
    try {
      const existingItemIndex = getCartItemIndex(product);
      let updatedQuantity;
      if (existingItemIndex >= 0) {
        const newItems = [...items]
        updatedQuantity = items[existingItemIndex].quantity + 1;
        newItems[existingItemIndex] = {
          product,
          quantity: updatedQuantity,
        }
        setItems(newItems)
      } else {
        setItems([...items, { product, quantity: 1 }])
      }
      await addToCartRequest(product.id, updatedQuantity);
    } catch (e: any) {
      console.log(e.message);
    }
  }

  const removeProductFromCart = async (product: Product, removeAll: boolean) => {
    try {
      const existingItemIndex = getCartItemIndex(product)
      if (existingItemIndex < 0) {
        return;
      }

      const cartItem = items[existingItemIndex]

      if (removeAll || cartItem.quantity - 1 === 0) {
        const newItems = _.filter<CartItem>(items, (i) => i.product.id !== product.id);
        setItems(newItems);
        await deleteFromCartRequest(product.id)
      } else {
        const newItems = [...items];
        const updatedQuantity = items[existingItemIndex].quantity - 1;
        newItems[existingItemIndex] = {
          product,
          quantity: updatedQuantity,
        }
        setItems(newItems);
        await updateCartRequest(product.id, updatedQuantity);
      }
    } catch (e: any) {
      console.log(e.message);
    }
  }

  const contextValue: CartContextType = {
    items: items,
    addProduct: addProductToCart,
    removeProduct: removeProductFromCart,
  }

  return <context.Provider value={contextValue}>{children}</context.Provider>
}

const CartContextObject = CreateCartContext()
const useCartContext = () => useContext(CartContextObject)

export { CartContextProvider, CartContextObject, useCartContext }
