import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import MensClothing from './pages/MensClothing';
import WomensClothing from './pages/WomensClothing';
import Accessories from './pages/Accessories';
import { ProductsProvider } from './contexts/ProductsContext';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <ProductsProvider>
        <Routes>
          <Route path="/mens" element={<MensClothing /> } />
          <Route path="/womens" element={<WomensClothing />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/" element={<Home />} />
        </Routes>
        </ProductsProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;