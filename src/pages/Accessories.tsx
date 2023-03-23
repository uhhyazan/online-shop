import React, { useContext } from 'react'
import ItemCard from '../components/ItemCard';
import ItemsView from '../components/ItemsView';
import { ProductsContext } from '../contexts/ProductsContext';

const Accessories = () => {

  const { products, loading, error } = useContext(ProductsContext);

  if (loading) {
      return <div>Loading...</div>
  }
  
  if (error) {
      return <div>Error: {error.message}</div>
  }

  const accessories = products.filter(function (product){
    return product.category === "jewelery"
})

    return (
        <>
        <div>
            <h1>Womens's Products</h1>
            <ul>
                <ItemsView products={accessories}/>
            </ul>
        </div>
        </>
    )
}

export default Accessories