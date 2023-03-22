import React, { useContext } from 'react'
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
                    return product.category === "Men's Clothing"
                }).map((product) => (
                    <li>
                        <h2>{product.title}</h2>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default MensClothing