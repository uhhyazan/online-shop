import React, { useContext } from 'react'
import ItemsView from '../components/ItemsView';
import Title from '../components/Title';
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
            <Title text='Accessories' />
            <ItemsView products={accessories}/>
        </div>
        </>
    )
}

export default Accessories