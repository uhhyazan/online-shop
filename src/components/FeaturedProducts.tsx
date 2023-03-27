import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

const FeaturedProducts = () => {
  const { products } = useContext(ProductsContext);

  const randomProduct = products[Math.floor(Math.random() * products.length)];

  return (
    <Box sx={{ backgroundColor: "#f4f4f4", py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h5" gutterBottom>
                Introducing
              </Typography>
              <Typography variant="h4" gutterBottom>
                {randomProduct?.title}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href={`/product/${randomProduct?.id}`}
              >
                Shop Now
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: "center" }}>
              <img
                src={randomProduct?.image}
                alt={randomProduct?.title}
                style={{ maxWidth: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedProducts;
