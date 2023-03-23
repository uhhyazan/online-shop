import React, { useContext } from 'react'
import ItemsView from '../components/ItemsView';
import { ProductsContext } from '../contexts/ProductsContext';

const MensClothing = () => {

    const { products, loading, error } = useContext(ProductsContext);

    if (loading) {
        return <div>Loading...</div>
    }
    
    if (error) {
        return <div>Error: {error.message}</div>
    }

    const mensProducts = products.filter(function (product){
        return product.category === "men's clothing"
    })

    return (
        <>
        <div>
            <h1>Men's Products</h1>
            <ItemsView products={mensProducts}/>
        </div>
        </>
    )
}

export default MensClothing