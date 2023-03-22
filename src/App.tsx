import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import MensClothing from './pages/MensClothing';
import WomensClothing from './pages/WomensClothing';
import Accessories from './pages/Accessories';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/mens" element={<MensClothing /> } />
          <Route path="/womens" element={<WomensClothing />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;