import React from 'react';
import { createContext, useEffect, useState } from 'react';
import { getAllProducts } from '../services/product';

type Rating = {
  count: number
  rate: number
}

export type Product = {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: Rating
  title: string
  slug: string
}

type ProductsContextValue = {
  products: Product[]
  loading: boolean
  error: Error | null
}

const initialContextValue: ProductsContextValue = {
  products: [],
  loading: true,
  error: null,
}

export const ProductsContext = createContext<ProductsContextValue>(initialContextValue);

export const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    getAllProducts()
      .then((products) => {
        const filteredProducts = products.filter(
          (product: Product) =>
            product.category === "men's clothing" ||
            product.category === "women's clothing" ||
            product.category === "jewelery"
        );
        setProducts(filteredProducts);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const value = { products, loading, error }

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}
