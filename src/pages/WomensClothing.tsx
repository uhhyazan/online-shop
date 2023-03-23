import React, { useContext } from 'react'
import ItemsView from '../components/ItemsView';
import { ProductsContext } from '../contexts/ProductsContext';

const WomensClothing = () => {

  const { products, loading, error } = useContext(ProductsContext);

  if (loading) {
      return <div>Loading...</div>
  }
  
  if (error) {
      return <div>Error: {error.message}</div>
  }

  const womensProducts = products.filter(function (product){
    return product.category === "women's clothing"
})

  return (
    <>
    <div>
        <h1>Womens's Products</h1>
        <ul>
            <ItemsView products={womensProducts}/>
        </ul>
    </div>
    </>
  )
}

export default WomensClothing