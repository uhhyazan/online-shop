import React, { useContext } from 'react'
import ItemCard from '../components/ItemCard';
import { ProductsContext } from '../contexts/ProductsContext';

const MensClothing = () => {

    const { products, loading, error } = useContext(ProductsContext);

    if (loading) {
        return <div>Loading...</div>
    }
    
    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <>
        <div>
            <h1>Men's Products</h1>
            <ul>
                {products.filter(function (product){
                    return product.category === "men's clothing"
                }).map((product) => (
                    <ItemCard 
                        title={product.title}
                        image={product.image}
                        category={product.category}
                        price={product.price}
                    />
                ))}
            </ul>
        </div>
        </>
    )
}

export default MensClothing