import { Button, Card, CardContent, CardMedia, Link, Typography } from '@mui/material';
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
          <CardMedia
            sx={{ height: 500, width: "100%" }}
            image={image}
          />
          <CardContent>
            <Link href={`/items/${id}`} style={{textDecoration: "none"}}>
              <Typography gutterBottom variant="h5" component="div">
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