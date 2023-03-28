import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

const FeaturedProducts = () => {
  const { products } = useContext(ProductsContext);

  const randomProduct = products[Math.floor(Math.random() * products.length)];

  return (
    <Box sx={{ py: 1 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: "center", marginRight: 5 }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontFamily: "Louis-George-Bold" }}
              >
                Introducing
              </Typography>
              <Typography variant="h5" gutterBottom>
                {randomProduct?.title}
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                href={`/items/${randomProduct?.id}`}
                sx={{ width: 1 }}
              >
                <Typography
                  sx={{ color: "black", fontFamily: "Louis-George-Bold" }}
                >
                  Shop Now
                </Typography>
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
