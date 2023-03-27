import { Card, CardContent, CardMedia, Link, Typography } from '@mui/material';
import React from 'react'

interface ItemCardProps {
    id: number,
    title: string,
    image: string,
    category: string,
    price: number,
}

const ItemCard = ({id, title, image, category, price}: ItemCardProps) => {

     return (
        <Card sx={{ width: 350, height: 650 }}>
          <Link href={`/items/${id}`}>
            <CardMedia
              sx={{ height: 500 }}
              image={image}
            />
          </Link>
          <CardContent>
            <Link href={`/items/${id}`} style={{textDecoration: "none"}}>
              <Typography gutterBottom variant="h6" component="div" sx={{color: 'black'}}>
                {title} 
              </Typography>
            </Link>
            <Typography variant="body1" color="text.secondary" sx={{ width: "100%", justifyContent: "space-between"}}>
              ${price.toFixed(2)} {category}
            </Typography>
          </CardContent>
        </Card>
      );
}

export default ItemCard