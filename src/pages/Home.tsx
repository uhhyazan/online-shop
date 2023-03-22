import React from 'react';
import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';

function Home() {
  const { products, loading, error } = useContext(ProductsContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
            <li>
                <h2>{product.image}</h2>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default Home
