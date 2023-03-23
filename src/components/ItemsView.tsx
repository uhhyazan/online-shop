import { Grid, ListItem } from '@mui/material';
import React, { useContext } from 'react'
import { ProductsContext, Product } from '../contexts/ProductsContext';
import ItemCard from './ItemCard';

interface ItemsViewProps {
    products: Product[]
}

const ItemsView = ({products}: ItemsViewProps) => {

    const { loading, error } = useContext(ProductsContext);

    if (loading) {
        return <div>Loading...</div>
    }
    
    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <>
        <Grid 
            container   
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            {products.map((product) => (
                <Grid>
                    <ListItem>
                    <ItemCard 
                        title={product.title}
                        image={product.image}
                        category={product.category}
                        price={product.price}
                    />
                </ListItem>
                </Grid>
            ))}
        </Grid>
        </>
    )
}

export default ItemsView