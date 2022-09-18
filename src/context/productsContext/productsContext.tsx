import React, { createContext, HTMLAttributes, useContext, useState } from 'react'
import {fetchProductsRequest} from './requests';

type Product = {
  id: number
  name: string
  price: number
  image: string
}

type ProductContextType = {
  items: Product[]
  isLoading: boolean
  fetchProducts: () => void
}

type ProductContextProps = {
  context: React.Context<ProductContextType>
} & HTMLAttributes<HTMLDivElement>

const defaultContext: ProductContextType = {
  items: [],
  isLoading: false,
  fetchProducts: () => undefined,
}

function CreateProductsContext() {
  return createContext<ProductContextType>(defaultContext)
}

const ProductsContextProvider: React.FC<ProductContextProps> = ({ children, context }) => {
  const [items, setItems] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchProducts = async() => {
    setIsLoading(true);
    try {
      const result = await fetchProductsRequest();
      const items = await result.json();
      setIsLoading(false);
      setItems(items);
    } catch (e: any) {
      setIsLoading(false);
      console.log(e.message)
    }
  }

  const contextValue: ProductContextType = {
    items,
    isLoading,
    fetchProducts,
  }

  return <context.Provider value={contextValue}>{children}</context.Provider>
}

const ProductsContextObject = CreateProductsContext()
const useProductContext = () => useContext(ProductsContextObject)

export { ProductsContextProvider, ProductsContextObject, useProductContext }
