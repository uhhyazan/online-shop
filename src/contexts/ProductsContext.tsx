import React from "react";
import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../services/product";

type Rating = {
  count: number;
  rate: number;
};

export type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
  slug: string;
};

type CartItem = {
  product: Product;
  quantity: number;
};

type ProductsContextValue = {
  products: Product[];
  cartItems: CartItem[];
  loading: boolean;
  error: Error | null;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateCartItemQuantity: (productId: number, quantity: number) => void;
};

const initialContextValue: ProductsContextValue = {
  products: [],
  cartItems: [],
  loading: true,
  error: null,
  addToCart: () => {},
  removeFromCart: () => {},
  updateCartItemQuantity: () => {},
};

export const ProductsContext = createContext<ProductsContextValue>(
  initialContextValue
);

export const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

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

  const addToCart = (product: Product) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.product.id === product.id
    );

    if (existingCartItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.product.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem.product.id !== productId)
    );
  };

  const updateCartItemQuantity = (productId: number, quantity: number) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((cartItem) =>
        cartItem.product.id === productId
          ? { ...cartItem, quantity }
          : cartItem
      )
    );
  };

  const value = {
    products,
    cartItems,
    loading,
    error,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
  };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
