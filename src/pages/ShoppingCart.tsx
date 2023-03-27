import { Box, Button, Container, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ShoppingCart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 50,
      quantity: 2,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 75,
      quantity: 1,
    },
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleDeleteItem = () => {
    // TODO: Implement delete item logic
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom sx={{display: 'flex', justifyContent: 'center'}}>Cart</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell align="left">${item.price}</TableCell>
                <TableCell align="left">{item.quantity}</TableCell>
                <TableCell align="right">
                  <IconButton aria-label="delete" onClick={() => handleDeleteItem()}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Typography variant="h6" sx={{ mr: 2 }}>Total:</Typography>
        <Typography variant="h6">${calculateTotal()}</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button variant="contained" color="primary" sx={{ ml: 2 }}>Checkout</Button>
      </Box>
    </Container>
  );
};

export default ShoppingCart;
