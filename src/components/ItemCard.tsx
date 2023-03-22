import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'

interface ItemCardProps {
    title: string,
    image: string,
    category: string,
    price: number
}

const ItemCard = ({title, image, category, price}: ItemCardProps) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={image}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title} 
            </Typography>
            <Typography variant="body2" color="text.secondary">
                ${price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {category}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      );
}

export default ItemCard