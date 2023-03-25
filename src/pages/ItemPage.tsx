import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { ProductsContext } from "../contexts/ProductsContext";

const ItemPage = () => {
  const { id } = useParams<{ id: string }>();
  const { products } = useContext(ProductsContext);
  const product = products.find((p) => p.id === parseInt(id || ""));

  if (!product) {
    return <Typography variant="h6">Product not found.</Typography>;
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ width: "100%" }}>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.title}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            {product.title}
          </Typography>
          <Rating value={product.rating.rate} readOnly />
          <Typography variant="body1">
            {product.rating.count} reviews
          </Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: 4 }}>
            {product.description}
          </Typography>
          <Typography variant="h5" color="primary" sx={{ marginBottom: 2 }}>
            ${product.price.toFixed(2)}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button variant="contained" size="large" sx={{ marginRight: 2 }}>
              Add to cart
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemPage;
