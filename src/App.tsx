import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import MensClothing from './pages/MensClothing';
import WomensClothing from './pages/WomensClothing';
import Accessories from './pages/Accessories';
import { ProductsProvider } from './contexts/ProductsContext';
import ItemPage from './pages/ItemPage';
import Footer from './components/Footer';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <ProductsProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<MensClothing /> } />
          <Route path="/womens" element={<WomensClothing />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/items/:id" element={<ItemPage />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
        </ProductsProvider>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;