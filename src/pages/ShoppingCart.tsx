import React, { useContext } from 'react';
import {
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ProductsContext } from '../contexts/ProductsContext';
import Title from '../components/Title';

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useContext(ProductsContext);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  const handleDeleteItem = (id: number) => {
    removeFromCart(id);
  };

  return (
    <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
      <Title text='Cart' />
      {cartItems.length === 0 ? (
        <Typography variant='h6' sx={{ mt: 4 }}>
          Your cart is currently empty.
        </Typography>
      ) : (
        <>
          <TableContainer component={Paper} sx={{ mt: 4 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align='left'>Price</TableCell>
                  <TableCell align='left'>Quantity</TableCell>
                  <TableCell align='right'>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.product.id}>
                    <TableCell>{item.product.title}</TableCell>
                    <TableCell align='left'>${item.product.price.toFixed(2)}</TableCell>
                    <TableCell align='left'>{item.quantity}</TableCell>
                    <TableCell align='right'>
                      <IconButton
                        aria-label='delete'
                        onClick={() => handleDeleteItem(item.product.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Typography variant='h6' sx={{ mr: 2 }}>
              Total:
            </Typography>
            <Typography variant='h6'>${calculateTotal().toFixed(2)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button variant='contained' color='primary' sx={{ ml: 2 }}>
              Checkout
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
};

export default ShoppingCart;
